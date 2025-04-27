const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/financas/dashboard');
  }
  res.render('auth/login');
});

router.get('/register', (req, res) => {
  if (req.session.user) {
    return res.redirect('/financas/dashboard');
  }
  res.render('auth/register');
});

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

module.exports = router; 