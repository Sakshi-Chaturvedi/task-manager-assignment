const router = require("express").Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

const { isAuth } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/role.middleware");

router.post("/", isAuth, createTask);
router.get("/", isAuth, getTasks);
router.put("/:id", isAuth, updateTask);
router.delete("/:id", isAuth, deleteTask);

module.exports = router;