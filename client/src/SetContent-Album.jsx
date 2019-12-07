import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Stats,
  Title,
  Username,
} from './StyledContent';

const Album = ({ data }) => ('');

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
