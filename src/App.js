import React, { Component } from 'react';
import './App.css';
const axios = require('axios')

const API_ROOT = process.env.API_ROOT || "http://localhost:5000/api";
const SHOW_BODY = process.env.SHOW_BODY || false;

function StoryBody(props) {
  if (SHOW_BODY) {
    return <p className="card-text">{props.story.content}></p>;
  }
  return null;
}

class App extends Component {
  state = {
    stories: [],
  }

  componentDidMount() {
    fetch(API_ROOT + '/items/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ stories: data.items })
      })
      .catch(console.log)
  }

  handleMarkRead(storyId) {
    axios.delete(API_ROOT + '/items/' + storyId + "/")
      .then((response) => {
        this.setState({stories: this.state.stories.filter(function(story) {
          return story.id !== storyId;
        })});
      })
  }

  render() {
    return (
      <div>
          {this.state.stories.map((story) => (
          <div className="card" key={story.id}>
              <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                  <div>{story.author}</div>
                  <div>{story.pub_date}</div>
              </h6>
              <StoryBody story={story} />
              <a href={story.url} className="card-link">Card link</a>
              <a href="#" className="card-link" onClick={() => this.handleMarkRead(story.id)}>Mark read</a>
              </div>
          </div>
          ))}
      </div>
    );
  }
}

export default App;
