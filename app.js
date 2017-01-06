var path = require('path');
var koa = require('koa');
var views = require('koa-views');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');
var index = require('./router/index');
var apis = require('./router/apis');
var users = require('./router/users');

// 建立一個網站伺服器
var app = koa();
var route = new Router();

app.use(views(__dirname + '/views', {
	ext: 'html',
	cache: true
}));

app.use(bodyParser());
app.use(serve(path.join(__dirname, 'public'), { hidden: true }));

route.use('/', index.routes());
route.use('/apis', apis.routes());
route.use('/users', users.routes());
app.use(route.middleware());

app.listen(3000);
