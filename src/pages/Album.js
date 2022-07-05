import { shape } from 'prop-types';
import React from 'react';
import Header from '../components/header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    // crio meu estado
    this.state = {
      albumLoadedSt: [],
      toCharge: false,
    };
  }

  componentDidMount() {
    this.loadAlbum();
    /* console.log('componentDidMount'); */
  }

  // busco na api pelo id do album
  loadAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const resultApi = await getMusics(id);
    // atualizo o estado com os dados da api
    this.setState({
      albumLoadedSt: resultApi,
      toCharge: true,
    });
  };

  render() {
    const { albumLoadedSt, toCharge } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-album">Album</div>
        {toCharge && (
          <>
            <h2 data-testid="album-name">{ albumLoadedSt[0].collectionName }</h2>
            <h3 data-testid="artist-name">{ albumLoadedSt[0].artistName }</h3>
            {/*  <img src={ albumLoadedSt[0].artworkUrl100 } alt="album" /> */}
            <MusicCard musicAlbum={ albumLoadedSt } />
          </>
        )}

      </>
    );
  }
}

Album.propTypes = {
  match: shape({}).isRequired,
};
export default Album;
/*  */
