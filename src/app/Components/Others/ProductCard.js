import React from 'react';
import {useSpring, animated} from 'react-spring'

function ProductCard(props) {

    let {product,style,colorOnHover,color,width,height,imageHeight,imageBorder,fontSize} = props;
    let [hovered,setHovered] = React.useState(false);
    let widthInt = parseInt(width);
    let borderInt = parseInt(imageBorder);
    let imageWidth = (widthInt-(borderInt*2)).toString() +'px';
    let colorProps = useSpring({backgroundColor:hovered ? colorOnHover : color});

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

    /*
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
     */

    function mouseEnterHandler(){
        setHovered(true);
    }

    function mouseLeaveHandler(){
        setHovered(false);

    }


    return (
        <animated.div style={{...polaroidStyle,...colorProps}}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div style={imageDivStyle} />
            <div style={containerStyle}>
                {product.price}
            </div>
        </animated.div>
    );

}

export default ProductCard;

