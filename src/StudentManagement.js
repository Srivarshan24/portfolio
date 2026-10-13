import { useState } from "react";

function StudentManagement() {
  const [theme, setTheme] = useState(false);
  const [count, setCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAdults, setShowAdults] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", age: 21, course: "React" },
    { id: 2, name: "Vinoth", age: 17, course: "Java" },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.course) return;
    setStudents([...students, { id: Date.now(), ...form, age: Number(form.age) }]);
    setForm({ name: "", age: "", course: "" });
  };

  const handleDelete = () => {
    setStudents(students.filter((s) => s.id !== deleteId));
    setModal(false);
  };

  const displayedStudents = showAdults
    ? students.filter((s) => s.age >= 18)
    : students;

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
    <div style={bgStyle}>
      <button onClick={() => setTheme(!theme)}>
        {theme ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Accordion</h2>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        What is React? {showAnswer ? "▲" : "▼"}
      </button>
      {showAnswer && <p>React is a JavaScript library for building user interfaces.</p>}

      <hr />

      <h2>Add Student</h2>
      <form onSubmit={handleAdd}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <h2>Student List</h2>
      <button onClick={() => setShowAdults(!showAdults)}>
        {showAdults ? "Show All Students" : "Show 18 or Above Only"}
      </button>

      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedStudents.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>
                <button
                  onClick={() => {
                    setDeleteId(item.id);
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

export default StudentManagement;