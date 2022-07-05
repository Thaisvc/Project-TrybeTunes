import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAlbuns extends Component {
  render() {
    const { cardInfo } = this.props;
    const { collectionName, artistName, artworkUrl100, collectionId } = cardInfo;
    return (
      <section className="cardAlbum">
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
          key={ collectionId }
        >
          Ver album
        </Link>
        <img alt={ collectionName } src={ artworkUrl100 } />
        <h5>{collectionName}</h5>
        <h5>{artistName}</h5>

      </section>
    );
  }
}

CardAlbuns.propTypes = {
  cardInfo: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
    collectionId: PropTypes.number,
  }).isRequired,
};

export default CardAlbuns;
