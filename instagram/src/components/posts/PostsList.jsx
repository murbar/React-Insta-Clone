import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const StyledResultsDiv = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PostsList = ({ posts, filteredPosts, searchTerm }) => {
  if (searchTerm && !filteredPosts)
    return (
      <StyledResultsDiv>
        No posts with username matching <strong>"{searchTerm}"</strong>
      </StyledResultsDiv>
    );

  const displayedPosts = filteredPosts || posts;
  const showingResults = searchTerm && filteredPosts;
  let postPluralize;
  if (filteredPosts) postPluralize = filteredPosts.length === 1 ? 'post' : 'posts';

  return (
    <div className="posts-list">
      {showingResults && (
        <StyledResultsDiv>
          {filteredPosts.length} {postPluralize} matching <strong>"{searchTerm}"</strong>
        </StyledResultsDiv>
      )}
      {displayedPosts.map(p => (
        <Post post={p} key={p.timestamp} />
      ))}
    </div>
  );
};

export default PostsList;
