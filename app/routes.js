// app/routes.js

module.exports = function(app, passport) {
    //HOME PAGE (with login links)
    app.get("/", function(req, res) {
        res.render('index.ejs');
    });

    //LOGIN (shows form)
    app.get('/login', function(req, res) {
        //render page and pass any flash data if it exists
        res.render("login.ejs", { message: req.flash('loginMessage') });
    });

    //process the LOGIN form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', //send to profile
        failureRedirect: '/login', //redirect to signup
        failureFlash: true //allow flash message
    }));



    //SIGNUP (show signup form)
    app.get('/signup', function(req, res) {
        //render the page and pass any flash data if exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    //process the sign up form (code is similar to POST route for login form)
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', //secure profile page
        failureRedirect: '/signup', //signup page
        failureFlash: true //allow flash messages

    }));

    //PROFILE section
    //must be logged in to visit this page
    //using route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user //get the user out of session and pass to template

        });
    });

    //LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

//route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    //if user is authenticated proceed
    if (req.isAuthenticated())
        return next();
    //if not redirect to the home page
    res.redirect('/');
}
