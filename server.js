const express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes'); // MỚI: Gọi file routes

const app = express();

connectDB();

app.use(express.json());

app.use(express.static('public'));

// MỚI: Sử dụng routes
// Nghĩa là: Mọi đường dẫn bắt đầu bằng '/api/users' sẽ chạy vào userRoutes
app.use('/api/users', userRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});