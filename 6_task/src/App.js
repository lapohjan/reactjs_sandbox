import React, { Component } from "react";
import Post from './Post/Post';

const posts = [
 {
  id: 1,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Carlos A. Gonzales",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?clouds",
 },
 {
  id: 2,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Florinda D. McKinley",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?coffee",
 },
 {
  id: 3,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Georgia K. Shaw",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?taxi",
 },
 {
  id: 4,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Robin B. Johnson",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?drink",
 },
 {
  id: 5,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Barbara T. Figueroa",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?toys",
 },
 {
  id: 6,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Jerry J. Miller",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?tulips",
 },
 {
  id: 7,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Betty J. Cesar",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?dolls",
 },
 {
  id: 8,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Jake M. Thomas",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?glass",
 },
 {
  id: 9,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Frank B. McDaniel",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?lollipop",
 },
 {
  id: 10,
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Richard S. Hughes",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "https://source.unsplash.com/featured/?icecream",
 },
];

class App extends Component {
  state = {
    posts: posts,
  };

removeHandler = (removeId) => {
  const oldArray = [...this.state.posts];
  oldArray.splice(removeId, 1);
  this.setState({ posts: oldArray });
};

  render() {
    const postsList = this.state.posts.map((post, index) => {
      return (
        <Post
        key={post.id}
        title={post.title}
        author={post.author}
        desc={post.desc}
        img={post.img}
        click={this.removeHandler.bind(this, index)}
        />
      );
    });

  return <div className="posts">{postsList}</div>;
  }
}


export default App;