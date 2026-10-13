import {React,useState} from 'react'
import './Test.css';
function Test(){
    const [task,setTask]=useState([
    {    id: 1,
      name: "Complete React Assignment",
      completed: false,
    },
    {    id: 2,
      name: "Study data mining",
      completed: true,
    },
    {    id: 3,
      name: "Read react fundamentals",
      completed: false,
    }

    ])
     const [darkMode, setDarkMode] = useState(false);
    return(
        
        <>
        <div className={darkMode ? "app dark" : "app"}></div>
        <header className="header">

        <div>
          <h1>Task Management Dashboard</h1>
          <p>Manage your tasks.</p>
        </div>

        <button className="theme-button" onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </header>
      

        </>
    )
      
}

export default Test