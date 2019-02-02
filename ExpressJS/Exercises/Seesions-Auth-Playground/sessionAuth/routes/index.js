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

  res.render('index', { title: 'Express' });
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
