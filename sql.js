const mysql = require('mysql');

function sqlQuery(sql){
  return new Promise((resolve,reject)=>{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'chat'
    })
    connection.connect();
    connection.query(sql,(error,result,field)=>{
      if(error) throw error;
      resolve(result);
    })
    connection.end();
  })
}

module.exports = sqlQuery