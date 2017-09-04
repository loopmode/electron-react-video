// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Videos.scss';

import Video from '../Video';

export default class Videos extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Videos</h2>
          <div className={styles.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
          </div>
          <Link to="/home">to Home</Link>
        </div>
      </div>
    );
  }
}
