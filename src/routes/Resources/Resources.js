import React, { Component } from 'react';
import './Resources.css';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';


class Resources extends Component {
    render() {
        return (
            <div className="Resources">
                <Navbar />
                <div className="Resources_section">
                    <section>
                        <header className="Resources_title">
                            <h2>Helpful Resources</h2>
                        </header>
                        <blockquote>
                            <div className="Resource">
                                <a href="https://suicidepreventionlifeline.org/">Suicide prevention hotline  </a>
                                800-273-8255
                            </div>
                            <div className="Resource">
                                Need help finding a therapist? <a href="https://www.psychologytoday.com/us/therapists">Click here</a>.
                            </div>  
                            <div className="Resource">
                                <a href="https://www.samhsa.gov/find-help/national-helpline">SAMHSA’s National Helpline</a>, 1-800-662-HELP (4357), (also known as the Treatment Referral 
                                Routing Service) or TTY: 1-800-487-4889 is a confidential, free, 24-hour-a-day, 365-day-a-year, 
                                information service, in English and Spanish, for individuals and family members facing mental and/or 
                                substance use disorders. This service provides referrals to local treatment facilities, support groups, 
                                and community-based organizations. Callers can also order free publications and other information.
                                </div> 
                                
                                
                            
                        </blockquote>
                        
                    </section>
                </div>
                <Contact />
            </div>
        );
    }
}

export default Resources;