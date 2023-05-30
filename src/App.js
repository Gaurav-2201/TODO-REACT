import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeLayout from "./HomeLayout.js";
import TodoLayout from "./TodoLayout.js";
import NotFoundPage from "./NotFoundPage.js";
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<HomeLayout />} />
    <Route path = "/todo" element = {<TodoLayout />} />
    <Route path = "*" element = {<NotFoundPage />} />
  </Routes>  
  </BrowserRouter>
  );
  };

export default App;