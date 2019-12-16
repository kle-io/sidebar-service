import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { formatCount } from '../lib';
import UserCardButton from './UserCardButton';

const Card = window.styled.div`
  box-sizing: border-box;
  outline: none;
  width: 150px;
  min-height: 199px;
  position: absolute;
  top: 25px;
  left: 0;
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

const Arrow = window.styled.div`
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

const CardContent = window.styled.div`
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;

`;

const Avatar = window.styled.a`
    &&& {
    display:block;
    width: 80px;
    height: 80px;
    margin: 5px auto 15px;
    text-decoration: none;
    }
`;

const ImageContainer = window.styled.div`
  background: none;
  height: 80px;
  width: 80px;
  text-align: center;
  position: relative;
`;

const Image = window.styled.span`
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 80px;
  height: 80px;
  opacity: 1;
  transition: opacity .2s linear;
`;

const DescriptionContainer = window.styled.div`
  font-size: 14px;
  margin-top: 15px;
  text-align: center;

  a {
    color: #333;
  }
`;

const StatsContainer = window.styled.div`
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

const LocationContainer = window.styled.div`
  font-size: 12px;
  font-weight: 100;
  color: #999;

  p {
    margin: 0 0 10px;
  }
`;

// tooltip

class UserCard extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    // set followers to props.followers
    this.state = {
      followers: data.followers,
      followed: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { followed } = this.state;
    let { followers } = this.state;

    // put request
    if (followed) {
      this.setState({ followers: followers -= 1, followed: false });
    } else {
      this.setState({ followers: followers += 1, followed: true });
    }
  }

  render() {
    const { data, position, handleFocus, handleLeave } = this.props;
    const { followers } = this.state;
    return (
      <Card
        position={position}
        onMouseEnter={(e) => handleFocus(e)}
        onMouseLeave={handleLeave}
      >
        <Arrow />
        <CardContent>
          <Avatar href="/">
            <ImageContainer>
              <Image url={data.avatar} />
            </ImageContainer>
          </Avatar>
          <DescriptionContainer>
            <a href="/" title={`Visit ${data.fullName}'s profile`}>{data.fullName}</a>
          </DescriptionContainer>
          <StatsContainer>
            <ul className="stats-group">
              <li title={`${followers}, followers`}>
                <a href="/">
                  <span>{formatCount(followers)}</span>
                </a>
              </li>
            </ul>
          </StatsContainer>
          <LocationContainer>
            <p>{data.location}</p>
          </LocationContainer>
          <UserCardButton handleFollowersCount={this.handleClick} />
        </CardContent>
      </Card>
    );
  }
}

UserCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    location: PropTypes.string,
  }),
  position: PropTypes.number.isRequired,
};

UserCard.defaultProps = {
  data: {
    avatar: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/blue-linear-gradient-purple-151x151.png',
    location: '',
  },
};

export default UserCard;
