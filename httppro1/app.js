const koa = require('koa');
const http = require('http');
const bp = require('koa-bodyparser');
const url = require('url');
const ws = require('ws');
const controller = require('./controller.js');
const template = require('./template.js');
const staticFiles = require('./static-files.js');
const app = new koa();
const wsserver = ws.Server;

app.use(staticFiles('/static/', __dirname + '/static'));

app.use(bp());

app.use(template('views', {
    noCache: true,
    watch: true
}));

app.use(controller());

let server = app.listen(3030);
let wss = new wsserver({
    server: server,
    host: '0.0.0.0'
});
