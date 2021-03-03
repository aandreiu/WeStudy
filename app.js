
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var futuretasks = require('./routes/futuretasks');
var friends = require('./routes/friends');
var awards = require('./routes/awards');
var groups = require('./routes/groups');
var breaks = require('./routes/breaks');
var profile = require('./routes/profile');
var groupprofile = require('./routes/groupprofile');
var add = require('./routes/add');
var addfuture = require('./routes/addfuture');
var addbreak = require('./routes/addbreak');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.viewLogin);
app.get('/index', index.view);
app.get('/tasks', tasks.view);
app.get('/futuretasks', futuretasks.view);
app.get('/friends', friends.view);
app.get('/awards', awards.view);
app.get('/friend-awards', awards.viewFriends);
app.get('/group-awards', awards.viewGroups);
app.get('/login', index.viewLogin);
app.get('/signup', index.viewSignUp);
app.get('/groups', groups.view);
app.get('/breaks', breaks.view);
app.get('/profile', profile.view);
app.get('/groupprofile', groupprofile.view);
app.get('/add', add.addTask);
app.get('/addfuture', addfuture.addFutureTask);
app.get('/addbreak', addbreak.addBreak);
app.get('/hometasks', index.viewTasks);
app.get('/homefuturetasks', index.viewFutureTasks);
app.get('/homebreaks', index.viewBreaks);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
