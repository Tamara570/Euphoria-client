import React from 'react'
import BlogContext from '../../context/BlogContext'
import './blog.css'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    static contextType = BlogContext;

    handleClick = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }    


    render() {

    const { title, content, username } = this.props
        return (

            <div className="blog">
                <header className="Blog_title">
                    <h2>{title}</h2>
                </header>
                <blockquote>{content}</blockquote>
                <p>Submitted by: {username}</p>
                <section>
                    <p>{this.state.count} likes</p>
                    <button onClick={this.handleClick}>Like</button>
                </section>
                
            </div>
        )
    }
}

export default Blog