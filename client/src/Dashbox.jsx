import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` margin: 0 0 25px; `;

const Box = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  height: 173px;
  padding: 38px;
`;

export default () => (
  <Wrapper>
    <article>
      <a href="/">
        <Box />
      </a>
    </article>
  </Wrapper>
);
