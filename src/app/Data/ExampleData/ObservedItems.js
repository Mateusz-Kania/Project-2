export default{
    productsFoundInfo:{
        totalFound:15
    },
    currentLoadedInfo:{
        loadedStart:0,
        loadedCount:15,
    },

    products:[
        {
        id:0,
        type:'product',
        item:
        {
            slug:'product-1',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img1.jpeg'),
            name:'Produkt 1',
            description:'Jakiś krótki opis produktu 1',
            price:29.99,
            oldPrice:39.99,
            altText:'tutaj alt',
            versions:[
                {
                    color:'#ff0000',
                },
                {
                    name:'Czarny',
                    image:require('../img2.jpeg'),
                    productSlug:'product-1-czarny',
                    color:'#ff0000',
                },
                {
                    name:'Biały',
                    image:require('../img3.jpeg'),
                    productSlug:'product-1-biały',
                    color:'#ff0000',
                    secondaryColor:'#0000ff'
                }
            ]

        }},
        {
            id:1,
            type:'product',
            item:
        {
            slug:'product-2',
            rating:{
                rate:4.6,
                opinions:11,
            },
            defaultSelected:1,
            image:require('../img2.jpeg'),
            name:'Produkt 2',
            description:'Jakiś krótki opis produktu 2',
            price:49.99,
            altText:'tutaj alt',
            versions:[
                {
                    color:'#ff0000',
                },
                {
                    name:'Czarny',
                    image:require('../img2.jpeg'),
                    productSlug:'product-1-czarny',
                    color:'#ff0000',
                    secondaryColor:'#0000ff'
                },
                {
                    name:'Biały',
                    image:require('../img3.jpeg'),
                    productSlug:'product-1-biały',
                    color:'#ff0000',
                }
            ]
        }},
        {
            id:2,
            type:'search',
            item:
        {
            queryFilters: {
                "CATEGORY":
                    {
                        name:"Kategoria",
                        options:[{
                            name: "Kategoria 122",
                            value: "kategoria-122"
                        }],
                    },
                "SEARCH_VALUE":
                    {
                        name:"Wyszukiwanno",
                        options:[
                            {
                                value: "Produkt123",
                            }
                        ],
                    },
                "kolor":
                    {
                        name:"Kolor",
                        options:[{
                            value: "czarny",
                        },
                            {
                                value: 'biały',
                            },
                            {
                                value: 'niebieski',
                            }
                        ],
                    },
                "cena":
                    {
                        name:"Cena",
                        options:[{
                            minValue: 650,
                        }],
                    },
                "dlugosc":
                    {
                        name:"Długość",
                        options:
                            [
                                {
                                    maxValue: 2,
                                },
                                {
                                    value: 2.5
                                }
                            ],
                    },
                "wysokosc":
                    {
                        name:"Wysokość",
                        options:[{
                            minValue: 1,
                            maxValue: 2,
                        }],
                    },


            },
            sort:'domyslnie',
        }},
        {
            id:3,
            type:'category',
            item:
        {
            name:"Kategoria122",
            slug:"kategoria-122",
            description:"Jakis krotki opis kategorii1. Jakis krotki opis kategorii1.Jakis krotki opis kategorii1.Jakis krotkategorii1.Jakis krotki opis kategorii1.Jakis krotki opis kategorii1.",
        }},
        {
            id:4,
            type:'search',
            item:
                {
                    queryFilters: {
                        "kolor":
                            {
                                name:"Kolor",
                                options:[{
                                    value: "czarny",
                                },
                                    {
                                        value: 'biały',
                                    },
                                    {
                                        value: 'niebieski',
                                    }
                                ],
                            },
                        "cena":
                            {
                                name:"Cena",
                                options:[{
                                    minValue: 650,
                                }],
                            },
                        "dlugosc":
                            {
                                name:"Długość",
                                options:
                                    [
                                        {
                                            maxValue: 2,
                                        },
                                        {
                                            value: 2.5
                                        }
                                    ],
                            },
                        "wysokosc":
                            {
                                name:"Wysokość",
                                options:[{
                                    minValue: 1,
                                    maxValue: 2,
                                }],
                            },


                    },
                    sort:'domyslnie',
        }},
        {
            id:5,
            type:'search',
            item:
                {
                    queryFilters: {
                        "CATEGORY":
                            {
                                name:"Kategoria",
                                options:[{
                                    name: "Kategoria 122",
                                    value: "kategoria-122"
                                }],
                            },
                        "kolor":
                            {
                                name:"Kolor",
                                options:[{
                                    value: "czarny",
                                },
                                    {
                                        value: 'biały',
                                    },
                                    {
                                        value: 'niebieski',
                                    }
                                ],
                            },
                        "cena":
                            {
                                name:"Cena",
                                options:[{
                                    minValue: 650,
                                }],
                            },
                        "dlugosc":
                            {
                                name:"Długość",
                                options:
                                    [
                                        {
                                            maxValue: 2,
                                        },
                                        {
                                            value: 2.5
                                        }
                                    ],
                            },
                        "wysokosc":
                            {
                                name:"Wysokość",
                                options:[{
                                    minValue: 1,
                                    maxValue: 2,
                                }],
                            },


                    },
                    sort:'domyslnie',
        }},
        {
            id:6,
            type:'product',
            item:
        {
            slug:'product-7',
            rating:{
                rate:2.8,
                opinions:19,
            },
            image:require('../img3.jpeg'),
            name:'Produkt 3',
            description:'Jakiś krótki opis produktu 3',
            price:79.99,
            altText:'tutaj alt',
        }},
        {
            id:7,
            type:'product',
            item:
        {
            slug:'product-8',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img1.jpeg'),
            name:'Produkt 4',
            description:'Jakiś krótki opis produktu 4',
            price:29.99,
            altText:'tutaj alt',
        }},
        {
            id:8,
            type:'product',
            item:
        {
            slug:'product-9',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img2.jpeg'),
            name:'Produkt 5',
            description:'Jakiś krótki opis produktu 5',
            price:49.99,
            altText:'tutaj alt',
        }},
        {
            id:9,
            type:'product',
            item:
        {
            slug:'product-10',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        }},
        {
            id:10,
            type:'product',
            item:
        {
            slug:'product-11',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img2.jpeg'),
            name:'Produkt 5',
            description:'Jakiś krótki opis produktu 5',
            price:49.99,
            altText:'tutaj alt',
        }},
        {
            id:11,
            type:'product',
            item:
        {
            slug:'product-12',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        }},
        {
            id:12,
            type:'product',
            item:
        {
            slug:'product-13',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        }},
        {
            id:13,
            type:'product',
            item:
        {
            slug:'product-14',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img2.jpeg'),
            name:'Produkt 5',
            description:'Jakiś krótki opis produktu 5',
            price:49.99,
            altText:'tutaj alt',
        }},
        {
            id:14,
            type:'product',
            item:
        {
            slug:'product-15',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        }},
    ],
}