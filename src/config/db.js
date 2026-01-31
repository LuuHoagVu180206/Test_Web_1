const mongoose = require('mongoose');

// Kết nối vào máy tính của chính mình (Localhost)
// 'my_web_app' là tên database bạn muốn đặt (nó sẽ tự tạo ra nếu chưa có)
const db = "mongodb://127.0.0.1:27017/Web_Test_1"; 

const connectDB = async () => {
  try {
    await mongoose.connect(db); // Lưu ý: Local thường không cần user/pass nên viết ngắn gọn thế này thôi
    console.log('✅ Đã kết nối MongoDB LOCAL thành công!');
  } catch (err) {
    console.error('❌ Lỗi kết nối:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;