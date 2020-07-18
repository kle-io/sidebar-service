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
      followed: data.followed,
    };
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    fetch(`/api/sidebar/users/${data.username}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ followers: user.followers, followed: user.followed });
      });
  }

  handleFollow() {
    let { followers } = this.state;
    const { followed } = this.state;
    const { data: { username } } = this.props;
    if (followed) {
      followers -= 1;
    } else {
      followers += 1;
    }

    this.setState((state) => ({ followers, followed: !state.followed }), () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      };
      fetch(`/api/sidebar/users/${username}`, requestOptions)
        .then((response) => response.json());
    });
  }

  render() {
    const {
      data, position, handleFocus, handleLeave,
    } = this.props;
    const { followers, followed } = this.state;
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
          <UserCardButton
            handleFollow={this.handleFollow}
            username={data.username}
            selected={followed}
          />
        </CardContent>
      </Card>
    );
  }
}

UserCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    followed: PropTypes.bool,
    followers: PropTypes.number.isRequired,
    location: PropTypes.string,
  }),
  handleLeave: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

UserCard.defaultProps = {
  data: {
    avatar: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/blue-linear-gradient-purple-151x151.png',
    location: '',
  },
};

export default UserCard;
