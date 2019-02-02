const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index', { title: 'Express' });
});

router.get('/setCookie', (req, res, next) => {
  res.cookie('name', 'tobi', { path: '/setCookie'})
  res.send('the cookie is set baby')
});

module.exports = router;
