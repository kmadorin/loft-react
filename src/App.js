import React, { PureComponent } from "react";

import NewsPost from "./NewsPost";
import './App.css';

let id = 0;

function getNewsPostId() {
  id += 1;
  return id;
}

class App extends PureComponent {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = (e) => {
    this.setState({
      newsInput: e.target.value
    });
  }

  handleKeyDown = (e) => {
    const { news, newsInput } = this.state;
    let newNewsItem = {};
    if (e.keyCode === 13) {
      newNewsItem = {
        text: newsInput
      };
      this.setState({
        newsInput: "",
        news: [...news, newNewsItem]
      });
    }
  }

  renderNews() {
    return this.state.news.map(post => {
      return <NewsPost text={post.text} key={getNewsPostId()} />;
    });
  }

  render() {
    const newsInput = this.state.newsInput;
    return (
      <div className="App">
        <input
          type="text"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="todo-input"
          id="news-input"
        />
        <div>
            {this.renderNews()}
          </div>
      </div>
    );
  }
}

export default App;
