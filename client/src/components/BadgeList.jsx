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
      <CompactListItem key={item.id}>
        {related ? <SongBadge track={item} /> : <SetBadge set={item} />}
      </CompactListItem>
    ))}
  </List>
);

BadgeList.propTypes = {
  related: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
};

BadgeList.defaultProps = {
  related: false,
  data: [],
};

export default BadgeList;
