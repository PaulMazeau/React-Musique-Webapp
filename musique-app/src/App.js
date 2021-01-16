import React from 'react';
import {useState, useEffect} from 'react';
import Players from './components/Players';

function App() {
  const [songs]= useState([
    {
      title: "1500",
      artist: "Alpha Wann",
      img_src: "./images/song-5.jpg",
      src: "./music/1500.mp3"
    },
    {
      title: "cascade",
      artist: "Alpha Wann",
      img_src: "./images/song-5.jpg",
      src: "./music/cascade.mp3"
    },
    {
      title: "macro",
      artist: "Alpha Wann",
      img_src: "./images/song-5.jpg",
      src: "./music/macro.mp3"
    },
    {
      title: "Parachute channel",
      artist: "ALpha Wan",
      img_src: "./images/song-5.jpg",
      src: "./music/parachute-channel.mp3"
    },
    {
      title: "Stupéfiant et noir",
      artist: "Alpha wann",
      img_src: "./images/song-5.jpg",
      src: "./music/oui.mp3"
    }
  ])

const [currentSongIndex, setCurrentSongIndex] = useState (0);
const [nextSongIndex, setNextSongIndex] = useState (currentSongIndex + 1);

useEffect(() => {
  setNextSongIndex (() => {
    if (currentSongIndex + 1 > songs.length - 1){
      return 0;
    } else {
      return currentSongIndex + 1;
    }

    
  })
}, [currentSongIndex])

  return (
    <div className="App">
      <Players 
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
