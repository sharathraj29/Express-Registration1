const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// POST route for /register
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Simulate a successful registration response
    res.json({
        message: 'Registration successful',
        user: { name, email },
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
