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
                    
                    <Link to='/journal'>
                        My Journal
                    </Link>
                    
                    <Link to='/blog'>
                        Blog
                    </Link>
                    
                    <Link to='/video'>
                        Meditate
                    </Link>
                    
                    <Link to='/resources'>
                        Resources
                    </Link>
                    
                    <Link to='/register'>
                        Register
                    </Link>
                    
                    <Link to='/login'>
                        Log In
                    </Link>
                </div>
                
            </div>
            );
        }
}

export default Navbar;