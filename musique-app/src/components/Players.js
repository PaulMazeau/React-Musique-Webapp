import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PLayerControl from'./PlayerControls';


function Players(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsplaying] = useState(false);

    useEffect (() => {
        if (isPlaying){
            audioEl.current.play();
        } else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) =>{
        if (forwards){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;


                if(temp > props.songs.length - 1){
                    temp = 0;
                }

                return temp; 
            })
        }else{
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp--;


                if(temp < 0){
                    temp = props.song.length - 1;
                }

                return temp; 
        });

    }
    }

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>En cours d'écoute</h4>
            <PlayerDetails 
            song={props.songs[props.currentSongIndex]}
            />
            <PLayerControl 
            isPlaying={isPlaying} 
            setIsplaying={setIsplaying} 
            SkipSong={SkipSong}
            />
    <p><strong>Morceau suivant:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}

export default Players
