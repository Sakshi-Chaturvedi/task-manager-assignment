const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");

// middlewares
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

app.use(cookieParser());

// test route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", taskRouter);

// error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Server Error" });
});

module.exports = app;