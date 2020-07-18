import React from 'react';
import styledcomponents from 'styled-components';
import axios from 'axios';
import Dashbox from './Dashbox';
import Module from './Module';
import BadgeList from './BadgeList';
import { formatCount } from '../lib';
import UserList from './UserList';

const styled = window.styled ? window.styled : styledcomponents;
const Container = styled.div`
  & * {
    font: 12px/1.4 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
    color: #999;
  }

  a, a:visited {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
  }

  margin: auto;
  height: auto;
  width: 330px;
`;

const Wrapper = styled.div`
  width: 300px;
  position: relative;
  height: auto;
  margin: auto;
  padding-top: 30px;
`;

const relatedTracks = [{
  id: 2,
  title: 'Lulu Is the Cat I Like Best',
  songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Lulu_Is_the_Cat_I_Like_Best.mp3',
  genre: 'alternative',
  cover: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/assets/lorempixel_480_people.jpeg',
  likes: 87001,
  comments: 53070,
  reposts: 80675,
  albumId: 15,
  user: {
    username: 'Peggie_Lakin95',
    fullName: 'Renee Kulas',
    followers: 80597,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg',
    location: 'Carachester, OK',
  },
  plays: 435882,
}, {
  id: 3,
  title: 'Memories Station of Tomorrow',
  songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Memories_Station_of_Tomorrow.mp3',
  genre: 'alternative',
  cover: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/assets/lorempixel_480_sports.jpeg',
  likes: 93945,
  comments: 31460,
  reposts: 93471,
  albumId: 13,
  user: {
    username: 'Justine_Kuhlman95',
    fullName: 'Claude Heidenreich',
    followers: 45890,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/baliomega/128.jpg',
    location: 'Karinamouth, RI',
  },
  plays: 3514645,
}, {
  id: 4,
  title: 'You Can\'t Fail',
  songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/You_Can_t_Fail.mp3',
  genre: 'alternative',
  cover: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/assets/lorempixel_480_technics.jpeg',
  likes: 7278,
  comments: 59745,
  reposts: 87126,
  albumId: 11,
  user: {
    username: 'Lavern.Schultz',
    fullName: 'Rose Morar',
    followers: 81923,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg',
    location: 'West Alba, IA',
  },
  plays: 276845,
}];

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    let trackId = Number(path.substring(1, path.length - 1));

    if (!trackId || trackId <= 1 || trackId > 102) {
      trackId = Math.floor(Math.random() * 100);
    }

    axios.get(`/api/sidebar/songs/${trackId}`)
      .then((data) => this.setState({ track: data }))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  render() {
    const { track } = this.state;
    const { playlists } = track;
    return (
      <Container>
        <Wrapper>
          <Dashbox />
          <Module title="Related tracks">
            <BadgeList data={relatedTracks} related />
          </Module>
          {track.album && (
            <Module title="In albums">
              <BadgeList data={[track.album]} />
            </Module>
          )}
          {playlists && (
            <Module title="In playlists">
              <BadgeList data={playlists.slice(0, 3)} />
            </Module>
          )}
          {track.UserFavorite && (
            <Module count={formatCount(track.likes)} title="likes">
              <UserList users={track.UserFavorite.slice(0, 9)} />
            </Module>
          )}
          {track.UserShare && (
            <Module count={formatCount((track.reposts))} title="reposts">
              <UserList users={track.UserShare.slice(0, 9)} />
            </Module>
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default Sidebar;
