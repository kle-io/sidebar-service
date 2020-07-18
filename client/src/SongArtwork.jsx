import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledcomponents from 'styled-components';

const styled = window.styled ? window.styled : styledcomponents;

const Cover = styled.span`
  background: transparent 50%/contain no-repeat;
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
  float: left;
  `;

const Image = styled.img`
  width: 50px;
  height: 50px;
  opacity: 1;
`;

class SongArtwork extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { track } = this.props;
    return (
      <Cover>
        <Image src={track.cover} />
        {/* TODO: play button - upload icons to S3  */}
      </Cover>
    );
  }
}

SongArtwork.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    songURL: PropTypes.string,
    genre: PropTypes.string,
    cover: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    reposts: PropTypes.number,
    albumId: PropTypes.number,
    userUsername: PropTypes.string,
  }).isRequired,
};

export default SongArtwork;
