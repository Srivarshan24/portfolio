import { useEffect, useState } from "react";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Complete React Assignment",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      name: "Study Data Mining",
      priority: "Medium",
      completed: true,
    },
    {
      id: 3,
      name: "Read React Documentation",
      priority: "Low",
      completed: false,
    },
  ]);

  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [user, setUser] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>


      <header className="header">

        <div>
          <h1>Task Management Dashboard</h1>
          <p>Manage your tasks and stay productive.</p>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </header>



      <section className="profile-section">

        {
          <>
            <h2>Welcome, Srivarshan! 👋</h2>

            <div className="profile-card">

              <div>
                <strong>Name</strong>
                <p>Srivarshan</p>
              </div>

              <div>
                <strong>Username</strong>
                <p>varshan</p>
              </div>

              <div>
                <strong>Email</strong>
                <p>varshan@gmail.com</p>
              </div>

            </div>
          </>
}

      </section>


      <section className="stats">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <span>{totalTasks}</span>
        </div>

        <div className="stat-card completed-card">
          <h3>Completed</h3>
          <span>{completedTasks}</span>
        </div>

        <div className="stat-card pending-card">
          <h3>Pending</h3>
          <span>{pendingTasks}</span>
        </div>

      </section>



      <section className="add-task">

        <h2>Add New Task</h2>

        <div className="form">

          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(event) =>
              setTaskName(event.target.value)
            }
          />

          <select
            value={priority}
            onChange={(event) =>
              setPriority(event.target.value)
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

      </section>


    

      <section className="task-section">

        <h2>My Tasks</h2>

        {tasks.length === 0 ? (
          <p className="empty">
            No tasks available. Add a new task!
          </p>
        ) : (

          <div className="task-list">

            {tasks.map(
              ({ id, name, priority, completed }) => (

                <div
                  className={`task-card ${
                    completed ? "task-completed" : ""
                  }`}
                  key={id}
                >

                  <div className="task-info">

                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => toggleTask(id)}
                    />

                    <div>
                      <h3>{name}</h3>

                      <span
                        className={`priority ${getPriorityClass(
                          priority
                        )}`}
                      >
                        {priority}
                      </span>
                    </div>

                  </div>

                  <button
                    className="delete-button"
                    onClick={() => deleteTask(id)}
                  >
                    Delete
                  </button>

                </div>

              )
            )}

          </div>

        )}

      </section>

    </div>
  );
}

export default App;