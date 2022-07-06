import React from 'react';
import Header from '../components/header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      allFavorites: [],
      favoriteCheckedSt: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getAllFavoriteSongs();
  }

  handleChange = ({ target: { name, checked } }, music) => {
    this.setState(({ favoriteCheckedSt }) => ({
      isLoading: true,
      favoriteCheckedSt: { ...favoriteCheckedSt, [name]: checked },
    }), async () => {
      await removeSong(music);
      this.getAllFavoriteSongs();
    });
  };

  removeFav = async (action, music) => {
    if (action) await addSong(music);
    if (!action) await removeSong(music);
  }

  // buscando musicas favoritas
  getAllFavoriteSongs = async () => {
    const resultApi = await getFavoriteSongs();
    // console.log('api', resultApi);
    const get = resultApi.map(({ trackId }) => [trackId, true]);
    this.setState({
      allFavorites: resultApi,
      favoriteCheckedSt: Object.fromEntries(get),
      isLoading: false,
    });
  }

  render() {
    const { allFavorites, favoriteCheckedSt, isLoading } = this.state;
    /* console.log(allFavorites); */

    return (
      <>
        <Header />
        <div data-testid="page-favorites">All Favorites </div>
        <div>
          {isLoading ? <Loading /> : ''}
          {allFavorites.slice(1).map((track) => (
            <MusicCard
              key={ track.trackId }
              tracks={ track }
              handleChange={ this.handleChange }
              favoriteChecked={ favoriteCheckedSt }
            />
          ))}
        </div>
      </>
    );
  }
}

export default Favorites;
