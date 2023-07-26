import { useState } from "react";
import "./video.css";

function PlayButton({ children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  // let playing = false;

  // function handleClick(e) {
  //     e.stopPropagation();
  //     if(playing) onPause();
  //     else onPlay();

  //     playing =  !playing;
  // }

  return (
    <>
      <button onClick={handleClick} className="playButton">
        {children} {playing ? "▶️" : "⏸️"}
      </button>
    </>
  );
}

export default PlayButton;
