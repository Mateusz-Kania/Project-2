export function odmianaOpinii(liczba){
    if(liczba===1){
        return "opinia";
    }

    if(liczba%10>1&&liczba%10<5&&Math.floor(liczba/10)%10!==1){
        return "opinie"
    }

    return "opinii";

}

export function odmianaSztuk(liczba){
    if(liczba===1){
        return "sztuka";
    }

    if(liczba%10>1&&liczba%10<5&&Math.floor(liczba/10)%10!==1){
        return "sztuki"
    }

    return "sztuk";

}