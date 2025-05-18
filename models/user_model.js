const db = require('../config/db_config');

const UserModel = {
    createUser: (userData, callback) => {
        const sql = "INSERT INTO user (name, id, password) VALUES (?, ?, ?)";
        db.query(sql, [userData.name, userData.id, userData.password], callback);
    },

    getUserById: (id, callback) => {
        const sql = "SELECT * FROM user WHERE id = ?";
        db.query(sql, [id], callback);
    }
};

module.exports = UserModel;
