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

module.exports = {
    'getIpAddr': getIpAddr,
    'headerObj': headerObj
}