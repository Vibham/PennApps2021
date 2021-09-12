import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/index-redux'

//TRY NUMBER ONE START
// const cors = require('cors')
// app.use(cors()) // Use this after the variable declaration
//TRY NUMBER ONE END

//TRY NUMBER TWO START
// const express = require('express');
// const app = express();

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
//TRY NUMBER TWO END

ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
