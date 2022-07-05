import React from 'react';
import Header from '../components/header';

class Album extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album" />
      </>
    );
  }
}

export default Album;
