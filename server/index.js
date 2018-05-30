const express = require('express');
require('./services/passport');

const app = express();

// require('./routes/authRoutes') returns a function 
// with an immediately call that function with the app object.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);