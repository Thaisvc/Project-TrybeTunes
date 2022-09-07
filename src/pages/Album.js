import { shape } from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import '../css/Album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
      favorite: false,
      favoriteCheckedSt: {},
      loadingSuccess: false,
    };
  }

  componentDidMount() {
    this.loadMusic();
    this.getFavoritesChecked();
  }

  handleChange = ({ target: { name, checked } }, music) => {
    /* console.log(music); */
    this.setState(({ favoriteCheckedSt }) => ({
      favorite: true,
      favoriteCheckedSt: { ...favoriteCheckedSt, [name]: checked }, // salva estado anterior
    }), async () => {
      await this.removeFav(checked, music);// busca na api
      this.setState({ favorite: false });
    });
  };

  removeFav = async (action, music) => {
    if (action) await addSong(music);
    if (!action) await removeSong(music);
  }

  loadMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const resutApi = await getMusics(id);
    this.setState({
      album: resutApi,
      favorite: false,
      loadingSuccess: true,
    });
  };

  getFavoritesChecked = async () => {
    const resutApi = await getFavoriteSongs();
    // console.log('api', resutApi);
    // resutApi.forEach(({elelemt}) => {(elelemt.trackId)}) erro
    resutApi.forEach(({ trackId }) => {
      this.setState(({ favoriteCheckedSt }) => ({
        favoriteCheckedSt: { ...favoriteCheckedSt, [trackId]: true },
      }));
    });
  }

  render() {
    const { album, favorite, favoriteCheckedSt, loadingSuccess } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album" className="container-main">

          {loadingSuccess && (
            <section>
              <h2
                data-testid="album-name"
                className="title"
              >
                {album[0].collectionName}

              </h2>
              <p
                data-testid="artist-name"
                className="title"
              >
                {album[0].artistName}

              </p>
              {favorite ? <Loading /> : (
                <>
                  {album.slice(1).map((track) => (
                    <MusicCard
                      key={ track.trackId }
                      tracks={ track }
                      handleChange={ this.handleChange }
                      favoriteChecked={ favoriteCheckedSt }
                    />
                  ))}
                </>
              )}
            </section>
          )}
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: shape({}).isRequired,
};

export default Album;
