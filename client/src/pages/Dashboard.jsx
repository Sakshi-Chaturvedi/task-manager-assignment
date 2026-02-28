import { useEffect, useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!title || !description) {
      return alert("Fill all fields");
    }

    if (editId) {
      await API.put(`/tasks/${editId}`, { title, description });
      setEditId(null);
    } else {
      await API.post("/tasks", { title, description });
    }

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
      
      {/* HEADER */}
      <div className="top-bar">
        <h1>🚀 Task Manager</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* FORM */}
      <div className="task-form">
        <input
          placeholder="Task Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* TASK LIST */}
      <div className="task-grid">
        {tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div className="btn-group">
              <button className="edit" onClick={() => handleEdit(task)}>
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteTask(task._id)}
              >
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