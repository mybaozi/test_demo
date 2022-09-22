const http = require('http');
const fs = require('fs');
let documentRoot = "E:/server_demo";

let server = http.createServer((req,res)=>{
    let url = req.url.split('?')[0];
    let file = documentRoot + url;
    console.log(file);
    fs.readFile(file,(err,data)=>{
        if(err){
            console.log('err',err);
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type': 'text/html;charset="utf-8"',
            });
            res.write(data);
            res.end();
        }
    })
}).listen(8083)

