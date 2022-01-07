import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";

const BlogApp = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [blogs, setBlogs] = React.useState(null);
    const [query, setQuery] = React.useState("");
    const [page, setPage] = React.useState(1);

    const fetchBlogs = async (query = null) => {
        try {
            setIsLoading(true);
            let url = "https://jsonplaceholder.typicode.com/posts";
            if (query) url += `?q=${query}`
            let data = await fetch(url);
            data = await data.json();
            setBlogs(data);
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        fetchBlogs(query);
    }, [query]);

    return (
        <div className="App">
            <SearchBar setQuery={setQuery} />
            {
                isLoading ? (
                    <div>...loading</div>
                ) : isError ? (
                    <div>Something went wrong! check console for more info!</div>
                ) : (
                    // handle pagination using filter
                    <div>
                        <div>
                            {
                                blogs
                                    .filter((_, index) => index >= ( page - 1 ) * 10 && index < page * 10)
                                    .map(blog => (
                                        <BlogCard
                                            key={blog.id}
                                            title={blog.title}
                                            userId={blog.userId}
                                            body={blog.body}
                                        />
                                    ))
                            }
                        </div>
                        <Pagination
                            totalPage={10}
                            currPage={page}
                            onPageChange={(page)=>setPage(page)}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default BlogApp; 