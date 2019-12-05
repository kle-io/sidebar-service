import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  min-height: 60px;
  padding-top: 5px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #999;
  text-decoration: none;
  border-bottom: 1px solid #f2f2f2;
  height: 30px;
`;

const Header = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 24px;
  color: #999;
  font-weight: 100;
`;

const Icon = styled.span`
  background-image: url("${(props) => props.url}");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 28px 28px;
  height: 18px;
  width: 24px;
  margin-right: 6px;
  display: inline-block;
`;

const icons = {
  'Related tracks': 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-sound-wave-1-240.png',
  likes: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-favorite-7-240.png',
  'In albums': 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-layer-2-240.png',
  'In playlists': 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-layer-2-240.png',
  reposts: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-retweet-2-240.png',
};

const Module = ({ title, children, count }) => (
  <Wrapper>
    <article>
      <Link href="http://example.com">
        <Header>
          {/* TODO: render icon conditionally based on title */}
          <Icon url={icons[title]} />
          <span>
            {/* TODO: truncate count */}
            {
              count < 10000 ? count : `${Math.round(count / 1000)}K`
            }
            { title }
          </span>
        </Header>
        <Header>
          <span>View all</span>
        </Header>
      </Link>
      <Content>
        {/* Content - BadgeList or User Avatar */}
        { children }
      </Content>
    </article>
  </Wrapper>
);

Module.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
};

Module.defaultProps = {
  count: '',
};

export default Module;
