import React, { useState, useEffect, useRef } from 'react';
//import WaveSurfer from 'wavesurfer.js';
//import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';
//import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
//import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js'
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';

export const WavesurferVertex = () => {
    const waveformRef = useRef(null);
    const wsRegionsRef = useRef(null);
  
    const [regions, setRegions] = useState([]);
  
    const randomColor = () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
  
    useEffect(() => {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        backend: 'WebAudio', // Choose the backend based on your preference
        height: 100, // Adjust the height as needed
        barWidth: 2, // Adjust the bar width as needed
        //url: '310.mp3',
      });
  
      ws.load('310.mp3');
  
      const wsRegions = ws.registerPlugin(RegionsPlugin.create());
      wsRegionsRef.current = wsRegions;
  
      ws.on('ready', () => {
        handleUpdateClick();
      });
  
      return () => {
        ws.destroy();
      };
    }, []);
  
    const handleUpdateClick = () => {
      const wsRegions = wsRegionsRef.current;
      const currentRegions = wsRegions.getRegions();
      currentRegions.forEach((region, index) => {
        console.log(`Region ${index + 1} - Start: ${region.start}, End: ${region.end}`);
      });
    };
  
    const handleAddRegionClick = () => {
      const wsRegions = wsRegionsRef.current;
      const newRegion = wsRegions.addRegion({
        start: 2, // adjust the start time as needed
        end: 2.2,   // adjust the end time as needed
        content: 'Marker',
        color: randomColor(),
        drag: true,
        resize: true,
      });
  
      setRegions(prevRegions => [...prevRegions, newRegion]);
    };
  
    return (
      <div>
        <div ref={waveformRef}></div>
  
        <p>
          <button onClick={handleAddRegionClick}>Add Region</button>
          <button onClick={handleUpdateClick}>Update</button>
        </p>
  
        <p>
          📖 <a href="https://wavesurfer.xyz/docs/classes/plugins_regions.RegionsPlugin">Regions plugin docs</a>
        </p>
      </div>
    );
  };
  
  export default WavesurferVertex; 