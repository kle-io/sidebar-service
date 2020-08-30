import styledcomponents from 'styled-components';

const styled = window.styled ? window.styled : styledcomponents;

const Card = styled.div`
  display: block;
  box-sizing: border-box;
  outline: none;
  width: 150px;
  min-height: 199px;
  position: absolute;
  top: 30px;
  left: -55px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0 2px 7px -1px rgba(0,0,0,.4);
  border-radius: 4px;
  z-index: 900;

  a {
    float: unset;
  }
`;

const Arrow = styled.div`
  left: 50%;
  margin-left: -4px;
  transform: rotate(45deg);
  top: -5px;
  bottom: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-width: 1px 0 0 1px;
  position: absolute;
  width 8px;
  height: 8px;
  box-shadow: -1px -1px -1px -1px rgba(0,0,0,.5);
  z-index: -1;
`;

const CardContent = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

const Avatar = styled.a`
    &&& {
    display:block;
    width: 80px;
    height: 80px;
    margin: 5px auto 15px;
    text-decoration: none;
    }
`;

const ImageContainer = styled.div`
  background: none;
  height: 80px;
  width: 80px;
  text-align: center;
  position: relative;
`;

const Image = styled.span`
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 80px;
  height: 80px;
  opacity: 1;
  transition: opacity .2s linear;
  display: block;
`;

const DescriptionContainer = styled.div`
  font-size: 14px;
  margin-top: 15px;
  text-align: center;

  a {
    color: #333;
  }
`;

const StatsContainer = styled.div`
  margin-bottom: 4px;

  ul.stats-group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    width: 100%;
  }

  & a {
    width: 100%;
    margin: 5px 0;
    color: #999;
    text-decoration: none;
    font-size: 11px;
    line-height: 12px;
    display: inline-block
  }
  &&& ul li span:before {
    display: inline-block;
    content: "";
    width: 16px;
    height: 13px;
    vertical-align: top;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url("https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-user-21-240.png");background-size: contain;
  }
`;

const LocationContainer = styled.div`
  font-size: 12px;
  font-weight: 100;
  color: #999;

  p {
    margin: 0 0 10px;
  }
`;

export {
  Card,
  Arrow,
  CardContent,
  Avatar,
  Image,
  ImageContainer,
  DescriptionContainer,
  StatsContainer,
  LocationContainer,
};
