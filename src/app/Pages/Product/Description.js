import React from 'react';

function Description(props){

    let {description}=props;

    let containerStyle={
        
    };

    return(
        <div dangerouslySetInnerHTML={{__html: description}}>

        </div>

    );

}



export default Description;