import React, { useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentsList from '../comments/CommentsList';
import PostBody from './PostBody';
import AddComment from '../comments/AddComment';

const StyledPostDiv = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0 0 0.3rem #ddd;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
`;

const StyledPostTimeDiv = styled.div`
  padding: 0 1rem 1rem;
  font-weight: bold;
  color: #aaa;
`;

const Post = props => {
  const [post, setPost] = useState(props.post);
  const [liked, setLiked] = useState(false);

  const handleAddComment = comment => {
    const newComment = {
      username: localStorage.getItem('username'),
      text: comment
    };
    const newPost = { ...post };
    newPost.comments.push(newComment);
    setPost(newPost);
  };

  const handleToggleLike = () => {
    setLiked(prevProp => !prevProp);
    const updatedPost = { ...post };
    if (liked) {
      updatedPost.likes--;
    } else {
      updatedPost.likes++;
    }
    setPost(updatedPost);
  };

  return (
    <StyledPostDiv>
      <PostBody post={post} onToggleLike={handleToggleLike} liked={liked} />
      <CommentsList comments={post.comments} />
      <StyledPostTimeDiv>
        <Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">
          {post.timestamp}
        </Moment>
      </StyledPostTimeDiv>
      <AddComment onAddComment={handleAddComment} />
    </StyledPostDiv>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};
