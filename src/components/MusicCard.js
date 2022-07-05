import React from 'react';
import { shape, arrayOf } from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musicAlbum } = this.props;

    return (
      <section>
        {musicAlbum.slice(1).map(({ trackId, trackName, previewUrl }) => (
          <div key={ trackId }>
            <h4>{trackName}</h4>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              {previewUrl}
              <code>audio</code>
              .
            </audio>
          </div>
        ))}
      </section>
    );
  }
}

MusicCard.propTypes = {
  musicAlbum: arrayOf(shape({})).isRequired,
};

export default MusicCard;
