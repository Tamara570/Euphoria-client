import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <header role="banner">
                    <Link to="/">Euphoria</Link>
                </header>
                <div className="nav">
                    <Link to='/home'>
                        Home
                    </Link>
                    
                    <Link to='/Blog'>
                        Blog
                    </Link>
                    
                    <Link to='/video'>
                        Meditate
                    </Link>
                    
                    <Link to='/resources'>
                        Resources
                    </Link>
                    
                </div>
                
            </div>
            );
        }
}

export default Navbar;