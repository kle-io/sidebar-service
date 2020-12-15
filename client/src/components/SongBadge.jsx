import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SongArtwork from './SongArtwork';
import SongContent from './SongContent';

const Wrapper = styled.div`
  .songBadge__playButton {
    visibility: ${({ current, isPlaying }) => ( current && isPlaying ? 'visible' : 'hidden')}
  }
  &:hover .songBadge__playButton {
      visibility: visible;
  }
`;

const SongBadge = ({ current, track, handlePlaying, isPlaying }) => (
  <Wrapper current={current} isPlaying={isPlaying}>
    <SongArtwork
      current={current}
      track={track} 
      handlePlaying={handlePlaying}
      isPlaying={isPlaying}
    />
    <SongContent current={current} track={track} isPlaying={isPlaying} />
  </Wrapper>
);

SongBadge.propTypes = {
  current: PropTypes.bool.isRequired,
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
