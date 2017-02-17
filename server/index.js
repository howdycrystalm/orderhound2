/* ========================
      EXTERNAL MODULES
   ======================== */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
/* ========================
           CONFIG
   ======================== */
const config = require('./config');
/* ========================
          EXPRESS
   ======================== */
//initializing the app. invoking express
var app = module.exports = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors());
/* ========================
           MASSIVE
   ======================== */
var massiveServer = massive.connectSync({
  connectionString: config.MASSIVE_URI
});

var connectionString = config.MASSIVE_URI;
var db = massive.connectSync({
    connectionString: connectionString
});
app.set('db', massiveServer);
var db = app.get('db');

/* ========================
         CONTROLLERS
   ======================== */
//server-side controller
var authCtrl = require('./controllers/userCtrl');
var checkinCtrl = require('./controllers/checkinCtrl'); //requires the controller on server side
// var addPOCtrl = require('./controllers/addPOCtrl')
/* ========================
          SERVICES
   ======================== */
var passport = require('./services/passport');
/* ========================
            POLICIES
   ======================== */
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};


var isAdmin = function(req, res, next) { //isAdmin middleware should allow access to admin only pages
    if (!req.isAuthenticated() || !req.user.admin) return res.status(401)
        .send();
    return next();
};
/* ========================
    SESSION AND PASSPORT
   ======================== */
app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

/* ========================
   PASSPORT AND ENDPOINTS
   ======================== */
app.post('/api/login', passport.authenticate('local', {
	successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});



/* ========================
        USER ENDPOINTS
   ======================== */

app.post('/api/');
app.post('/api/checkin', checkinCtrl.update_po_location);
app.post('/api/addUser', isAuthed, authCtrl.admin_create_user);
app.post('/api/register', authCtrl.register);

app.get('/api/user', authCtrl.read);
app.get('/api/me', isAuthed, authCtrl.me);
app.get('/api/adminHome', isAuthed, authCtrl.me);
// app.get('/checkpoints', isAuthed, checkpointsCtrl.all_from_checkpoints);
// app.get('/api/getpo', checkinCtrl.getpo);


app.put('/api/user/current', isAuthed, authCtrl.update);


// CONNECTIONS //
app.listen(config.PORT, function() {
  console.log('Listening on port ', config.PORT);
})
