const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3500;
const router = express.Router();
const mysql = require('mysql')


app.use(router);
app.listen(port);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.get('/', function (req, res){
    let random = "I love boobs"

    res.send('Hello World!' + random)
})


// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'yaksbend'
// })
//
//
//
//
// app.get('/users', async function(req,res,next){
//     await connection.query('SELECT * from users WHERE weekly_kill_total IS NOT NULL AND (on_yaks=1 OR on_yaks=2) ORDER BY wvwkills ASC', function(err, results) {
//         if (err) throw err;
//         res.send((results));
//     })
// });