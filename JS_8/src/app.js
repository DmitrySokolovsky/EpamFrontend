import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import React from "react";
import {App} from "./components/hw-main/hw-main.jsx"; 
import {appStore} from "./store";
import "./style.css";

ReactDom.render(
    <Provider store={appStore}>
    <App/>
    </Provider>
    ,document.getElementById('test'));


               