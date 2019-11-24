export function odmianaOpinii(liczba){
    return standardowaOdmiana(liczba,"opinia","opinie","opinii");
}

export function odmianaSztuk(liczba){
    return standardowaOdmiana(liczba,"sztuka","sztuki","sztuk");
}

export function odmianaZnajduje(liczba){
    return standardowaOdmiana(liczba,"znajduje","znajdują","znajduje");
}

function standardowaOdmiana(liczba,lPojMianownik,lMnMianownik,lMnDopelniacz){

    if(liczba===1){
        return lPojMianownik;
    }

    if(liczba%10>1&&liczba%10<5&&Math.floor(liczba/10)%10!==1){
        return lMnMianownik;
    }

    return lMnDopelniacz;

}