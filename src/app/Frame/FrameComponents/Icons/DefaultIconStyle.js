export default function(size) {

    if(size === "big"){
        return {
            fontSize: '70px',
            marginLeft: '5px',
            marginRight: '5px'
        }
    }
    else if (size === "medium") {
        return {
            fontSize: '40px',
            marginLeft: '5px',
            marginRight: '5px'
        }
    }
    else {
        return {
            fontSize: '30px',
            marginLeft: '1px',
            marginRight: '1px'
        }
    }
}