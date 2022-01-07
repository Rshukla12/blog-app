import styles from "./BlogCard.module.css";

const BlogCard = ({
    title,
    body,
    userId
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.heading}>
                <h3 className={styles.title}>{title}</h3>
                <h5 >By - {userId}</h5>
            </div>
            <p>{body}</p>
        </div>
    );

};

export default BlogCard;