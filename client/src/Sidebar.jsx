import React from 'react';
import styled from 'styled-components';
import Dashbox from './Dashbox';
import Module from './Module';

const Wrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 30px;
  right: 0;
  height: 100%;
`;

export default () => (
  <Wrapper>
    <Dashbox />
    <Module title="Related tracks" />
  </Wrapper>
);
