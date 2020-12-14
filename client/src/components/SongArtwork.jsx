import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledcomponents from 'styled-components';

const styled = window.styled ? window.styled : styledcomponents;

const Cover = styled.span`
  background: transparent 50% / contain no-repeat;
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

const PlayButton = styled.span`
  cursor: pointer;
  visibility: hidden;
  display: inline-block;
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 6px;
  right: 6px;
  padding: 11px;
  z-index: 2;
`;

const Button = styled.a`
  width: 28px;
  height: 28px;
  margin: 1px 0 1px 1px;
  line-height: 42px;

  &::before {
    display: block;
    position: absolute;
    top: 6px;
    left: 5px;
    width: 38px;
    height: 38px;
    content: '';
    opacity: 1;
    transition: opacity 0.3s;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-image: url(${(props) => (props.isPlaying ? props.icons.pause : props.icons.play)});
  }

  &:after {
    content: '';
    opacity: 0;
    transition: opacity 0.5s;
  }
`;

const SongArtwork = ({ track, isPlaying, handlePlaying }) => {
  const icons = {
    play: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/play.png',
    pause: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/pause.png',
  };

  return (
    <Cover>
      <Image src={track.cover} />
      <PlayButton className="songBadge__playButton">
        <Button icons={icons} isPlaying={isPlaying} onClick={() => handlePlaying(track)}>{isPlaying ? 'Pause' : 'Play'}</Button>
      </PlayButton>
    </Cover>
  );
};

SongArtwork.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  handlePlaying: PropTypes.func.isRequired,
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
