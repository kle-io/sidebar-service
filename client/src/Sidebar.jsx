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
  id: 2, title: 'Lulu Is the Cat I Like Best', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Lulu_Is_the_Cat_I_Like_Best.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/people', likes: 87001, comments: 53070, reposts: 80675, albumId: 15, userUsername: 'Adrianna Borer', plays: 435882,
}, {
  id: 3, title: 'Memories Station of Tomorrow', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/Memories_Station_of_Tomorrow.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/people', likes: 93945, comments: 31460, reposts: 93471, albumId: 13, userUsername: 'Salma Anderson', plays: 3514645,
}, {
  id: 4, title: 'You Can t Fail', songURL: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/alternative/You_Can_t_Fail.mp3', genre: 'alternative', cover: 'http://lorempixel.com/480/480/people', likes: 7278, comments: 59745, reposts: 87126, albumId: 11, userUsername: 'Mrs. Zena Gibson', plays: 276845,
}];

const track = {
  id: 47,
  title: 'Tibet',
  songUrl: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/cinematic/Tibet.mp3',
  genre: 'cinematic',
  cover: 'https://lorempixel.com/50/50/cats',
  likes: 82972,
  comments: 30632,
  reposts: 34188,
  userUsername: 'Shanie_Murazik8',
  albumId: 10,
  user: {
    username: 'Shanie_Murazik8',
    fullName: 'Naomie Cassin',
    followers: 2710,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg',
    location: 'Coleport, FL',
  },
  album: {
    id: 10,
    cover: 'https://lorempixel.com/50/50/animals',
    type: 'EP',
    title: 'Fish Networked',
    year: 2019,
    userUsername: 'Matilda.Kuhic',
    user: {
      username: 'Matilda.Kuhic',
      fullName: 'Izabella Emmerich',
      followers: 38081,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sunshinedgirl/128.jpg',
      location: 'North Bennietown, CT',
    },
  },
  playlists: [
    {
      id: 39,
      cover: 'https://lorempixel.com/50/50/food',
      title: 'Beauty Facilitator Orchestrator',
      likes: 0,
      reposts: 0,
      userUsername: 'Michelle_Herman12',
      playlistTrack: {
        id: 269,
        playlistId: 39,
        trackId: 47,
      },
      user: {
        username: 'Michelle_Herman12',
        fullName: 'Vicky Cormier',
        followers: 83379,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
        location: 'New Josianemouth, CT',
      },
    },
    {
      id: 4,
      cover: 'https://lorempixel.com/50/50/people',
      title: 'Incredible Cotton Soap',
      likes: 2,
      reposts: 4,
      userUsername: 'Kiel_Batz',
      playlistTrack: {
        id: 333,
        playlistId: 4,
        trackId: 47,
      },
      user: {
        username: 'Kiel_Batz',
        fullName: 'Royal Schimmel',
        followers: 1374,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg',
        location: 'New Samarabury, FL',
      },
    },
    {
      id: 31,
      cover: 'https://lorempixel.com/50/50/fashion',
      title: 'Track Polarised virtual',
      likes: 9,
      reposts: 0,
      userUsername: 'Curtis25',
      playlistTrack: {
        id: 572,
        playlistId: 31,
        trackId: 47,
      },
      user: {
        username: 'Curtis25',
        fullName: 'Emma Kemmer',
        followers: 60697,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg',
        location: 'New Clovis, KS',
      },
    },
  ],
  UserShare: [
    {
      username: 'Lavern.Schultz',
      fullName: 'Rose Morar',
      followers: 81923,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg',
      location: 'West Alba, IA',
      share: {
        id: 84,
        userUsername: 'Lavern.Schultz',
        trackId: 47,
      },
    },
    {
      username: 'Bruce.Auer',
      fullName: 'Tobin Schmeler',
      followers: 10778,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/layerssss/128.jpg',
      location: 'West Jean, AL',
      share: {
        id: 392,
        userUsername: 'Bruce.Auer',
        trackId: 47,
      },
    },
    {
      username: 'Lina41',
      fullName: 'Shayna Schimmel',
      followers: 30204,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg',
      location: 'West Nikita, IA',
      share: {
        id: 605,
        userUsername: 'Lina41',
        trackId: 47,
      },
    },
    {
      username: 'Vicky90',
      fullName: 'Lupe Emard',
      followers: 62020,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg',
      location: 'West Gregoryburgh, CA',
      share: {
        id: 614,
        userUsername: 'Vicky90',
        trackId: 47,
      },
    },
    {
      username: 'Peggie_Lakin95',
      fullName: 'Renee Kulas',
      followers: 80597,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg',
      location: 'Carachester, OK',
      share: {
        id: 852,
        userUsername: 'Peggie_Lakin95',
        trackId: 47,
      },
    },
    {
      username: 'Lorenz83',
      fullName: 'Demarcus Powlowski DDS',
      followers: 29100,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg',
      location: 'Adolfshire, FL',
      share: {
        id: 854,
        userUsername: 'Lorenz83',
        trackId: 47,
      },
    },
    {
      username: 'Rose.Monahan',
      fullName: 'Ms. Greg Blick',
      followers: 18819,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg',
      location: 'Quentinland, ND',
      share: {
        id: 903,
        userUsername: 'Rose.Monahan',
        trackId: 47,
      },
    },
  ],
  UserFavorite: [
    {
      username: 'Darby_Waters40',
      fullName: 'Mrs. Charlotte Effertz',
      followers: 2764,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sachingawas/128.jpg',
      location: 'East Alexzander, NC',
      favorite: {
        id: 33,
        userUsername: 'Darby_Waters40',
        trackId: 47,
      },
    },
    {
      username: 'Vena_Aufderhar64',
      fullName: 'Elna Cronin',
      followers: 72695,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vc27/128.jpg',
      location: 'North Ervin, MD',
      favorite: {
        id: 34,
        userUsername: 'Vena_Aufderhar64',
        trackId: 47,
      },
    },
    {
      username: 'Vida.Swaniawski98',
      fullName: 'Verner Emmerich',
      followers: 56372,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stan/128.jpg',
      location: 'Gloverfurt, PA',
      favorite: {
        id: 129,
        userUsername: 'Vida.Swaniawski98',
        trackId: 47,
      },
    },
    {
      username: 'Grayson.Baumbach47',
      fullName: 'Matilde Kunde',
      followers: 32477,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg',
      location: 'Mosciskistad, IL',
      favorite: {
        id: 385,
        userUsername: 'Grayson.Baumbach47',
        trackId: 47,
      },
    },
    {
      username: 'Eldridge81',
      fullName: 'Miss Amber Kunde',
      followers: 67579,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg',
      location: 'East Morgan, GA',
      favorite: {
        id: 405,
        userUsername: 'Eldridge81',
        trackId: 47,
      },
    },
    {
      username: 'German38',
      fullName: "Trenton O'Reilly",
      followers: 70556,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg',
      location: 'Runolfsdottirberg, VA',
      favorite: {
        id: 873,
        userUsername: 'German38',
        trackId: 47,
      },
    },
    {
      username: 'Marisol.Moore4',
      fullName: 'Fermin Bartell',
      followers: 71243,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_pedropinho/128.jpg',
      location: 'New Toneystad, NV',
      favorite: {
        id: 778,
        userUsername: 'Marisol.Moore4',
        trackId: 47,
      },
    },
  ],
};

export default () => (
  <Wrapper>
    <Dashbox />
    <Module title="Related tracks">
      <BadgeList data={trackrs} related />
    </Module>
    <Module title="In albums">
      <BadgeList data={[track.album]} />
    </Module>
    <Module title="In playlists">
      <BadgeList data={track.playlists} />
    </Module>
    {/* TODO: Pass in UserList */}
    <Module count={10001} title="likes" />
    <Module count={435882} title="reposts" />
  </Wrapper>
);
