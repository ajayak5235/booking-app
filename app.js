const path = require('path');
const express = require('express');
const bodyPrser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const shopRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'APP')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(errorController.get404);


app.listen(3000);




