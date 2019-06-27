import React from 'react';
import Frame from "./Frame/Frame";
import {Provider} from 'react-redux';
import AppStore from './Store/AppStore';
import LandingPage from './Pages/LandingPage/LandingPage'




class App extends React.Component {

    render() {
    let store = AppStore();

    return (
        <Provider store={store}>
        <Frame>
            <LandingPage />
        </Frame>
        </Provider>
    );
  }
}

export default App;
