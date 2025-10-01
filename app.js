const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import router
const contactsRouter = require("./app/routes/contact.routes");

// Đăng ký router cho đường dẫn /api/contacts
app.use("/api/contacts", contactsRouter);

// Route mặc định
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
