import React, { Component } from 'react';
import './App.css';

class Post extends Component{
	constructor(props){
		super(props);
	}

	render() {
		const { post } = this.props;
		return(
			<li className="Post" id={post.id_post}>
				<div>
					<img src="vote_up.png" height="20px" widht="20px"/>
					<img src="vote_down.png" height="20px" widht="20px"/>
				</div>
                <div className="Post-core">
                  <p className="Post-body">
                    {post.body}
                  </p>
                  <div className="Post-footer">
                    <p>
                      {post.signature}, {post.date} 
                    </p>
                  </div>
                </div>
                <p className="Vote-counter">
                  {post.votes}
                </p>
            </li>
		)
	}
}

export default Post;