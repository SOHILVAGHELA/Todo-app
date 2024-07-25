const express = require("express");
const {
  gettodos,
  savetodo,
  updatetodo,
  deletetodo,
} = require("../controllers/todo.controller");
const router = express.Router();

router.get("/get", gettodos);
router.post("/save", savetodo);
router.put("/update/:id", updatetodo);
router.delete("/delete/:id", deletetodo);

module.exports = router;
