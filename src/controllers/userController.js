const User = require('../models/User'); // Gọi cái khuôn mẫu vừa làm ở trên

// Chức năng 1: Tạo người dùng mới
exports.createUser = async (req, res) => {
    try {
        // Lấy dữ liệu người dùng gửi lên từ req.body
        const { username, email, age } = req.body;

        // Tạo một user mới
        const newUser = new User({ username, email, age });

        // Lưu vào Database (Lệnh này tốn thời gian nên cần await)
        await newUser.save();

        // Trả về kết quả cho client
        res.status(201).json({ 
            message: 'Tạo user thành công!', 
            user: newUser 
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi rồi:', error: error.message });
    }
};

// Chức năng 2: Lấy danh sách tất cả người dùng
exports.getAllUsers = async (req, res) => {
    try {
        // Tìm tất cả user trong DB
        const users = await User.find(); 
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi lấy danh sách:', error: error.message });
    }
};