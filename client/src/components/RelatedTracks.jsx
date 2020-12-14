import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import Module from './Module';
import BadgeList from './BadgeList';

class RelatedTracks extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: null,
      src: '',
    };
    this.audio = React.createRef();
    this.handlePlaying = this.handlePlaying.bind(this);
  }

  handlePlaying({ id, songUrl }) {
    const { playing } = this.state;
/*
    this.setState({ playing: id, src: songUrl });
    if (playing === id) this.audio.pause();
    else this.audio.play();
    */
	  console.log('playing handled');
  }

  render() {
    const { tracks } = this.props;
    const { playing, src } = this.state;

    return (
      <div>
        <Module title="Related Tracks">
          <BadgeList data={tracks} playing={playing} handlePlaying={this.handlePlaying} related />
        </Module>
        <ReactAudioPlayer
          src={src}
          ref={(element) => { this.audio = element; }}
        />
      </div>
    );
  }
}

RelatedTracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};

RelatedTracks.defaultProps = {
  tracks: [],
};

export default RelatedTracks;
