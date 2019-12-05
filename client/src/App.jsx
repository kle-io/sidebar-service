import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

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
  `;

export default () => (
  <div>
    <Container>
      <Hero />
      <Wrapper>
        <About />
        <Sidebar />
      </Wrapper>
    </Container>
  </div>
);
