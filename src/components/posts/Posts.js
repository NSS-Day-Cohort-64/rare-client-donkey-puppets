import { useEffect, useState } from "react";
import { getAllPosts } from "../../managers/PostManager";
import { Post } from "./Post";

export const Posts = () => {
    const [allPosts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category
    const [categories, setCategories] = useState([]); // State to store the available categories

    useEffect(() => {
        getAllPosts().then((data) => {
            setPosts(data);
            // Extract unique categories from the posts
            const uniqueCategories = [...new Set(data.map((post) => post.category.label))];
            setCategories(uniqueCategories);
        });
    }, []);

    // Function to handle category selection change
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
    };

    // Filter the posts based on the selected category
    const filteredPosts = selectedCategory
        ? allPosts.filter((post) => post.category.label === selectedCategory)
        : allPosts;

    return (
        <>
            <div>
                <label htmlFor="category">Search by Category:</label>
                <select
                    id="category"
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                >
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <ul className="AllPosts">
                {filteredPosts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </ul>
        </>
    );
};
