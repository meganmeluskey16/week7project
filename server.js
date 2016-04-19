var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'mainpage'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('pubic'));

app.get("/", function (req, res){
	var data = {
		title: "This is my amazing page that will tell you all about myself.",
		content: "Show yourself around"
	};
	res.render("page",data);
});

app.get("/snapchat", function (req, res){
	var data = {
		title: "ok",
		content: "OK"
	};
	res.render("page",data);
});

app.get("/video", function (req, res){
	var data = {
		title: "ok",
		content: "ok"
	};
	res.render("page",data);
});

app.get("/graphics", function (req, res){
	var data = {
		title: "something",
		content: "sure"
	};
	res.render("page",data);
});

app.get("/resume", function (req, res){
	var data = {
		title: "Megan's resume",
		content: "Megan has expierience. Megan is really good at a lot of things. Megan wants a job."
	};
	res.render("page",data);
});


app.use(function (req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function (err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(3100, function(){
	console.log( 'Express started on http://localhost:3100; press Ctrl-C to terminate.' );
});