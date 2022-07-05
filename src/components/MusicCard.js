import { func, shape } from 'prop-types';
import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const {
      tracks: { trackId, trackName, previewUrl },
      tracks,
      handleChange,
      favoriteChecked,
    } = this.props;
    // console.log(!!favSongsChecked[trackId]);
    return (
      <section key={ trackId }>
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="trackId">
          Favorita
          <input
            id="trackId"
            name={ trackId }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ favoriteChecked[trackId] }
            onChange={ (event) => handleChange(event, tracks) }
          />
        </label>
      </section>
    );
  }
}

MusicCard.propTypes = {
  tracks: shape({}).isRequired,
  handleChange: func.isRequired,
  favoriteChecked: shape({}).isRequired,
};

export default MusicCard;
