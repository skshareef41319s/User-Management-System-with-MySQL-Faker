const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Create a database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "T0122ARTI073@s",
  database: "my_database",
});

// Create a random user function
const createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home route - Show user count
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM users`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching count");
    }
    res.render("home.ejs", { users: result[0]["COUNT(*)"] });
  });
});

// Show all users
app.get("/users", (req, res) => {
  let q = `SELECT * FROM users`;
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching users");
    }
    res.render("showUsers.ejs", { users: result });
    console.log(result);
  });
});

// Edit user form
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching user");
    }
    if (result.length === 0) {
      return res.send("User not found");
    }
    res.render("edit.ejs", { user: result[0] });
    console.log(result);
  });
});

// Update user
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { username: newUsername, password: newPassword } = req.body;

  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching user");
    }
    if (result.length === 0) {
      return res.send("User not found");
    }

    let user = result[0];

    if (newPassword !== user.password) {
      return res.send("Password does not match");
    }

    let q2 = `UPDATE users SET username = ?, password = ? WHERE id = ?`;
    connection.query(q2, [newUsername, newPassword, id], (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error updating user");
      }
      res.redirect("/users");
    });
  });
});

// Delete user
// Delete user
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;

  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching user");
    }
    if (result.length === 0) {
      return res.send("User not found");
    }

    let user = result[0];

    if (password !== user.password) {
      return res.send("Password does not match");
    }

    let q2 = `DELETE FROM users WHERE id = ?`;
    connection.query(q2, [id], (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error deleting user");
      }
      res.redirect("/users");
    });
  });
});


// Add new user
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  const q = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;
  const userId = faker.string.uuid();

  connection.query(q, [userId, username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error adding user");
    }
    res.redirect("/users");
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
