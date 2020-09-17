import React, { Component } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';


class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <Navbar />
                <div className="Home_section">
                    <form className="Home_form">
                        <header>
                            <h3>Journaling Section</h3>
                        </header>
                        <div className="form-section">
                            <label for="blog-title">Blog title</label>
                            <input type="text" name="Blog-title" placeholder="What am I grateful for today?" required />
                        </div>
                        <div className="form-section">
                            <label for="blog-summary">Blog summary</label>
                            <textarea name="blog-summary" rows="15"   required></textarea>
                        </div>
                        
                        <button>Save</button>
                        <button>Publish</button>
                    </form>
                
                </div>
                <Contact />
            </div>
        );
    }
}

export default HomePage;