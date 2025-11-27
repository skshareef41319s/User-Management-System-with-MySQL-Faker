# User Management System (MySQL + Faker)

A small, friendly User Management System built with Node.js, Express, EJS and MySQL — with Faker.js used to generate realistic dummy users. It’s designed to be easy to run locally, simple to understand, and straightforward to extend.

Whether you need a demo app, a starting point for a CRUD project, or a way to quickly generate realistic test data, this repo makes it simple.

---

## What this project does

- Provides Create, Read, Update, and Delete (CRUD) operations for users.
- Stores user data in a MySQL database.
- Uses EJS for server-rendered pages (home, list users, edit user).
- Uses Faker.js to generate realistic demo users for testing and development.

---

## Tech stack

- Node.js + Express
- MySQL
- EJS templates
- Faker.js for fake data
- (Optional) nodemon for local development

---

## Quick start

1. Clone the repo
```bash
git clone https://github.com/skshareef41319s/User-Management-System-with-MySQL-Faker.git
cd User-Management-System-with-MySQL-Faker
```

2. Install dependencies
```bash
npm install
```

3. Create the MySQL database

Open your MySQL client (CLI, Workbench, etc.) and run:
```sql
CREATE DATABASE my_database;
```

4. Configure database connection

There are two common options:

- Edit index.js where the MySQL connection is defined and update credentials directly (simple, quick).
- Or create a `.env` file and update your app to read credentials from environment variables (recommended).

Example `.env` contents:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=my_database
PORT=8080
```

If you don’t already have dotenv in the project, you can add it and load variables in index.js:
```js
require('dotenv').config();
```

5. Start the app
```bash
npm start
# or, during development
npx nodemon index.js
```

6. Open the UI

Visit: http://localhost:8080

---

## How to use

- Home page: Add a new user using the form.
- Show users: View all users in the system.
- Edit user: Click to edit a user’s data or delete a user.

---

## Generate fake users (Faker.js)

You can use Faker to seed the database with realistic test users. Example script (can be placed in a `scripts/` folder):

```javascript
const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(), // for demo only — hash in production
  };
}

console.log(createRandomUser());
```

To seed the DB, adapt the script to run INSERT queries using your existing MySQL connection. Keep in mind: never use plain text passwords in production — always hash them.

---

## Project structure

/ (root)
- index.js                - Main server file (Express app + MySQL connection)
- package.json
- schema.sql              - SQL schema / example table creation
- /views                  - EJS templates (home.ejs, showUsers.ejs, edit.ejs)
- /public                 - Static files (CSS, images)
- /routes                 - (Optional) Express route files
- README.md

---

## Tips & best practices

- Use environment variables (dotenv) for credentials.
- Hash passwords (bcrypt) before storing them if you plan to use this beyond demos.
- Add input validation both client- and server-side.
- Use connection pooling for better performance with MySQL.
- Add migration tooling (e.g., knex, Sequelize, or Flyway) for schema changes in bigger projects.

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch (git checkout -b my-feature)
3. Commit your changes
4. Open a Pull Request

If you add features, consider updating README with new usage instructions.

---

## License & contact

This project is free to use for learning and demos. If you'd like to collaborate or need help, open an issue or reach out on GitHub.

---

Thank you for checking out this tiny user management app — it’s intentionally minimal so you can experiment and extend it quickly.
