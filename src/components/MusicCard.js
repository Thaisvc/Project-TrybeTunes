import { func, shape } from 'prop-types';
import React, { Component } from 'react';
import '../css/Album.css';

class MusicCard extends Component {
  render() {
    const {
      tracks: { trackId, trackName, previewUrl },
      tracks, handleChange, favoriteChecked } = this.props;

    // console.log(!!favSongsChecked[trackId]);
    return (
      <section key={ trackId }>
        <h4 className="titles">
          {' '}
          {trackName}
        </h4>
        <audio
          data-testid="audio-component"
          className="audio"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="trackId" className="titles">
          Favorita
          <input
            id="trackId"
            name={ trackId }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ !!favoriteChecked[trackId] }
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
