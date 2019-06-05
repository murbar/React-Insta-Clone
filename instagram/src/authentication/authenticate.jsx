import React from 'react';

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      const user = localStorage.getItem('username');
      if (user) this.setState({ loggedIn: true });
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <LoginPage />;
    }
  };

export default authenticate;
