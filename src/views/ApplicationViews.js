import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { CategoryList } from "../components/categories/CategoryList";
import { TagContainer } from "../components/tag/TagContainer";
import { TagList } from "../components/tag/TagList"
import { PostForm } from "../components/posts/PostForm"

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/tags" element={ <TagContainer /> } />
          <Route path="/categories" element={<CategoryList />} /> {/* Use CategoryList component */}
          {/* Add other nested routes here */}
          <Route path="/tags">
          </Route>
            <Route index element={<TagList />} /><Route path="/newpost" element={< PostForm />} />
        </Route>
      </Routes>
    </>
  );
};
