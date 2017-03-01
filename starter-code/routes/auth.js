const express = require('express');
const router = express.Router();

router.get('/signup',(req, res, next) => { /// Renders the sign-up view
  res.render('auth/signup-view.ejs', { // When going to /signup
    title: 'Signup'
  });
});
