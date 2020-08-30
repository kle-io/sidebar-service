import React from 'react';
import PropTypes from 'prop-types';
import styledcomponents from 'styled-components';
import SongBadge from './SongBadge';
import SetBadge from './SetBadge';

const styled = window.styled ? window.styled : styledcomponents;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CompactListItem = styled.li`
  padding: 5px 0;
  margin-right: -6px;
  left: -6px;
  display: inline-flex;
`;

const BadgeList = ({ related, data }) => (
  <List>
    {data.map((item) => (
      <CompactListItem>
        {related ? <SongBadge track={item} /> : <SetBadge set={item} />}
      </CompactListItem>
    ))}
  </List>
);

BadgeList.propTypes = {
  related: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.oneOf([
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      songURL: PropTypes.string,
      genre: PropTypes.string,
      plays: PropTypes.number,
      cover: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.number,
      reposts: PropTypes.number,
      albumId: PropTypes.number,
      userUsername: PropTypes.string,
    }),
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
      cover: PropTypes.string,
      likes: PropTypes.number,
      reposts: PropTypes.number,
    }),
  ])),
};

BadgeList.defaultProps = {
  related: '',
  data: [],
};

export default BadgeList;
