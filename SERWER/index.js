
//przypisanie stałych
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const port = 3001

const app = express()
app.use(cors())

//połączenie z bazą
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
})
conn.connect((err)=>{
    if(err) console.log(err)
    else console.log("połączono z bazą")
})
//endpoint user i pass
app.get("/login/:user/:pass", (req,res)=>{
    const user = req.params.user
    const pass = req.params.pass

    //sprawdzanie poprawności loginu i hasła
    //console.log(`user: ${user}, pass: ${pass}`)
    const sql = `SELECT * FROM users WHERE login = "${user}"`
    conn.query(sql,(err,results,fields)=>{
        console.log(results)
        if(err) console.log(err)
        else{
            var status = {"status":false, "upr":""}
            if(results.length!=0){
                if(results[0].pass == pass){
                    status.status = true
                    status.upr = results[0].upr
                }
            }else{
             status.status = false
             status.upr = "niepoprawny login lub hasło"
            }
            res.send(status)
        }
    })
})

app.listen(port, ()=>{
    console.log(`aplikacja działa na porcie: ${port}`)
})