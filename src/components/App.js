
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Login from "./Login";
import PlayGround from "./PlayGround";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

const App = () => {
  const [message,setmessage]=useState('You are not authenticated, Please login first');
  const [islogin,setislogin]=useState(false);
  const [path,setpath]=useState('/Login');
  useEffect(()=>{
    if (islogin) {
      setpath('/PlayGround');
    }else{
      setpath('/Login');
    }
 
  },[islogin]);
  return (
    <div className="main-container">
     <p>{message}</p>
      <Link to={path}>PlayGround</Link><br/>
      <Link to='/Login'>Login</Link>
      <Routes>
        <Route path="/Login" element={ <Login islogin={setislogin} message={setmessage} />} >Login</Route>
        <Route path="/PlayGround" element={<PlayGround />}>PlayGround</Route>
        <Route path="*" element={<NotFound />}>NotFound</Route>
        {/* <Route path="/NotFound" element={<NotFound />}>PlayGround</Route> */}
      </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
