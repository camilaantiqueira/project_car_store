module.exports = function(app){
        app.get('/about_us',function(req,res){
        res.render("secao/about_us");
    });
};