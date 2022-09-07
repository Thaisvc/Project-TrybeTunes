import React from 'react';
import Header from '../components/header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardAlbuns from '../components/CardAlbuns';
import Loading from '../components/Loading';
import '../css/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      btnPesquisaSt: true,
      nameArtistSt: '',
      artistaSt: '',
      resultAlbumSt: [],
      loadingSt: false,
    };
  }

  //  valida o input e atualiza o state liberando o button caso a condiçao for atendida
  hendlerBtnsearch = ({ target }) => {
    const minimumSize = 2;
    if (target.value.length >= minimumSize) {
      this.setState({
        btnPesquisaSt: false,
        nameArtistSt: target.value,
      });
    }
  }

  hendlerSearchlbum = () => {
    const { nameArtistSt } = this.state;
    this.setState({
      artistaSt: nameArtistSt,
      nameArtistSt: '',
      loadingSt: true,
    }, async () => {
      // chama a api pesquisa um artista ou album
      const { artistaSt } = this.state;
      const resultApi = await searchAlbumsAPI(artistaSt);
      // atualiza o state com o result da api
      this.setState({
        resultAlbumSt: resultApi,
        loadingSt: false,
      });
    });
  }

  render() {
    const { btnPesquisaSt, resultAlbumSt,
      nameArtistSt, loadingSt, artistaSt } = this.state;
    if (loadingSt) return <Loading />;
    return (
      <>
        <Header />
        <section className="container-search">
          {/* // faz o map e passa a props cardInfo para CardAlbuns onde e feito a exibiçao dos itens do array */}

          <h4 className="title-search">
            {' '}
            <span>SEARCH</span>
          </h4>
          <div className="container-form">
            <div className="form">
              <input
                className="form-control input-name"
                data-testid="search-artist-input"
                type="text"
                Value={ nameArtistSt }
                onChange={ this.hendlerBtnsearch }
                placeholder="Nome Do Artista"
              />

              <button
                className="btn btn-outline-secondary btn-search button"
                data-testid="search-artist-button"
                type="button"
                disabled={ btnPesquisaSt }
                onClick={ this.hendlerSearchlbum }
              >
                Pesquisar

              </button>
            </div>
            <p className="titleArtist">{`Resultado De Álbuns De: ${artistaSt}`}</p>
            <section className="container-cardAlbum">
              {
                resultAlbumSt.map((title) => (
                  <CardAlbuns
                    key={ title.artistId }
                    cardInfo={ title }
                  />
                ))
              }
            </section>
            {/* ERRO SO NO LINT ORDINÁRIO
            {resultAlbumSt.length > 0 ? <p>
              Resultado de álbuns de:
              {' '}
              {artistaSt}
            </p>
              : <p>Nenhum álbum foi encontrado</p>} */}
            {resultAlbumSt.length === 0
              && (
                <p> Nenhum álbum foi encontrado </p>
              )}

          </div>
        </section>
      </>
    );
  }
}

export default Search;
