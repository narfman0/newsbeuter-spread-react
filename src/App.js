import React, { Component } from 'react';
import Stories from './components/stories';
import './App.css';

const API_ROOT = "http://localhost:5000/api";

class App extends Component {
  state = {
    stories: []
  }

  componentDidMount() {
    fetch(API_ROOT + '/items/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ stories: data.items })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Stories stories={this.state.stories} />
    )
  }
}

export default App;
