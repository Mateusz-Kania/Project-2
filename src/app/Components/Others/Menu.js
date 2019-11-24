import React from 'react';
import {Menu} from 'antd';
import colorsData from '../../Data/Static/ColorsData'


function MenuComponent(props){

    let {menuItems,itemClickedCallback,selectedItem,center} = props;



    function mapMenuItem(menuItem){
        return(
            <Menu.Item key={menuItem.key}>
                {menuItem.name}
            </Menu.Item>
        );
    }

    let menuStyle={
        borderBottomWidth:0,
    };

    if(center){
        menuStyle={
            ...menuStyle,
            marginLeft:'auto',
            marginRight:'auto',
            width:'fit-content',
        }
    }else{
        menuStyle={
            ...menuStyle,
            marginLeft:0,
            marginRight:'auto',
            width:'fit-content',
        }
    }

    let containerStyle={
        width:'100%,',
        backgroundColor:colorsData.backgroundLight,
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        borderBottomColor:colorsData.borderLight,
    };



    return(
        <div style={containerStyle}>
        <Menu
            style={menuStyle}
            mode="horizontal" selectedKeys={[selectedItem]} onClick={(item)=>{itemClickedCallback(item.key)}}>
            {menuItems.map(mapMenuItem)}
        </Menu>
        </div>

    );

}



export default MenuComponent;