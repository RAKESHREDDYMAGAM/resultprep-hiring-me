const prisma = require("../prisma/client");

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    res.json(users);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });

  }
};

const deleteUser = async (req, res) => {

  try {

    const { id } = req.params;

    // Prevent admin from deleting themselves
    if (req.user.id === parseInt(id)) {
      return res.status(400).json({
        error: "Admin cannot delete their own account"
      });
    }

    await prisma.user.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: "User deleted successfully" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Server error" });

  }

};

module.exports = {
  getUsers,
  deleteUser
};