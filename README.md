# 📚 Hệ Thống Quản Lý Thư Viện  

**Hệ thống quản lý thư viện** là một ứng dụng web hỗ trợ quản lý các hoạt động trong thư viện, bao gồm quản lý sách, người dùng, và các thao tác mượn/trả sách. Hệ thống được xây dựng nhằm đơn giản hóa quy trình làm việc, tăng hiệu quả quản lý và đảm bảo lưu trữ dữ liệu an toàn.

---

## 🚀 Tính Năng

- **Quản lý sách**: Thêm, sửa, xóa, và tìm kiếm sách theo danh mục, tác giả, hoặc nhà xuất bản.  
- **Mượn/Trả sách**: Dễ dàng theo dõi và quản lý tình trạng mượn trả sách.  
- **Quản lý người dùng**: Phân quyền truy cập cho quản trị viên và người dùng thông thường.  
- **Tích hợp cơ sở dữ liệu MySQL**: Lưu trữ và truy xuất dữ liệu một cách hiệu quả và an toàn.

---

## 🛠️ Công Nghệ Sử Dụng

- **Giao diện**: HTML, CSS, JavaScript, Bootstrap.  
- **Xử lý Backend**: Python (Flask Framework).  
- **Cơ sở dữ liệu**: MySQL.  

---

## 📁 Cấu Trúc Dự Án  

```plaintext
library-management-system/
│
├── app.py                 # File chính của ứng dụng
├── database dump/
│   └── library-system.sql # Cơ sở dữ liệu và dữ liệu mẫu
├── static/                # Thư mục chứa tài nguyên tĩnh (CSS, JS, Hình ảnh)
│   ├── images/
│   ├── js/
│   └── style/
├── templates/             # Thư mục chứa giao diện HTML
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── ... (các tệp HTML khác)
└── README.md              # Tài liệu mô tả dự án
```

---

## 📝 Cách Cài Đặt và Chạy Dự Án  

### 1️⃣ Cài Đặt **XAMPP**
1. Tải XAMPP từ [trang chủ XAMPP](https://www.apachefriends.org/download.html).  
2. Cài đặt XAMPP và khởi động **Apache** và **MySQL** trong **XAMPP Control Panel**.  

### 2️⃣ Thiết Lập Cơ Sở Dữ Liệu
1. Mở trình duyệt và truy cập: `http://localhost/phpmyadmin`.  
2. Tạo một cơ sở dữ liệu mới, ví dụ: `library_system`.  
3. Import file `library-system.sql` từ thư mục `database dump/`:  
   - Nhấn **Import** > Chọn file `library-system.sql` > Nhấn **Go**.  

### 3️⃣ Cấu Hình Kết Nối Cơ Sở Dữ Liệu
Kiểm tra file cấu hình kết nối, ví dụ:  
- **Python (Flask)**: Sửa file `db_config.py`:  
   ```python
   DB_HOST = 'localhost'  
   DB_USER = 'root'  
   DB_PASSWORD = ''  
   DB_NAME = 'library_system'  
   ```  

### 4️⃣ Chạy Ứng Dụng
1. **Cài đặt các thư viện cần thiết**:  
   ```bash
   pip install -r requirements.txt
   ```  
2. **Khởi chạy ứng dụng**:  
   ```bash
   python app.py
   ```  
3. Truy cập ứng dụng qua trình duyệt tại:  
   ```
   http://localhost:5000
   ```

---

## 📖 Hướng Dẫn Sử Dụng  

1. Truy cập vào ứng dụng thông qua trình duyệt.  
2. Đăng nhập với quyền quản trị viên hoặc người dùng.  
3. Sử dụng giao diện để quản lý sách, người dùng, và các hoạt động mượn/trả sách.  

---

## 🛡️ Góp Ý và Hỗ Trợ  

Nếu bạn gặp vấn đề hoặc có ý tưởng cải thiện, hãy mở issue trên GitHub hoặc liên hệ qua email: `<dinhuutoi24304@gmail.com>`.

--- 

Hy vọng hướng dẫn này dễ đọc và đủ rõ ràng để người dùng có thể thiết lập và sử dụng dự án. Cần bổ sung gì thêm không? 😊
