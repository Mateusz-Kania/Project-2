import React from 'react';
import {connect} from 'react-redux';

function LinksCollection(props){
    let {links} = props;

    let spanStyle={
        marginLeft:'5px',
        marginRight:'5px'
    };

    let spanLinkStyle = {
       marginLeft:'5px',
       marginRight:'5px'
    };

    function handleLinkClick(page){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:page
            }})
    }

    function mapLinks(link){
        return(
            <a onClick={(event)=>handleLinkClick(link.page)} style={spanLinkStyle} key={link.id}>
                {link.text}
            </a>
        );

    }



    return (
            <span style={spanStyle}>
                {links.map(mapLinks)}
            </span>
    );
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(LinksCollection);