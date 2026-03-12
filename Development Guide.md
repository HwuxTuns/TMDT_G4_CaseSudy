# Team Development Guide

Tài liệu này hướng dẫn các thành viên trong nhóm cách:

* Clone dự án về máy
* Setup môi trường chạy dự án
* Làm việc với Git và GitHub
* Tạo branch cá nhân
* Pull / Push code
* Commit đúng chuẩn

Mục tiêu là đảm bảo mọi người làm việc theo **cùng một quy trình**, tránh xung đột code và tránh việc **push nhầm vào branch main**.

---

# 1. Clone dự án về máy

Bước 1: Truy cập repository của nhóm trên GitHub.

Bước 2: Sao chép link repository.

Ví dụ:

```
https://github.com/<username>/TMDT_G4_CaseStudy.git
```

Bước 3: Mở Terminal hoặc Git Bash và chạy:

```
git clone https://github.com/<username>/TMDT_G4_CaseStudy.git
```

Sau khi clone xong:

```
cd TMDT_G4_CaseStudy
```

---

# 2. Mở dự án bằng IDE

Có thể sử dụng các IDE sau:

* Visual Studio Code
* IntelliJ IDEA
* WebStorm

Ví dụ mở bằng Visual Studio Code:

```
code .
```

Hoặc mở trực tiếp thư mục dự án từ IDE.

---

# 3. Setup môi trường chạy dự án

Trước khi code, cần cài đặt các công cụ sau.

## 3.1 Cài Node.js

Tải tại:

```
https://nodejs.org
```

Kiểm tra:

```
node -v
npm -v
```

---

## 3.2 Cài Git

Tải tại:

```
https://git-scm.com
```

Kiểm tra:

```
git --version
```

---

## 3.3 Cài Docker (nếu dùng MongoDB bằng Docker)

Tải tại:

```
https://www.docker.com
```

Kiểm tra:

```
docker --version
```

---

# 4. Chạy dự án lần đầu

## Backend

```
cd backend
npm install
npm run dev
```

## Frontend

```
cd frontend
npm install
npm run dev
```

---

# 5. Quy tắc làm việc với Git

Branch `main` là branch **chính của dự án**.

Quy tắc:

* Không push trực tiếp vào `main`
* Mỗi thành viên làm việc trên branch riêng
* Sau khi hoàn thành chức năng sẽ tạo **Pull Request**

---

# 6. Tạo branch cá nhân

Sau khi clone repo, cần tạo branch riêng để làm việc.

Ví dụ thành viên **Nguyễn Hữu Tuấn** tạo branch:

```
git checkout main
git pull origin main
git checkout -b huutuan
```

Giải thích:

* `git checkout main` → chuyển về branch main
* `git pull origin main` → cập nhật code mới nhất
* `git checkout -b huutuan` → tạo branch cá nhân

---

# 7. Kiểm tra đang ở branch nào

Để tránh nhầm lẫn branch, luôn kiểm tra bằng lệnh:

```
git branch
```

Ví dụ kết quả:

```
* huutuan
  main
```

Dấu `*` nghĩa là **branch hiện tại đang làm việc**.

---

# 8. Chuyển sang branch của mình

Nếu đang ở branch khác, có thể chuyển sang branch cá nhân:

```
git checkout huutuan
```

Luôn đảm bảo đang làm việc trên **branch của mình**, không phải `main`.

---

# 9. Pull code mới nhất

Trước khi bắt đầu làm việc hoặc trước khi push code, nên pull code mới nhất từ `main`.

```
git pull origin main
```

Việc này giúp giảm xung đột code.

---

# 10. Add file vào commit

Sau khi code xong, cần add file vào staging area.

Add tất cả file:

```
git add .
```

Hoặc add file cụ thể:

```
git add src/controllers/productController.js
```

---

# 11. Commit code

Commit dùng để lưu thay đổi code với mô tả rõ ràng.

Ví dụ:

```
git commit -m "feat: add product API"
```

Các loại commit phổ biến:

```
feat: thêm chức năng mới
fix: sửa lỗi
docs: cập nhật tài liệu
refactor: cải thiện code
style: chỉnh sửa format code
```

Ví dụ:

```
git commit -m "feat: implement login API"
git commit -m "fix: fix cart bug"
git commit -m "docs: update README"
```

---

# 12. Push code lên GitHub

Sau khi commit xong, push code lên branch của mình.

Ví dụ:

```
git push origin huutuan
```

---

# 13. Tạo Pull Request

Sau khi push branch lên GitHub:

1. Truy cập repository trên GitHub
2. Chọn branch vừa push
3. Nhấn **Create Pull Request**
4. Chờ review trước khi merge vào `main`

---

# 14. Workflow làm việc tiêu chuẩn

Một quy trình làm việc cơ bản:

```
git clone repository
git checkout -b huutuan
(code)
git add .
git commit -m "feat: implement login"
git push origin huutuan
```

Sau đó tạo **Pull Request** để merge vào `main`.

---

# 15. Quy tắc làm việc trong nhóm

Các thành viên cần tuân thủ:

* Không push trực tiếp vào `main`
* Mỗi thành viên làm trên branch riêng
* Commit message rõ ràng
* Pull code mới nhất trước khi code
* Tạo Pull Request trước khi merge

---

Tài liệu này giúp đảm bảo tất cả thành viên làm việc theo cùng một workflow và tránh xung đột code trong quá trình phát triển dự án.
