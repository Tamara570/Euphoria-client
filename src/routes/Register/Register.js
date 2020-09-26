import React, { Component } from 'react'
import { Section } from '../../Utils/Utils'
import RegisterPage from '../../Components/RegisterPage/RegisterPage'
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';

export default class Register extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegisterSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
        <Section className='Register'>
            <Navbar />
            <h2>Welcome to Our Family</h2>
            <RegisterPage
                onRegisterSuccess={this.handleRegisterSuccess}
            />
            <Contact />
        </Section>
    )
  }
}