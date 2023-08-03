import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import CategoryList from "../components/categories/CategoryList";
import { TagContainer } from "../components/tag/TagContainer";
import { Posts } from "../components/posts/Posts"
import { PostForm } from "../components/posts/PostForm"
import { MyPosts } from "../components/posts/MyPosts";
import { UserList } from "../components/users/UserList";

export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
        <Route path="/categories" element={<CategoryList />} /> 
        <Route element = {<Posts />} path="/posts"/>
        <Route path="/newpost" element={< PostForm />} />
        <Route path="/tags" element={ <TagContainer /> } />
        <Route path="/my-posts" element={ <MyPosts /> } />
        <Route path="/users" element={ <UserList /> } />

        </Route>
      </Routes>
    </>
  );
};
