# My Account App

A modern StubHub-style ticketing platform built with React and Python. This application was successfully migrated from ASP.NET Core Razor Pages to provide a modern, scalable architecture with excellent user experience.

## 🚀 Current State

This is a **fully functional React application** with:
- ✅ Complete migration from C#/Razor to React + Python
- ✅ Modern responsive UI with Tailwind CSS and Radix UI components
- ✅ JWT-based authentication system
- ✅ RESTful API backend with automatic documentation
- ✅ Comprehensive help center with search functionality
- ✅ All legacy C#/Razor files removed and cleaned up

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible component primitives
- **React Router** for navigation
- **Axios** for API communication

### Backend
- **Python FastAPI** for high-performance API
- **SQLAlchemy** ORM with SQLite database
- **JWT authentication** with python-jose
- **Pydantic** for data validation
- **Automatic API documentation** with Swagger UI

## 🏗️ Architecture Overview

### Migration Journey
**From:** ASP.NET Core Razor Pages + Entity Framework + Cookie Auth  
**To:** React + TypeScript + Python FastAPI + JWT Auth

### Key Architectural Decisions
1. **Frontend Framework**: React 18 with TypeScript for type safety and modern development
2. **Build Tool**: Vite for fast development and optimized production builds
3. **State Management**: React Context API for authentication state (no Redux complexity)
4. **Backend Framework**: FastAPI for modern async Python API with automatic docs
5. **Authentication**: JWT tokens for stateless, scalable authentication
6. **Database**: SQLite with SQLAlchemy for development (easily upgradeable to PostgreSQL)

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **Python** 3.9+
- **npm** or **yarn**

### Quick Start

1. **Clone and setup:**
   ```bash
   git clone <repository-url>
   cd my-account-app
   npm run install:all
   ```

2. **Start the full application:**
   ```bash
   npm run dev
   ```
   This starts both frontend (http://localhost:5173) and backend (http://localhost:8000)

3. **Or start services individually:**
   ```bash
   # Frontend only
   npm start
   
   # Backend only
   npm run dev:backend
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start React frontend only |
| `npm run dev` | Start both frontend and backend |
| `npm run dev:frontend` | Start frontend development server |
| `npm run dev:backend` | Start Python FastAPI backend |
| `npm run build` | Build frontend for production |
| `npm run install:all` | Install all dependencies (frontend + backend) |

## 📁 Project Structure

```
my-account-app/
├── 📁 frontend/my-account-frontend/     # React TypeScript Application
│   ├── 📁 src/
│   │   ├── 📁 components/              # React components (Login, Register, HelpCenter, etc.)
│   │   ├── 📁 contexts/               # AuthContext for user state management
│   │   ├── 📁 services/               # API service layer (axios-based)
│   │   └── 📁 styles/                 # CSS files (Tailwind + custom styles)
│   ├── 📁 public/                     # Static assets (images, icons)
│   ├── 📄 package.json               # Frontend dependencies
│   ├── 📄 vite.config.ts             # Vite configuration
│   └── 📄 tailwind.config.js         # Tailwind CSS configuration
├── 📁 backend/my-account-backend/      # Python FastAPI Application
│   ├── 📁 app/
│   │   ├── 📄 main.py                # FastAPI app entry point & routes
│   │   ├── 📄 models.py              # SQLAlchemy database models
│   │   ├── 📄 schemas.py             # Pydantic request/response schemas
│   │   ├── 📄 database.py            # Database configuration & seeding
│   │   └── 📄 auth.py                # JWT authentication utilities
│   └── 📄 requirements.txt           # Python dependencies
├── 📄 package.json                    # Root-level scripts for managing both services
└── 📄 README.md                       # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login (returns JWT token)
- `GET /auth/me` - Get current user info (requires auth)

### Help Center
- `GET /api/help/popular` - Get popular help articles
- `GET /api/help/trending` - Get trending help articles
- `POST /api/help/search` - Search help articles
- `GET /api/help/{id}` - Get specific help article

### API Documentation
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🌐 Development URLs

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:5173 | React development server (Vite) |
| **Backend API** | http://localhost:8000 | FastAPI server |
| **API Docs** | http://localhost:8000/docs | Interactive Swagger UI documentation |
| **Alternative Docs** | http://localhost:8000/redoc | ReDoc API documentation |

## 🎯 Key Features

### User Authentication
- JWT-based authentication system
- User registration and login
- Protected routes and API endpoints
- Persistent login state with React Context

### Help Center
- Searchable help articles
- Popular and trending articles
- Category-based browsing
- Responsive design for all devices

### Modern UI/UX
- Built with Tailwind CSS for consistent styling
- Radix UI components for accessibility
- Responsive design that works on all screen sizes
- Modern React patterns and TypeScript for reliability

## 🔄 Migration History

This application was successfully migrated from:
- **ASP.NET Core Razor Pages** → **React + TypeScript**
- **Entity Framework** → **SQLAlchemy**
- **Cookie Authentication** → **JWT Tokens**
- **Server-side rendering** → **Client-side SPA**
- **C# backend** → **Python FastAPI**

All legacy C#/Razor files have been removed, and the application is now a clean, modern React + Python stack.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**🎉 Migration Complete!** This is now a fully functional, modern React application with Python backend.
