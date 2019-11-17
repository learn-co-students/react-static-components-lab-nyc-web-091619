import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img alt="cat gif" src="/cat.gif" />
      </div>
    );
  }
}
