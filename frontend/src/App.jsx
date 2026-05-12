//external import
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

//local import
import Home from "./pages/Home"
import Singup from "./pages/Signup"
import Login from "./pages/Login"
// import './App.css'
function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/signup' element={<Singup></Singup>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </>
  );
}


export default App
