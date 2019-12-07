import React from 'react';
import PropTypes from 'prop-types';
import SongArtwork from './SongArtwork';
import SongContent from './SongContent';

const SongBadge = ({ track }) => (
  <>
    <SongArtwork track={track} />
    <SongContent track={track} />
  </>
);

SongBadge.propTypes = {
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
    artist: PropTypes.string,
  }),
};

SongBadge.defaultProps = {
  track: [],
};

export default SongBadge;
