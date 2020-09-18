import React from 'react';
import ReactDOM from 'react-dom';
import LogInPage from './LogInPage';
import { BrowserRouter } from "react-router-dom";


describe(`LogInPage Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LogInPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})