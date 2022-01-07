const Pagination = ({
    totalPage = 10,
    currPage,
    onPageChange
}) => {
    const pages = new Array(totalPage).fill(0).map( (_, ind) => ind + 1 );
    
    const handlePageChange = (page) => {
        if ( page === currPage ) return; 
        console.log(page)
        onPageChange( page );
    };
    
    return (
        <div>
            {
                pages.map( page => (
                    <div 
                        key={page*1021} 
                        onClick={()=>handlePageChange(page)}
                    >
                        {page}
                    </div>
                ))
            }
        </div>
    )
};

export default Pagination;