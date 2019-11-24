export default{
    name:"Kategoria122",
    slug:"kategoria-122",
    description:"Jakis krotki opis kategorii1. Jakis krotki opis kategorii1.Jakis krotki opis kategorii1.Jakis krotkategorii1.Jakis krotki opis kategorii1.Jakis krotki opis kategorii1.",
    filters:{
        "CATEGORY":
            {
                hidden:true
            },
        "SEARCH_VALUE":
            {
                hiddenFilter:true,
                name:"Wyszukiwano",
            },
        "kolor":{
            name:"Kolor",
            options:[
                {
                    value:"czarny"
                },
                {
                    value:"biały"
                },
                {
                    value:"niebieski"
                },
                {
                    value:"czerwony"
                },
                {
                    input:true,
                    type:'value',//or value
                },
            ]
        },
        "cena":{
            name:"Cena",
            options:[
                {
                  maxValue:200
                },
                {
                    minValue:200,
                    maxValue:400
                },
                {
                    minValue:400,
                },
                {
                    input:true,
                    type:'range',
                },

            ],
            input: {

                type: 'range',

            },
            unit:"zł",
        },
        "dlugosc":{
            name:"Długość",
            options:[
                {
                    input:true,
                    type:'range',//or value
                },
                {
                    maxValue:2
                },
                {
                    minValue:2,
                    maxValue:3
                },
                {
                    minValue:3,
                },

            ],
            unit:"m",
        },
        "wysokosc":{
            name:"Wysokość",
            options:[
                {
                    input:true,
                    type:'range',
                },
                {
                    maxValue:1
                },
                {
                    minValue:1,
                    maxValue:2
                },
                {
                    minValue:2,
                },

            ],
            unit:"m",
        }
    },
}