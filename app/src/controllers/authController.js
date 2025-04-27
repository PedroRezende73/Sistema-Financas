const User = require('../models/Usuario');
const bcrypt = require('bcrypt');

class AuthController {
  static async register(req, res) {
    try {
      const { nome, email, senha } = req.body;
      
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.render('auth/register', { 
          error: 'Email já cadastrado',
          nome,
          email
        });
      }

      const user = await User.create({ nome, email, senha });
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
      const { email, senha } = req.body;
      
      const user = await User.findByEmail(email);
      if (!user) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      // Verifica se a senha e o hash existem
      if (!senha || !user.senha) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      const validPassword = await bcrypt.compare(senha, user.senha);
      if (!validPassword) {
        return res.render('auth/login', { 
          error: 'Email ou senha inválidos',
          email
        });
      }

      req.session.user = {
        id: user.id,
        name: user.nome,
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