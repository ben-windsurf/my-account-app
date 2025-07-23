const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine (similar to Razor)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'Shared/_Layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Serve static files
app.use(express.static(path.join(__dirname, 'wwwroot')));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('Home/Index', { 
        title: 'Home',
        message: 'Welcome to your Razor-style App!'
    });
});

app.get('/about', (req, res) => {
    res.render('Home/About', { 
        title: 'About',
        message: 'About this application'
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password, stayLoggedIn } = req.body;
    
    // For demo purposes, just redirect to about page
    // In a real app, you would validate credentials here
    console.log('Login attempt:', { email, stayLoggedIn });
    
    res.redirect('/about');
});

// Additional routes for the login page links
app.get('/register', (req, res) => {
    res.render('Shared/Error', { 
        title: 'Register',
        error: 'Registration page not implemented yet.'
    });
});

app.get('/forgot-password', (req, res) => {
    res.render('Shared/Error', { 
        title: 'Forgot Password',
        error: 'Forgot password page not implemented yet.'
    });
});

app.get('/access-code', (req, res) => {
    res.render('Shared/Error', { 
        title: 'Access Code',
        error: 'Access code page not implemented yet.'
    });
});

app.get('/privacy', (req, res) => {
    res.render('Shared/Error', { 
        title: 'Privacy Policy',
        error: 'Privacy policy page not implemented yet.'
    });
});

// Error handling
app.use((req, res) => {
    res.status(404).render('Shared/Error', { 
        title: 'Page Not Found',
        error: 'The page you requested could not be found.'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
