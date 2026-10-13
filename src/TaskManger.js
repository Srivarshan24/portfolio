import { useState } from "react";
import './TaskManger.css';

function TaskManager() {
  const [theme, setTheme] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [form, setForm] = useState({ title: "" });
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete react assignment", completed: true },
    { id: 2, title: "Study react fundamental", completed: false },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: form.title, completed: false }]);
    setForm({ title: "" });
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== deleteId));
    setModal(false);
  };

  const displayedTasks = showCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  const bgStyle = {
    backgroundColor: theme ? "#222" : "#fff",
    color: theme ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  const modalStyle = {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme ? "#333" : "#fff",
    color: theme ? "#fff" : "#000",
    padding: "20px",
    border: "2px solid #666",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <div style={bgStyle} className="box">
      <button onClick={() => setTheme(!theme)}>
        {theme ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>Total Tasks: {tasks.length}</h2>

   

      <h2>Accordion</h2>
      <button onClick={() => setShowHelp(!showHelp)}>
        How to use this app {showHelp ? "▲" : "▼"}
      </button>
      {showHelp && (
        <p>Add a task using the input form, click the status button to toggle between Completed and Pending, and use the delete button to remove tasks.</p>
      )}

     

      <h2>Add Task</h2>
      <form onSubmit={handleAdd}>
        <input
          name="title"
          placeholder="Enter task title"
          value={form.title}
          onChange={handleChange}
        /><br/>
        <button type="submit" style={{ marginLeft: "8px" }}>
          Add Task
        </button>
      </form>

      

      <h2>Tasks List</h2>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Show All Tasks" : "Show Completed Tasks"}
      </button>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.completed ? "Completed" : "Pending"}</td>
              <td>
                <button onClick={() => toggleStatus(task.id)}>
                  Mark as {task.completed ? "Pending" : "Completed"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setDeleteId(task.id);
                    setModal(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal && (
        <div style={modalStyle}>
          <h3>Are you sure?</h3>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setModal(false)} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskManager;