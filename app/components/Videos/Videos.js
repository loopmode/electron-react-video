import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Videos.scss';

import Video from '../Video';

let videoId = 0;

const defaultVideo = {
  poster: 'https://media.w3.org/2010/05/sintel/poster.png',
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
};

export default class Videos extends Component {
  state = {
    videos: []
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { videos } = this.state;
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Videos</h2>
          <div className={styles.videos}>
            {videos.map((video, idx) => (
              <Video key={video.id} src={video.src} poster={video.poster} />
            ))}
            <a className={styles.addButton} onClick={this.addVideo}>
              <i
                className={cx('fa fa-plus', styles.plusIcon)}
                aria-hidden="true"
              />
            </a>
          </div>
          <Link to="/home">to Home</Link>
        </div>
      </div>
    );
  }
  addVideo = event => {
    event.preventDefault();
    this.setState({
      videos: [...this.state.videos, { ...defaultVideo, id: videoId++ }]
    });
  };
}
