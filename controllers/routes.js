const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('welcome');
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/newuser', (req, res) => {
    res.render('newuser');
  });

  router.get('/newpost', (req, res) => {
    res.render('newpost');
  });


  module.exports = router;