import React from 'react';
import {Col,  Row} from "antd";
import {connect} from "react-redux";
import ProductCard from "../Others/ProductCard"
import {useSpring, animated} from 'react-spring'

function LPCarouselItem(props) {

    let {CarouselItemData,colorOnHover,color,active,displaySize} = props;

    const animationProps = useSpring({opacity: active ? 1 : 0});

    let [textHovered,setTextHovered] = React.useState(false);
    let colorProps = useSpring({color:textHovered ? colorOnHover : color});

    let imageDivStyle={
        width:'100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height:'100%',
        backgroundImage:`url(${CarouselItemData.image})`,
        cursor:'pointer',

    };

    let divContentContainerWidthSettings;
    if(displaySize==="desktop"||displaySize==="tablet"){
        divContentContainerWidthSettings= {
            width:'900px',
            marginLeft:'auto',
            marginRight:'auto',
        };

    }
    else{
        divContentContainerWidthSettings= {
            width:'auto',
            marginLeft:'5px',
            marginRight:'5px',
        };
    }

    let divContentContainerStyle={
        position:'absolute',
        bottom:'50px',
        left:'0px',
        right:'0px',
        ...divContentContainerWidthSettings
    };

    let textColStyle={
        textAlign:'left',
        marginBottom:'30px',
    };



    let headerStyle={
        fontSize:'30px',
    };

    let textStyle={
        fontSize:'16px',

    };

    let cardsStyle={
        display: "inline-block",
        marginLeft:'8px',
        marginRight:'8px',
    };

    let cardsDivStyle;



    let spanSize;

    if(displaySize==="small"){
        cardsDivStyle={
            textAlign: 'right',
            marginRight:'8px',
        };
        spanSize=24;
    }

    else{
        cardsDivStyle={
            textAlign: 'center',
        };
        spanSize=12;
    }


    let productCardSettings;

    productCardSettings={
      height: '145px',
      width:'80px',
      imageBorder:'5px',
      imageHeight:'120px',
      fontSize:'12px',
    };

    // slug,image,price
    function mapProducts(product){
        return(
            <span key={product.slug} onClick={()=>handleProductClick(product.slug)}>
            <ProductCard
                color={color}
                colorOnHover={colorOnHover}
                style={cardsStyle}
                key={product.slug}
                product={product}
                height={productCardSettings.height}
                width={productCardSettings.width}
                imageHeight={productCardSettings.imageHeight}
                imageBorder={productCardSettings.imageBorder}
                fontSize={productCardSettings.fontSize}
            />
            </span>
        );
    }

    function handleProductClick(productSlug){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PRODUCT",
                productSlug:productSlug,
            }})


    }

    function handleTextClick(){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:CarouselItemData.page,
            }})
    }

    return(
            <div style={imageDivStyle}>
                <animated.div style={{...divContentContainerStyle,...animationProps}}>
                    <Row type="flex" align="bottom">
                        <Col style={textColStyle} span={spanSize}>
                            <animated.span
                                style={{...colorProps}}
                                onClick={()=>handleTextClick()}
                                onMouseEnter={()=>{setTextHovered(true)}}
                                onMouseLeave={()=>{setTextHovered(false)}}
                            >
                            <span style={headerStyle}>{CarouselItemData.h1}</span>
                            <p style={textStyle}>{CarouselItemData.text}</p>
                            </animated.span>
                        </Col>
                        <Col span={spanSize}>
                            <div style={cardsDivStyle}>
                            {
                                CarouselItemData.products.map(mapProducts)}
                            </div>
                        </Col>

                    </Row>
                </animated.div>
            </div>
    );
}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(LPCarouselItem);
