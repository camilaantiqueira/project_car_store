var app = require('./config/server');

var home_route = require('./app/routes/home')(app);


var photos_route = require('./app/routes/photos')(app);


var contact_route = require('./app/routes/contact')(app);


var about_us_route = require('./app/routes/about_us')(app);





app.listen(3000,function(){
    console.log("servidor EXPRESS");
});