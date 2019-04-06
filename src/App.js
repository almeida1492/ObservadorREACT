import React, { Component } from 'react';
import fire from './fire';
import './App.css';

import Post from './Post';
import Observer from './Observer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount(){
    let postsRef = fire.database().ref('posts').orderByKey().limitToLast(100);
    postsRef.on('child_added', snapshot => {
      let post = snapshot.val();
      this.setState({ posts: [post].concat(this.state.posts) });
    })
  }

  render() {
    console.log(this.state.posts);
    const { posts } = this.state;
    return (
      <div className="App">
        <Observer/>
        <div className="Posts">
          <ul>
            {posts.map((post) => 
              <Post post={post}/>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
