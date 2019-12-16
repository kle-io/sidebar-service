import React from 'react';


const Wrapper = window.styled.div` margin: 0 0 25px; `;

const Box = window.styled.div`
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
