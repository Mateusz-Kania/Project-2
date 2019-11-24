import React from 'react';
import AppProvider from './Store/AppProvider';
import LandingPage from './Pages/LandingPage'
import ProductPage from './Pages/ProductPage'
import CatalogPage from "./Pages/CatalogPage";
import UserPage from "./Pages/UserPage";
import ColorComponent from "./Components/Others/Cards/ColorComponent";





function App(props) {




    return (
        <AppProvider>
            <CatalogPage/>
        </AppProvider>
    );
}

export default App;

//<LandingPage />
//<ProductPage />