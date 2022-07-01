import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <section>
          <Route component={ NotFound } />
          <Route path="/" component={ Login } />
          <Route path="/Search" component={ Search } />
          <Route path="/Album" component={ Album } />
          <Route path="/Favorites" component={ Favorites } />
          <Route path="/Profile" component={ Profile } />
          <Route path="/Profile/edit" component={ ProfileEdit } />
        </section>
      </>

    );
  }
}

export default App;
