import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';
import Timeline from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js';

const WavSurfer = () => {
    const wavesurferRef = useRef(null);
    const [wsRegions, setWsRegions] = useState(null);
    const [positions, setPositions] = useState([]);
    const [wsRegionscallback, setwsRegionscallback] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [addedRegions, setAddedRegions] = useState([]);

    useEffect(() => {
        
        // Initialize WaveSurfer when the component mounts
        wavesurferRef.current = WaveSurfer.create({
            container: '#waveform', // ID of the container element
            waveColor: 'violet',
            progressColor: 'purple',
            height: 100,
            responsive: true,
            hideScrollbar: true,
            cursorColor: '#0077ff',
            cursorWidth: 2,
            barWidth: 4,
            barGap: 1.5,
            skipLength: 5, 
        })
        setwsRegionscallback(wavesurferRef.current.registerPlugin(RegionsPlugin.create()))

        wavesurferRef.current.load('310.mp3');

        

        // Event listener to update the current time
        wavesurferRef.current.on('audioprocess', () => {
            setCurrentTime(wavesurferRef.current.getCurrentTime());
        });

        // Cleanup on component unmount
        return () => {
            wavesurferRef.current.destroy();
        };
    }, []); // Run this effect only once during component mount

    const handleTogglePause = () => {
        wavesurferRef.current.playPause();
    };

    const handleStop = () => {
        wavesurferRef.current.stop();
    };


    const handleAddRegion = () => {
        // Give regions a random color when they are created
        const random = (min, max) => Math.random() * (max - min) + min
        const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`

        const newRegionId = `region-${Date.now()}`; // Generate a unique ID for the new region

        /* wsRegionscallback.addRegion({
            id: newRegionId,
            start: currentTime,
            end: currentTime + 0.2,
            content: 'Drag Me',
            color: randomColor(),
        }) */

        const newRegion = {
            id: newRegionId,
            start: currentTime,
            end: currentTime + 0.2,
            color: randomColor(),
        };

        wsRegionscallback.addRegion({
            ...newRegion,
            content: 'Drag Me',
        });

        // Store information about the added region in the component state
        setAddedRegions(prevRegions => [...prevRegions, newRegion]);

        console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);
    };

    const handleDeleteAllRegions = () => {
        // Remove all regions from WaveSurfer
        wsRegionscallback.clearRegions();

        // Update the state to remove all regions
        setAddedRegions([]);
    };


    ///////////////////////////////////////////////////////////////////////////////
    // Emotion Graph:
    






    return (
        <div>
            <div id="waveform"></div>
            <button id="playPauseButton" className="btn-toggle-pause" onClick={handleTogglePause}>
                Play/Pause
            </button>
            <button id="resetButton" className="btn-stop" onClick={handleStop}>
                Stop
            </button>
            <button id="addMarkerButton" className="marker-btn" onClick={handleAddRegion}>
                Add Marker
            </button> 
            <p></p>
            <button id="deleteAllButton" className="delete-all-btn" onClick={handleDeleteAllRegions}>
                Remove Markers
            </button>
        </div>
    );
};

export default WavSurfer;


/* const WavSurfer = ({audioFile, containerId }) => {
  const wavesurferRef = useRef(null);
  const wsRegionsRef = useRef(null);
  //const wsRegions = useRef(null); // Declare wsRegions as a ref
  const Marker = ({ positionInSeconds, onRemove }) => {
    return (
      <div>
        Marker at: {positionInSeconds.toFixed(2)}
        <button className="remove-button" onClick={onRemove}>Remove</button>
      </div>
    );
  };
  let wavesurfer;
  useEffect(() => {
    const container = document.getElementById(containerId);
    
    if (!container) {
      console.error(`Container with ID '${containerId}' not found.`);
      return;
    }

    const wavesurfer = WaveSurfer.create({
      container: container,
      waveColor: "#0077ff",
      progressColor: "#00326b",
      height: 100,
      responsive: true,
      hideScrollbar: true,
      cursorColor: '#0077ff',
      cursorWidth: 2,
      barWidth: 4,
      barGap: 1.5,
      skipLength: 5,
    });

    // Initialize the Regions plugin
    const wsRegions = wavesurfer.registerPlugin(RegionsPlugin.create())

    wavesurferRef.current = wavesurfer;

    // Give regions a random color when they are created
    const random = (min, max) => Math.random() * (max - min) + min
    const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`

     // Create some regions at specific time ranges
    wavesurfer.on('decode', () => {
        // Regions
        wsRegions.addRegion({
            start: 3.5,
            end: 5.5,
            content: 'Drag/Resize me',
            color: 'rgba(190, 210, 80, 0.6)',
            drag: false,
            resize: true,
        })
        wsRegions.addRegion({
            start: 0.5,
            content: 'Drag Me',
            color: 'rgba(247, 188, 3, 1)',
        })
        wsRegions.addRegion({
            start: 1.5,
            content: 'Drag Me',
            color: 'rgba(163, 210, 79, 1)',
        })
        wsRegions.addRegion({
            start: 2.5,
            content: 'Drag Me',
            color: 'rgba(253, 176, 192, 1)',
        })  
    })



    wavesurfer.load(audioFile); // Load the audio file passed as a prop
    return () => {
        // Destroy the WaveSurfer instance when the component unmounts
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
        }
    };

  }, [audioFile, containerId]);// Add audioFile and containerId as dependencies



  const handleTogglePause = () => {
    wavesurferRef.current.playPause();
  };

  const handleStop = () => {
    wavesurferRef.current.stop();
  };




  return (
    <div className="player-wrap">
    <div id={containerId}></div>
    <div className="audio-controls">
        <button type="button" className="btn-toggle-pause" onClick={handleTogglePause}>
            Play/Pause
        </button>
        <button type="button" className="btn-stop" onClick={handleStop}>
            Stop/Reset
        </button>
    </div>
  </div>
  );
};

export default WavSurfer; */