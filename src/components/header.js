import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../css/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isloadingSt: false,
      userNameSt: '',

    };
  }

  componentDidMount() {
    this.chamaApi();
    /* console.log('componentDidMount'); */
  }

  chamaApi = async () => {
    this.setState({ isloadingSt: true });
    const { name } = await getUser();
    this.setState({ isloadingSt: false });

    this.setState({
      userNameSt: name,
    });
  }

  render() {
    const { isloadingSt, userNameSt } = this.state;
    /* console.log(isloadingSt); */

    if (isloadingSt) return <Loading />;
    return (
      <header className="header" data-testid="header-component">
        <h2 className="title">TrybeTunes</h2>
        <div>
          <Link
            className="header-link"
            data-testid="link-to-search"
            to="/search"
          >
            Pesquisar

          </Link>
          <Link
            className="header-link"
            data-testid="link-to-favorites"
            to="/favorites"
          >
            Favoritos

          </Link>
          <Link
            className="header-link"
            data-testid="link-to-profile"
            to="/profile"
          >
            Perfil

          </Link>
        </div>
        <p data-testid="header-user-name" className="header-link">{userNameSt}</p>

      </header>
    );
  }
}
export default Header;
