var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/db.db')

/* GET home page. */
router.get('/addheart', function(req, res, next) {
  db.run(`INSERT INTO Heart DEFAULT VALUES;`, function(err) {
    if (err) {
      return console.error(err.message);
    }
    return res.send({"123": "123"})
  })
});
router.get('/login', function(req, res, next){
  const email = req.query.id
  console.log(email)
  if (email == '1023aass@naver.com'){
    res.send('succese')
  }
  else{
    res.send("false")
  }
})

module.exports = router;
