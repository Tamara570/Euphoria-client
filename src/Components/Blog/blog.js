import React from 'react'
import BlogContext from '../../context/BlogContext'
import './blog.css'

class Blog extends React.Component {
    static contextType = BlogContext;
    render() {

    const { title, content, username } = this.props
        return (

            <div className="Blog_section">
                <header className="Blog_title">
                    <h2>{title}</h2>
                </header>
                <blockquote>{content}</blockquote>
                <p>{username}</p>
            </div>
        )
    }
}

export default Blog