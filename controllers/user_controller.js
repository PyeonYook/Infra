const UserModel = require('../models/user_model');

const UserController = {
    createUser: (req, res) => {
        const { name, id, password } = req.body;

        if (!name || !id || !password) {
            return res.status(400).send("모든 필드를 입력해주세요.");
        }

        UserModel.createUser({ name, id, password }, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("데이터베이스 오류");
            }
            res.status(201).send("사용자가 성공적으로 생성되었습니다.");
        });
    },

    getUser: (req, res) => {
        const id = req.params.id;

        UserModel.getUserById(id, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("데이터베이스 오류");
            }
            if (results.length === 0) {
                return res.status(404).send("사용자를 찾을 수 없습니다.");
            }
            res.status(200).json(results[0]);
        });
    }
};

module.exports = UserController;
