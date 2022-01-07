import React from "react";
import styles from "./SearchBar.module.css";
import useDebouncer from "../../utils/useDebouncer";

const SearchBar = ({
    setQuery
}) => {
    const [q, setQ] = React.useState("");
    const updateQuery = useDebouncer(setQuery, 500);

    const handleChange = (event) => {
        const { value } = event.target;
        setQ( value );
        updateQuery( value );
    };

    const handleClear = () => {
        setQ( "" );
        setQuery( "" );
    };

    return (
        <div className={styles.root}>
            <input 
                className={styles.input} 
                type="text" value={q} 
                onChange={handleChange} 
                placeholder="Type to search" 
            />
            { q && <div className={styles.close} onClick={handleClear}>X</div> }
        </div>
    )
};

export default SearchBar;