import React from 'react';
import PropTypes from 'prop-types';
import styledcomponents from 'styled-components';
import UserCard from './UserCard';
import withPopover from './hoc/withPopover';

const styled = window.styled ? window.styled : styledcomponents;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  word-wrap: break-word;
`;

const Avatar = styled.span`
    background-image: url(${({ avatar }) => avatar});
    width: 40px;
    height: 40px;
    opacity: 1;
    border: 2px solid #fff;
    box-sizing: border-box;
    background-origin: border-box;
    border-radius: 50%;
    text-align: center;
    position: relative;
    background-repeat: no-repeat;
    transition: opacity .2s linear;
    background-size: cover;
    background-position: 50% 50%;
    display: block;
  }
`;

const UserBadge = (props) => {
  const { user, isMousedOver, position, onFocus, onLeave } = props;
  return (
    <Wrapper>
      <Avatar avatar={user.avatar} />
      {isMousedOver && (
        <UserCard
          data={user}
          position={position}
          handleFocus={onFocus}
          handleLeave={onLeave}
        />
      )}
    </Wrapper>
  );
};

UserBadge.propTypes = {
  isMousedOver: PropTypes.bool.isRequired,
  position: PropTypes.array.isRequired,
  onFocus: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withPopover(UserBadge);
