import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const StyledPostHeaderDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 0 0 4rem;
  font-weight: bold;
  img {
    width: 2rem;
    position: absolute;
    top: calc(50% - 1rem);
    left: 1rem;
    border-radius: 50%;
  }
`;

const StyledPostBodyDiv = styled.div`
  img {
    width: 100%;
  }
`;

const StyledPostFooterDiv = styled.div`
  padding: 1rem 1rem 0;
  font-weight: bold;
`;

const PostBody = ({ post, liked, onToggleLike }) => {
  return (
    <div>
      <StyledPostHeaderDiv>
        <img src={post.thumbnailUrl} alt={post.username} />
        {post.username}
      </StyledPostHeaderDiv>
      <StyledPostBodyDiv>
        <img src={post.imageUrl} alt="" />
      </StyledPostBodyDiv>
      <StyledPostFooterDiv>
        <div>
          <LikeButton liked={liked} onLike={onToggleLike} />
        </div>
        {post.likes} likes
      </StyledPostFooterDiv>
    </div>
  );
};

export default PostBody;
