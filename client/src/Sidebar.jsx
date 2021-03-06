import React from 'react';

import Dashbox from './Dashbox';
import Module from './Module';
import BadgeList from './BadgeList';

const Wrapper = window.styled.div`
  width: 300px;
  position: absolute;
  top: 5px;
  right: 15px;
  height: auto;
`;

const trackrs = [{
  id: 2, title: 'Lulu Is the Cat I Like Best', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Lulu_Is_the_Cat_I_Like_Best.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/people', likes: 87001, comments: 53070, reposts: 80675, albumId: 15, userUsername: 'Adrianna Borer', plays: 435882,
}, {
  id: 3, title: 'Memories Station of Tomorrow', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Memories_Station_of_Tomorrow.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/sports', likes: 93945, comments: 31460, reposts: 93471, albumId: 13, userUsername: 'Salma Anderson', plays: 3514645,
}, {
  id: 4, title: 'You Can t Fail', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/You_Can_t_Fail.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/technics', likes: 7278, comments: 59745, reposts: 87126, albumId: 11, userUsername: 'Mrs. Zena Gibson', plays: 276845,
}];

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
    };
  }

  componentDidMount() {
    const trackId = Math.floor(Math.random() * 100);

    fetch(`/api/sidebar/songs/${trackId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ track: data }))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  render() {
    const { track } = this.state;
    const { playlists } = track;
    return (
      <Wrapper>
        <Dashbox />
        <Module title="Related tracks">
          <BadgeList data={trackrs} related />
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
        {/* TODO: Pass in UserList */}
        <Module count={10001} title="likes" />
        <Module count={435882} title="reposts" />
      </Wrapper>
    );
  }
}


export default Sidebar;
