import React from 'react';
import Frame from "./Frame/Frame";
import AppProvider from './Store/AppProvider';
import LandingPage from './Pages/LandingPage/LandingPage'




class App extends React.Component {

    render() {

    return (
        <AppProvider>
        <Frame>
            <LandingPage />
        </Frame>
        </AppProvider>
    );
  }
}

export default App;
