const User = require('../models/User');
const bcrypt = require('bcrypt');

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, password, confirmPassword } = req.body;
      
      // Validar se as senhas coincidem
      if (password !== confirmPassword) {
        return res.render('auth/register', { 
          error: 'As senhas não coincidem',
          name,
          email
        });
      }

      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.render('auth/register', { 
          error: 'Email já cadastrado',
          name,
          email
        });
      }

      const user = await User.create({ name, email, password });
      req.session.user = user;
      res.redirect('/financas/dashboard');
    } catch (error) {
      console.error(error);
      res.render('auth/register', { 
        error: 'Erro ao criar conta',
        ...req.body
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const user = await User.findByEmail(email);
      if (!user) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      // Verifica se a senha e o hash existem
      if (!password || !user.password) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      
      res.redirect('/financas/dashboard');
    } catch (error) {
      console.error(error);
      res.render('auth/login', { 
        error: 'Erro ao fazer login',
        email: req.body.email
      });
    }
  }

  static logout(req, res) {
    req.session.destroy();
    res.redirect('/financas/login');
  }
}

module.exports = AuthController; 