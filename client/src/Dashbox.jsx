import React from 'react';

const Wrapper = window.styled.div` margin: 0 0 25px; `;

const Box = window.styled.div`
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  height: 173px;
  padding: 38px;
`;

const Image = window.styled.img`
  padding-top: 1em;
`;

export default () => (
  <Wrapper>
    <article>
      <a href="https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-7">
        <Box>
          <Image
            src="https://s3-us-west-1.amazonaws.com/kleio.sidebar/assets/dashbox-pro.png"
            alt=""
          />
        </Box>
      </a>
    </article>
  </Wrapper>
);
