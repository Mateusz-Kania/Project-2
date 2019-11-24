export default{
    productsFoundInfo:{
      totalFound:159,
      categoriesFound: {
          "kategoria-1":100,
          "kategoria-11":20,
          "kategoria-12":60,
          "kategoria-121":20,
          "kategoria-122":20,
          "kategoria-123":20,
          "kategoria-13":20,
          "kategoria-2":40,
          "kategoria-21":20,
          "kategoria-22":20,
          "kategoria-221":20,
          "kategoria-3":19,
        }
    },
    currentLoadedInfo:{
      loadedStart:0,
      loadedCount:12,
    },

    products:[
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
        },
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
        },
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
        },
        {
            slug:'product-10',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        },
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
        },
        {
            slug:'product-12',
            image:require('../img3.jpeg'),
            name:'Produkt 6',
            description:'Jakiś krótki opis produktu 6',
            price:79.99,
            altText:'tutaj alt',
        },
    ],
}