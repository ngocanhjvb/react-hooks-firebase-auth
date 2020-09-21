import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import configureStore from "./store/store";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/routes";
import Nav from "./components/Nav";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav/>
                <Routes/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
