const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user:'root',
    password: '',
    database:'api'

})


let api = {};
api.all = () =>{
    return new Promise((resolve,reject) =>{
        pool.query('select * from student',(err,result)=>{

            if(err){
                return reject(err);
            }
                return resolve(result);
        });
    });
}


api.one =  (id) =>{
    return new Promise((resolve,reject)=>{
        pool.query('select * from student where id = ?',[id], (err,result)=>{
            if(err){
                return reject(err);
            }
                return resolve(result[0]);
        });
    });
}

api.add =  (username,gpa) =>{
    return new Promise((resolve,reject)=>{
        pool.query('insert into student values(?,?)',[username],[gpa], (err,result)=>{
            if(err){
                return reject(err);
            }
                return resolve(result);
        });
    });
}

module.exports = api;
