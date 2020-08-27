import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Root from 'Root'

import App from './components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path='/' component={App}/>
    </BrowserRouter>
  </Root>
  , document.getElementById('root')
);