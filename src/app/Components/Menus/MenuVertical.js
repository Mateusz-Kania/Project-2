import React from 'react'
import menuCategories from '../../Data/Static/MenuCategories'
import {Menu} from "antd";

function MenuVertical(props){

    let {selectedCategory = null,subcategory=null}=props;

    let menuItem={
        fontSize:16,
        height:40,
        lineHeight:'50px',
    }

    function handleClick(slug){
        let filters=[];

        if(slug!=='CATALOG_MAIN_PAGE')
        filters={
            "CATEGORY": {
                options:[
                    {value: slug}
                ]
            }
        };

        let action={
            type:"PAGE_SWITCH",
            payload:{
                pageType:"CATALOG",
                filters
            }
        }

        console.log(action);
    }
    let categories;
    if(!subcategory){
        categories=menuCategories;
    }
    else{
        categories=menuCategories[subcategory].subcategories;
    }


    return(
        <Menu selectedKeys={[selectedCategory]} style={{borderWidth:0}} theme="light"
            onClick={(array)=>{handleClick(array.key)}}
              openKeys={["Categories"]}
        >
            {Object.keys(categories).map((categoryKey)=>
                <Menu.Item style={menuItem} key={categoryKey}>
                    {categories[categoryKey].text}
                </Menu.Item>
            )}
        </Menu>
    )
}

export default MenuVertical;