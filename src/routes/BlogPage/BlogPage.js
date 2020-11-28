import React from 'react';
import Blog from '../../Components/Blog/blog'
import './BlogPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';
// import config from '../../config'
import BlogContext from '../../context/BlogContext';
import config from '../../config'

export default class BlogPage extends React.Component {
    static contextType = BlogContext;

    state = {
        blog: []
    }

    componentDidMount(){
        fetch(`${config.API_ENDPOINT}/blog`, {
            headers: {
              "content-type": "application/json",
            }
          })
          .then((response) => 
              response.json()
          )
          .then((data) => {
              console.log('data', data)
              this.setState({blog:data})
          })
    }

    render() {
    return (
        <div className="BlogPage">
            <Navbar />
            <div className="Blog_section">
            {this.state.blog.map(blog => 
                <Blog 
                    id={blog.id}
                    title={blog.title} 
                    content={blog.content}
                    username={blog.username}  
                />
            )
            }
            </div>
            <Contact />
        </div>
    );
    }
}