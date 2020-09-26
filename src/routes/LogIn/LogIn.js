import React, { Component } from 'react'
import LogInPage from '../../Components/LogInPage/LogInPage'
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact'
import './Login.css'
import { Section } from '../../Utils/Utils' 

class LogIn extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
          },
        }
      
        handleLoginSuccess = () => {
          const { location, history } = this.props
          const destination = (location.state || {}).from || '/home'
          history.push(destination)
        }
      
        render() {
          return (
            <Section className='Login'>
                <Navbar />
                <h2>Welcome back!</h2>
                <LogInPage
                    onLoginSuccess={this.handleLoginSuccess}
                />
                <Contact />
            </Section>
          )
        }
      }

    export default LogIn;