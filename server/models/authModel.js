// /models/auth.js
const bcrypt = require('bcryptjs');
const pool = require('../config/db');

class AuthModel {
  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
  }

  static async findByEmail(email) {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return users[0]; // return the first user or undefined
  }

  static async findById(id) {
    const [users] = await pool.query('SELECT id, name FROM users WHERE id = ?', [id]);
    return users[0];
  }

  static async comparePasswords(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }
}

module.exports = AuthModel;
