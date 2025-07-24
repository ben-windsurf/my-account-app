# Razor-Style Web Application

A Razor-style web application built with Node.js, Express.js, and EJS templating engine.

> **Note**: This application has been verified for access and basic functionality.

## Features

- **Server-side rendering** with EJS templates (similar to Razor Pages)
- **MVC-style architecture** with Views, Controllers, and Models
- **Bootstrap 5** for responsive design
- **Static file serving** for CSS, JS, and images
- **Form handling** capabilities
- **Error handling** with custom error pages

## Project Structure

```
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── Views/                # EJS templates (like Razor views)
│   ├── Home/
│   │   ├── Index.ejs     # Home page
│   │   └── About.ejs     # About page
│   └── Shared/
│       ├── _Layout.ejs   # Master layout
│       └── Error.ejs     # Error page
└── wwwroot/              # Static files
    ├── css/
    │   └── site.css      # Custom styles
    └── js/
        └── site.js       # Client-side scripts
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

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
