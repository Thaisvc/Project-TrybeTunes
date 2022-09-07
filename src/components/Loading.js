import React, { Component } from 'react';
import '../css/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
        </div>
      </div>
    );
  }
}
export default Loading;
