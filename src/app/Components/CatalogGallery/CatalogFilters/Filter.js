import React from 'react'
import {Checkbox, Input, InputNumber} from "antd";
import {generateTextForOption} from "../../../Utilities/generateFilterText"
import FiltersCollapse from "./FiltersCollapse";

const Filter=React.forwardRef((props,ref)=>{

    let {activeFilter,filter,onChange,slug}=props;





    if(activeFilter==null){
        activeFilter={
            options:[]
        }
    }

    React.useImperativeHandle(ref, () => ({
        turnOffCheckboxes,
        name:filter.name

    }));

    function turnOffCheckboxes(){
        setControlledCheckboxesArray(filter.options.map(()=>false))
    }


    let collapseStyle={
        marginBottom:10
    };

    function findInputPos(type){
        let inputPos=null;
        filter.options.map((option,index)=>{
            if(option.input){
                if(type===undefined){
                    inputPos = index;
                }
                else {
                    if (option.type === type) {
                        inputPos = index;
                    }
                }
            }
        });
        return inputPos;
    }


    function determineActiveOptions(){
        if(activeFilter){
            activeFilter.options.map((activeOption)=>{
                let found=false;
                filter.options.map((option,index)=>{
                    if(checkIfOptionsMatch(activeOption,option)){
                        initControlledCheckboxesArray[index]=true;
                        found=true;
                    }
                });
                if(!found){
                    if(!(activeOption.value==null)){
                        let foundCorrectType=false;
                        let inputPos=findInputPos("value");
                        if(!(inputPos==null)){
                            initControlledInputCheckbox[inputPos].value=activeOption.value;
                            initControlledCheckboxesArray[inputPos]=true;
                            foundCorrectType=true
                        }
                        if(!foundCorrectType){
                            inputPos=findInputPos("range");
                            if(!(inputPos==null)){
                                initControlledInputCheckbox[inputPos].minValue=activeOption.value;
                                initControlledInputCheckbox[inputPos].maxValue=activeOption.value;
                                initControlledCheckboxesArray[inputPos]=true;
                            }

                        }
                    }
                    else {
                        let inputPos=findInputPos("range");
                        if(!(inputPos==null)){
                            if(activeOption.minValue||activeOption.minValue===0) {
                                initControlledInputCheckbox[inputPos].minValue=activeOption.minValue;
                                initControlledCheckboxesArray[inputPos]=true;
                            }
                            if(activeOption.maxValue||activeOption.maxValue===0){
                                initControlledInputCheckbox[inputPos].maxValue=activeOption.maxValue;
                                initControlledCheckboxesArray[inputPos]=true;
                            }
                        }


                    }
                }
            })
        }
    }



    let initControlledCheckboxesArray=filter.options.map(()=>false);
    let initControlledInputCheckbox=filter.options.map(()=>{return{}});
    determineActiveOptions();

    let [controlledCheckboxesArray,setControlledCheckboxesArray]=React.useState(initControlledCheckboxesArray);
    let [controlledInputCheckbox,setControlledInputCheckbox]=React.useState(initControlledInputCheckbox);


    let [prevInputCheckbox,setPrevInputCheckbox]=React.useState(initControlledInputCheckbox);
    function checkIfUsedInputCheckboxChange(){
        for(let i=0;i<prevInputCheckbox.length;i++){
            if(prevInputCheckbox[i]!==controlledInputCheckbox[i]){
                setPrevInputCheckbox([...controlledInputCheckbox]);
                if(controlledCheckboxesArray[i]) {
                    return true;
                }
            }
        }
        return false;
    }


    React.useEffect(()=>{
            onChangeHandler();
    },[controlledCheckboxesArray])


    React.useEffect(()=>{
        if(checkIfUsedInputCheckboxChange()) {
            onChangeHandler();
        }
    },[controlledInputCheckbox]);

    function onCheckboxesChange(index){
        let updatedControlledCheckboxerArray=[...controlledCheckboxesArray];
        updatedControlledCheckboxerArray[index]=!updatedControlledCheckboxerArray[index];
        setControlledCheckboxesArray(updatedControlledCheckboxerArray);

    }

    function onInputChange(index,key,value){
        let modifiedIndex={...controlledInputCheckbox[index]};
        modifiedIndex[key]=value;

        let newControlledInputCheckbox=[...controlledInputCheckbox];
        newControlledInputCheckbox[index]=modifiedIndex;


        setControlledInputCheckbox(newControlledInputCheckbox);

    }

    function onChangeHandler(){
        onChange(slug,controlledCheckboxesArray.map((selected,index)=>{
            if(selected){
                if(!(filter.options[index])||filter.options[index].input){
                    if(controlledInputCheckbox[index].value!=null||controlledInputCheckbox[index].minValue!=null||controlledInputCheckbox[index].maxValue!=null) {

                        let tempArrayCopy= {...controlledInputCheckbox[index]};

                        if(tempArrayCopy.minValue!=null&&tempArrayCopy.minValue===tempArrayCopy.maxValue){
                            tempArrayCopy.value=tempArrayCopy.minValue;
                            delete tempArrayCopy.minValue;
                            delete tempArrayCopy.maxValue;
                        }
                        return tempArrayCopy;
                    }
                }
                else{
                    return filter.options[index]
                }
            }
            return null;
        }).filter((el)=>{
            return el != null;
        }));
    }

    let optionStyle={
        padding:"2px 0px 3px"
    };

    let inputSize="small";

    function mapCheckbox(option,index){


        if(option.input){

            return(
                <div style={optionStyle} key={index}>
                    <Checkbox checked={controlledCheckboxesArray[index]} onChange={()=>{onCheckboxesChange(index)}}>
                        {option.type==="range"?
                            <span>
                                <Input style={{width:'30%'}} type="number" value={controlledInputCheckbox[index].minValue} onChange={(e)=>{onInputChange(index,"minValue",Number(e.target.value))}} size={inputSize}/>
                                -<Input style={{width:'30%'}} type="number" value={controlledInputCheckbox[index].maxValue} onChange={(e)=>{onInputChange(index,"maxValue",Number(e.target.value))}} size={inputSize}/>
                                {filter.unit||""}
                            </span>
                            :
                            <Input style={{width:'80%'}} value={controlledInputCheckbox[index].value} onChange={(e)=>{onInputChange(index,"value",e.target.value)}} size={inputSize}/>

                        }
                    </Checkbox>
                </div>
            );


        }
        return(
            <div style={optionStyle} key={index}>
        <Checkbox checked={controlledCheckboxesArray[index]} onChange={()=>{onCheckboxesChange(index)}}>
            {generateTextForOption(option,filter.unit)}
        </Checkbox>
            </div>
        );
    }




    return (
        <FiltersCollapse contentHeight={150} style={collapseStyle} title={filter.name}>
            {
                filter.options.map(mapCheckbox)
            }
        </FiltersCollapse>
    )
});


function checkIfOptionsMatch(option1,option2){
    return ((option1.value===option2.value)&&(option1.minValue===option2.minValue)&&(option1.maxValue===option2.maxValue))
}

export default Filter