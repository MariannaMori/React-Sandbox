import React, { Component } from 'react';
import axios from "axios";
import './Posts.css';

const API = "https://jsonplaceholder.typicode.com/photos";

class Posts extends Component {
    state = {
        posts: [],
        isLoading: false
    };

    componentDidMount() {
        this.setState({ isLoading: true});

        axios
        .get(API, {
            params: {
                _limit: 15,
            },
        })
        .then(response => this.setState({posts:response.data,
        isLoading:false }));
    }

    removeHandler = (id) => {
        const postIndex = this.state.posts.findIndex(p => {
            return p.id === id;
        });

        const oldArray = [...this.state.posts];
        oldArray.splice(postIndex, 1);
        this.setState({ posts: oldArray });
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading posts...</p>;
        }
        return (
             <div>
                 <ul className="posts">
            {this.state.posts.map((post) => (
                <li className="post" key={post.id}>
                    <img src={post.thumbnailUrl} alt={post.id} />
            <h2>
                {post.id} {post.title}
                </h2>
                <div className="remove" onclick={() => this.removeHandler}>X</div>
                </li>
           ))}
           </ul>
           </div>
           );
    }  
}

export default Posts;