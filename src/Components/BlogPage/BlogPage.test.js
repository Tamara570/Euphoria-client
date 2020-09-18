import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from './BlogPage';
import { BrowserRouter } from "react-router-dom";


describe(`BlogPage Component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BlogPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})