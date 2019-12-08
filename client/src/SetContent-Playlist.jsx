import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Stats,
  Title,
  Username,
} from './StyledContent';
import { formatCount } from '../lib';

const Playlist = ({ data }) => (
  <>
    <Wrapper>
      <Title>
        <div className="truncate">
          <Username>
            <a href="/"><span>{data.username}</span></a>
          </Username>
          <a href="/"><span>{data.title}</span></a>
        </div>
      </Title>
      <Stats>
        {data.likes > 0 && (
          <li>
            <a href="/" className="ministats-likes">
              <span>{formatCount(data.likes)}</span>
            </a>
          </li>
        )}
        {data.reposts > 0 && (
          <li>
            <a href="/" className="ministats-reposts">
              <span>{formatCount(data.reposts)}</span>
            </a>
          </li>
        )}
      </Stats>
    </Wrapper>
  </>
);

Playlist.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    username: PropTypes.string,
    cover: PropTypes.string,
    likes: PropTypes.number,
    reposts: PropTypes.number,
  }),
};

Playlist.defaultProps = {
  data: {},
};

export default Playlist;
