import React from 'react'
import colorsData from '../../Data/Static/ColorsData'
import menuCategories from '../../Data/Static/MenuCategories'
import {Menu} from "antd";
import IconCollection from "./IconCollection";

function MenuHorizontal(props){

    let {height}=props;

    let container={
        height,
        lineHeight:`${height}px`
    };



    let menuColors={
        normal:colorsData.iconsLight,
        hovered:colorsData.primaryColor3,
        clicked:colorsData.primaryColor,
        hoveredClicked:colorsData.primaryColor5
    }

    let menuStyle= {
        cursor:'pointer',
        height,
        lineHeight:`${height}px`,
        fontSize: 18,
        marginRight: '15px',
    }

    let menuData=Object.keys(menuCategories).map((key)=>{
        if(!menuCategories[key].subcategories){
            return null;
        }
        return{
            type:'MENU_TEXT',
            data:{
                text:menuCategories[key].text,
                subcategory:key,
            },
            onClick:()=>{console.log(key)}
        }
    }).filter((el)=>{
        return el !=null;
    })

    return(
        <div style={container}>
                <IconCollection position='left' iconColors={menuColors} icons={menuData} iconsStyle={menuStyle} />
        </div>
    )
}

export default MenuHorizontal;