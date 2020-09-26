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
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/2OEL4P1Rz04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/8M143iRrbgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/h287bt6jSjA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/WHCl6b9K25Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/Dbx9yttmtAU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/HlgmHxVXw7g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                </div>
                
                <Contact />
            </div>
        );
    }
}

export default VideoPage;