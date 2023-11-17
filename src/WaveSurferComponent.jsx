import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';
import ReactDOM from 'react-dom';

const WaveSurferComponent = () => {
  const waveformRef = useRef(null);
  const [loop, setLoop] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0); //new

  const Marker = ({ positionInSeconds, onRemove }) => {
    return (
      <div>
        Marker at: {positionInSeconds.toFixed(2)}
        <button className="remove-button" onClick={onRemove}>Remove</button>
      </div>
    );
  };

  let ws;
  useEffect(() => {
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      url: '310.mp3',
    });
    console.log('WaveSurfer instance created:', ws);

    // Update the current time when playback position changes
    ws.on('audioprocess', () => {
      setCurrentTime(ws.getCurrentTime());
    });

    const wsRegions = ws.registerPlugin(RegionsPlugin.create());

    const random = (min, max) => Math.random() * (max - min) + min;
    const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`;

    ws.on('decode', () => {
      wsRegions.addRegion({
        start: 1,
        end: 3,
        content: 'Resize me',
        color: randomColor(),
        drag: false,
        resize: true,
      });

    });

    let activeRegion = null;
    wsRegions.on('region-in', (region) => {
      activeRegion = region;
    });
    wsRegions.on('region-out', (region) => {
      if (activeRegion === region) {
        if (loop) {
          region.play();
        } else {
          activeRegion = null;
        }
      }
    });
    wsRegions.on('region-clicked', (region, e) => {
      e.stopPropagation();
      activeRegion = region;
      region.play();
      region.setOptions({ color: randomColor() });
    });
    ws.on('interaction', () => {
      activeRegion = null;
    });

    ws.once('decode', () => {
      // Your code to update zoom level on slider change
    });
    //
    // Add a click event listener to the waveform container
    waveformRef.current.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audioPlaying) {
        // If audio is playing, do not create a new marker
        return;
      }
      const clickX = e.clientX - waveformRef.current.getBoundingClientRect().left;
      const positionInSeconds = ws.getDuration() * (clickX / waveformRef.current.clientWidth);
      const markerColor = randomColor();

      // Create a region and store a reference to it
      const region = wsRegions.addRegion({
        start: positionInSeconds,
        content: `Marker at: ${positionInSeconds.toFixed(2)} <button class="remove-button">Remove</button>`,
        color: markerColor,
      });
      // Function to remove the region when the button is clicked
      const handleRemove = () => {
        region.remove();
      };
      // Set the content of the region using JSX
      ReactDOM.render(
        <Marker positionInSeconds={positionInSeconds} onRemove={handleRemove} />,
        region.element
      );
      
    });


    // Clean up when the component unmounts
     return () => {
      ws.destroy();
    };
  }, [loop]);


  return (
    <div>
      <div id="waveform" ref={waveformRef}></div>
      <p>
        <label>
          <input type="checkbox" checked={loop} onChange={() => setLoop(!loop)} />
          Loop regions
        </label>
      </p>
      <p>
        {ws && (
          <>
            <button onClick={() => ws.playPause()}>Play/Pause</button>
            <button onClick={() => ws.skipBackward()}>Skip Backward</button>
            <button onClick={() => ws.skipForward()}>Skip Forward</button>
            <input
              type="range"
              min={0}
              max={ws.getDuration() || 0} // Check if ws exists before accessing getDuration
              value={currentTime}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                ws.seekTo(newTime / (ws.getDuration() || 1));
                setCurrentTime(newTime);
              }}
            />
          </>
        )}
        <div>Current Time: {currentTime.toFixed(2)}</div>
        {ws && <div>Duration: {(ws.getDuration() || 0).toFixed(2)}</div>}
      </p>
    </div>
  );
};

export default WaveSurferComponent; 






{/* <div id="regions" style={{ position: 'relative' }}>
{/* Render the regions on the waveform */}
{/* {wsRegions &&
    wsRegions.map((region, index) => (
        <div
            key={index}
            className="region-marker"
            style={{
                left: (region.start / wavesurferRef.current.getDuration()) * 100 + '%',
                width: ((region.end - region.start) / wavesurferRef.current.getDuration()) * 100 + '%',
            }}
        />
    ))}
</div>
<div id="timeline" style={{ position: 'absolute', top: '120px', width: '100%', height: '20px' }}>
{/* This is where the dots will be added */}
{/*</div>  */}