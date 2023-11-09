import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { PostPage } from "./pages/PostPage";

export const  App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='posts/:id' element={ <PostPage /> } />
      </Routes>
    </>
  )  
}