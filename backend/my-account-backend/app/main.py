from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import timedelta
from typing import List

from .database import get_db, create_tables, seed_data
from .models import User, HelpArticle
from .schemas import UserCreate, UserLogin, User as UserSchema, Token, HelpArticle as HelpArticleSchema, SearchQuery
from .auth import authenticate_user, create_access_token, get_password_hash, get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES

app = FastAPI(title="My Account App API", version="1.0.0")

# Disable CORS. Do not remove this for full-stack development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup")
def startup_event():
    create_tables()
    seed_data()

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

@app.get("/")
def read_root():
    return {"message": "My Account App API", "version": "1.0.0"}

@app.post("/auth/register", response_model=UserSchema)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="An account with this email already exists."
        )
    
    hashed_password = get_password_hash(user.password)
    db_user = User(
        email=user.email,
        password_hash=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.post("/auth/login", response_model=Token)
def login_user(user_credentials: UserLogin, db: Session = Depends(get_db)):
    user = authenticate_user(db, user_credentials.email, user_credentials.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/auth/me", response_model=UserSchema)
def get_current_user_info(current_user: User = Depends(get_current_user)):
    return current_user

@app.get("/api/help/popular", response_model=List[HelpArticleSchema])
def get_popular_articles(db: Session = Depends(get_db)):
    articles = db.query(HelpArticle).filter(HelpArticle.is_popular == True).order_by(HelpArticle.title).all()
    return articles

@app.get("/api/help/trending", response_model=List[HelpArticleSchema])
def get_trending_articles(db: Session = Depends(get_db)):
    articles = db.query(HelpArticle).filter(HelpArticle.is_trending == True).order_by(HelpArticle.title).all()
    return articles

@app.post("/api/help/search", response_model=List[HelpArticleSchema])
def search_articles(search_query: SearchQuery, db: Session = Depends(get_db)):
    if not search_query.query.strip():
        return []
    
    articles = db.query(HelpArticle).filter(
        (HelpArticle.title.contains(search_query.query)) | 
        (HelpArticle.content.contains(search_query.query))
    ).order_by(HelpArticle.title).all()
    return articles

@app.get("/api/help/{article_id}", response_model=HelpArticleSchema)
def get_article_by_id(article_id: int, db: Session = Depends(get_db)):
    article = db.query(HelpArticle).filter(HelpArticle.id == article_id).first()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article
