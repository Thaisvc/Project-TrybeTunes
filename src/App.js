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
      <section className="main-content">

        {/*  <Switch> */}
        <Route component={ NotFound } />
        <Route exact path="/" component={ Login } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/Search" component={ Search } />
        <Route path="/Album" component={ Album } />
        <Route path="/Favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        {/*  </Sewitch> */}
      </section>

    );
  }
}

export default App;
