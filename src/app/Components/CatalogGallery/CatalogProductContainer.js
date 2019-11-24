import React from 'react'
import ProductsContainer from "../Others/ProductsContainer";
import TextContainer from "../Others/TextContainer";
import FilterTag from "./CatalogProductContainer/FilterTag";
import "./CatalogProductContainer/ZIndexFix.css";
import colorsData from "../../Data/Static/ColorsData"
import {Col, Icon, InputNumber, Row} from "antd";
import HoverAnimation from "../../Animations/HoverAnimation";
import {connect} from "react-redux";
import {useSpring, animated} from 'react-spring'
import MoveScroll from '../../Animations/MoveScroll'
import "./CatalogProductsContainer.css"

function CatalogProductContainer(props){

    let {heightFixed,foundProducts,activeFilters={},filters,filtersExist=true,style={},displaySize,requestedResult,onRequestedResultChange,rowNumbers=2,width}=props;

    let displayHorizontal=displaySize==="tablet"||displaySize==="desktop";
    if(heightFixed===undefined){
        heightFixed=displayHorizontal;
    }

    let {products,currentLoadedInfo,productsFoundInfo}=foundProducts;
    let HEIGHT_FOR_ROW=303;
    let CONTAINER_PADDINGS=15;
//itemsNumber
    let [itemsNumber,setItemsNumber]=React.useState(6);


    /*
    let [scrollHook,setScrollHook,stopScrollHook]= useSpring(()=>({y:0}));

    function startScrollAnimation() {
        if(displaySize==="small"||displaySize==="medium") {
            moveScroll(containerRef, setScrollHook, stopScrollHook);
        }
    }
*/
    let scrollAnimationConfig={ mass: 1, tension: 120, friction: 14,clamp:true};
    let scrollPointRef=React.useRef(null);
    function startScrollAnimation(){
        if(displaySize==="medium"||displaySize==="small") {
            scrollPointRef ? scrollPointRef.current.moveScroll("vertical", -64, 0, scrollAnimationConfig) : "";
        }
    }
    const [hideProps, setHideProps,stopHideProps] = useSpring(() => ({opacity:0}))

    let pageCount=Math.ceil(productsFoundInfo.totalFound/getResultsOnPage());


    let [animationState,setAnimationState]=React.useState("hided");

    let animationConfig={
        mass:1,
        tension:210,
        friction:20,
        clamp:true
    };

    function getResultsOnPage(){
        return itemsNumber;
    }


    let productsToShow={
        page:Math.ceil((requestedResult+1)/getResultsOnPage()),
        products:products.slice(requestedResult-currentLoadedInfo.loadedStart,requestedResult-currentLoadedInfo.loadedStart+getResultsOnPage()),
    }
    if(!(Math.floor(requestedResult/getResultsOnPage())*getResultsOnPage()===requestedResult)){
        onRequestedResultChange(Math.floor(requestedResult/getResultsOnPage())*getResultsOnPage());
    }

     let prevButtonDisabled=!requestedResult;
     let nextButtonDisabled=!(requestedResult+getResultsOnPage()<productsFoundInfo.totalFound);//productFoundInfo.totalFound zamiast loadedCount po ogarnieciu tego


    let containerRef=React.useRef(null);
    let horizontalBreakpoints={
        show5:1025,
        show4:802,
    };
    let verticalBreakpoints={
        show2:416,
        show3:609,
    };


    let [productsInRow,setProductsInRow]=React.useState(1);
    let [containerHeight,setContainerHeight]=React.useState(0);

    let [productsCountToSetHeight,setProductsCountToSetHeight]=React.useState(getExpectedResults(productsToShow.page));

    React.useEffect(()=>{
        if(animationState==="hided") {
            setProductsCountToSetHeight(getExpectedResults(productsToShow.page));
        }
    },[productsToShow,animationState])

    React.useEffect(()=>{
            let existingRowNumber=heightFixed?
                productsInRow>2 ? rowNumbers : rowNumbers*3/productsInRow
                :
                Math.ceil(productsCountToSetHeight / productsInRow)


            setContainerHeight(HEIGHT_FOR_ROW * existingRowNumber + CONTAINER_PADDINGS);



            if(productsInRow>2){
                setItemsNumber(rowNumbers*productsInRow);
            }
            else{
                setItemsNumber(rowNumbers*3);
            }


    },[productsInRow,productsCountToSetHeight])


    let checkProductsInRow=()=> {
        let newProductsInRow;
            if (displaySize === "desktop" || displaySize === "tablet") {

                if (width >= horizontalBreakpoints.show5) {
                    newProductsInRow=5;
                } else if (width >= horizontalBreakpoints.show4) {
                    newProductsInRow=4;
                } else {
                    newProductsInRow=3;
                }
            } else {
                if (width >= verticalBreakpoints.show3) {
                    newProductsInRow=3;
                } else if (width >= verticalBreakpoints.show2) {
                    newProductsInRow=2
                } else {
                    newProductsInRow=1;
                }


            }
            setProductsInRow(newProductsInRow);

        console.log(width,newProductsInRow,displaySize);

    }

    React.useEffect(()=>{
        checkProductsInRow();
    },[width,displaySize])






    let [currentProducts,setCurrentProducts]=React.useState(productsToShow);

    let containerStyle={
        position:'relative',
        ...style
    };


    function handlePrevButton(){
        if(prevButtonDisabled){
            return
        }
        startScrollAnimation();

        onRequestedResultChange((current)=>{
            return current-getResultsOnPage();
        })

    }

    function handleNextButton(){


        if(nextButtonDisabled){
            return
        }
        startScrollAnimation();

        onRequestedResultChange((current)=>{
            return current+getResultsOnPage();
        })
    }

    let [loading,setLoading]=React.useState(false);

    function compareProductsObjects(array1,array2){

        if(array1.products.length!==array2.products.length){
            return false;
        }

        return array1.page===array2.page;
    }

    function checkIfProductsObjectIsComplete(productObject){
            let expectedResults=getExpectedResults(productObject.page);
            return expectedResults>0&&productObject.products.length===expectedResults;
    }

    function getExpectedResults(page){
        return  (pageCount===page)? (productsFoundInfo.totalFound -((pageCount-1)*getResultsOnPage())) : getResultsOnPage();
    }

    React.useEffect(()=>{
        console.log("CURRENT_ANIMATION_STATE:",animationState,productsToShow,currentProducts);
            if ((checkIfProductsObjectIsComplete(currentProducts) && !checkIfProductsObjectIsComplete(productsToShow)) || (checkIfProductsObjectIsComplete(currentProducts) && checkIfProductsObjectIsComplete(productsToShow) && !compareProductsObjects(currentProducts,productsToShow))) {
                setAnimationState((current)=>(current === "showing" || current === "showed") ? "hiding" : current);
            }

            if(!checkIfProductsObjectIsComplete(currentProducts)){
                setAnimationState((current)=>(current === "showing" || current === "showed") ? "hided" : current)
            }

            if (animationState === "hided") {
                if (checkIfProductsObjectIsComplete(currentProducts)) {
                    if (checkIfProductsObjectIsComplete(productsToShow)) {
                        if (compareProductsObjects(currentProducts, productsToShow)) {
                            setAnimationState((current) => current === "hided" ? "showing" : current);
                        } else {
                            setCurrentProducts(productsToShow);

                        }
                    }
                    else {
                        setCurrentProducts(productsToShow);
                    }
                }
                else if (checkIfProductsObjectIsComplete(productsToShow)) {
                        setCurrentProducts(productsToShow);
                    }

            }

            if (!checkIfProductsObjectIsComplete(currentProducts) && !checkIfProductsObjectIsComplete(productsToShow) && animationState === "hided") {
                setLoading(true);
            } else {
                setLoading(false);
            }


    },[productsToShow,currentProducts,animationState]);

    React.useEffect(()=>{
        if(animationState==="hiding"){
            setHideProps({
                opacity: 0,
                config:animationConfig,
                onRest:()=>{
                    setAnimationState("hided")

                }
            });
        }
        if(animationState==="showing"){
            stopHideProps();
            setHideProps({
                opacity: 1,
                config:animationConfig,
                onRest:()=>{
                    setAnimationState("showed")
                }
            });
        }



    },[animationState]);


    let filterContainer={
        margin:'0px 15px',
        padding:'2px',
        float:'left',
        backgroundColor:colorsData.backgroundLight,
        zIndex:900
    }


    function generateFilterTags(){
        return(
                <TextContainer  autoHeightMax={64} autoHeightMin={32} scroll height={"auto"}>
                <div style={filterContainer}>
                {
                    Object.keys(activeFilters).map((key)=>(
                        filters[key]===undefined ? "" : filters[key].hidden ? "" : <FilterTag key={key} slug={key} filter={filters[key]} activeFilter={activeFilters[key]} />
                ))
                }
                </div>
                </TextContainer>
        )
    }

    let buttonsContainer=(displaySize==="medium"||displaySize==="small")?
        {
        }:
        {
            position:'relative',
            top:-15,
            marginRight:30,
        }


    let buttonsContainerRowJustify=(displaySize==="medium"||displaySize==="small")?
        "center"
        :
        "end";

    let loadingIconSize=64;
    let loadingIconContainer={
        position:'absolute',
        margin:'auto',
        color:colorsData.primaryColor,
        left:0,
        right:0,
        top:displaySize==="desktop"||displaySize==="tablet"?0:30,
        bottom:displaySize==="desktop"||displaySize==="tablet"?0:null,
        height:loadingIconSize,
        width:loadingIconSize
    };


    return(
        <div style={containerStyle} >
            <div ref={containerRef} style={{position:'relative',width:'100%',height:'100%'}}>
                <MoveScroll ref={scrollPointRef} />
                    {filtersExist ? generateFilterTags():null}
                    <div style={{height:containerHeight,position:'relative'}}>
                        {
                            loading ?(
                                <div style={loadingIconContainer}>
                                <Icon type="loading" style={{ fontSize: loadingIconSize }} spin />
                                </div>
                            ):""
                        }
                    <animated.div style={hideProps}>
                    <ProductsContainer colSettings={{span:(24/productsInRow)-1}} style={{clear:'left',paddingTop:0}} wider={displaySize!=="desktop"}
                           products={currentProducts.products}/>
                    </animated.div>
                    </div>
                    <div style={buttonsContainer}>
                        <Row type="flex" justify={buttonsContainerRowJustify}>
                            <Col>
                        <div style={{fontSize:20,lineHeight:"48px"}}>
                            Strona:

                            <InputNumber className="pageInputNumber"
                                         value={productsToShow.page}
                                         style={{width:50,marginLeft:5,marginRight:5}}
                                         min={1}
                                         max={pageCount}
                                         onChange={(pageNumber)=>{
                                             if(pageNumber>=1&&pageNumber<=pageCount){
                                            onRequestedResultChange((pageNumber-productsToShow.page)*getResultsOnPage()+requestedResult)}}
                                         }/>
                        /{pageCount}
                        </div>
                            </Col>
                            <Col>
                        <span style={{fontSize:32}}>


                            <HoverAnimation color={colorsData.primaryColor} colorOnHover={colorsData.primaryColor5}>
                                <Icon onClick={handlePrevButton} type="left-square" theme="filled" style={{marginLeft:5,color:prevButtonDisabled?colorsData.disabledColor:""}} />
                            </HoverAnimation>
                            <HoverAnimation color={colorsData.primaryColor} colorOnHover={colorsData.primaryColor5}>
                                <Icon onClick={handleNextButton} type="right-square" style={{marginLeft:5,color:nextButtonDisabled?colorsData.disabledColor:""}} theme="filled" />
                            </HoverAnimation>
                        </span>
                            </Col>
                        </Row>
                    </div>
            </div>
        </div>
    )
}
const mapStateToProps= state=>(
    {
        displaySize:state.displaySize
    }
)

export default connect(mapStateToProps)(CatalogProductContainer);
