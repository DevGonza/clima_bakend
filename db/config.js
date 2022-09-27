require('dotenv').config()
const mysql = require("mysql")
const config = require('./dbConfig')


module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: config.HOST,
        port: "",
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB
    })

// module.exports.request = (query) => new Promise((res, rej) => {
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         port: 8888,
//         user:'root',
//         password:'',
//         database:'clima'
//     })


    connection.query(query, (error, data, fields) => {
        if(error) rej(error)
        connection.end((err) => {
            if(err) rej(err)
            res(data)
        })
    })
})