var derby = require('derby');

var app = module.exports = derby.createApp('app', __filename);

if (!derby.util.isProduction) global.app = app;

app.use(require('derby-debug'));

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

var Home = require('./home');
app.component("home", Home);

app.get('/', function(page, model){
  model.subscribe("polls", function(err) {
    page.render('home');
  });
});

var Poll = require('./poll');
app.component("poll", Poll);

app.get("/:poll", function(page, model, params){
	var poll = params.poll;
  var pollQuery = model.query("polls", {id:poll});
  var questionQuery = model.query("questions", {poll:poll});
  var answerQuery = model.query("answers", {poll:poll});
  model.subscribe(pollQuery, questionQuery, answerQuery, function(err) {
    page.render("poll");
  })
})
