import React from 'react'
import {connect} from "react-redux";
import {Button, Checkbox, Col, DatePicker, Icon, Input, Row, Select} from "antd";
import userData from '../../Data/ExampleData/UserData'
import moment from 'moment'
import colorsData from '../../Data/Static/ColorsData'

function UserData(props){
    let {displaySize}=props;

    let [formUserData,setFormUserData]=React.useState({...(userData.personalData)})

    let [pageWidth,setPageWidth]=React.useState(window.screen.width);

    let handleFormChange=(slug,value)=>{
        setFormUserData((current)=>(
            {
                ...current,
                [slug]:value
            }
        ))
    }

    let getScale=()=>{
        if(window.screen.width<400){
            return(window.screen.width/400)
        }
        else{
            return(1);
        }
    }

    let [scale,setScale]=React.useState(getScale());

    React.useEffect(()=>{
        let handleResize=()=>{
            setPageWidth(window.screen.width);
            setScale(getScale());
        }
        window.addEventListener("resize",handleResize);
        return(()=>{
            window.removeEventListener("resize",handleResize);
        })

    },[])


    let container={
        maxWidth:960,
        margin:displayHorizontal ? '30px auto' : null,
    }

    let displayHorizontal=displaySize==="desktop"||displaySize==="tablet";

    let colContainer={
        position:'relative',
        height:40*scale,
        width:350*scale,
        marginLeft:displayHorizontal ? null : 'auto',
        marginRight:displayHorizontal ? null : 'auto',
        marginBottom:15*scale,
    }

    let colHeight=40*scale;

    let colNameStyle={
        float:'left',
        textAlign:'right',
        fontSize:16*scale,
        paddingRight:10*scale,
        width:150*scale,
        lineHeight:`${colHeight}px`,
    }

    let colInputStyle={
        float:'left',
        width:200*scale,
        lineHeight:`${colHeight}px`,
    }

    let inputWidth=200*scale;
    let iconWidth=35*scale;

    let iconStyle={
        lineHeight:`${colHeight}px`,
        fontSize:25*scale,
        marginLeft:5*scale,
        marginRight:5*scale,
        cursor:'pointer'
    }

    let header={
        fontSize:24*scale,
        marginBottom:20*scale,
    }

    let accountDataFormArray=[
        {
            name:'Email',
            value:userData.accountData.email.email,
            blocked:true,
            changeIcon:true,
        },
        {
            name:'Hasło',
            blocked:true,
            changeIcon:true,
        },
    ]

    let personalDataFormArray=[
        {
            name:'Imię',
            slug:'firstName',
        },
        {
            name:'Nazwisko',
            slug:'lastName',
        },
        {
            name:'Data urodzenia',
            slug:'dateOfBirth',
            date:true,
        },
        {
            name:'Płeć',
            slug:'gender',
            select:true,
            options:[
                {
                    name:'mężczyzna',
                    value:'male'
                },
                {
                    name:'kobieta',
                    value:'female',
                }
            ],
        },
    ]

    let shipmentDataFormArray=[
        {
            name:'Numer telefonu',
            slug:'phoneNumber',
        },
        {
            name:'Ulica',
            slug:'street',
        },
        {
            name:'Nr domu',
            slug:'houseNumber',
        },
        {
            name:'Miasto',
            slug:'city',
        },
        {
            name:'Kod pocztowy',
            slug:'postCode',
        }

    ]

    let subscribeObject={
        slug:'subscribe',
        htmlData:`
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
            Jakis losowy tekst o sybskrypcji.
    `
    }




        let sectionContainer={
        marginBottom:15*scale,
    }

    let dateFormat='YYYY/MM/DD'

    let inputColSpan=displayHorizontal ? 12 : 24;

    let mapFormObjectToInputCol=(formObject,index)=>{
        let value=(formObject.slug&&formUserData[formObject.slug])||formObject.value||"";
        let inputStyle={
            height: 32 * scale,
            width: formObject.changeIcon ? inputWidth - iconWidth : inputWidth
        }
        return(
            <Col key={index} span={inputColSpan}>
                <div style={colContainer}>
                    <div style={colNameStyle}>
                        {formObject.name}:
                    </div>
                    <div style={colInputStyle}>
                        <div style={{float:'left',marginTop:(colHeight-32)*scale/2,lineHeight:`${32*scale}px`}}>
                            {   formObject.select ?
                                <Select value={value}
                                        style={inputStyle}
                                onChange={(value)=>{handleFormChange((formObject.slug),value)}}
                                >
                                    {formObject.options.map((option,index)=>(
                                     <Select.Option value={option.value} key={index}>
                                         {option.name}
                                     </Select.Option>
                                    ))}
                                </Select>
                                : formObject.date ?
                                    <DatePicker
                                        style={inputStyle}
                                        onChange={(moment,string)=>{handleFormChange(formObject.slug,string)}}
                                        value={moment(value, dateFormat)} format={dateFormat} />
                                :
                                <Input
                                    onChange={(e)=>{handleFormChange(formObject.slug,e.target.value)}}
                                    style={inputStyle} disabled={formObject.blocked} value={value}/>
                            }
                        </div>
                        {formObject.changeIcon ?
                            <span style={iconStyle}>
                            <Icon type="edit" />
                            </span>
                        :""}
                    </div>
                </div>
            </Col>
        )
    };

    let subscribedCheckboxSize=25;
    let subscribeMaxWidth=640>pageWidth-80?pageWidth-80:640;
    let subscribedMargin=10;
    let subscribeContainer={
        padding:subscribedMargin,
        position:'relative',
        width:subscribeMaxWidth,
        backgroundColor:'#e6f7ff',
        borderColor:'#e6f7ff',
        borderRadius:5,
        margin:displayHorizontal?null : 'auto',
    }
    let subscribeTextDiv={
        width:subscribeMaxWidth-subscribedCheckboxSize-subscribedMargin*2,
    }
    let subscribeCheckboxDiv={
        width:subscribedCheckboxSize,
        height:subscribedCheckboxSize,
        float:'right'
    }
    let subscribeCheckboxDiv2={
        position:'absolute',
        height:subscribedCheckboxSize,
        bottom:0,
        top:0,
        margin:'auto'

    }


    let mapFormObjectToSubscForm=(formObject)=>{
        let value=(formObject.slug&&formUserData[formObject.slug])||formObject.value||"";
        return(
            <div style={subscribeContainer}>
                <div style={subscribeTextDiv} dangerouslySetInnerHTML={{__html:formObject.htmlData}}/>
                <div style={subscribeCheckboxDiv}>
                    <div style={subscribeCheckboxDiv2}>

                        <Checkbox style={{marginLeft:(subscribedCheckboxSize-16)/2}} checked={value} onChange={(e)=>{handleFormChange(formObject.slug,e.target.checked)}} />
                    </div>
                </div>
            </div>
        )



    };

    let buttonDiv={
        margin:20,
        textAlign:'right'
    }

    let handleSave=()=>{
        console.log(formUserData);
    }

    return(
        <div style={container}>
            <div style={sectionContainer}>
            <div style={header}>
                Dane Konta
            </div>
            <Row>
                {accountDataFormArray.map(mapFormObjectToInputCol)}
            </Row>
            </div>
            <div style={sectionContainer}>
            <div style={header}>
                Dane Użytkownika
            </div>
            <Row>
                {personalDataFormArray.map(mapFormObjectToInputCol)}
            </Row>
        </div>
            <div style={sectionContainer}>
                <div style={header}>
                    Dane Wysyłki
                </div>
                <Row>
                    {shipmentDataFormArray.map(mapFormObjectToInputCol)}
                </Row>
            </div>
            {mapFormObjectToSubscForm(subscribeObject)}
            <div style={buttonDiv}>
                <Button onClick={handleSave} size="large" type="primary">Zapisz</Button>
            </div>
        </div>
    )
}

let mapStateToProps=(state)=>(
    {
        displaySize:state.displaySize
    }
)

export default connect(mapStateToProps)(UserData)