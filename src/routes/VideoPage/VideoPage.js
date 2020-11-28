import React, { Component } from 'react';
import Video from '../../Components/Videos/Videos'
import './VideoPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';


class VideoPage extends Component {
    render() {
        return (
            <div className="VideoPage">
                <Navbar />
                <div className="Video_title">
                    <h2>
                        Yoga and Meditation Videos
                    </h2>
                    <Video />
                </div>
                <Contact />
            </div>
        );
    }
}

export default VideoPage;