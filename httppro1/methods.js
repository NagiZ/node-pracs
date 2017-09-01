const querystring = require('querystring');

function getIpAddr(req){
    return req.headers['x-forwarded-for']||
    req.connection.remoteAddress||
    req.socket.remoteAddress||
    req.connection.socket.remoteAddress;
}

//请求头信息筛选
function headerObj(obj){
    let ua = "user-agent";
    return {
        language: obj["accept-language"],
        [ua]: obj["user-agent"]
    }
}

//=================>
function getTs(str){
    var type = +str;
    var time = {};
    var t = null, mons = ['']
    if(type){
        t = new Date(+str);
    }else{
        t = new Date(str);
    };
    console.log(t);
    if(t == 'Invalid Date'){
        return false;
    }
    time['Unix Timestamp'] = parseInt(Date.parse(t)/1000);
    time.Natural = t.toLocaleDateString();
    return time;
}

module.exports = {
    'getIpAddr': getIpAddr,
    'headerObj': headerObj,
    'getTs': getTs
}