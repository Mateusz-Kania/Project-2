export default{
    activeFilters: {
        "CATEGORY":
            {
                options:[{
                    value: "kategoria-122"
                }],
            },
        "SEARCH_VALUE":
            {
                options:[
                    {
                        value: "Produkt123",
                    }
                ],
            },
        "kolor":
            {
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
                options:[{
                    minValue: 650,
                }],
            },
        "dlugosc":
            {
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
                options:[{
                    minValue: 1,
                    maxValue: 2,
                }],
            },


    },
    sort:'domyslnie',
    observed:false
}