import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { formatCount } from '../lib';
import UserCardButton from './UserCardButton';
import {
  Card,
  Arrow,
  CardContent,
  Avatar,
  Image,
  ImageContainer,
  DescriptionContainer,
  StatsContainer,
  LocationContainer,
} from './UserCardStyledContent';

class UserCard extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
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
    const {
      data, position, handleFocus, handleLeave,
    } = this.props;
    const { followers } = this.state;
    return (
      <Card
        position={position}
        onMouseEnter={(e) => { handleFocus(e); }}
        onMouseLeave={() => { handleLeave(); }}
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
