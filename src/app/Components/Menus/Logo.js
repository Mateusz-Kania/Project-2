import React from 'react'


function Logo(props){

    let {style={}}=props;

    function handleClick(){
        let pageInfo={
            pageType:"LANDING_PAGE",
        };
        console.log(pageInfo);
    }

    let container={
        ...style
    }

    return(
        <div
            style={container}
            onClick={handleClick}
        >
            LOGO
        </div>
    )

}

export default Logo;