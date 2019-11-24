import React from 'react'
import MenuButtonContent from "./MenuButtonContent";
import {Icon} from "antd";
import SearchFront from "./SearchFront";
import MenuVertical from "./MenuVertical";
import CatalogIntro from "./CatalogIntro";
import UserPreview from "./UserPreview";

function IconCollection(props){

    let {icons,iconsStyle,iconColors,position}=props;


    let [menuButtonClicked,setMenuButtonClicked]=React.useState(-1);

    function getComponents(type,data){
        switch(type) {
            case 'SEARCH':
                return{
                    icon:<Icon style={iconsStyle} type="search" />,
                    component:<SearchFront text={data.searchText} header={data.searchTextCategory}/>
                }
            case 'SHOPPING':
                return{
                    icon:<Icon style={iconsStyle} type="shopping" />,
                    component:<span>Shopping</span>
                }
            case 'USER':
                return{
                    icon:<Icon style={iconsStyle} type="user" />,
                    component:<UserPreview/>
                }
            case 'MENU':
                return{
                    icon:<Icon style={iconsStyle} type="menu" />,
                    component:<MenuVertical subcategory={data.subcategory||null} selectedCategory={data.selectedCategory||null} />
                }
            case 'MENU_TEXT':
                return {
                    icon:<div style={iconsStyle}>{data.text}<Icon type="down" /></div>,
                    component:<MenuVertical subcategory={data.subcategory||null} selectedCategory={data.selectedCategory||null} />
                }
            case 'CATALOG_INTRO':
                return {
                    icon:<Icon style={iconsStyle} type="menu" />,
                    component:<CatalogIntro />
                }
            default:
                return "";
        }
    }

    function renderIcon(type,data,index,handleClick){
        let components=getComponents(type,data);

        if(handleClick===undefined){
            handleClick=function(){
            };
        }

        return(
        <MenuButtonContent
            clicked={menuButtonClicked===index}
            onClick={()=>{setMenuButtonClicked(index);handleClick()}}
            onClose={()=>{setMenuButtonClicked(-1)}}
            iconColors={iconColors}
            Icon={components.icon}
            position={position}
        >
            {components.component}
        </MenuButtonContent>
        )}

    return(
        <span>
            {icons.map((icon,index)=>
                <span key={index} style={{display: icon.hide ? 'none' : null}}>
                    {renderIcon(icon.type,icon.data,index,icon.onClick)}
                </span>
                )}
        </span>
    )
}

export default IconCollection;