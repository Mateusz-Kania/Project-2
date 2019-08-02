export default [
    {
        id:1,
        image: require('./img1.jpeg') ,
        h1:"Strona 1",
        text:"Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.",
        page: "PROMO_PAGE_1",
        //todo products - wyciagniecie info produktu o danym id z db

        products:[
            {
                slug:'product-1',
                image:require('./img1.jpeg'),
                price:'29.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-2',
                image:require('./img2.jpeg'),
                price:'49.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-3',
                image:require('./img3.jpeg'),
                price:'79.99zł',
                altText:'tutaj alt',
            },
        ]

    },

    {
        id:2,
        image: require('./img2.jpeg'),
        h1:"Strona 2",
        text:"Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.",
        page: "PROMO_PAGE_2",
        products:[
            {
                slug:'product-1',
                image:require('./img1.jpeg'),
                price:'29.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-2',
                image:require('./img2.jpeg'),
                price:'49.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-3',
                image:require('./img3.jpeg'),
                price:'79.99zł',
                altText:'tutaj alt',
            }
        ]

    },
    {
        id:3,
        image:require('./img3.jpeg'),
        h1:"Strona 3",
        text:"Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.Jakis losowy tekst.",
        page: "PROMO_PAGE_3",
        products:[
            {
                slug:'product-1',
                image:require('./img1.jpeg'),
                price:'29.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-2',
                image:require('./img2.jpeg'),
                price:'49.99zł',
                altText:'tutaj alt',
            },
            {
                slug:'product-3',
                image:require('./img3.jpeg'),
                price:'79.99zł',
                altText:'tutaj alt',
            }
        ]

    },
];