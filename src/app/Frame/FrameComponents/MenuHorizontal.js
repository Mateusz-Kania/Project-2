import React from 'react';
import {connect} from 'react-redux';
import {Dropdown, Icon, Menu} from 'antd';
import {Row, Col} from 'antd';

class MenuHorizontal extends  React.Component {

    constructor(props){
        super(props);
        this.state={
            hover:-1
        };
        this.setHover=this.setHover.bind(this);
    }

    setHover(newHover){
        this.setState({hover:newHover});
    }

    render() {
        let {categoryData} = this.props;
        let {hover}=this.state;

        let colSpan = 24/categoryData.length;

        let style={
            color:'white',
            textAlign:'center',
            fontSize:'25px',
        };

        let styleHovered={
            backgroundColor:'#1890ff',
        };


        return  (
            <Row type="flex" justify="space-around" style={style}
                 onMouseLeave={(event)=>this.setHover(-1)}
            >
                {categoryData.map((category)=>(
                    <Col span={colSpan} key={category.id}>
                        <Dropdown overlay={
                            <Menu>
                                {
                                    category.subcategories.map((subcategory)=>(
                                        <Menu.Item key={subcategory.id}>
                                            {subcategory.text}
                                        </Menu.Item>
                                    ))}
                            </Menu>
                        } trigger={['hover']}>
                            <div
                                onMouseEnter={(event)=>this.setHover(category.id)}
                                style={hover===category.id ? styleHovered : {}}
                                key={category.id}
                            >{category.text}</div>
                        </Dropdown>
                    </Col>
                ))}
            </Row>
        );


    }
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(MenuHorizontal);