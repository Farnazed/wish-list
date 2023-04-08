const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'mwishlist-db.c1i32sq9nzxv.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Daneshvar1!',
});

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'This is a message from server' });
});

app.post('/insert', (req, res) => {
  if (req.query.username && req.query.email && req.query.age) {
    console.log('Received an insert call');
    con.connect(function (err) {
      con.query(
        `INSERT INTO main.users (username, email, age) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.age}')`,
        function (err, result, fields) {
          if (err) res.send(err);
          if (result)
            res.send({
              username: req.query.username,
              email: req.query.email,
              age: req.query.age,
            });
          if (fields) console.log(fields);
        }
      );
    });
  } else {
    console.log('Something went wrong, Missing a parameter');
  }
});

module.exports = router;
