import React, { Component } from 'react';
import './BlogPage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class BlogPage extends Component {
    render() {
        return (
            <div className="BlogPage">
                <Navbar />
                <div className="Blog_section">
                    <section>
                        <header className="Blog_title">
                            <h2>First Blog Post</h2>
                        </header>
                        <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat.</blockquote>
                        <p>date and author</p>
                        <button>Comment</button>
                        <button>Like</button>
                    </section>
                    
                    <section>
                        <header className="Blog_title">
                            <h2>Second Blog Post</h2>
                        </header>
                        <blockquote>Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</blockquote>
                        <p>date and author</p>
                        <button>Comment</button>
                        <button>Like</button>
                    </section>
                </div>
                <Contact />
            </div>
        );
    }
}

export default BlogPage;