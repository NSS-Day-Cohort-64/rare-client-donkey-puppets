import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import CategoryList from "../components/categories/CategoryList";
import { TagContainer } from "../components/tag/TagContainer";
import { PostContainer } from "../components/posts/PostContainer"
import { PostForm } from "../components/posts/PostForm"
import { MyPosts } from "../components/posts/MyPosts";
import { PostDetails } from "../components/posts/PostDetails";
import { UserList } from "../components/users/UserList";
import { UserDetails } from "../components/users/userDetails";
import { Comments } from "../comments/Comments";
import { SubscribedPosts } from "../components/subscriptions/SubscribedPosts";
export const ApplicationViews = ({ token, setToken }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={< SubscribedPosts />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<Authorized token={token} />}>
        <Route path="/categories" element={<CategoryList />} /> 
        <Route path="/posts" element={<PostContainer />} />
        <Route path="/newpost" element={< PostForm />} />
        <Route path="/tags" element={ <TagContainer /> } />
        <Route path = "/postDetails/:postId" element= {<PostDetails/>} />
        <Route path = "/comments/:postId" element= {<Comments/>} />
        <Route path = "/userDetails/:userId" element= {<UserDetails />} />
        <Route path="/my-posts/" element={ <MyPosts /> } />
          <Route path="my-posts/:postId" element={<MyPosts />} />
        <Route path="/users" element={ <UserList /> } />
        </Route>
      </Routes>
    </>
  );

};




// import { PostContainer } from "../components/posts/PostContainer"
// <Route path="/posts" element={<PostContainer />} />

//<Route element={<Posts />} path="/posts" />
