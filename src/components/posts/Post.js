import { Link } from "react-router-dom";

export const Post = ({ post }) => (
   <li className="singlePost">
   <Link to={`/postDetails/${post.id}`}>{post.title}</Link>
    {post.user.first_name} {post.user.last_name} {post.publication_date}
   {post.category.label}
   </li>
  )