import styles from "./Pagination.module.css";

const Pagination = ({
    totalPage = 10,
    currPage,
    onPageChange
}) => {
    const pages = new Array(totalPage).fill(0).map( (_, ind) => ind + 1 );
    
    const handlePageChange = (page) => {
        if ( page === currPage ) return;
        onPageChange( page );
    };
    
    return (
        <div className={styles.root}>
            {
                pages.map( page => (
                    <div
                        key={page*1021} 
                        onClick={()=>handlePageChange(page)}
                        className={ page===currPage ? styles.currPage : styles.pageBtn }
                    >
                        {page}
                    </div>
                ))
            }
        </div>
    )
};

export default Pagination;