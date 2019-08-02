import React from 'react';


function ProductCard(props) {

    let {product,style,colorOnHover,color,width,height,imageHeight,imageBorder,fontSize} = props;
    let [hovered,setHovered] = React.useState(false);
    let widthInt = parseInt(width);
    let borderInt = parseInt(imageBorder);
    let imageWidth = (widthInt-(borderInt*2)).toString() +'px';

    let polaroidStyle={
        width:width,
        height:height,
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        overflow: 'hidden',
        ...style
    };

    let containerStyle={
        textAlign: 'center',
        fontSize:fontSize,
    };

    let imageDivStyle={
        backgroundImage:`url(${product.image})`,
        width:imageWidth,
        marginTop:imageBorder,
        marginLeft:'auto',
        marginRight:'auto',
        height:imageHeight,
    };

    if(hovered){
        polaroidStyle={
            ...polaroidStyle,
            backgroundColor:colorOnHover,
        }

    }
    else{
        polaroidStyle={
            ...polaroidStyle,
            backgroundColor:color,
        }
    }

    return (
        <div style={polaroidStyle}
            onMouseEnter={()=>{setHovered(true)}}
            onMouseLeave={()=>{setHovered(false)}}
        >
            <div style={imageDivStyle} />
            <div style={containerStyle}>
                {product.price}
            </div>
        </div>
    );

}

export default ProductCard;

