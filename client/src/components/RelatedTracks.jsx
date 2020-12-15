import React from 'react';
import PropTypes from 'prop-types';
import ReactHowler from 'react-howler';
import Module from './Module';
import BadgeList from './BadgeList';

class RelatedTracks extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      src: '',
    };
    this.handlePlaying = this.handlePlaying.bind(this);
    this.playNext = this.playNext.bind(this);
  }

  handlePlaying({ songUrl }) {
    this.setState((state, props) => {
      if (state.src === songUrl) {
        return { playing: !state.playing };
      }
      return { src: songUrl, playing: true };
    });
  }
  
  playNext() {
      const { tracks } = this.props;
      const { src } = this.state;

      let idx = tracks.findIndex((track) => track.songUrl === src);
      if (idx === tracks.length - 1) {
        idx = 0;
      } else {
        idx += 1;
      }
      const next = tracks[idx].songUrl;
      this.setState({ src: next });
  }
  
  renderHowler(src, playing) {
   if (src) {
     return (
      <ReactHowler
        src={[src]}
        preload={true}
        playing={playing}
        onEnd={this.playNext}
      />
     );
   }
   return null;
  }

  render() {
    const { tracks } = this.props;
    const { playing, src } = this.state;

    return (
      <div>
        <Module title="Related tracks">
          <BadgeList data={tracks} playing={playing} current={src} handlePlaying={this.handlePlaying} related />
        </Module>
        {this.renderHowler(src, playing)}
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
