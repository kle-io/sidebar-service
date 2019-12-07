import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Album from './SetContent-Album';
import Playlist from './SetContent-Playlist';

const Cover = styled.span`
  background: transparent 50%/contain no-repeat;
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  opacity: 1;
`;

const SetBadge = ({ set }) => (
  <>
    {/*
      if set.type
        Album Content
      else
        Playlist Content
      */}
    <Cover>
      <Image src={set.cover} />
    </Cover>
    {set.type ? <Album data={set} /> : <Playlist data={set} />}
  </>
);

SetBadge.propTypes = {
  // Get the shape of albums and playlists
  // proptypes array of either album shape or playlist shape
  set: PropTypes.oneOf([
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover: PropTypes.string,
      artist: PropTypes.string,
      type: PropTypes.string,
      year: PropTypes.number,
    }),
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover: PropTypes.string,
      likes: PropTypes.number,
      reposts: PropTypes.number,
    }),
  ]),
};

SetBadge.defaultProps = {
  set: {},
};

export default SetBadge;
