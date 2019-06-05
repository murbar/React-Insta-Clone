import React from 'react';
import PostsPage from './components/posts/PostsPage';
import authenticate from './authentication/authenticate';
import LoginPage from './components/login/LoginPage';
import styled from 'styled-components';

const StyledAppDiv = styled.div`
  margin: 2rem auto;
  width: 40rem;
`;

const App = props => {
  return (
    <StyledAppDiv className="App">
      <PostsPage />
    </StyledAppDiv>
  );
};

export default authenticate(App)(LoginPage);

/* 
TODO
- fuzzy search with https://fusejs.io/
- persist to localStorage
- delete comment functionality
*/
