import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';
//import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
 
export const WavesurferVertex = ({ audioFile, loadRandomAudioFile, initialDots, onDotPositionUpdate, onRegionInformationUpdate, onSaveDotPositions}) => {

  const wavesurferRef = useRef(null);
  const wsRegionsRef = useRef(null);
  const [addedRegions, setAddedRegions] = useState([]);
  const [dots, setDots] = useState([]);
  const [draggedDotIndex, setDraggedDotIndex] = useState(null);
  const [newRegionId, setNewRegionId] = useState(null);
  //firestore saving stuff...
  const [savedDotPositions, setSavedDotPositions] = useState([]);
  const [regionInformation, setRegionInformation] = useState([]);
  
  
  useEffect(() => {
    loadRandomAudioFile();
        // Create the WaveSurfer instance
    wavesurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      backend: 'WebAudio',
      height: 100,
      responsive: true,
      hideScrollbar: true,
      cursorColor: '#0077ff',
      cursorWidth: 2,
      barWidth: 4,
      barGap: 1.5,
      skipLength: 5,
    });

    // Register the RegionsPlugin
    const wsRegions = wavesurferRef.current.registerPlugin(RegionsPlugin.create());
    wsRegionsRef.current = wsRegions;


    // Handle region update
    wavesurferRef.current.on('region-update-end', (region) => {
      setAddedRegions((prevRegions) =>
        prevRegions.map((r) => (r.id === region.id ? { ...r, start: region.start, end: region.end } : r))
      );
    });

    // Cleanup: Destroy the wavesurfer instance when the component unmounts
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

    useEffect(() => {
    // Load the specified audio file when audioFile changes
    if (audioFile) {
      wavesurferRef.current.load(audioFile);
      console.log('Audio file loaded successfully');
    }
  }, [audioFile]); 



  



  const handleTogglePause = () => {
    wavesurferRef.current.playPause();
  };

  const handleStop = () => {
    wavesurferRef.current.stop();
  };

  const handleAddRegion = () => {
    const randomColor = () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

    const newRegionId = `region-${Date.now()}`;

    const newRegion = {
      id: newRegionId,
      start: wavesurferRef.current.getCurrentTime(),
      end: wavesurferRef.current.getCurrentTime() + 0.2,
      color: randomColor(),
      drag: true,
      resize: true,
    };

    wsRegionsRef.current.addRegion({
      ...newRegion,
      content: 'Drag Me',
    });

    setAddedRegions((prevRegions) => [
      ...prevRegions,
      {
        ...newRegion,
        dotIndex: dots.length,
      },
    ]);

    setDots((prevDots) => [
      ...prevDots,
      {
        x: 0.5,
        y: 0.5,
        color: newRegion.color,
        regionId: newRegion.id,
      },
    ]);
    setNewRegionId(newRegion.id);

    console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);
  };

  const handleUpdateClick = () => {
    const currentRegions = wsRegionsRef.current.getRegions();
    const regionInfo = currentRegions.map((region, index) => ({
      id: region.id,
      start: region.start,
      end: region.end,
      color: region.color,
    }));
  
    // Log and save
    console.log('Region Information:', regionInfo);
    setRegionInformation(regionInfo, () => {
      // Any logic that depends on regionInformation being updated can go here
    });
    onRegionInformationUpdate(regionInfo);
  };

  const handleDeleteAllRegions = () => {
    wsRegionsRef.current.clearRegions();

    setAddedRegions([]);
    setDots([]);
  };

  //vertex:
    const handleDotDragStart = (e, dotIndex) => {
        setDraggedDotIndex(dotIndex);
        
    };
    
    const scaleCoordinates = (coord, min, max) => {
        // Scale the coordinate from the current range (min to max) to the desired range (-1 to 1)
        return 2 * (coord - min) / (max - min) - 1;
    };


    const handleDotDrag = (e) => {
        if (draggedDotIndex !== null) {
          const updatedDots = [...dots];
          const dot = updatedDots[draggedDotIndex];
    
          // calculate the new position of the dot based on the mouse drag event
          const vertexRect = e.currentTarget.parentElement.getBoundingClientRect();
          const x = (e.clientX - vertexRect.left) / vertexRect.width;
          const y = (e.clientY - vertexRect.top) / vertexRect.height;
    
          dot.x = x;
          dot.y = y;
          setDots(updatedDots);
          // Update the dot positions in the parent component
          onDotPositionUpdate(updatedDots);

        }
    };    

    
    const handleDotDragEnd = () => {
        setDraggedDotIndex(null);
    };

    const handleSavePositions = () => {
        // log or store the positions of markers in the audio waveform
        const scaledDots = addedRegions.map((region) => {
            const dot = dots.find((dot) => dot.regionId === region.id);
    
            // Check if dot is defined before accessing its properties
            if (dot) {
                return {
                    id: dot.regionId, // Use the region ID as the dot ID
                    x: scaleCoordinates(dot.x, 0, 1),
                    y: scaleCoordinates(dot.y, 1, 0),
                    color: dot.color,
                };
            } else {
                // Handle the case where dot is undefined (perhaps due to an empty dots array)
                return null;
            }
        });
    
        // Filter out any null values from the array
        const validScaledDots = scaledDots.filter((dot) => dot !== null);

        // Log or store the positions of dots in the vertex
        setSavedDotPositions(validScaledDots);
        console.log('Saved Dot Positions:', validScaledDots);

    };


    const handleSaveAndUpdate = () => {
   
        handleSavePositions();
        handleUpdateClick();
        //console.log('Updated Region Information:', regionInformation);
        console.log('Updated Dot Positions:', savedDotPositions);
        //onSaveDotPositions(savedDotPositions);
        //onSavedDotPositionsUpdate(savedDotPositions);
    };

    const [showHelpTooltip, setShowHelpTooltip] = useState(false);

  const handleToggleHelpTooltip = () => {
    setShowHelpTooltip(!showHelpTooltip);
  };
  
  return (
    <div>
      <div id="waveform"></div>
      <button className="btn-toggle-pause" onClick={handleTogglePause}>
        Play/Pause
      </button>
      <button className="btn-stop" onClick={handleStop}>
        Stop
      </button>
      <button className="marker-btn" onClick={handleAddRegion}>
        Add Marker
      </button>
      <p></p>
      <button id="deleteAllButton" className="delete-all-btn" onClick={handleDeleteAllRegions}>
        Remove All Markers
      </button>

      <h2> 2. Energy and Positivity - Emotion Graph </h2>
      <p1> Please click and drag the dots that match the corresponding markers above to represent the energy/positivity you feel: </p1>
      <p></p>
      <sub-paragraph>
        The dots might be a bit slow moving! 
      </sub-paragraph>

      <div className="page-container" style={{ backgroundColor: '#d4eaf1'}}>
        <div className="centered-container">
            <div className='vertex'>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{
                        left: `${dot.x * 100}%`,
                        top: `${dot.y * 100}%`,
                        backgroundColor: dot.color,
                    }}
                    onMouseDown={(e) => handleDotDragStart(e, index)}
                    onMouseMove={handleDotDrag}
                    onMouseUp={handleDotDragEnd}
                />
            ))}
            </div>
            <button className='help-btn'
            onClick={handleToggleHelpTooltip}
            >Help</button>
            {showHelpTooltip && (
            <div className="help-tooltip">
              <img src="src/en-pos-anno.png" />
            </div>
          )}
            
        </div>
        </div>
         {/* <button id="saveMarkerDotButton" className="save-dot-marker" onClick={handleSavePositions}>Save Dot Positions</button>  */}
     <button id="saveMarkerDotButton" className="save-dot-marker" onClick={() => { handleSaveAndUpdate(); alert('Updated!'); }}>Update</button>
    </div>
  );
};

export default WavesurferVertex;   











/* import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';


export const WavesurferVertex = ({ audioFilesPage1, audioFiles, initialDots, onDotPositionUpdate, onRegionInformationUpdate, onSaveDotPositions }) => {
    console.log('Received audioFilesPage1:', audioFilesPage1);

    const wavesurferRef = useRef(null);
    const wsRegionsRef = useRef(null);
    const [addedRegions, setAddedRegions] = useState([]);
    const [dots, setDots] = useState([]);
    const [draggedDotIndex, setDraggedDotIndex] = useState(null);
    const [newRegionId, setNewRegionId] = useState(null);
  
    // firestore saving stuff...
    const [savedDotPositions, setSavedDotPositions] = useState([]);
    const [regionInformation, setRegionInformation] = useState([]);

    const [selectedAudioFile1, setSelectedAudioFile1] = useState(null);
    const [selectedAudioFile2, setSelectedAudioFile2] = useState(null);
    const [selectedAudioFile3, setSelectedAudioFile3] = useState(null);
    const [selectedAudioFile4, setSelectedAudioFile4] = useState(null);
    const [selectedAudioFile5, setSelectedAudioFile5] = useState(null);
    const [selectedAudioFile, setSelectedAudioFile] = useState(null);
    
  
    useEffect(() => {
        const loadRandomAudioFile = async () => {
          try {
            if (audioFilesPage1 && audioFilesPage1.length > 0) {
              const randomIndex = Math.floor(Math.random() * audioFilesPage1.length);
              const randomAudioFile = audioFilesPage1[randomIndex];
              console.log('Selected audio file:', randomAudioFile);
    
              // Load the selected audio file
              wavesurferRef.current.load(randomAudioFile);
              setSelectedAudioFile(randomAudioFile);
            } else {
              console.warn('No valid audio files to load.');
            }
          } catch (error) {
            console.error('Error loading random audio file:', error);
          }
        };
    
        // Create the WaveSurfer instance only if it doesn't exist
        if (!wavesurferRef.current) {
          wavesurferRef.current = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple',
            backend: 'WebAudio',
            height: 100,
            responsive: true,
            hideScrollbar: true,
            cursorColor: '#0077ff',
            cursorWidth: 2,
            barWidth: 4,
            barGap: 1.5,
            skipLength: 5,
          });
    
          // Register the RegionsPlugin
          const wsRegions = wavesurferRef.current.registerPlugin(RegionsPlugin.create());
          wsRegionsRef.current = wsRegions;
    
          // Call the function to load a random audio file
          loadRandomAudioFile();
    
          // Handle region update
          wavesurferRef.current.on('region-update-end', (region) => {
            setAddedRegions((prevRegions) =>
              prevRegions.map((r) => (r.id === region.id ? { ...r, start: region.start, end: region.end } : r))
            );
          });
        }
    
        // Cleanup: Destroy the wavesurfer instance when the component unmounts
        return () => {
          if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
          }
        };
      }, [audioFilesPage1]);



  const handleTogglePause = () => {
    wavesurferRef.current.playPause();
  };

  const handleStop = () => {
    wavesurferRef.current.stop();
  };

  const handleAddRegion = () => {
    const randomColor = () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

    const newRegionId = `region-${Date.now()}`;

    const newRegion = {
      id: newRegionId,
      start: wavesurferRef.current.getCurrentTime(),
      end: wavesurferRef.current.getCurrentTime() + 0.2,
      color: randomColor(),
      drag: true,
      resize: true,
    };

    wsRegionsRef.current.addRegion({
      ...newRegion,
      content: 'Drag Me',
    });

    setAddedRegions((prevRegions) => [
      ...prevRegions,
      {
        ...newRegion,
        dotIndex: dots.length,
      },
    ]);

    setDots((prevDots) => [
      ...prevDots,
      {
        x: 0.5,
        y: 0.5,
        color: newRegion.color,
        regionId: newRegion.id,
      },
    ]);
    setNewRegionId(newRegion.id);

    console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);
  };

  const handleUpdateClick = () => {
    const currentRegions = wsRegionsRef.current.getRegions();
    const regionInfo = currentRegions.map((region, index) => ({
      id: region.id,
      start: region.start,
      end: region.end,
      color: region.color,
    }));
  
    // Log and save
    console.log('Region Information:', regionInfo);
    setRegionInformation(regionInfo, () => {
      // Any logic that depends on regionInformation being updated can go here
    });
    onRegionInformationUpdate(regionInfo);
  };

  const handleDeleteAllRegions = () => {
    wsRegionsRef.current.clearRegions();

    setAddedRegions([]);
    setDots([]);
  };

  //vertex:
    
    const handleDotDragStart = (e, dotIndex) => {
        setDraggedDotIndex(dotIndex);
        
    };
    
    const scaleCoordinates = (coord, min, max) => {
        // Scale the coordinate from the current range (min to max) to the desired range (-1 to 1)
        return 2 * (coord - min) / (max - min) - 1;
    };


    const handleDotDrag = (e) => {
        if (draggedDotIndex !== null) {
          const updatedDots = [...dots];
          const dot = updatedDots[draggedDotIndex];
    
          // calculate the new position of the dot based on the mouse drag event
          const vertexRect = e.currentTarget.parentElement.getBoundingClientRect();
          const x = (e.clientX - vertexRect.left) / vertexRect.width;
          const y = (e.clientY - vertexRect.top) / vertexRect.height;
    
          dot.x = x;
          dot.y = y;
          setDots(updatedDots);
          // Update the dot positions in the parent component
          onDotPositionUpdate(updatedDots);

        }
    };    

    
    const handleDotDragEnd = () => {
        setDraggedDotIndex(null);
    };

    const handleSavePositions = () => {
        // log or store the positions of markers in the audio waveform
        const scaledDots = addedRegions.map((region) => {
            const dot = dots.find((dot) => dot.regionId === region.id);
    
            // Check if dot is defined before accessing its properties
            if (dot) {
                return {
                    id: dot.regionId, // Use the region ID as the dot ID
                    x: scaleCoordinates(dot.x, 0, 1),
                    y: scaleCoordinates(dot.y, 1, 0),
                    color: dot.color,
                };
            } else {
                // Handle the case where dot is undefined (perhaps due to an empty dots array)
                return null;
            }
        });
    
        // Filter out any null values from the array
        const validScaledDots = scaledDots.filter((dot) => dot !== null);

        // Log or store the positions of dots in the vertex
        setSavedDotPositions(validScaledDots);
        console.log('Saved Dot Positions:', validScaledDots);

    };


    const handleSaveAndUpdate = () => {
   
        handleSavePositions();
        handleUpdateClick();
        //console.log('Updated Region Information:', regionInformation);
        console.log('Updated Dot Positions:', savedDotPositions);
        //onSaveDotPositions(savedDotPositions);
        //onSavedDotPositionsUpdate(savedDotPositions);
    };

    const [showHelpTooltip, setShowHelpTooltip] = useState(false);

  const handleToggleHelpTooltip = () => {
    setShowHelpTooltip(!showHelpTooltip);
  };
  
  return (
    <div>
      <div id="waveform"></div>
      <button className="btn-toggle-pause" onClick={handleTogglePause}>
        Play/Pause
      </button>
      <button className="btn-stop" onClick={handleStop}>
        Stop
      </button>
      <button className="marker-btn" onClick={handleAddRegion}>
        Add Marker
      </button>
      <p></p>
      <button id="deleteAllButton" className="delete-all-btn" onClick={handleDeleteAllRegions}>
        Remove Markers
      </button>

      <h2> 2. Energy and Positivity - Emotion Graph </h2>
      <p1> Please click and drag the dots that match the corresponding markers above to represent the energy/positivity you feel: </p1>

      <div className="page-container" style={{ backgroundColor: '#d4eaf1'}}>
        <div className="centered-container">
            <div className='vertex'>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{
                        left: `${dot.x * 100}%`,
                        top: `${dot.y * 100}%`,
                        backgroundColor: dot.color,
                    }}
                    onMouseDown={(e) => handleDotDragStart(e, index)}
                    onMouseMove={handleDotDrag}
                    onMouseUp={handleDotDragEnd}
                />
            ))}
            </div>
            <button className='help-btn'
            onClick={handleToggleHelpTooltip}
            >Help</button>
            {showHelpTooltip && (
            <div className="help-tooltip">
              <img src="src/en-pos-anno.png" />
            </div>
          )}
            
        </div>
        </div>
         {/* <button id="saveMarkerDotButton" className="save-dot-marker" onClick={handleSavePositions}>Save Dot Positions</button>  */
     /*<button id="saveMarkerDotButton" className="save-dot-marker" onClick={() => { handleSaveAndUpdate(); alert('Updated!'); }}>Update</button>
    </div>
  );
};

export default WavesurferVertex;   */

















/* import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';

export const WavesurferVertex = ({ initialDots, onDotPositionUpdate, onRegionInformationUpdate}) => {
  const wavesurferRef = useRef(null);
  const wsRegionsRef = useRef(null);
  const [addedRegions, setAddedRegions] = useState([]);
  const [dots, setDots] = useState([]);
  const [draggedDotIndex, setDraggedDotIndex] = useState(null);
  const [newRegionId, setNewRegionId] = useState(null);

  //firestore saving stuff...
  const [savedDotPositions, setSavedDotPositions] = useState([]);
  const [regionInformation, setRegionInformation] = useState([]);
  

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      backend: 'WebAudio',
      height: 100,
      responsive: true,
      hideScrollbar: true,
      cursorColor: '#0077ff',
      cursorWidth: 2,
      barWidth: 4,
      barGap: 1.5,
      skipLength: 5,
    });

    const wsRegions = wavesurferRef.current.registerPlugin(RegionsPlugin.create());
    wsRegionsRef.current = wsRegions;

    wavesurferRef.current.load('310.mp3');

    wavesurferRef.current.on('region-update-end', (region) => {
      setAddedRegions((prevRegions) =>
        prevRegions.map((r) => (r.id === region.id ? { ...r, start: region.start, end: region.end } : r))
      );
    });

    return () => {
      wavesurferRef.current.destroy();
    };
  }, []);

  const handleTogglePause = () => {
    wavesurferRef.current.playPause();
  };

  const handleStop = () => {
    wavesurferRef.current.stop();
  };

  const handleAddRegion = () => {
    const randomColor = () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

    const newRegionId = `region-${Date.now()}`;

    const newRegion = {
      id: newRegionId,
      start: wavesurferRef.current.getCurrentTime(),
      end: wavesurferRef.current.getCurrentTime() + 0.2,
      color: randomColor(),
      drag: true,
      resize: true,
    };

    wsRegionsRef.current.addRegion({
      ...newRegion,
      content: 'Drag Me',
    });

    setAddedRegions((prevRegions) => [
      ...prevRegions,
      {
        ...newRegion,
        dotIndex: dots.length,
      },
    ]);

    setDots((prevDots) => [
      ...prevDots,
      {
        x: 0.5,
        y: 0.5,
        color: newRegion.color,
        regionId: newRegion.id,
      },
    ]);
    setNewRegionId(newRegion.id);

    console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);
  };

  const handleUpdateClick = () => {
    const currentRegions = wsRegionsRef.current.getRegions();
    const regionInfo = currentRegions.map((region, index) => ({
      id: region.id,
      start: region.start,
      end: region.end,
      color: region.color,
    }));
  
    // Log and save
    console.log('Region Information:', regionInfo);
    setRegionInformation(regionInfo, () => {
      // Any logic that depends on regionInformation being updated can go here
    });
    onRegionInformationUpdate(regionInfo);
  };

  const handleDeleteAllRegions = () => {
    wsRegionsRef.current.clearRegions();

    setAddedRegions([]);
    setDots([]);
  };

  //vertex:
    
    const handleDotDragStart = (e, dotIndex) => {
        setDraggedDotIndex(dotIndex);
        
    };
    
    const scaleCoordinates = (coord, min, max) => {
        // Scale the coordinate from the current range (min to max) to the desired range (-1 to 1)
        return 2 * (coord - min) / (max - min) - 1;
    };


    const handleDotDrag = (e) => {
        if (draggedDotIndex !== null) {
          const updatedDots = [...dots];
          const dot = updatedDots[draggedDotIndex];
    
          // calculate the new position of the dot based on the mouse drag event
          const vertexRect = e.currentTarget.parentElement.getBoundingClientRect();
          const x = (e.clientX - vertexRect.left) / vertexRect.width;
          const y = (e.clientY - vertexRect.top) / vertexRect.height;
    
          dot.x = x;
          dot.y = y;
          setDots(updatedDots);
          // Update the dot positions in the parent component
          onDotPositionUpdate(updatedDots);

        }
    };    

    
    const handleDotDragEnd = () => {
        setDraggedDotIndex(null);
    };

    const handleSavePositions = () => {
        // log or store the positions of markers in the audio waveform
        const scaledDots = addedRegions.map((region) => {
            const dot = dots.find((dot) => dot.regionId === region.id);
    
            // Check if dot is defined before accessing its properties
            if (dot) {
                return {
                    id: dot.regionId, // Use the region ID as the dot ID
                    x: scaleCoordinates(dot.x, 0, 1),
                    y: scaleCoordinates(dot.y, 1, 0),
                    color: dot.color,
                };
            } else {
                // Handle the case where dot is undefined (perhaps due to an empty dots array)
                return null;
            }
        });
    
        // Filter out any null values from the array
        const validScaledDots = scaledDots.filter((dot) => dot !== null);

        // Log or store the positions of dots in the vertex
        setSavedDotPositions(validScaledDots);
        console.log('Saved Dot Positions:', validScaledDots);

    };


    const handleSaveAndUpdate = () => {
        handleSavePositions();
        handleUpdateClick();
    };
  

  return (
    <div>
      <div id="waveform"></div>
      <button className="btn-toggle-pause" onClick={handleTogglePause}>
        Play/Pause
      </button>
      <button className="btn-stop" onClick={handleStop}>
        Stop
      </button>
      <button className="marker-btn" onClick={handleAddRegion}>
        Add Marker
      </button>
      <p></p>
      <button id="deleteAllButton" className="delete-all-btn" onClick={handleDeleteAllRegions}>
        Remove Markers
      </button>

      <h2> 2. Energy and Positivity - Emotion Graph </h2>
      <p1> Please click and drag the dots that match the corresponding markers above to represent the energy/positivity you feel: </p1>

      <div className="page-container" style={{ backgroundColor: '#d4eaf1'}}>
        <div className="centered-container">
            <div className='vertex'>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{
                        left: `${dot.x * 100}%`,
                        top: `${dot.y * 100}%`,
                        backgroundColor: dot.color,
                    }}
                    onMouseDown={(e) => handleDotDragStart(e, index)}
                    onMouseMove={handleDotDrag}
                    onMouseUp={handleDotDragEnd}
                />
            ))}
            </div>
        </div>
        </div>
        {/* <button id="saveMarkerDotButton" className="save-dot-marker" onClick={handleSavePositions}>Save Dot Positions</button> */
        /*<button id="saveMarkerDotButton" className="save-dot-marker" onClick={handleSaveAndUpdate}>Save and Update</button>
    </div>
  );
};

export default WavesurferVertex;  */






































////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* export const WavesurferVertex = () => {
    const waveformRef = useRef(null);
    const wsRegionsRef = useRef(null);
    const [regions, setRegions] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

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

    const handleTogglePause = () => {
        const ws = wsRegionsRef.current;
        setIsPlaying(!isPlaying);
        ws.playPause();
    };
    
    const handleStopClick = () => {
        const ws = wsRegionsRef.current;
        setIsPlaying(false);
        ws.stop();
    };
  
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
        <button onClick={handleTogglePause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={handleStopClick}>Stop</button>
          <button onClick={handleAddRegionClick}>Add Region</button>
          <button onClick={handleUpdateClick}>Update</button>
        </p>
  
        <p>
          📖 <a href="https://wavesurfer.xyz/docs/classes/plugins_regions.RegionsPlugin">Regions plugin docs</a>
        </p>
      </div>
    );
  };
  
  export default WavesurferVertex;  */





//////////////////////////////////////////////////////////////////////////////////////////////////////

/* export const WavesurferVertex = ({ initialDots, onDotPositionUpdate }) => {
    const wavesurferRef = useRef(null);
    const [wsRegionscallback, setwsRegionscallback] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [addedRegions, setAddedRegions] = useState([]);
    const [dots, setDots] = useState([]);

    useEffect(() => {
        // Initialize WaveSurfer when the component mounts
        wavesurferRef.current = WaveSurfer.create({
            container: '#waveform', // ID of the container element
            waveColor: 'violet',
            progressColor: 'purple',
            backend: 'WebAudio',
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
        
        const regionsPlugin = RegionsPlugin.create();
        wavesurferRef.current.registerPlugin(regionsPlugin);
        

        // Set wsRegionscallback after registering the plugin
        setwsRegionscallback(regionsPlugin);
        //setwsRegionscallback(() => wavesurferInstance);

        wavesurferRef.current.load('310.mp3');

        // Event listener to update the current time
        wavesurferRef.current.on('audioprocess', () => {
            setCurrentTime(wavesurferRef.current.getCurrentTime());
        }); 

        wavesurferRef.current.on('region-update-end', (region) => {
            // Log or store the updated region information
            console.log('Updated Region:', {
                id: region.id,
                start: region.start,
                end: region.end,
                color: region.color,
                // Add other properties if needed
            });
    
            // You can also update the state if necessary
            setAddedRegions((prevRegions) => {
                const updatedRegions = prevRegions.map((r) => (r.id === region.id ? { ...r, start: region.start, end: region.end } : r));
                return updatedRegions;
            });
            console.log('Updated Regions:', updatedRegions)
        });
    

        // Cleanup on component unmount
        return () => {
            wavesurferRef.current.destroy();
        };
    }, []); // Run this effect only once during component mount

    useEffect(() => {
        // This useEffect will run after the state has been updated
        console.log('Updated Regions:', addedRegions.map(region => ({ id: region.id, start: region.start, end: region.end })));
    }, [addedRegions]);
    

    const handleTogglePause = () => {
        wavesurferRef.current.playPause();
    };

    const handleStop = () => {
        wavesurferRef.current.stop();
    };



    const handleAddRegion = () => {
        // Give regions a random color when they are created
        const random = (min, max) => Math.random() * (max - min) + min
        const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.7)`

        const newRegionId = `region-${Date.now()}`; // Generate a unique ID for the new region

        const newRegion = {
            id: newRegionId,
            start: currentTime,
            end: currentTime + 0.2,
            color: randomColor(),
            drag: true,
            resize: true,
        };

        wsRegionscallback.addRegion({
            ...newRegion,
            content: 'Drag Me',
        });

        // Store information about the added region in the component state
        //setAddedRegions(prevRegions => [...prevRegions, newRegion]);
        setAddedRegions(prevRegions => [
            ...prevRegions,
            {
                ...newRegion,
                dotIndex: dots.length, // Store the index of the corresponding dot
            },
        ]);


        //update dots...
        //setDots((prevDots) => [...prevDots, { x: 0.5, y: 0.5, color: newRegion.color }]);

        // Update dots with color information
        setDots(prevDots => [
            ...prevDots,
            {
                x: 0.5,
                y: 0.5,
                color: newRegion.color,
                regionId: newRegion.id, // Store the region ID in the dot
            },
        ]);

        console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);
    };


    const handleDeleteAllRegions = () => {
        // Remove all regions from WaveSurfer
        wsRegionscallback.clearRegions();

        // Update the state to remove all regions
        setAddedRegions([]);
        // Remove all dots from the vertex
        setDots([]);
    };

    ///////////////////////////////////////////////////////////////
    //vertex
    // State to keep track of the currently dragged dot
    const [draggedDotIndex, setDraggedDotIndex] = useState(null);
    
    const handleDotDragStart = (e, dotIndex) => {
        setDraggedDotIndex(dotIndex);
        
    };
    
    const scaleCoordinates = (coord, min, max) => {
        // Scale the coordinate from the current range (min to max) to the desired range (-1 to 1)
        return 2 * (coord - min) / (max - min) - 1;
    };


    const handleDotDrag = (e) => {
        if (draggedDotIndex !== null) {
          const updatedDots = [...dots];
          const dot = updatedDots[draggedDotIndex];
    
          // Calculate the new position of the dot based on the mouse drag event
          const vertexRect = e.currentTarget.parentElement.getBoundingClientRect();
          const x = (e.clientX - vertexRect.left) / vertexRect.width;
          const y = (e.clientY - vertexRect.top) / vertexRect.height;
          //const y = 1 - (e.clientY - vertexRect.top) / vertexRect.height;
    
          dot.x = x;
          dot.y = y;
          setDots(updatedDots);
          // Update the dot positions in the parent component
          onDotPositionUpdate(updatedDots);

        }
    };    

    
    const handleDotDragEnd = () => {
        setDraggedDotIndex(null);
    };

    const handleSavePositions = () => {
        //console.log('Updated Regions:', updatedRegions)
        // Log or store the positions of markers in the audio waveform
        console.log('Saved Marker Positions:', addedRegions);

        const scaledDots = addedRegions.map((region) => {
            const dot = dots.find((dot) => dot.regionId === region.id);
    
            // Check if dot is defined before accessing its properties
            if (dot) {
                return {
                    id: dot.regionId, // Use the region ID as the dot ID
                    x: scaleCoordinates(dot.x, 0, 1),
                    y: scaleCoordinates(dot.y, 1, 0),
                    color: dot.color,
                };
            } else {
                // Handle the case where dot is undefined (perhaps due to an empty dots array)
                return null;
            }
        });
    
        // Filter out any null values from the array
        const validScaledDots = scaledDots.filter((dot) => dot !== null);

        // Log or store the positions of dots in the vertex
        console.log('Saved Dot Positions:', validScaledDots);

    };




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

      <h2> 2. Energy and Positivity - Emotion Graph </h2>
      <p1> Please click and drag the dots that match the corresponding markers above to represent the energy/positivity you feel: </p1>

      <div className="page-container">
        <div className="centered-container">
            <div className='vertex'>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{
                        left: `${dot.x * 100}%`,
                        top: `${dot.y * 100}%`,
                        backgroundColor: dot.color,
                    }}
                    onMouseDown={(e) => handleDotDragStart(e, index)}
                    onMouseMove={handleDotDrag}
                    onMouseUp={handleDotDragEnd}
                />
            ))}
            </div>
        </div>
      </div>
      <button id="saveMarkerDotButton" className="save-dot-marker" onClick={handleSavePositions}>Save Dot and Marker Positions</button>
        
    </div>

    );
    
};

export default WavesurferVertex;   */  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js';

export const WavesurferVertex = ({ initialDots, onDotPositionUpdate }) => {
    const wavesurferRef = useRef(null);
    const [wsRegionscallback, setwsRegionscallback] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [addedRegions, setAddedRegions] = useState([]);
    const [dots, setDots] = useState([]);
    const [savedMarkerPositions, setSavedMarkerPositions] = useState([]);


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
        setwsRegionscallback(wavesurferRef.current.registerPlugin(RegionsPlugin.create()));
        wavesurferRef.current.load('310.mp3');

        wavesurferRef.current.on('audioprocess', () => {
            setCurrentTime(wavesurferRef.current.getCurrentTime());
        });

        wavesurferRef.current.on('region-update-end', (region) => {
            setAddedRegions((prevRegions) => {
                const updatedRegions = prevRegions.map((r) => (r.id === region.id ? { ...r, start: region.start, end: region.end } : r));
                return updatedRegions;
            });
        });

        return () => {
            wavesurferRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        // This useEffect will run after the state has been updated
        console.log('Updated Regions:', addedRegions.map(region => ({ id: region.id, start: region.start, end: region.end })));
    }, [addedRegions]);

    useEffect(() => {
        console.log('Marker Positions Saved:', savedMarkerPositions);
    }, [savedMarkerPositions]);
    

    const handleTogglePause = () => {
        wavesurferRef.current.playPause();
    };

    const handleStop = () => {
        wavesurferRef.current.stop();
    };

    


    const handleAddRegion = () => {
        const random = (min, max) => Math.random() * (max - min) + min;
        const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.7)`;

        const newRegionId = `region-${Date.now()}`;

        const newRegion = {
            id: newRegionId,
            start: currentTime,
            end: currentTime + 0.2,
            color: randomColor(),
            drag: true,
            resize: true,
        };

        wsRegionscallback.addRegion({
            ...newRegion,
            content: 'Drag Me',
        });

        setAddedRegions((prevRegions) => [
            ...prevRegions,
            {
                ...newRegion,
                dotIndex: dots.length,
            },
        ]);

        setDots((prevDots) => [
            ...prevDots,
            {
                x: 0.5,
                y: 0.5,
                color: newRegion.color,
                regionId: newRegion.id,
            },
        ]);

        console.log(`Region added with ID: ${newRegionId}, Start: ${newRegion.start}, End: ${newRegion.end}, Color: ${newRegion.color}`);

        console.log('Marker Position Updated:', {
            id: newRegion.id,
            start: newRegion.start,
            end: newRegion.end,
            color: newRegion.color,
        });
    };

    const handleDeleteAllRegions = () => {
        wsRegionscallback.clearRegions();
        setAddedRegions([]);
        setDots([]);
    };

    const handleSaveMarkerPositions = () => {
        //setSavedMarkerPositions((prevSavedMarkerPositions) => [...addedRegions]);
        setSavedMarkerPositions([...addedRegions]);
    };


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
      <button id="saveButton" className="save-btn" onClick={handleSaveMarkerPositions}>
            Save Marker Positions
        </button>
    </div>

    );
    
};

export default WavesurferVertex;   */