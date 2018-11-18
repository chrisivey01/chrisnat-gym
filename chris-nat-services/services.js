const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3500;
const router = express.Router();
const mysql = require('mysql')
const pool = require('./database');


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






app.post('/login', function (req, res){

    let lifter = req.body.lifterName;
    let password = req.body.lifterPassword

    let sql = "SELECT * FROM login WHERE lifter = ?"
    let login = [
        lifter = lifter
    ]
    let loginResult;
    let passed;

    pool.query(sql,login)
        .then(function(result){
            loginResult = result;
            if (password === loginResult[0].password) {
                passed = true
                return res.send({passed})
            }
        })
        .catch((err) =>{
            passed = false;
            return res.send({passed})
        } )
})

app.post('/sendData', function(req, res){
    console.log(req)
    let lifts = JSON.parse(req.body.lift)
    let lifter = req.body.lifter
    let workoutType = req.body.workoutType

    //query info
    let sql;
    let addWorkout;
    if(workoutType === "Squat") {
        sql = "INSERT INTO Squat SET weight_count = ?, rep_count = ?, lifter = ?, set_count = ?"
    }
    for(let i =0; i<lifts.length; i++) {
        addWorkout = [
            weight_count = parseInt(lifts[i].weight),
            rep_count = parseInt(lifts[i].reps),
            lifter = lifter,
            set_count = i+1
        ]
        pool.query(sql, addWorkout)
            .then(function(result){
                return res.send({result})
            })
            .catch((err)=>{
                return res.send({err})
            })
    }
})

app.post('/squatData', function(req,res){

    let liftername = req.body.lifterName
    let sql = "SELECT * FROM Squat WHERE lifter= ? ORDER BY day DESC, set_count ASC LIMIT 0, 1000"


    pool.query(sql,liftername)
        .then(function(result){
            return res.send({
                result
            })
        })
        .catch((err) => {
            return res.send({err})
        })


})



//find specific lifter

// SELECT * FROM chrisnat.squat WHERE lifter= 'chris' ORDER BY day DESC, set_count ASC;
    // let insertSql = "UPDATE users SET account_id = ? WHERE api_key = ?"
    // let addAccount = [
    //     account_id = addingAccountName.name,
    //     api_key = result[i].api_key
    // ]
    // await pool.query(insertSql, addAccount)




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