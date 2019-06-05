import React from 'react';
import styled from 'styled-components';

const StyledSearchBarDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  > div {
    width: 33.33%;
  }
`;

const StyledLogoDiv = styled.div`
  font-family: 'Pacifico', serif;
  font-size: 2rem;
  span {
    margin-left: 0.5rem;
  }
`;

const StyledSearchInputDiv = styled.div`
  text-align: center;
  input {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    background: transparent;
    border: none;
  }
  input:focus {
    outline: none;
  }
  input:focus::placeholder {
    color: transparent;
  }
`;

const StyledLogoutDiv = styled.div`
  text-align: right;
  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    background: black;
    color: white;
    font-size: 1rem;
    border: 1px solid black;
  }
`;

const SearchBar = ({ onFilterPosts }) => {
  const handleChange = e => {
    onFilterPosts(e.target.value);
  };

  const handleLogout = e => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <StyledSearchBarDiv>
      <StyledLogoDiv>
        Instaclone
        <span role="img" aria-label="Camera icon">
          📸
        </span>
      </StyledLogoDiv>
      <StyledSearchInputDiv>
        <input type="search" placeholder="Search" onChange={handleChange} />
      </StyledSearchInputDiv>
      <StyledLogoutDiv>
        <button onClick={handleLogout}>Logout</button>
      </StyledLogoutDiv>
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
