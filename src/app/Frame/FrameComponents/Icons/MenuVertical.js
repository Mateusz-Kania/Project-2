import React from 'react';
import {connect} from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';
import DefaultIconStyle from './DefaultIconStyle'

function MenuVertical(props){

        let {categoriesData,size}= props;

    let iconStyle=DefaultIconStyle(size);


    function handleCategoryClick(id){
              props.dispatch({type:'ITEM_CLICK',payload:{
                      className:"CATEGORY",
                      categoryID:id
                  }});
          }

        function mapCategories(category){
            return (
                <Menu.Item onClick={()=>handleCategoryClick(category.id)} key={category.id}>
                    {category.text}
                </Menu.Item>
            );
        }


        const menu = (
            <Menu>
                {categoriesData.map(mapCategories)}
            </Menu>
        );


        return  (
            <Dropdown placement="bottomRight" overlay={menu} trigger={['click']}>
            <Icon style={iconStyle} type="menu" />
            </Dropdown>
            );

}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(MenuVertical);