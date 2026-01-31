const API_URL = 'http://localhost:3000/api/users';

// 1. Hàm lấy danh sách User từ Server (GET)
async function fetchUsers() {
    const response = await fetch(API_URL); // Gọi API
    const users = await response.json(); // Chuyển kết quả về JSON

    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Xóa chữ "Đang tải..."

    // Duyệt qua từng user và tạo thẻ HTML hiển thị
    users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user-item';
        div.innerHTML = `
            <strong>${user.username}</strong> (${user.age} tuổi) <br>
            <small>${user.email}</small>
        `;
        userList.appendChild(div);
    });
}

// 2. Hàm gửi User mới lên Server (POST)
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn trình duyệt load lại trang

    // Lấy dữ liệu từ ô nhập
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Gửi lên Server
    const response = await fetch(API_URL + '/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, age })
    });

    if (response.ok) {
        alert('✅ Thêm thành công!');
        fetchUsers(); // Tải lại danh sách ngay lập tức
        document.getElementById('userForm').reset(); // Xóa trắng form
    } else {
        alert('❌ Lỗi rồi!');
    }
});

// Gọi hàm lấy danh sách ngay khi mở web
fetchUsers();