import React from 'react';
import Sidebar from './Sidebar';

const Container = window.styled.div`
  & * {
    font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
    color: #999;
  }

  a, a:visited {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
  }

  margin: auto;
  height: auto;
  width: 330px;
  padding: 46px 0 30px;
`;

const Wrapper = window.styled.div`
  position: relative;
  padding-top: 20px;
  height: inherit;
`;

export default () => (
  <div>
    <Container>
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </Container>
  </div>
);
