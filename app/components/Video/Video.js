import React, { Component } from 'react';
import { Player } from 'video-react';
import cx from 'classnames';
import styles from './Video.scss';

export default class Video extends Component {
  render() {
    return (
      <div className={cx('Video', styles.container)}>
        <Player {...this.props} playsInline />
      </div>
    );
  }
}
