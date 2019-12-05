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
`;

const Header = styled.h3`
  margin-top: 0;
  line-height: 24px;
  color: #999;
  font-weight: 100;
`;

const Icon = styled.span`
  background-image: url("http://lorempixel.com/640/480/");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 28px 28px;
  height: 24px;
  width: 24px;
  margin-right: 4px;
  display: inline-block;
`;

const Module = ({ title }) => (
  <Wrapper>
    <article>
      <Link href="http://example.com">
        <Header>
          {/* TODO: render icon conditionally based on title */}
          <Icon />
          <span>
            { title }
          </span>
        </Header>
        <Header>
          <span>View all</span>
        </Header>
      </Link>
      {/* Content - BadgeList or User Avatar */}
      <Content />
    </article>
  </Wrapper>
);

Module.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Module;
