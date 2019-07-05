import React from 'react';
import {connect} from 'react-redux';
import {Dropdown, Menu} from 'antd';
import {Row, Col} from 'antd';

function MenuHorizontal(props) {

        const [hover, setHover] = React.useState(-1);

        let {categoryData} = props;

        let colSpan = 24/categoryData.length;

        let style={
            color:'white',
            textAlign:'center',
            fontSize:'25px',
        };

        let styleHovered={
            backgroundColor:'#1890ff',
            cursor:"pointer"
        };

        let styleNotHovered={
            cursor:"pointer"
        };



        function handleCategoryClick(id){

            props.dispatch({type:'ITEM_CLICK',payload:{
                className:"CATEGORY",
                categoryID:id
            }});

        }


    function mapCategories(category){
            return(
                <Col span={colSpan} key={category.id}>
                    <Dropdown overlay={
                        <Menu>
                            {
                                category.subcategories.map(mapSubcategories)}
                        </Menu>
                    } trigger={['hover']}>
                        <div
                            onClick={(event)=>handleCategoryClick(category.id)}
                            onMouseEnter={(event)=>setHover(category.id)}
                            style={hover===category.id ? styleHovered : styleNotHovered}
                            key={category.id}
                        >{category.text}</div>
                    </Dropdown>
                </Col>
            );
        }

        function mapSubcategories(subcategory){
            return (
                <Menu.Item
                    onClick={(event)=>handleCategoryClick(subcategory.id)}
                    key={subcategory.id}>
                    {subcategory.text}
                </Menu.Item>
            );
        }


        return  (
            <Row type="flex" justify="space-around" style={style}
                 onMouseLeave={(event)=>setHover(-1)}
            >
                {categoryData.map(mapCategories)}
            </Row>
        );
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(MenuHorizontal);