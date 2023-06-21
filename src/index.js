import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
position="top-right"
autoClose={2000}
closeOnClick
pauseOnHover
theme="dark"
/>
{/* Same as */}
<ToastContainer />
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

