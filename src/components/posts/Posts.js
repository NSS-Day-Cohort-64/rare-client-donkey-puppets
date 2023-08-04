import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import {Post} from "./Post"
import "./posts.css"
export const Posts = ({ searchTermState }) => {
    const [allPosts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [filteredAllPosts, setFilteredAllPosts] = useState([])

    

    useEffect(() => {
        getAllPosts().then((data) => {
            setPosts(data);

            const uniqueCategories = [...new Set(data.map((post) => post.category.label))];
            setCategories(uniqueCategories);

            const uniqueAuthors = [...new Set(data.map((post) => `${post.user.first_name} ${post.user.last_name}`))];
            setAuthors(uniqueAuthors);
        });
    }, []);

    useEffect(() => {
        const searchedTitles = allPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchTermState.toLowerCase());
        })
        setFilteredAllPosts(searchedTitles);
    }, [searchTermState, allPosts]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
    };

    const handleAuthorChange = (event) => {
        const selectedAuthor = event.target.value;
        setSelectedAuthor(selectedAuthor);
    };

    const filteredPosts = allPosts.filter((post) => {
        const categoryMatch = selectedCategory ? post.category.label === selectedCategory : true;
        const authorMatch = selectedAuthor ? `${post.user.first_name} ${post.user.last_name}` === selectedAuthor : true;
        return categoryMatch && authorMatch;
    });

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

            <div>
                <label htmlFor="author">Search by Author:</label>
                <select
                    id="author"
                    onChange={handleAuthorChange}
                    value={selectedAuthor}
                >
                    <option value="">All</option>
                    {authors.map((author) => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>

            <ul className="AllPosts">
                {filteredAllPosts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </ul>
        </>
    );
};
