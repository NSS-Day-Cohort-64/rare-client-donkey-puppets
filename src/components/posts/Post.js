import { Link } from "react-router-dom";

export const Post = ({ post }) => (
   <li>
   <div>
   {post.title} {post.user.first_name} {post.user.last_name} {post.publication_date}
   {post.category.label}
    </div> 

   </li>
  )