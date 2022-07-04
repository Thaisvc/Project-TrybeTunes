import React from 'react';
import Header from '../components/header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      btnPesquisaSt: true,

    };
  }

  hendlerBtnsearch = ({ target }) => {
    const { value } = target;
    const minimumSize = 2;
    if (value.length >= minimumSize) {
      this.setState({
        btnPesquisaSt: false,
      });
    }
  }

  render() {
    const { btnPesquisaSt } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          search
        </div>
        <section>
          <input
            data-testid="search-artist-input"
            type="text"
            onChange={ this.hendlerBtnsearch }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ btnPesquisaSt }
          >
            Pesquisar

          </button>
        </section>
      </>
    );
  }
}

export default Search;
