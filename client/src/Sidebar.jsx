import React from 'react';
import styled from 'styled-components';
import Dashbox from './Dashbox';
import Module from './Module';
import BadgeList from './BadgeList';

const Wrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 30px;
  right: 0;
  height: 100%;
`;

const trackrs = [{
  id: 2, title: 'Lulu Is the Cat I Like Best', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Lulu_Is_the_Cat_I_Like_Best.mp3', genre: 'alternative', cover: 'http://lorempixel.com/640/480/abstract', likes: 87001, comments: 53070, reposts: 80675, albumId: 15, artist: 'Adrianna Borer', plays: 435882,
}, {
  id: 3, title: 'Memories Station of Tomorrow', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Memories_Station_of_Tomorrow.mp3', genre: 'alternative', cover: 'http://lorempixel.com/640/480/abstract', likes: 93945, comments: 31460, reposts: 93471, albumId: 13, artist: 'Salma Anderson', plays: 3514645,
}, {
  id: 4, title: 'You Can t Fail', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/You_Can_t_Fail.mp3', genre: 'alternative', cover: 'http://lorempixel.com/640/480/abstract', likes: 7278, comments: 59745, reposts: 87126, albumId: 11, artist: 'Mrs. Zena Gibson', plays: 276845,
}];

const album = [{
  id: 15, title: 'Configuration', cover: 'http://lorempixel.com/480/480/abstract', type: 'EP', year: 2017,
}];

const playlist = [{
  id: 1,
  title: 'Jewelery generating',
  username: 'Justine_Kuhlman95',
  likes: 4,
  reposts: 0,
  cover: 'http://lorempixel.com/480/480/abstract',
},
{
  id: 2,
  title: 'Home Loan Account',
  username: 'Sid69',
  likes: 9,
  reposts: 0,
  cover: 'http://lorempixel.com/480/480/abstract',
},
{
  id: 3,
  username: 'Lavern.Schultz',
  title: 'Incredible Cotton Gloves synthesizing primary',
  likes: 0,
  reposts: 0,
  cover: 'http://lorempixel.com/480/480/abstract',
}];

export default () => (
  <Wrapper>
    <Dashbox />
    <Module title="Related tracks">
      <BadgeList data={trackrs} related />
    </Module>
    <Module title="In albums">
      <BadgeList data={album} />
    </Module>
    <Module title="In playlists">
      <BadgeList data={playlist} />
    </Module>
    {/* TODO: Pass in UserList */}
    <Module count={10001} title="likes" />
    <Module count={435882} title="reposts" />
  </Wrapper>
);
