import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"; 

import Navbar from "./components/navbar.component";
import StudentList from "./components/student-list.component";
import CourseList from "./components/course-list.component";
import CreateStudent from "./components/create-student.component";
import CreateCourse from "./components/create-course.component";
import EditStudent from "./components/edit-student.component";
import EditCourse from "./components/edit-course.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={StudentList} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/students/create" exact component={CreateStudent} />
        <Route path="/students/edit/:id" exact component={EditStudent} />
        <Route path="/courses/create" exact component={CreateCourse} />
        <Route path="/courses/edit/:id" exact component={EditCourse} />
      </div>
    </Router>
  );
}

export default App;
