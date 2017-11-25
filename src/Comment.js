import React, {PureComponent} from 'react';
import './Comment.css';

class Comment extends PureComponent {

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="comment" data-id={this.props.id}>
        <p>{this.props.text}</p>
        <span
          onClick={this.handleDelete}
          className="delete"
        >
          X
        </span>
      </div>
    );
  }
}

export default Comment;
