import React from 'react'
import BlogContext from '../../context/BlogContext'
import './HomeForm.css'
import config from '../../config'
import  {withRouter } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          formComplete: false,
          error: null,
        };
      }

      static defaultProps = {
        history: {
            push: () => {},
          },
        }
    
      postBlog = (e) => {
        const { title, content, username } = e.target;
        
        const blog = {
          title: title.value,
          content: content.value,
          username: username.value,
        };

        console.log(blog)
    
        return fetch(`${config.API_ENDPOINT}/blog`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(blog),
        })
        .then((response) => 
            response.json()
        )
    
        .catch((err) => {
        
        });
    
      };
    
      onSubmit = async (e) => {
        e.preventDefault()
        await this.postBlog(e);
        this.setState = {
          formComplete: true,
        };
    
         this.props.history.push("/blog");
      };


    render() {
        return (
            <BlogContext.Consumer>
                {(value) => (
                    <div className="Home_section">
                        <form className="Home_form" onSubmit={(e) => this.onSubmit(e)}>
                            <header>
                                <h3>What am i grateful for today?</h3>
                            </header>
                            <div className="form-section">
                                <label htmlfor="blog-title" className="blog-title">Blog title</label>
                                <input 
                                    id="title"
                                    type="text"
                                    name="title"
                                    className="title-input"
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <label htmlfor="blog-summary" className="blog-summary">Blog summary</label>
                                <textarea 
                                    id="content"
                                    className="summary"
                                    name="content"
                                    rows="15"
                                    required
                                />
                            </div>

                            <div className="form-section">
                                <label htmlfor="blog-username" className="blog-username">Username:</label>
                                <input 
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="username-input"
                                    required
                                />
                            </div>
                            <div className="form-button">
                                {/* <button>Save</button> */}
                                <button className="post-button" type="submit">Publish</button>
                            </div>
                        </form>
                    </div>
                )}
            </BlogContext.Consumer>
        )
    }
}

export default withRouter(Home)