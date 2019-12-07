import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Username,
} from './StyledContent';

const Album = ({ data }) => (
  <>
    <Wrapper>
      <Title>
        <div>
          <Username>
            <a href="/"><span>{data.artist}</span></a>
          </Username>
          <a href="/"><span>{data.title}</span></a>
        </div>
      </Title>
      {(data.type || data.year) && (
        <span>
          {data.type}
          &nbsp;·&nbsp;
          {data.year}
        </span>
      )}
    </Wrapper>
  </>
);

Album.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    artist: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.number,
  }),
};

Album.defaultProps = {
  data: {},
};

export default Album;
