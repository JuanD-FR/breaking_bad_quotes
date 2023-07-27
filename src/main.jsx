import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MultipleCustomHooks/>
    {/* </React.StrictMode> */}  
  </BrowserRouter>
)
