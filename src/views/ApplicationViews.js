import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import CategoryList from "../components/categories/CategoryList"; // Import the CategoryList component
import { TagList } from "../components/tag/TagList"
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { CreateTag } from "../components/tag/CreateTagForm";

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
          <Route path="/categories" element={<CategoryList />} /> {/* Use CategoryList component */}
          {/* Add other nested routes here */}
        </Route>
        <Route path="/tags">
        <Route index element={<TagList />} />
      </Route>
    </Routes>
    </>
  );
};
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/tags" element={<CreateTag setToken={setToken} />} />
      </Routes>
    </>
  );
};
