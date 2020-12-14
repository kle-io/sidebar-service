import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SongArtwork from './SongArtwork';
import SongContent from './SongContent';

const Wrapper = styled.div`
    &:hover .songBadge__playButton {
      visibility: visible;
    }
    &:hover {
      background-color: pink;
    }
`;

const SongBadge = ({ track, handlePlaying, isPlaying }) => (
  <Wrapper>
    <SongArtwork track={track} handlePlaying={handlePlaying} isPlaying={isPlaying} />
    <SongContent track={track} isPlaying={isPlaying} />
  </Wrapper>
);

SongBadge.propTypes = {
  handlePlaying: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
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
  }),
};

SongBadge.defaultProps = {
  track: [],
};

export default SongBadge;
