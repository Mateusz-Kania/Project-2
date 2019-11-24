export default
{
    slug:'product-1',
    price:29.99,
    oldPrice:39.99,
    observed:false,
    name:'Produkt Jeden',
    company:{
      name:'Firma 123',
      slug:'firma-123'
    },
    variants: {
        "rozmiar": {
            name: 'Rozmiar',
            options: [
                {
                    name: 'S',
                    slug: 's',
                },
                {
                    name: 'M',
                    slug: 'm',
                },
                {
                    name: 'L',
                    slug: 'l',
                },
                {
                    name: 'XL',
                    slug: 'xl',
                },
            ]
        }
    },
    versions:[
        {
            name:'Niebieski',
            image:require('../img1.jpeg'),
            productSlug:'product-1',
        },
        {
            name:'Czarny',
            image:require('../img2.jpeg'),
            productSlug:'product-1-czarny',
        },
        {
            name:'Biały',
            image:require('../img3.jpeg'),
            productSlug:'product-1-biały',
        }


    ],
    description:`
    Taki sobie produkt<strong>123</strong></br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt</br>
    Taki sobie produkt
    `,
    parameters:[
        {
            name:"Dane Podstawowe",
            items:[{
                name:"Gwarancja",
                value:"2 lata",
            }],
        },
        {
            name:"Parametry techniczne",
            items:[{
                name:"Kolor",
                value:"Czarny",
            }, {
                name: "Materiał",
                value: "Drewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, PlastikDrewno, Plastik"
            },{
                name:'Szerokość',
                value:'1,40m'
            }
            ],
        }
    ],
    rating:{
      rate:3.6,
      opinions:11,
    },
    comments:[
        {
            user:{
                name:"User One",
            },
            rate:5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Two",
                hidden:true
            },
            rate:4.5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Three",
            },
            rate:4,
            date:'2019-01-02',
        },
        {
            user:{
                name:"User One",
            },
            rate:5,
            date:'2019-01-02',
            text:"Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!"
        },
        {
            user:{
                name:"U...o",
            },
            rate:4.5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Three",
            },
            rate:4,
            date:'2019-01-02',
        },
        {
            user:{
                name:"User One",
            },
            rate:5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Two",
                hidden:true
            },
            rate:4.5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Three",
            },
            rate:4,
            date:'2019-01-02',
        },
        {
            user:{
                name:"User One",
            },
            rate:5,
            date:'2019-01-02',
            text:"Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!Very nice item!"
        },
        {
            user:{
                name:"U...o",
            },
            rate:4.5,
            date:'2019-01-02',
            text:"Very nice item!"
        },
        {
            user:{
                name:"User Three",
            },
            rate:4,
            date:'2019-01-02',
        },

    ],
    images:[
        {
            image:require('../img1.jpeg'),
            altText:'Image 1',
        },
        {
            image:require('../img2.jpeg'),
            altText:'Image 2',
        },
        {
            image:require('../img3.jpeg'),
            altText:'Image 3',
        }
    ],
}
