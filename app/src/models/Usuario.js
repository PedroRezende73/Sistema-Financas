const db = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static async create({ nome, email, senha }) {
    try {
      const hashedPassword = await bcrypt.hash(senha, 10);
      const query = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3)
        RETURNING id, nome, email
      `;
      const values = [nome, email, hashedPassword];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const query = 'SELECT * FROM usuarios WHERE email = $1';
      const result = await db.query(query, [email]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error);
      throw error;
    }
  }

  static async findById(id) {
    try {
      const query = 'SELECT id, nome, email FROM usuarios WHERE id = $1';
      const result = await db.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao buscar usuário por id:', error);
      throw error;
    }
  }
}

module.exports = User; 