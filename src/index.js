import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './app/utils/serviceWorker';

//Стили
import './app/css/index.scss';

//Компоненты
import Header from "./app/components/Header/Header";
import Main from "./app/components/Main";
import Footer from "./app/components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main  />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();