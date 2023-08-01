import { Link } from "react-router-dom";

export const Post = ({ post }) => (
   <li>
    <h1></h1>
    <div>{post.title}</div>
    <div>{post.user.first_name} {post.user.last_name}</div>
    <div> {post.category.label}</div>
    <div>{post.publication_date}</div>
   </li>
  )