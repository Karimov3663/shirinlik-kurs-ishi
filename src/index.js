import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Rot from './components/rot';
import Img from './assets/img.jpg'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <div className='Canteiner'>
        <img src={Img} alt="" />
        <div className='Rot'>
          <Rot/>
        </div>
        </div>
       </BrowserRouter>
  </React.StrictMode>
);

