import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './app/App';
import { DefaultTheme } from './app/themes';
import store from './app/core/store';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={DefaultTheme}>
            <React.Fragment>
               <CssBaseline />
               <App />
            </React.Fragment>
         </ThemeProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
