# Hướng dẫn xây dựng chức năng xóa đã chọn

Hướng dẫn xây dựng chức năng xóa đã chọn bằng NodeJS + ExpressJS + Sequelize ORM

# Các bước chạy dự án

- Bước 1: Clone dự án
- Bước 2: Cài đặt các Dependencies `npm i`
- Bước 3: Copy file `.env.example` thành `.env` và sửa lại thông tin Database
- Bước 4: Chạy Migrate: `npx sequelize-cli db:migrate`
- Bước 5: Chạy Seeder: `npx sequelize-cli db:seed:all`
- Bước 6: Khởi động dự án: `npm start` (Nếu chưa cài đặt nodemon đề nghị cài đặt trước)
