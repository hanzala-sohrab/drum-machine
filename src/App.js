import { useEffect, useRef, useState } from 'react';
import './App.css';
import Q from './static/audio/Heater-1.mp3';
import W from './static/audio/Heater-2.mp3';
import E from './static/audio/Heater-3.mp3';
import A from './static/audio/Heater-4_1.mp3';
import S from './static/audio/Heater-6.mp3';
import D from './static/audio/Dsc_Oh.mp3';
import Z from './static/audio/Kick_n_Hat.mp3';
import X from './static/audio/RP4_KICK_1.mp3';
import C from './static/audio/Cev_H2.mp3';

const App = () => {
  const [audioDescription, setAudioDescription] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  const audioElementForQ = useRef(null);
  const audioElementForW = useRef(null);
  const audioElementForE = useRef(null);
  const audioElementForA = useRef(null);
  const audioElementForS = useRef(null);
  const audioElementForD = useRef(null);
  const audioElementForZ = useRef(null);
  const audioElementForX = useRef(null);
  const audioElementForC = useRef(null);

  const audio = {
    'Q': [audioElementForQ, 'Heater 1'],
    'W': [audioElementForW, 'Heater 2'],
    'E': [audioElementForE, 'Heater 3'],
    'A': [audioElementForA, 'Heater 4'],
    'S': [audioElementForS, 'Clap'],
    'D': [audioElementForD, 'Open HH'],
    'Z': [audioElementForZ, 'Kick n\' Hat'],
    'X': [audioElementForX, 'Kick'],
    'C': [audioElementForC, 'Closed HH'],
  };

  const handleClick = (event) => {
    const buttonText = event.target.textContent;
    if (buttonText in audio) {
      console.log('CLICKED ', buttonText);
      const [audioElement, description] = audio[buttonText];
      audioElement.current.play();
      setAudioDescription(description);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (key in audio) {
      console.log('KEY = ', key);
      const [audioElement, description] = audio[key];
      audioElement.current.play();
      setAudioDescription(description);
    }
  };


  return (
    <div id='drum-machine'>
      <div className="container" id='display'>
        <button className="drum-pad" id="q" onClick={(event) => handleClick(event)}>
          Q
          <audio src={Q} ref={audioElementForQ} className='clip' id='Q'></audio>
        </button>
        <button className="drum-pad" id="w" onClick={(event) => handleClick(event)}>
          W
          <audio src={W} ref={audioElementForW} className='clip' id='W'></audio>
        </button>
        <button className="drum-pad" id="e" onClick={(event) => handleClick(event)}>
          E
          <audio src={E} ref={audioElementForE} className='clip' id='E'></audio>
        </button>
        <button className="drum-pad" id="a" onClick={(event) => handleClick(event)}>
          A
          <audio src={A} ref={audioElementForA} className='clip' id='A'></audio>
        </button>
        <button className="drum-pad" id="s" onClick={(event) => handleClick(event)}>
          S
          <audio src={S} ref={audioElementForS} className='clip' id='S'></audio>
        </button>
        <button className="drum-pad" id="d" onClick={(event) => handleClick(event)}>
          D
          <audio src={D} ref={audioElementForD} className='clip' id='D'></audio>
        </button>
        <button className="drum-pad" id="z" onClick={(event) => handleClick(event)}>
          Z
          <audio src={Z} ref={audioElementForZ} className='clip' id='Z'></audio>
        </button>
        <button className="drum-pad" id="x" onClick={(event) => handleClick(event)}>
          X
          <audio src={X} ref={audioElementForX} className='clip' id='X'></audio>
        </button>
        <button className="drum-pad" id="c" onClick={(event) => handleClick(event)}>
          C
          <audio src={C} ref={audioElementForC} className='clip' id='C'></audio>
        </button>
        <p id='desc'>{audioDescription}</p>
      </div>
    </div>
  );
}

export default App;
