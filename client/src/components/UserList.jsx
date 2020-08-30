import React from 'react';
import styledcomponents from 'styled-components';
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
      {users
        && users.map((user) => (
          <li key={user.id}>
            <UserBadge user={user} />
          </li>
        ))}
    </ul>
  </Wrapper>
);

export default UserList;
