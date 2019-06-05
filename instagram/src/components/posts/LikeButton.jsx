import React from 'react';
import styled from 'styled-components';

const StyledLikeButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: -0.25rem 0 0.25rem -0.25rem;
  &:focus {
    outline: none;
  }
  img {
    padding: 0.25rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

const LikeButton = ({ liked, onLike }) => {
  const likeButtonText = liked ? 'Unlike' : 'Like';
  const likeButtonImgSrc = liked ? '/heart-filled.svg' : '/heart.svg';

  return (
    <StyledLikeButton onClick={onLike}>
      <img src={likeButtonImgSrc} alt={likeButtonText} />
    </StyledLikeButton>
  );
};

export default LikeButton;
