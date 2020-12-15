import styledcomponents from 'styled-components';

const styled = window.styled ? window.styled : styledcomponents;

const Wrapper = styled.div`
  margin-top: 4px;
  min-height: 13px;
  float: right;
  max-width: 300px;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-flex;
    font-size: 11px;
    line-height: 12px;
    list-style: none;

    
  }

  li > span {
    
  }

  li > span,
  li > a {
    margin: 5px 0;
    width: 60px;
    display: flex;
    align-items: center;
  }

  li > span:before,
  li > a:before {
    width: 16px;
    height: 12px;
    background-repeat: no-repeat;
    display: inline-block;
    content: '';
  }

  .ministats-plays:before {
    background-image: url('https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-media-control-48-240.png');
    background-size: contain;
  }

  .ministats-likes:before {
    background-image: url('https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-favorite-7-240.png');
    background-size: contain;
  }

  .ministats-reposts:before {
    background-image: url('https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-retweet-2-240.png');
    background-size: contain;
  }

  .ministats-comments:before {
    background-image: url('https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-speech-bubble-15-240.png');
    background-size: contain;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #999;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  width: 240px;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  & > a {
    height: 1.3em;
    float: left;
    color: #333;
    width: 240px;
    font-weight: 100;
    box-sizing: border-box;
  }

  a span {
    display: block;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  }
`;

const Username = styled.div`
  font-weight: 100;
  height: 100%;
  width: 100%;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  font-size: 14px;
  line-height: 1;
  position: relative;

  &&& a {
    position: relative;
  }

  a {
    color: #999;
  }

  &&& a:hover {
    color: #333;
  }
`;

export { Wrapper, Stats, Title, Username };
