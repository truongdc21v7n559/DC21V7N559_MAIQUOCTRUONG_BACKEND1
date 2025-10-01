const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.routes");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

// Route mặc định
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// handle 404 response
app.use((req, res, next) => {
    // không khớp route nào thì vào đây
    next(new ApiError(404, "Resource not found"));
});

// error-handling middleware
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
