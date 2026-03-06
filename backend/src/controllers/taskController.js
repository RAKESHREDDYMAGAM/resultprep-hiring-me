const prisma = require("../prisma/client");

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.userId
      }
    });

    res.status(201).json(task);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {

    let tasks;

    if (req.user.role === "admin") {
      tasks = await prisma.task.findMany();
    } else {
      tasks = await prisma.task.findMany({
        where: { userId: req.user.userId }
      });
    }

    res.json(tasks);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        status
      }
    });

    res.json(task);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {

    const { id } = req.params;

    await prisma.task.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: "Task deleted" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};