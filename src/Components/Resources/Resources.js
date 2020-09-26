import React, { Component } from 'react';
import './Resources.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class Resources extends Component {
    render() {
        return (
            <div className="Resources">
                <Navbar />
                <div className="Blog_section">
                    <section>
                        <header className="Blog_title">
                            <h2>Helpful Resources</h2>
                        </header>
                        <blockquote>
                            <ol>
                                <li><a href="https://suicidepreventionlifeline.org/">Suicide prevntion hotline  </a>
                            800-273-8255</li>
                                <li>Need help finding a therapist? <a href="https://www.psychologytoday.com/us/therapists">Click here</a>.</li>
                            </ol>
                        </blockquote>
                        
                    </section>
                </div>
                <Contact />
            </div>
        );
    }
}

export default Resources;