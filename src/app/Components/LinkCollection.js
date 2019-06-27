import React from 'react';

function LinksCollection(props){
    let {links} = props;

    let spanStyle={
        marginLeft:'5px',
        marginRight:'5px'
    };

    let aStyle = {
       marginLeft:'5px',
       marginRight:'5px'
    };

    return (
            <span style={spanStyle}>
                {links.map((link)=>(
                    <a style={aStyle} key={link.id} href={link.url}>
                        {link.text}
                    </a>
                ))}
            </span>
    );
}

export default LinksCollection;