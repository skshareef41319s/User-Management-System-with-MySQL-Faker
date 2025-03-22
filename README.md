# 🚀 User Management System with MySQL & Faker

This project is a **User Management System** built using **MySQL** as the database and **Faker.js** for generating realistic dummy data. It provides **CRUD operations** to manage users and a **clean web interface** using **EJS templates**.

---

## 📌 Features

✅ **Full CRUD operations** (Create, Read, Update, Delete)  
✅ **MySQL integration** for structured data storage  
✅ **Faker.js** for generating random user data  
✅ **Express.js** backend for handling API requests  
✅ **EJS templating** for dynamic front-end rendering  
✅ **Lightweight and scalable architecture**  

---

## 📦 Technologies Used

- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Templating Engine:** EJS  
- **Styling:** CSS (optional)  
- **Data Generation:** Faker.js  

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/skshareef41319s/User-Management-System-with-MySQL-Faker.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd User-Management-System-with-MySQL-Faker
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Set Up MySQL Database

Open MySQL CLI or use MySQL workbench.

Create a new database:

```sql
CREATE DATABASE my_database;
```

Update `index.js` with your MySQL credentials.

### 5️⃣ Run the Application

```bash
npm start
```
Tip : use **Nodemon** for auto restarting the server.
---

## 🚀 Usage

1️⃣ Start the server and open [http://localhost:8080](http://localhost:8080).  
2️⃣ Perform CRUD operations via the web UI.  
3️⃣ New users can be auto-generated using Faker.js.

---

## 🏗 Project Structure

```bash
/User-Management-System
│── /views                  # EJS templates for UI
│   ├── home.ejs            # Home page showing user count
│   ├── showUsers.ejs       # Displays all users
│   ├── edit.ejs            # User edit form
│── /public                 # Static assets (CSS, images)
│── /routes                 # Express routes (Optional)
│── index.js                # Main server file
│── schema.sql              # SQL schema for database
│── package.json            # Dependencies & scripts
│── README.md               # Project documentation
```

---

## 🔄 CRUD Operations

### ➕ Create a User

Users can be added using the form on the home page.  
Data is stored in MySQL.

### 🔍 Read Users

View all users on the `showUsers` page.  
Data is fetched from the database.

### ✏️ Update User

Edit user details via the `edit` page.  
Updates reflect in MySQL.

### 🗑 Delete User

Remove a user from the `edit` page.  
Data is deleted from MySQL.

---

## ⚡ Faker.js - Auto Generate Users

Faker.js is used to populate the database with realistic user data.

Run the following script to generate random users:

```javascript
const { faker } = require("@faker-js/faker");

const createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(createRandomUser());
```

---

## 🤝 Contributing

1️⃣ Fork the repo.  
2️⃣ Create a new branch for your changes.  
3️⃣ Commit and push your changes.  
4️⃣ Submit a pull request for review.

---
