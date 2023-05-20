const express = require('express'); // import express
// const path = require('path'); // import path

const app = express(); // create express app
const PORT = process.env.PORT || 3001; // define port 3001 as default 

app.use(express.static('../client/dist')); // serve static files from dist folder
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

require('./routes/htmlRoutes')(app); // import html routes

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
