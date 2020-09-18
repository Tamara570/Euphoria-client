import React from 'react';
import ReactDOM from 'react-dom';
import MyJournal from './MyJournal';
import { BrowserRouter } from "react-router-dom";

describe(`MyJournal Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <MyJournal />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})