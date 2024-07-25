const ToDoModel = require("../models/todo.model");

// Fetch all todos
module.exports.gettodos = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.status(200).json(todos); // Send the todos as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching todos" });
  }
};

// Save a new todo
module.exports.savetodo = async (req, res) => {
  const { todo } = req.body;
  try {
    const data = await ToDoModel.create({ todo }); // Ensure todo is saved correctly as an object
    console.log("saved successfully");
    res.status(200).json({ message: "saved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the todo" });
  }
};

// Update an existing todo by ID
module.exports.updatetodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  try {
    await ToDoModel.findByIdAndUpdate(id, { todo }); // Update the todo with the provided ID
    res.status(200).json({ message: "updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the todo" });
  }
};

// Delete a todo by ID
module.exports.deletetodo = async (req, res) => {
  const { id } = req.params;
  try {
    await ToDoModel.findByIdAndDelete(id); // Delete the todo with the provided ID
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the todo" });
  }
};
