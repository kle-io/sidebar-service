import React from 'react';
import styledcomponents from 'styled-components';
import PropTypes from 'prop-types';
import UserBadge from './UserBadge';

const styled = window.styled ? window.styled : styledcomponents;

const Wrapper = styled.div`
  margin-top: 0;
  padding: 10px 0 8px;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & ul li {
    margin-right: -8px;
  }
`;

const UserList = ({ users }) => (
  <Wrapper>
    <ul>
      {users &&
        users.map((user) => (
          <li key={user.username}>
            <UserBadge user={user} />
          </li>
        ))}
    </ul>
  </Wrapper>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
