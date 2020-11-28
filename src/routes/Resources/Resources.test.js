import React from 'react';
import ReactDOM from 'react-dom';
import Resources from './Resources';
import { BrowserRouter } from "react-router-dom";

describe(`Resources Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Resources />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})