import React from "react";

const useDebouncer = (callbackFn, time) => {
    const debouncerRef = React.useRef(null);
    
    return (value) => {
        debouncerRef.current && clearTimeout( debouncerRef.current );
        debouncerRef.current = setTimeout(()=> {
            callbackFn(value);
            debouncerRef.current = null;
        }, time);
    };
};

export default useDebouncer;