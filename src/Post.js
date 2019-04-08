import React, { Component } from 'react';
import fire from './fire';
import './App.css';

class Post extends Component{
	state = {
		votes: this.props.post.votes
	}

	constructor(props){
		super(props);
		this.UP_VOTE = "up";
		this.DOWN_VOTE = "down";
	}

	getBackgroundColor = (post) => {
		if (post.votes < 0) {
			return '#E94F37';
		}
		else if (post.votes < 10) {
			return '#3F88C5';
		} else {
			return '#55C1AC';
		}
	}

	onClick = (vote) => {
		const { post } = this.props;
		let voteCounter = post.votes;
		switch(vote){
			case this.UP_VOTE:
				post.votes++;
				break;
			case this.DOWN_VOTE:
				post.votes--;
				break;
		}

		this.setState({ votes: post.votes });
		
		let ref = fire.database().ref('posts');
		return ref
			.child(post.id_post)
			.update(post)
			.then(() => ref.once('value'))
    		.then(snapshot => {    		
    					let posts = snapshot.val();
						let freshPost = posts[post.id_post];
						return
    				}
    			)
			.catch(error => {
				return 
					this.setState({ votes: voteCounter });
					console.log(error.code)
					console.log(error.message)
			});
	}

	render() {
		const { post } = this.props;
		const color = this.getBackgroundColor(post);
		return(
			<li className="Post" id={post.id_post}>
				<div className="Vote-buttons-set">
					<img src="vote_up.png" 
						className="Vote-button" 
						onClick={() => this.onClick(this.UP_VOTE)}/>
					<img src="vote_down.png" 
						className="Vote-button" 
						onClick={() => this.onClick(this.DOWN_VOTE)}/>
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
                <p className="Vote-counter" style={{backgroundColor: color}}>
                  {post.votes}
                </p>
            </li>
		)
	}
}

export default Post;