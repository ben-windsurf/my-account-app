# My Account App

A modern web application built with ASP.NET Core 8 and Razor Pages, providing a clean and responsive user interface for account management.

## Features

- **Server-side rendering** with Razor Pages
- **Page-based architecture** with code-behind files
- **Responsive design** with modern CSS
- **Static file serving** for CSS, images, and client-side assets
- **Form handling** with model binding and validation
- **Built-in security** features and error handling
- **Account management** functionality (login, register, password reset)

## Project Structure

```
├── Program.cs                    # Application entry point and configuration
├── MyAccountApp.csproj          # Project file with dependencies
├── appsettings.json             # Application configuration
├── appsettings.Development.json # Development-specific settings
├── Pages/                       # Razor Pages
│   ├── Index.cshtml            # Landing page
│   ├── Index.cshtml.cs         # Landing page code-behind
│   ├── Home.cshtml             # Home page
│   ├── Home.cshtml.cs          # Home page code-behind
│   ├── About.cshtml            # About page
│   ├── Login.cshtml            # Login page
│   ├── Register.cshtml         # Registration page
│   ├── ForgotPassword.cshtml   # Password reset page
│   ├── Privacy.cshtml          # Privacy policy page
│   ├── Shared/                 # Shared layouts and components
│   ├── _ViewImports.cshtml     # Global view imports
│   └── _ViewStart.cshtml       # View start configuration
└── wwwroot/                    # Static web assets
    ├── css/                    # Stylesheets
    └── images/                 # Image assets
```

## Getting Started

1. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

2. Run the application:
   ```bash
   dotnet run
   ```
   
   Or for development with hot reload:
   ```bash
   dotnet watch run
   ```

3. Open your browser and navigate to `https://localhost:7000` or `http://localhost:5000`

## Available Routes

- `/` - Home page
- `/about` - About page
- Any other route will show a 404 error page

## Adding New Pages

1. Create a new EJS file in the appropriate `Views` folder
2. Add the route in `app.js`
3. Use the layout system by including `<% layout('../../Shared/_Layout') -%>` at the top of your view

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Templating engine (Razor-like syntax)
- **Bootstrap 5** - CSS framework
- **Nodemon** - Development auto-restart tool
