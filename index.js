require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 8000
app.use(bodyParser.json())

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

connection.connect()

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM students', function(error, results, fields) {
    if (error) throw error
    res.send({
      text: results
    })
  })
})

app.get('/users/:id', (req, res) => {
  connection.query(
    `SELECT * FROM students WHERE students_id = ${req.params.id}`,
    function(error, results, fields) {
      if (error) throw error
      res.send({
        text: results
      })
    }
  )
})

app.post('/users', (req, res) => {
  connection.query(
    `INSERT INTO students SET ?`,
    {
      firts_name: `${req.body.firts_name}`,
      last_name: `${req.body.last_name}`,
      email: `${req.body.email}`,
      address: `${req.body.address}`
    },
    function(error, results, fields) {
      if (error) throw error
      res.send({
        text: results.insertId
      })
    }
  )
})

app.delete('/users/:id', async (req, res) => {
  connection.query(
    `DELETE FROM students WHERE students_id = ${req.params.id}`,
    function(error, results, fields) {
      console.log(results)

      if (error) throw error
      res.send({
        delete_data: results.affectedRows
      })
    }
  )
})

app.listen(port, () => {
  console.log(`running students_impactbyte ${port}`)
})
