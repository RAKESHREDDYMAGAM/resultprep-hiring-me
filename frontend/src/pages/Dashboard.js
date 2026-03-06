import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {

    try {

      setLoading(true);

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (err) {

      alert("Failed to fetch tasks");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {

    if (!title) {
      alert("Title is required");
      return;
    }

    try {

      await API.post("/tasks", {
        title,
        description
      });

      setTitle("");
      setDescription("");

      fetchTasks();

    } catch (err) {

      alert("Failed to create task");

    }

  };

  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (err) {

      alert("Failed to delete task");

    }

  };

  const toggleStatus = async (task) => {

    try {

      const newStatus =
        task.status === "pending" ? "completed" : "pending";

      await API.put(`/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        status: newStatus
      });

      fetchTasks();

    } catch (err) {

      alert("Failed to update task");

    }

  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (

    <div className="container">
  
      <div className="header">
        <h2>Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>
  
      <div className="card">
  
        <h3>Create Task</h3>
  
        <div className="form-group">
          <input
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <input
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>
  
        <button onClick={createTask}>Add Task</button>
  
      </div>
  
      <div style={{marginTop:"20px"}}>
  
        <h3>Your Tasks</h3>
  
        {tasks.length === 0 && <p>No tasks yet</p>}
  
        {tasks.map(task => (
  
          <div key={task.id} className="task">
  
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
  
            <div className="task-buttons">
  
              <button onClick={()=>toggleStatus(task)}>
                Toggle Status
              </button>
  
              <button onClick={()=>deleteTask(task.id)}>
                Delete
              </button>
  
            </div>
  
          </div>
  
        ))}
  
      </div>
  
    </div>
  
  );
}

export default Dashboard;