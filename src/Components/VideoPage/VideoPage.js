import React, { Component } from 'react';
import './VideoPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class VideoPage extends Component {
    render() {
        return (
            <div className="VideoPage">
                <Navbar />
                <div className="Video_title">
                    <h2>
                        Yoga and Meditation Videos
                    </h2>
                    <div className="Video_item" />
                    <div className="Video_item" />
                    <div className="Video_item" />
                    <div className="Video_item" />
                    <div className="Video_item" />
                    <div className="Video_item" />
                </div>
                
                <Contact />
            </div>
        );
    }
}

export default VideoPage;