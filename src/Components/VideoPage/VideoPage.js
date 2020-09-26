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
                    <div className="vid_description">
                        I chose the videos in this section specificlly because they create a sense of calm and peace. The yoga videos are easy to work through
                        and extremely effective in helping lower both anxiety and depression.
                        The meditation videos are great background music for studying, relaxing,
                        stretching, and sleeping.
                    </div>
                    <div className="Video_item" >
                        <label for="title">Meditation • Sleep • Study Music</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/2OEL4P1Rz04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>

                    <div className="Video_item" >
                        <label for="title">Happiness Frequency: Serotonin Release Music</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/8M143iRrbgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <label for="title">Ambient Relaxation Music</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/h287bt6jSjA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <label for="title">10-Min Guided Meditation for Beginners</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/WHCl6b9K25Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <label for="title">EASY MORNING YOGA FLOW | (15 min )</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/Dbx9yttmtAU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                    <div className="Video_item" >
                        <label for="title">20min Relaxing Yoga | Melt Away Anxiety and Stress</label>
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/HlgmHxVXw7g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    </div>
                </div>
                
                <Contact />
            </div>
        );
    }
}

export default VideoPage;