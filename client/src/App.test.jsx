import renderer from 'react-test-renderer';
import axios from 'axios';
import App from './App';

jest.mock('axios');
jest.mock('./Module', () => () => 'Module');
jest.mock('./UserList', () => () => 'UserList');
jest.mock('./BadgeList', () => () => 'BadgeList');

describe('App', () => {
  it('fetches async data', (done) => {
    const track = {
      id: 7,
      title: 'Cloud Control',
      songUrl: 'https:/s3-us-west-1.amazonaws.com/kleio.sidebar/tracks/ambient/Cloud_Control.mp3',
      genre: 'ambient',
      cover: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/covers/art-5.jpg',
      likes: 78452,
      comments: 4705,
      reposts: 80665,
      userUsername: 'Alexys1',
      albumId: null,
      user: {
        username: 'Alexys1',
        fullName: 'Alfred Erdman',
        followers: 57740,
        followed: true,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/benjamin_knight/128.jpg',
        location: 'Hudsonside, OH',
      },
      album: null,
      UserShare: [{
        username: 'Alexys1',
        fullName: 'Alfred Erdman',
        followers: 57740,
        followed: true,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/benjamin_knight/128.jpg',
        location: 'Hudsonside, OH',
        share: {
          id: 78,
          userUsername: 'Alexys1',
          trackId: 7,
        },
      }],
      UserFavorite: [{
        username: 'Francesco.Howell77',
        fullName: 'Frederic Abbott',
        followers: 78898,
        followed: false,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gregsqueeb/128.jpg',
        location: 'East Bonniestad, AK',
        favorite: {
          id: 31,
          userUsername: 'Francesco.Howell77',
          trackId: 7,
        },
      }],
      playlists: [{
        id: 34,
        cover: 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/covers/art-33.jpg',
        title: 'SCSI viral',
        likes: 5,
        reposts: 2,
        userUsername: 'Matilda.Kuhic',
        playlistTrack: {
          id: 1225,
          playlistId: 34,
          trackId: 7,
        },
        user: {
          username: 'Matilda.Kuhic',
          fullName: 'Izabella Emmerich',
          followers: 38082,
          followed: true,
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sunshinedgirl/128.jpg',
          location: 'North Bennietown, CT',
        },
      }],
    };
    const promise = new Promise((resolve, reject) => {
      setTimeout((() => resolve({
        data: track,
      })), 100);
    });

    axios.get = jest.fn(() => promise);

    const wrapper = mount(<App />);

    // Assertion that component state is empty before promise resolves
    expect(wrapper.state('track')).not.toHaveProperty('id');

    // Resolve the promise
    promise.then(() => {
      // Wait for all asynchronous events to be executed
      setImmediate(() => {
        // rerender the component
        wrapper.update();
        expect(wrapper.state('track')).toMatchObject(track);
        axios.get.mockClear();
        done();
      });
    });
  });

  it('fetches async data but fails', (done) => {
    const promise = new Promise(
      (reject) => setTimeout(() => reject(new Error('Doh')), 100),
    );

    axios.get = jest.fn(() => promise);

    const wrapper = mount(<App />);

    promise.catch(() => {
      // Wait for all asynchronous events to be executed
      setImmediate(() => {
        // rerender the component
        wrapper.update();
        expect(wrapper.state('track')).not.toHaveProperty('id');
        expect(wrapper.find('.error').length).toEqual(1);
        axios.get.mockClear();
        done();
      });
    });
  });

  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
