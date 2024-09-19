// load up our shiny new route for users
const redirectRoutes = require('./api');


const appRouter = (app, fs) => {

    // run our user route module here to complete the wire up
    redirectRoutes(app, fs);

};

// this line is unchanged
module.exports = appRouter;