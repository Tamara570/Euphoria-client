import React, { Component } from 'react';
import './VideoPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class VideoPage extends Component {
    render() {
        return (
            <div className="VideoPage">
                <Navbar />
                <Contact />
            </div>
        );
    }
}

export default VideoPage;