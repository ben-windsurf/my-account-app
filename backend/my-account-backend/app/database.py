from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .models import Base, User, HelpArticle
from passlib.context import CryptContext
from datetime import datetime

SQLALCHEMY_DATABASE_URL = "sqlite:///./my_account_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_tables():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def seed_data():
    db = SessionLocal()
    
    if db.query(User).count() == 0:
        test_user = User(
            email="test@example.com",
            password_hash=pwd_context.hash("password123"),
            created_at=datetime.utcnow(),
            is_active=True
        )
        db.add(test_user)
    
    if db.query(HelpArticle).count() == 0:
        help_articles = [
            HelpArticle(
                title="How do I get my mobile transfer tickets I bought on StubHub?",
                content="Mobile transfer tickets are sent directly to your mobile device. Download the venue's app or check your email for transfer instructions.",
                category="Mobile Tickets",
                is_popular=True,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="I bought tickets on StubHub as a guest. How do I see my order?",
                content="As a guest, you can view your order by entering your email and order number on the 'Find My Order' page.",
                category="Orders",
                is_popular=True,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="How do I get my tickets I bought on StubHub?",
                content="After purchasing tickets, you'll receive them via email or mobile transfer. Check your email for delivery instructions.",
                category="Tickets",
                is_popular=True,
                is_trending=False,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="How do I sell tickets on StubHub?",
                content="To sell tickets, create an account, go to 'Sell Tickets', enter your event details, set your price, and list them for sale.",
                category="Selling",
                is_popular=True,
                is_trending=False,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="I sold a type of mobile ticket on StubHub. How do I deliver it to the buyer?",
                content="For mobile tickets, you'll need to transfer them through the original ticket provider's app or website to the buyer's email.",
                category="Selling",
                is_popular=True,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="My tickets say they are mobile. Can I print them instead?",
                content="Most mobile tickets cannot be printed. You'll need to use your mobile device to enter the venue. Contact the venue if you have accessibility needs.",
                category="Mobile Tickets",
                is_popular=True,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="I bought mobile transfer tickets on StubHub but haven't received the ticket transfer offer email.",
                content="Check your spam folder first. If still not found, contact the seller through StubHub or reach out to customer support.",
                category="Mobile Tickets",
                is_popular=True,
                is_trending=False,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="How can I send tickets I bought on StubHub to a friend?",
                content="You can transfer tickets to a friend through the original ticket provider's transfer system or by forwarding the mobile tickets.",
                category="Tickets",
                is_popular=True,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="Why did I get a text saying my StubHub account info changed?",
                content="This notification is sent when account details like password, email, or payment info are updated for security purposes.",
                category="Account",
                is_popular=True,
                is_trending=False,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="The Rolling Stones tour",
                content="Find information about The Rolling Stones tour dates, venues, and ticket availability on StubHub.",
                category="Events",
                is_popular=False,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="I sold tickets on StubHub. When do I have to deliver them to the buyer?",
                content="Tickets must be delivered according to the delivery deadline shown in your seller account, typically 1-3 days before the event.",
                category="Selling",
                is_popular=False,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="What happens if events are postponed or rescheduled?",
                content="If an event is postponed, your tickets remain valid for the new date. If cancelled, you'll receive a full refund.",
                category="Events",
                is_popular=False,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            ),
            HelpArticle(
                title="I sold mobile transfer or Flash Seats (AXS) tickets on StubHub and transferred them to the buyer. They haven't accepted the tickets yet.",
                content="Contact the buyer through StubHub messaging to remind them to accept the transfer. If they don't respond, contact customer support.",
                category="Selling",
                is_popular=False,
                is_trending=True,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow()
            )
        ]
        
        for article in help_articles:
            db.add(article)
    
    db.commit()
    db.close()
