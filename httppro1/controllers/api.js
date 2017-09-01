
const ipaddr = require('ipaddr.js');
const md = require('../methods.js');
module.exports = {
    'GET /': async (ctx, next)=>{
        var ip = md.getIpAddr(ctx.req);
        console.log(ip);
        ip = ipaddr.process(ip);
        var header = md.headerObj(ctx.req.headers);
        var items = Object.assign({}, {ip: ip}, header);
        console.log(header);
        console.log(ip);
        ctx.render('index.html', {
            items: items
        })
    },
    'GET /timestamp/:time': async (ctx, next)=>{
        console.log(ctx.params.time);
        var time = md.getTs(ctx.params.time);
        if(!time){
            ctx.render('error.html', {
                title: '时间参数错误'
            });
        }else{
            ctx.render('timestamp.html', {
                time: time
            })
            // time = JSON.stringify(time);
        }
    }
}
