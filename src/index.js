import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink, Outlet , useParams} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route  path="/"  element={<Home />}/>
      <Route  path="/myapps"  element={<Navigate replace to="/learn" />}/>
      <Route  path="/learn"  element={<Learn />}>
        <Route path="courses" element={<Courses />} >
          <Route path=":courseId" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} >
          <Route path=":bundleId"  element={<BundleId />} />
          </Route>
      </Route>

  
    </Routes>
  </Router>,

  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">courses</Link> {" "} |
      <Link className="btn btn-primary" to="/learn/bundles">bundle</Link>
      <Outlet /> 
    </div>
  )
}


function Courses() {
  const courseList = ["Angular", "React", "Vue", "NodeJs", "JavaScript",
        "C#", "C++", "C", "Objective C", "Swift", "Cobol", ]

      const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <h4>Course card</h4>

      <NavLink to={`/learn/courses/${randomCourseName}`}> {randomCourseName}</NavLink>
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>Bundles</h1>
      <h4>Bundle Cards</h4>
      <Outlet />
    </div>
  )
}

function CourseId() {
  const {courseId} = useParams();
  return (
    <div>
      <h1>Url Params is: {courseId} </h1>
      
    </div>
  )
}

function BundleId() {
  const {bundleId} = useParams();
  return (
    <div>
      <h1>Bundle Params is: {bundleId} </h1>
      
    </div>
  )
}
reportWebVitals();
