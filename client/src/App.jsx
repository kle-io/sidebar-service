import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';

const GlobalStyle = createGlobalStyle`
  body {
    font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
    color: #999;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3
  }
`;

const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 1180px;
  padding: 46px 0 30px;
`;

const Hero = styled.div`
  height: 380px;
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
  height: 100vh;
`;

const About = styled.div`
  margin-right: 330px;
  width: 850px;
  border-right: 1px solid #f2f2f2;
  height: 100%;
  `;

export default () => (
  <div>
    <GlobalStyle />
    <Container>
      <Hero />
      <Wrapper>
        <About />
        <Sidebar />
      </Wrapper>
    </Container>
  </div>
);
