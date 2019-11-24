export default{

    recommendedProducts:[
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
                    default:true,
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

        },
        {
            slug:'product-2',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img2.jpeg'),
            name:'Produkt 2',
            description:'Jakiś krótki opis produktu 2',
            price:49.99,
            altText:'tutaj alt',
            versions:[
                {
                    default:true,
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
        },
        {
            slug:'product-3',
            rating:{
                rate:2.8,
                opinions:19,
            },
            image:require('../img3.jpeg'),
            name:'Produkt 3',
            description:'Jakiś krótki opis produktu 3',
            price:79.99,
            altText:'tutaj alt',
        },
        {
            slug:'product-4',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img1.jpeg'),
            name:'Produkt 4',
            description:'Jakiś krótki opis produktu 4',
            price:29.99,
            altText:'tutaj alt',
        },
        {
            slug:'product-5',
            rating:{
                rate:4.6,
                opinions:11,
            },
            image:require('../img2.jpeg'),
            name:'Produkt 5',
            description:'Jakiś krótki opis produktu 5',
            price:49.99,
            altText:'tutaj alt',
        },
        {
            slug:'product-6',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        },
    ],
    recommendedCategories:[
        {
            text:'Kategoria 1',
            slug:'kategoria-1'
        },
        {
            text:'Kategoria 2',
            slug:'kategoria-2'
        },
        {
            text:'Kategoria 3',
            slug:'kategoria-3'
        },

    ],
}