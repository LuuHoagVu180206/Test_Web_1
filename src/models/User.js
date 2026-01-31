const mongoose = require('mongoose');

// Định nghĩa khuôn mẫu (Schema)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Bắt buộc phải có
        unique: true    // Không được trùng
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 18 // Nếu không nhập thì mặc định là 18
    },
    createdAt: {
        type: Date,
        default: Date.now // Tự động lưu thời gian tạo
    }
});

// Tạo Model từ Schema trên
const User = mongoose.model('User', userSchema);

module.exports = User;