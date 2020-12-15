import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper, Stats, Title } from './StyledContent';
import { formatCount } from '../utils';
import UserDialog from './UserDialog';

const SongTitle = styled.span`
  color: ${({ active }) => ( active ? '#f50' : 'inherit' )}
`;

const SongContent = ({current, track, isPlaying}) => (
  <>
    <Wrapper>
      <Title>
        <UserDialog user={track.user} />
        <a href={`/${track.id}`}>
          <SongTitle active={current && isPlaying} >{track.title}</SongTitle>
        </a>
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

SongContent.propTypes = {
  current: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
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
    userUsername: PropTypes.string,
    user: PropTypes.object,
  }).isRequired,
};

export default SongContent;
