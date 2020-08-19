import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hibike! Euphonium", duration: "1:45" },
    { title: "Crescent Moon Dance", duration: "6:32" },
    { title: "Liz to Aoi Tori", duration: "23:20" },
    { title: "Wind of Provence", duration: "3:36" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
