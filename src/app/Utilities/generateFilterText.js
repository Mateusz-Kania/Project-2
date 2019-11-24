
export function generateTextForNameAndAllOptions(filter){

    let text = `${filter.name}: `;


    filter.options.map((option,index)=> {

            if(index){
                if(filter.options.length-1===index) {
                    text = text + ` lub `;
                }
                else{
                    text = text + `, `;

                }
            }

        text=text+generateTextForOption(option,filter.unit);

        }
    );
    return text;
}

export function generateTextForOption(option,unit){
    let text=``;

    if(option.name) {
        text = text + `${option.name}`;
    }
    else if (option.value) {
        text = text + `${option.value}`;
    } else {
        if (option.minValue) {
            if (option.maxValue) {
                text = text + `${option.minValue}-${option.maxValue}`;
            } else {
                text = text + `>${option.minValue}`;

            }
        } else if (option.maxValue) {
            text = text + `<${option.maxValue}`;

        }
    }

    if (unit) {
        text = text + `${unit}`;
    }
    return text;

}