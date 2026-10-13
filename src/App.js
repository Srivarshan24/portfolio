//import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import ObjExample from './ObjExample';
//import Project from './Project';
//import Task from './Task';
//import Accordian from './Accordian.js';
import ModelBox from './ModelBox.js';
//import Objectdemo from './Objectdemo.js';
// import Project from './Project.js';

import Test from './Test.js'
import ErrorHandle from './ErrorHandle.js';
import TaskManager from './TaskManger.js';
import Product from './Product.js';
// import Home from './Home.js';
import { BrowserRouter,Routes,Route,Link}from 'react-router-dom';
import Admission from './Admission.js';
import Grtdata from './Grtdata.js';
import Accordian from "./Tasknew/Accordian_Task.js";
import Home from "./Tasknew/Home_Task.js";
import About from "./Tasknew/About_Task.js";
import Skills from "./Tasknew/Skills_task.js";
import Project from "./Tasknew/Project_Task.js";
import Contact from "./Tasknew/Contact.js";
import Login from "./Tasknew/Login_Task.js";
import Work from "./Work.js";





function App() {
  // const productObj = [{
  //   name: "Adidas",
  //   price: "3000",
  //   strikePrice: "5000",

  // },
  // {
  //   name: "Puma",
  //   price: "2500",
  //   strikePrice: "3500",

  // },
  // {
  //   name: "Nike",
  //   price: "4000",
  //   strikePrice: "6000",

  // }]
  // const productSOCK = [{
  //   name: "Cotton SOCKS",
  //   price: "3000",
  //   strikePrice: "5000",

  // },
  // {
  //   name: "LINEN",
  //   price: "2500",
  //   strikePrice: "3500",

  // },
  // {
  //   name: "VELVET",
  //   price: "4000",
  //   strikePrice: "6000",

  // }]
  

  return (
   <div className='head'>
    {/* <Product productObj={productObj} />
    <Product productObj={productSOCK} /> */}

    {/* <TaskManager/> */}
    {/* <ErrorHandle data={obj}/> */}
    {/* <Test/> */}
   {/* <Accordian/> */}
   {/* <Project/> */}
   {/* <Objectdemo/> */}
   {/* <ModelBox/> */}
   {/* <BrowserRouter>
      <div>
        <Accordian />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter> */}
   
    {/* <Admission/> */}
    {/* <Home_Task/> */}
    {/* <Counter/> */}
    {/* <Grtdata/> */}
    <Work/>
   </div>
  );
}

export default App;




//get status -use for traking
//get add .file name -file any change in add to git hub
//get commit-m message-for local save
//get branch - list of local branch 
//get remote-v add url-to push and pull
//get pull -
