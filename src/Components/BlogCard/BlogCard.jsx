const BlogCard = ({
    title,
    body,
    userId
}) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <h5>By - {userId}</h5>
            </div>
            <p>{body}</p>
        </div>
    );

};

export default BlogCard;