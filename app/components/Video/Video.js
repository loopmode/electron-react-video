import React, { Component } from 'react';
import { Player } from 'video-react';
import cx from 'classnames';
import styles from './Video.scss';

export default class Video extends Component {
  render() {
    return (
      <div className={cx('Video', styles.container)}>
        <Player
          playsInline
          poster="https://media.w3.org/2010/05/sintel/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    );
  }
}
