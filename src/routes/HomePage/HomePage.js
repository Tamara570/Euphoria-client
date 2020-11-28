import React, { Component } from 'react';
import HomeForm from '../../Components/HomeForm/HomeForm'
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';


class HomePage extends Component {



    render() {
        return (
            <div className="HomePage">
                <Navbar />
                <div>
                    <HomeForm />
                </div>
                <Contact />
            </div>
        );
    }
}

export default HomePage;