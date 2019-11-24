import React from 'react'
import colorsData from "../../Data/Static/ColorsData";
import {Button, Col, Icon, Row, Select} from "antd";
import HoverAnimation from "../../Animations/HoverAnimation";

function CatalogControls(props){

    let {style,initObserved,initSort,sortOptionsArray,height,verticalMode,filtersButtonClickCallback}=props;

    let [observed,setObserved]=React.useState(initObserved);
    let [sort,setSort]=React.useState(initSort);

    height=height||'auto';
    style=style||{};


    let [observedInitialMount,setObservedInitialMount]=React.useState(true);

    function observedClick(){
        setObserved((prevObserved) => !prevObserved);
    }

    React.useEffect(()=>{
        if(observedInitialMount){
            setObservedInitialMount(false);
        }
        else {
        console.log(observed);
        }
    },[observed])


    let [sortInitialMount,setSortInitialMount]=React.useState(true);

    function sortChanged(sort){
        setSort(sort);
    }

    React.useEffect(()=>{
        if(sortInitialMount){
            setSortInitialMount(false);
        }
        else {
            console.log(sort);
        }
    },[sort])

    let iconStyle={
        fontSize:32
    };
    let selectStyle={
        marginLeft:5,
        width:150,
    }

    let icon=(
        <HoverAnimation color={colorsData.primaryColor} colorOnHover={colorsData.primaryColor5}>
            <Icon style={iconStyle} type="heart"
                  theme={observed ? "filled" : "outlined"}
                  onClick={observedClick}
            />
        </HoverAnimation>

    )

    let sortSpan=(
        <span>
            Sortuj:
            <Select style={selectStyle} defaultValue={initSort} onChange={sortChanged}>
                {sortOptionsArray.map((option)=>(
                    <Select.Option key={option.slug} value={option.slug}>{option.text}</Select.Option>
                ))}
            </Select>
        </span>
    )
    if(verticalMode){

        let filtersButton=(
            <Button onClick={filtersButtonClickCallback}><Icon type="edit" /> Edytuj kryteria</Button>
        )

        let itemMargin={
            marginLeft:6,
            marginRight:6,
            marginBottom:10,
        }

        let itemMarginInline={
            ...itemMargin,
            float:'left'
        }

        return(
            <Row type="flex" justify="center">
                <Col>
                    <div style={itemMarginInline}>
                        {sortSpan}
                    </div>
                </Col>
                <Col>
                    <div style={itemMarginInline}>
                        {filtersButton}
                    </div>
                    <div style={itemMarginInline}>
                        {icon}
                    </div>
                </Col>
            </Row>
        );
    }

    let containerStyle={
        backgroundColor:colorsData.backgroundLight,
        height,
        ...style,
    };

    let topRightContainer={
        position:'absolute',
        top:0,
        right:0,

    };

    let bottomRightContainer={
        position:'absolute',
        bottom:0,
        right:0,
    }


    return(
        <div style={containerStyle}>
            <div style={{position:'relative',width:'100%',height:'100%'}}>
                <div style={topRightContainer}>
                    {icon}
                </div>
                <div style={bottomRightContainer}>
                    {sortSpan}
                </div>
            </div>
        </div>
    )
}

export default CatalogControls;