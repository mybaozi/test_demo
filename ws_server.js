var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });//服务端口8181
let msgList = [];

wss.on('connection', function (ws) {
    console.log('服务端：客户端已连接');
    //初次连接时发送历史聊天记录到客户端
    if(msgList && msgList.length > 0) {
        ws.send(JSON.stringify(msgList))
    }
    ws.on('message', function (message) {
        message = JSON.parse(message);
        console.log("收到客户端消息:",message);
        if(message.type==='text'){
            msgList.push(message.data)
            wss.clients.forEach(client=>{
                client.send(JSON.stringify(msgList))
                
            })
        }else if(message.type==='canvas'){
            wss.clients.forEach(client=>{
                if(client!==ws){
                    client.send(JSON.stringify(message))
                }
                
            }) 
        }
        //打印客户端监听的消息
        // if(message){
        // }
    });
});

// wss = new WebSocketServer({ port: 8182 });//服务端口8181
// wss.on('connection', function (ws) {
//     console.log('服务端：客户端已连接');
//     ws.on('message', function (message) {
//         //打印客户端监听的消息
//         console.log("收到客户端消息:",JSON.parse(message));
//         // if(message){
//         //     ws.send('收到'+message)
//         // }
//     });
// });
