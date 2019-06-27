import React from 'react';
import {connect} from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';

class MenuVertical extends  React.Component{

    render() {
        let {categoryData,style}= this.props;

        const menu = (
            <Menu>
                {
                    categoryData.map((category)=>(
                        <Menu.Item key={category.id}>
                            {category.text}
                        </Menu.Item>
                    ))}
            </Menu>
        );

        return  (
            <Dropdown overlay={menu} trigger={['click']}>
            <Icon style={style} type="menu" />
            </Dropdown>
            );
    }
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(MenuVertical);