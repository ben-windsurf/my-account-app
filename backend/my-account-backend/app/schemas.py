from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class User(UserBase):
    id: int
    created_at: datetime
    is_active: bool
    
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class HelpArticleBase(BaseModel):
    title: str
    content: str
    category: str = ""
    is_popular: bool = False
    is_trending: bool = False

class HelpArticle(HelpArticleBase):
    id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

class SearchQuery(BaseModel):
    query: str
