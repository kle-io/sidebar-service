import React from 'react';
import styledcomponents from 'styled-components';
import UserDialog from './UserDialog';

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


const UserBadge = ({ user }) => (
  <Wrapper>
    <a href="/">
      <div>
        <UserDialog data={user}>
          <Avatar avatar={user.avatar} />
        </UserDialog>
      </div>
    </a>
  </Wrapper>
);

export default UserBadge;
