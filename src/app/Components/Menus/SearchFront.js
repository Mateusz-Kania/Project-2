import React from 'react'
import Search from "./Search";

function SearchFront(props){

    let {text,header}=props;

    let container={
        padding:5,
    }

    return(
        <div style={container}>
            <h1>{header}</h1>
        <Search size="large" width={300} text={text} />
        </div>
    )
}

export default SearchFront;