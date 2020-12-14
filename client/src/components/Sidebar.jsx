import React from 'react';
import styledcomponents from 'styled-components';
import axios from 'axios';
import ErrorBoundary from '../ErrorBoundary';
import Dashbox from './Dashbox';
import Module from './Module';
import BadgeList from './BadgeList';
import UserList from './UserList';
import RelatedTracks from './RelatedTracks';
import { formatCount } from '../utils';

const styled = window.styled ? window.styled : styledcomponents;
const Container = styled.div`
  & * {
    font: 12px/1.4 Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda,
      Verdana, Tahoma, sans-serif;
    color: #999;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      relatedTracks: [],
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    let trackId = Number(path.substring(1, path.length - 1));

    if (!trackId || trackId <= 1 || trackId > 102) {
      trackId = Math.floor(Math.random() * 100);
    }

    axios
      .get(`/api/sidebar/songs/${trackId}`)
      .then(({ data: { track, relatedTracks } }) => this.setState({ track, relatedTracks }))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  render() {
    const { track, relatedTracks } = this.state;
    return (
      <Container>
        <Wrapper>
          <ErrorBoundary>
            <Dashbox />
	    <RelatedTracks tracks={relatedTracks} />
            {track.album && (
              <Module title="In albums">
                <BadgeList data={[track.album]} />
              </Module>
            )}
            {track.playlists && (
              <Module title="In playlists">
                <BadgeList data={track.playlists.slice(0, 3)} />
              </Module>
            )}
            {track.UserFavorite && (
              <Module count={formatCount(track.likes)} title="likes">
                <UserList users={track.UserFavorite.slice(0, 9)} />
              </Module>
            )}
            {track.UserShare && (
              <Module count={formatCount(track.reposts)} title="reposts">
                <UserList users={track.UserShare.slice(0, 9)} />
              </Module>
            )}
          </ErrorBoundary>
        </Wrapper>
      </Container>
    );
  }
}

export default Sidebar;
