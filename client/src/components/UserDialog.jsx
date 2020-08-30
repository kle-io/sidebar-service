import React from 'react';
import UserCard from './UserCard';
import { Username as UsernameWrapper } from './StyledContent';
import withPopover from './hoc/withPopover';

// TODO: make component from Username block
const UserDialog = (props) => {
  const { user, isMousedOver, position, onFocus, onLeave } = props;

  return (
    <div>
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
    </div>
  );
};

export default withPopover(UserDialog);
