import React from 'react'
import {connect} from 'react-redux'
import {Button, Menu} from "antd";


function UserPreview(props){



    let menuItems= [
        {
            action:1,
            key:"data",
            text:"Dane",
        },
        {
            action:1,
            key:"observed",
            text:"Obserwowane",
        },
        {
            action:1,
            key:"history",
            text:"Historia Zamówień",
        }
    ];

    let menuItemStyle={
        fontSize:16,
        height:40,
        lineHeight:'50px',
    }

    function handleClick(val){
        console.log(val);

    }

    let buttonStyle={
        margin:5,
        marginTop:10,
    }

    return(
        <span>
        <Menu selectedKeys={[]} style={{borderWidth:0}} theme="light"
        >
            {menuItems.map((menuItem)=>
                <Menu.Item style={menuItemStyle} key={menuItem.key} onClick={()=>{handleClick(menuItem.action)}}>
                    {menuItem.text}
                </Menu.Item>
            )}
        </Menu>
            <Button style={buttonStyle} type="danger" block={true} onClick={()=>{handleClick("2")}}>Wyloguj</Button>
        </span>
    )

}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(UserPreview);