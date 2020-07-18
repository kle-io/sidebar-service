import React from 'react';
import PropTypes from 'prop-types';
import styledcomponents from 'styled-components';
import Album from './SetContent-Album';
import Playlist from './SetContent-Playlist';

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

const SetBadge = ({ set }) => (
  <>
    <Cover>
      <Image src={set.cover} />
    </Cover>
    {set.type ? <Album data={set} /> : <Playlist data={set} />}
  </>
);

SetBadge.propTypes = {
  set: PropTypes.oneOf([
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cover: PropTypes.string,
      userUsername: PropTypes.string,
      type: PropTypes.string,
      year: PropTypes.number,
    }),
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      username: PropTypes.string,
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
