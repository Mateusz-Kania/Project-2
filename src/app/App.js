import React from 'react';
import Frame from "./Frame/Frame";
import AppProvider from './Store/AppProvider';
import LandingPage from './Pages/LandingPage/LandingPage'
import ProductPage from './Pages/Product/ProductPage'
import CatalogPage from "./Pages/Catalog/CatalogPage";





function App(props) {




    return (
        <AppProvider>
        <Frame>
            <CatalogPage/>
        </Frame>
        </AppProvider>
    );
}

export default App;

//<LandingPage />
//<ProductPage />