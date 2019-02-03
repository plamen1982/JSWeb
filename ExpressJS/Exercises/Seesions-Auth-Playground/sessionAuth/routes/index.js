const express = require('express');
const router = express.Router();
const crypto = require('crypto');
/* GET home page. */

function generateSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function generateHashPassword(salt, password) {
  return crypto.createHmac('sha256', salt).update(password).digest('hex');
}

router.get('/', (req, res, next) => {
  console.log(req.session)
  if(req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1;
  }
});

router.get('/setCookie', (req, res, next) => {
  let salt = generateSalt();
  let hashedPass = generateHashPassword(salt, 'tobi');
  console.log(salt);
  console.log(hashedPass);
  res.cookie('name', hashedPass, { path: '/setCookie', maxAge: 1000000})
  res.send('the cookie is set baby')
});

module.exports = router;
