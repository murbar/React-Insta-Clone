import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLoginDiv = styled.div`
  margin: 5rem auto 0;
  text-align: center;
`;

const StyledLoginForm = styled.form`
  input,
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid black;
  }
  button {
    margin-left: 1rem;
    color: white;
    background: black;
  }
`;

const LoginPage = props => {
  const [username, setUsername] = useState('');

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username);
    localStorage.setItem('username', username);
    window.location.reload();
  };

  return (
    <StyledLoginDiv>
      <h1>Login to continue</h1>
      <StyledLoginForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleChange} />
        <button>Login</button>
      </StyledLoginForm>
    </StyledLoginDiv>
  );
};

export default LoginPage;
