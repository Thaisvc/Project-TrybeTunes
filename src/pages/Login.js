import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnLoginSt: true,
      loginSt: '',
      isloadingSt: false,
      loggedSt: false,
    };
  }

  hendlerInput = ({ target }) => {
    const { value } = target;
    const minimumSize = 3;
    if (value.length >= minimumSize) {
      this.setState({
        loginSt: value,
        btnLoginSt: false,
      });
    }
  }

  hendlerBtnLogin = async () => {
    const { loginSt } = this.state;
    this.setState({ isloadingSt: true });
    await createUser({ name: loginSt });
    this.setState({ isloadingSt: false });
    this.setState({ loggedSt: true });

    /* console.log(createUser);  */
  }

  render() {
    const { btnLoginSt, isloadingSt, loggedSt } = this.state;
    if (isloadingSt) return <Loading />;
    if (loggedSt) {
      return (
        <Route exact path="/">
          {' '}
          <Redirect to="/search" />
        </Route>);
    }

    return (
      <div data-testid="page-login">
        <label htmlFor="login-name-input">
          Nome:
          <input
            data-testid="login-name-input"
            name="input-name"
            id="login-name-input"
            className="input-login"
            onChange={ this.hendlerInput }
          />
        </label>
        <button
          data-testid="login-submit-button"
          type="button"
          disabled={ btnLoginSt }
          onClick={ this.hendlerBtnLogin }
        >
          Entrar

        </button>
      </div>

    );
  }
}

export default Login;
