import React from 'react';
import ReactDOM from 'react-dom';
import VideoPage from './VideoPage';
import { BrowserRouter } from "react-router-dom";

describe(`VideoPage Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <VideoPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})