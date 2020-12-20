import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import { Username as UsernameWrapper } from './StyledContent';
import withPopover from './hoc/withPopover';

const UserDialog = (props) => {
  const {
    user, isMousedOver, position, onFocus, onLeave,
  } = props;

  return (
    <UsernameWrapper>
      <a href="/">
        <span>{user.fullName}</span>
      </a>
      {isMousedOver && (
        <UserCard
          data={user}
          position={position}
          handleFocus={onFocus}
          handleLeave={onLeave}
        />
      )}
    </UsernameWrapper>
  );
};

UserDialog.propTypes = {
  isMousedOver: PropTypes.bool.isRequired,
  position: PropTypes.array.isRequired,
  onFocus: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withPopover(UserDialog);
