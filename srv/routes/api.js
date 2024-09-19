
const redirectRoutes = (app) => {
    app.get("/api/:id", function(req, res) {
        console.log('next')
        const params = req.params
        console.log(params)
        // var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

        // var geo = geoip.lookup(ip.split(',')[0]);
// console.log(id)

    res.json({"tewsss":"test"})

    });

};


module.exports = redirectRoutes;


