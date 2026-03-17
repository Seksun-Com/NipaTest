# 🎫 Ticket Management System (Full-stack Docker)

โปรเจกต์ระบบจัดการ Ticket พัฒนาด้วย **React (Vite)**, **Node.js (Express)** และ **MySQL** โดยเน้นการใช้งานผ่าน Docker เพื่อให้ง่ายต่อการ Deploy และการตรวจงาน

## 🛠 สิ่งที่ต้องมีก่อนเริ่ม (Prerequisites)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (หรือ Docker Engine พร้อม Docker Compose)

-----

## 🚀 ขั้นตอนการติดตั้งและเริ่มใช้งาน (Setup)

1. **Clone Repository**
  ```bash
   git clone <your-repository-url>
   cd NIPATEST
  ```
-----

2.  **เตรียมฐานข้อมูล (Database Preparation)**

      * นำไฟล์ SQL ของคุณมาวางไว้ที่ Root ของโปรเจกต์ (โฟลเดอร์เดียวกับ `docker-compose.yml`)
      * ตรวจสอบให้แน่ใจว่าชื่อไฟล์คือ `db_setup.sql` เพื่อให้ Docker ทำการ Import ข้อมูลให้อัตโนมัติ

-----

3.  **สั่งรันระบบ (Run with Docker)**
    ใช้คำสั่งนี้เพื่อ Build และรันทุก Service (Frontend, Backend, Database) พร้อมกัน:

    ```bash
    docker-compose up --build
    ```

    *(รอจนกว่า Terminal จะขึ้นว่า `VITE v6.x.x ready` และ `MySQL: ready for connections`)*

-----

## 🌐 ช่องทางการเข้าถึงระบบ (Access Points)

| Service | URL | คำอธิบาย |
| :--- | :--- | :--- |
| **Frontend** | [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) | หน้า UI หลักสำหรับผู้ใช้งาน |
| **Backend API** | [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) | RESTful API สำหรับจัดการข้อมูล |
| **phpMyAdmin** | [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080) | ระบบจัดการฐานข้อมูลผ่าน Browser |

-----

## 🗄 รายละเอียดทางเทคนิค (Technical Details)

### 1\. Database Configuration

  * **Database Name:** `ticket_system_db`
  * **Port:** `3306`
  * **Username:** `root`
  * **Password:** `rootpassword`

### 2\. เทคโนโลยีที่ใช้

  * **Frontend:** React (Vite) รันบน Node.js 20 เพื่อรองรับ Tailwind CSS
  * **Backend:** Node.js Express พร้อมการเชื่อมต่อ MySQL2 Pool
  * **Database:** MySQL 8.0

-----

## ⚠️ การแก้ไขปัญหา (Troubleshooting)

**หากพบปัญหาข้อมูลไม่แสดงผล หรือต้องการ Reset ฐานข้อมูลใหม่:**
ให้ใช้คำสั่งล้าง Volume เดิมทิ้งเพื่อให้ Docker รันไฟล์ SQL ใหม่ตั้งแต่ต้น:

```bash
docker-compose down -v
docker-compose up --build
```

**หากต้องการรันแบบไม่ค้างหน้าจอ Terminal (Background Mode):**

```bash
docker-compose up -d
```

-----

**Developed by:** [Seksun Charoenkitmongkhon]
