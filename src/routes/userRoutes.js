const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Nếu ai đó vào đường dẫn gốc (/) bằng phương thức POST -> Gọi hàm createUser
router.post('/add', userController.createUser);

// Nếu ai đó vào đường dẫn gốc (/) bằng phương thức GET -> Gọi hàm getAllUsers
router.get('/', userController.getAllUsers);

module.exports = router;