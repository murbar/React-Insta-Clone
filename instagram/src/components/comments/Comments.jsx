import React from 'react';
import Comment from './Comment';
import './comments.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { comments } = this.props;

    if (!comments.length) return null;

    return (
      <div className="comments">
        {comments.map(c => (
          <Comment data={c} key={c.text} />
        ))}
      </div>
    );
  }
}

export default CommentSection;

CommentSection.defaultProps = {
  comments: []
};
