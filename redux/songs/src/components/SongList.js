import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//Class compnent example
class SongList extends React.Component {
  renderedList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderedList()}</div>;
  }
}

//get the state wanted from store.
const mapsStateToProps = (state) => {
  return { songs: state.songs };
};

//connect is a function that returns a function. We first call connect with a mapping
//function (mapStateToProps) and a list of action creators we wanted to use ({selectSong}),
//and then call the returned function with the coponent (SongList). The result is that we
//can get the desired state from redux store and action creators(ACs) as props in the
//component. the AC when called from the props is automaticallyed called with redux dispatch()
export default connect(mapsStateToProps, { selectSong })(SongList);
