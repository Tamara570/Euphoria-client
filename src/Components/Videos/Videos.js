import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div>
                <div className="vid_description">
                    I chose the videos in this section specificlly because they create a sense of calm and peace. The yoga videos are easy to work through
                    and extremely effective in helping lower both anxiety and depression.
                    The meditation videos are great background music for studying, relaxing,
                    stretching, and sleeping.
                </div>
                <div className="Video_item" >
                    <label htmlFor="title">Meditation • Sleep • Study Music</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/2OEL4P1Rz04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>

                <div className="Video_item" >
                    <label htmlFor="title">Happiness Frequency: Serotonin Release Music</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/8M143iRrbgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
                <div className="Video_item" >
                    <label htmlFor="title">Ambient Relaxation Music</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/h287bt6jSjA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
                <div className="Video_item" >
                    <label htmlFor="title">10-Min Guided Meditation for Beginners</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/WHCl6b9K25Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
                <div className="Video_item" >
                    <label htmlFor="title">EASY MORNING YOGA FLOW | (15 min )</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/Dbx9yttmtAU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
                <div className="Video_item" >
                    <label htmlFor="title">20min Relaxing Yoga | Melt Away Anxiety and Stress</label>
                    <iframe title="video" width="300" height="215" src="https://www.youtube.com/embed/HlgmHxVXw7g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                </div>
            </div>
        )
    }
}

export default Video