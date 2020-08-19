import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  if (!props.song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      Song: {props.song.title} <br /> Duration: {props.song.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
