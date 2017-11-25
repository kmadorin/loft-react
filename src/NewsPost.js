import React, {Component} from 'react';
import Comment from "./Comment";
import './NewsPost.css';

let id = 0;

function getCommentId() {
  id += 1;
  return id;
}

class NewsPost extends Component {

  state = {
    commentInput: "",
    comments: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({commentInput: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {commentInput, comments} = this.state;
      const newComment = {text: commentInput, id: getCommentId()};
      this.setState({commentInput: '', comments: [...comments, newComment]});
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
      return (
        <div className="news-post">
          <p>{this.props.text}</p>
          <input
            value = {this.state.CommentInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="comment-input"
          />
          <div>
            {this.state.comments.map(comment => (
              <Comment
                key={comment.id}
                id={comment.id}
                text={comment.text}
                onDelete={this.handleDelete}
              />
            ))}
          </div>
        </div>
      );
    }
}

export default NewsPost;
