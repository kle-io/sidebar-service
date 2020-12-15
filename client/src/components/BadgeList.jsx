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

const BadgeList = ({
  related, data, handlePlaying, current, playing
}) => (
  <List>
    {data.map((item) => (
      <CompactListItem key={item.id}>
        {related ? (
          <SongBadge
            track={item}
            handlePlaying={handlePlaying}
            isPlaying={playing}
            current={current === item.songUrl}
          />
        ) : (
          <SetBadge set={item} />
        )}
      </CompactListItem>
    ))}
  </List>
);

BadgeList.propTypes = {
  current: PropTypes.string,
  related: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  handlePlaying: PropTypes.func,
  playing: PropTypes.bool,
};


BadgeList.defaultProps = {
  data: [],
  current: '',
  playing: false,
  related: false,
  handlePlaying: () => {},
};

export default BadgeList;
