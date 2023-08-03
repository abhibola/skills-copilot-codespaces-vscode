// Create web server application  


// Import modules
const express = require('express');

// Create web server application
const app = express();

// Set port
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => {
    res.render('index');
}   );


// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);





