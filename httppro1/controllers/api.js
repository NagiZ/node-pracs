
const ipaddr = require('ipaddr.js');
const md = require('./methods.js');
module.exports = {
    'GET /': async (ctx, next)=>{
        var ip = md.getIpAddr(ctx.req);
        console.log(ip);
        ip = ipaddr.process(ip).octets.join('.');
        var header = md.headerObj(ctx.req.headers);
        var items = Object.assign({}, {ip: ip}, header);
        console.log(header);
        console.log(ip);
        ctx.render('index.html', {
            items: items
        })
    }
}
