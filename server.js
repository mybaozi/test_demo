const express = require('express')

const sqlQuery = require('./sql')
// console.log(sqlQuery,'------------')
var app = express()
app.all('/api', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    const sqlList = await sqlQuery("select * from user");
    // console.log('sqlList',sqlList)
    // setTimeout(()=>{
    console.log('------------------8085')
    res.send({ list: sqlList, port: 8085, path: '/api' });
    // },3000)
});
app.all('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    const sqlList = await sqlQuery("select * from user");
    // console.log('sqlList',sqlList)
    console.log('------------------8085')
    // res.send({list:sqlList,port:8085});
    res.redirect(302, 'http://localhost:8086')
});

app.listen(8085, () => {
    console.log('Server is running at http://localhost:8085')
})