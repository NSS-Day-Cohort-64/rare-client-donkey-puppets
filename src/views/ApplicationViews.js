import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import CategoryList from "../components/categories/CategoryList"; // Import the CategoryList component
import { Posts } from "../components/posts/Posts"

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
        <Route path="/categories" element={<CategoryList />} /> 
        <Route element = {<Posts />} path="/posts"/>
        </Route>
      </Routes>
    </>
  );
};
