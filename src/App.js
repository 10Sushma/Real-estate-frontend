import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormParent from "./forms/FormParent";
import Signin from "./components/SignIn";
import Signup from "./components/SignUp";
import NotFound from "./components/NotFound";
import PropertyListing from "./components/PropertyListing";

import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          {/* <Route path="/form" element={< />}></Route> */}
          <Route
            path="/AllProperties/:userEmail/:userName"
            element={<PropertyListing />}
          ></Route>
          <Route
            path="/form/:userEmail/:userName"
            element={<FormParent />}
          ></Route>
          <Route
            path="/form/:editID/:userEmail/:userName"
            element={<FormParent />}
          ></Route>
           <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
