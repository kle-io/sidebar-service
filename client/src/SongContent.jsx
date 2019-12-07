import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Stats,
  Title,
  Username,
} from './StyledContent';
import { formatCount } from '../lib';

class SongContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { track } = this.props;

    return (
      <>
        <Wrapper>
          <Title>
            <div>
              <Username>
                <a href="/"><span>{track.artist}</span></a>
              </Username>
              <a href="/">{track.title}</a>
            </div>
          </Title>
          <Stats>
            {track.plays > 0 && (
              <li>
                <span className="ministats-plays">
                  <span>{formatCount(track.plays)}</span>
                </span>
              </li>
            )}
            {track.likes > 0 && (
              <li>
                <a href="/" className="ministats-likes">
                  <span>{formatCount(track.likes)}</span>
                </a>
              </li>
            )}
            {track.reposts > 0 && (

              <li>
                <a href="/" className="ministats-reposts">
                  <span>{formatCount(track.reposts)}</span>
                </a>
              </li>
            )}
            {track.comments > 0 && (
              <li>
                <a href="/" className="ministats-comments">
                  <span>{formatCount(track.comments)}</span>
                </a>
              </li>
            )}
          </Stats>
        </Wrapper>
      </>
    );
  }
}

SongContent.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    songURL: PropTypes.string,
    genre: PropTypes.string,
    cover: PropTypes.string,
    likes: PropTypes.number,
    plays: PropTypes.number,
    comments: PropTypes.number,
    reposts: PropTypes.number,
    albumId: PropTypes.number,
    artist: PropTypes.string,
  }).isRequired,
};

export default SongContent;
