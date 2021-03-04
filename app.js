
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var people = require('./routes/people');
var awards = require('./routes/awards');
var breaks = require('./routes/breaks');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var faq = require('./routes/faqs');

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
app.get('/tasks', tasks.viewTasks);
app.get('/futuretasks', tasks.viewFutureTasks);
app.get('/awards', awards.view);
app.get('/friend-awards', awards.viewFriends);
app.get('/group-awards', awards.viewGroups);
app.get('/login', index.viewLogin);
app.get('/signup', index.viewSignUp);
app.get('/friends', people.viewFriends);
app.get('/groups', people.viewGroup);
app.get('/breaks', breaks.view);
app.get('/profile', profile.view);
app.get('/groupprofile', profile.viewGroup);
app.get('/add', tasks.addTask);
app.get('/addfuture', tasks.addFutureTask);
app.get('/addbreak', breaks.addBreak);
app.get('/settings', settings.view);
app.get('/faq/:id', faq.faqInfo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
