export default function(action){

    if(action.payload.className==="SEARCH"){

        alert(`Naciśnięto: ${action.payload.className}. Wartość szukaj: ${action.payload.searchValue}`)
    }
    else if(action.payload.className==="CATEGORY"){

        alert(`Naciśnięto: ${action.payload.className}. ID kategorii: ${action.payload.categoryID}`)
    }
    else if(action.payload.className==="PAGE"){

        alert(`Naciśnięto: ${action.payload.className}. Nazwa podstrony: ${action.payload.pageName}`)
    }
    else if(action.payload.className==="CHANGING_TEXT"){

        alert(`Naciśnięto: ${action.payload.className}. ID promocji: ${action.payload.idValue}`)
    }
    else{
        alert(`Naciśnięto: ${action.payload.className}`);
    }
}