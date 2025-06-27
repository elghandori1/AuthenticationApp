const pool = require('../config/db');

class Profile{
    static async getProfile(id){
        const [profile] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return profile[0];
    }
}

module.exports = Profile;