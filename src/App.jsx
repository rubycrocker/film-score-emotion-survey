import { useState } from 'react'
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { useRef } from 'react';
import { getFirestore, collection, addDoc, updateDoc, getDoc } from 'firebase/firestore/lite';
import { Vertex } from '/Users/rubycrocker/ruby-fme-app/src/vertex.jsx';
import { WavesurferVertex } from './wavesurferVertex.jsx';
//import { WaveSurferComponent } from '/Users/rubycrocker/ruby-fme-app/src/WaveSurferComponent.jsx';
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js'
//import { audioFiles } from 'audioFiles.json';\



const firebaseConfig = {
  apiKey: "AIzaSyCkT3IblS1k8_0PDVrJeYPgm-fS2yCuU98",
  authDomain: "rubys-film-emotion-survey.firebaseapp.com",
  databaseURL: "https://rubys-film-emotion-survey-default-rtdb.firebaseio.com",
  projectId: "rubys-film-emotion-survey",
  storageBucket: "rubys-film-emotion-survey.appspot.com",
  messagingSenderId: "383167983289",
  appId: "1:383167983289:web:9d3cbff13aa8a59ad2b568",
  measurementId: "G-0D8NVB1H1H"
};

const app = initializeApp(firebaseConfig);

{/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/}
import './App.css'


function App() {
  //const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('page1'); //initialise first page
  const [participantID, setParticipantID] = useState(null); // add participant ID state
  const [participantDocRef, setParticipantDocRef] = useState(null);

  const firestore = getFirestore(initializeApp); // Assuming you have initialized Firebase

  const messageRef = useRef();
  const audioRef = useRef(null);
  const myRef = collection(firestore, 'messages');
  const [volume, setVolume] = useState(1.0); // Initial volume set to 100%
  const wavesurferRef = useRef(null);


  //emotion sentence and familiarity on form...
  const [emotionSentence, setEmotionSentence] = useState('');
  const [familiarityRating, setFamiliarityRating] = useState('');
  //song 2 emotion sentence and familiarity on form...
  const [emotionSentence2, setEmotionSentence2] = useState('');
  const [familiarityRating2, setFamiliarityRating2] = useState('');
  //song 3 emotion sentence and familiarity on form...
  const [emotionSentence3, setEmotionSentence3] = useState('');
  const [familiarityRating3, setFamiliarityRating3] = useState('');
  //song 4 emotion sentence and familiarity on form...
  const [emotionSentence4, setEmotionSentence4] = useState('');
  const [familiarityRating4, setFamiliarityRating4] = useState('');
  //song 5 emotion sentence and familiarity on form...
  const [emotionSentence5, setEmotionSentence5] = useState('');
  const [familiarityRating5, setFamiliarityRating5] = useState('');
  //song 6 emotion sentence and familiarity on form...
  const [emotionSentence6, setEmotionSentence6] = useState('');
  const [familiarityRating6, setFamiliarityRating6] = useState('');
  //song 7 emotion sentence and familiarity on form...
  const [emotionSentence7, setEmotionSentence7] = useState('');
  const [familiarityRating7, setFamiliarityRating7] = useState('');
  //song 8 emotion sentence and familiarity on form...
  const [emotionSentence8, setEmotionSentence8] = useState('');
  const [familiarityRating8, setFamiliarityRating8] = useState('');
  //song 9 emotion sentence and familiarity on form...
  const [emotionSentence9, setEmotionSentence9] = useState('');
  const [familiarityRating9, setFamiliarityRating9] = useState('');
  //song 10 emotion sentence and familiarity on form...
  const [emotionSentence10, setEmotionSentence10] = useState('');
  const [familiarityRating10, setFamiliarityRating10] = useState('');


  const [consentConfirmed, setConsentConfirmed] = useState(false);//consent page
  //consent:
  const [checkedConsentItems, setCheckedConsentItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  //new vertex...
  const [dotPosition, setDotPosition] = useState({ x: 0.5, y: 0.5 });
  const [lockOriginalDot, setLockOriginalDot] = useState(false);

  const handlePositionUpdate = (x, y) => {
    setDotPosition({ x, y });
  }

  // Define the handleSubmitDots function
  const handleSubmitDots = async () => {
    try {
      // Logic to upload dot positions to Firestore
      console.log('Dot positions submitted to Firestore');
    } catch (error) {
      console.error('Error uploading dot positions to Firestore:', error);
    }
  };


  const handleCheckboxConsentChange = (event) => {
    const { id, checked } = event.target;
    setCheckedConsentItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: checked,
    }));
  };

  const confirmConsent = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Check if all checkboxes are checked
    const allChecked = Object.values(checkedConsentItems).every((checked) => checked);
  
    if (allChecked) {
      setConsentConfirmed(true);
      // Add any additional logic or state changes related to consent confirmation
      console.log('All checkboxes are checked.');
      alert('Consent Confirmed!')
    } else {
      console.log('Not all checkboxes are checked.');
      alert('Please confirm all consent statements.');
      // You might want to display an alert or take other actions if not all checkboxes are checked
    }
  };
  const handleNextButtonClickP2 = () => {
    if (currentPage === 'page2' && !consentConfirmed) {
      alert('Please confirm all consent statements and click Confirm Consent.');
    } else {
      nextPage();
    }
  };

  // handle save email submit on first page...
  const handleSave = async (e) => {
    e.preventDefault();
      const email = messageRef.current.value;
      try {
        // Add the data to the 'subscribers' collection in Firebase
        const docRef = await addDoc(collection(db, 'emails'), {
          email,
        });
        console.log('Document written with ID: ', docRef.id);
        // Add any additional logic or alerts here
        alert('Submitted successfully!');
      } catch (error) {
        console.error('Error adding document: ', error);
        // Handle error and show appropriate message
      }
    };

    ////////////////////////////////////////////////////////////////
    //random audio file logic:
     /* const audioFiles = ['002.mp3', '003.mp3', '031.mp3', '123.mp3', '139.mp3', '233.mp3', '267.mp3', '292.mp3', '310.mp3', '355.mp3' ];
     const [selectedAudioFile, setSelectedAudioFile] = useState(null);
  
     /* const handleRandomizeAudio = () => {
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      setSelectedAudioFile(audioFiles[randomIndex]);
    };  */ 
    ////////////////////////////////////////////////////////////////
    const [loadedAudioFile, setLoadedAudioFile] = useState('');
    //ensure that the loadrandomaudiofile starts empty - hopefully no double loads...
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile1().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile2().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile3().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile4().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile5().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile6().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile7().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile8().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile9().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);
    useEffect(() => {
      // Load the random audio file when the component mounts
      loadRandomAudioFile10().then((randomAudioFile) => {
        setLoadedAudioFile(randomAudioFile);
      });
    }, []);



    ////////////////////////////////////////////////////////////////

    const [audioFile1, setAudioFile1] = useState('');
    const loadRandomAudioFile1 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile1) {
          const response = await fetch('/audioFolder1.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile1(`/audioFolder1/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile1;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile2, setAudioFile2] = useState('');
    const loadRandomAudioFile2 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile2) {
          const response = await fetch('/audioFolder2.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile2(`/audioFolder2/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile2;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile3, setAudioFile3] = useState('');
    const loadRandomAudioFile3 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile3) {
          const response = await fetch('/audioFolder3.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile3(`/audioFolder3/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile3;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile4, setAudioFile4] = useState('');
    const loadRandomAudioFile4 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile4) {
          const response = await fetch('/audioFolder4.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile4(`/audioFolder4/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile4;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile5, setAudioFile5] = useState('');
    const loadRandomAudioFile5 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile5) {
          const response = await fetch('/audioFolder5.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile5(`/audioFolder5/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile5;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile6, setAudioFile6] = useState('');
    const loadRandomAudioFile6 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile6) {
          const response = await fetch('/audioFolder6.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile6(`/audioFolder6/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile6;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };
    const [audioFile7, setAudioFile7] = useState('');
    const loadRandomAudioFile7 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile7) {
          const response = await fetch('/audioFolder7.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile7(`/audioFolder7/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile7;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile8, setAudioFile8] = useState('');
    const loadRandomAudioFile8 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile8) {
          const response = await fetch('/audioFolder8.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile8(`/audioFolder8/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile8;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile9, setAudioFile9] = useState('');
    const loadRandomAudioFile9 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile9) {
          const response = await fetch('/audioFolder9.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile9(`/audioFolder9/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile9;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    const [audioFile10, setAudioFile10] = useState('');
    const loadRandomAudioFile10 = async () => {
      try {
        // Check if an audio file is already selected
        if (!audioFile10) {
          const response = await fetch('/audioFolder10.json');
          const files = await response.json();
          console.log('Fetched Files:', files);
    
          // Select a random audio file
          const randomAudioFile = files[Math.floor(Math.random() * files.length)];
          console.log('Selected Audio File:', randomAudioFile);
    
          // Set the audio file in the state
          setAudioFile10(`/audioFolder10/${randomAudioFile}`);
          return randomAudioFile;
        }
    
        // If an audio file is already selected, return it without fetching a new one
        return audioFile10;
      } catch (error) {
        console.error('Error loading audio file:', error);
      }
    };

    



    ////////////////////////////






    //song1:
    const handleFamiliarityChange = (event) => {
      setFamiliarityRating(event.target.value);
    };
    const handleSubmitSentenceFamiliar = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput = document.querySelector('input[name="familiar"]:checked');
          const emotionSentenceInput = document.getElementById('emotion_sentence');
          console.log('familiarityInput:', familiarityInput);
          console.log('emotionSentenceInput:', emotionSentenceInput);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput && emotionSentenceInput) {
            const familiarityRating = familiarityInput.value;
            const emotionSentence = emotionSentenceInput.value;
    
            // Save the familiartiy emotion sentence form
            const randomAudioFile = await loadRandomAudioFile1();
            formsData.song1ESF = {
              emotionSentence,
              familiarityRating,
              audioFile: `/audioFolder1/${randomAudioFile}`,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };


    /////// alert for submit sentence:
    const handleSubmitSong1 = async () => {

      const hasRegions1 = regionInformation.length > 0;  // Check if there are regions
      const hasDots1 = setDotPositions.length > 0;

      if (!hasRegions1 || !hasDots1) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence1 = document.getElementById('emotion_sentence').value;
      const familiarity1 = document.querySelector('input[name="familiar"]:checked')?.value;
  
      if(!emotionSentence1 || !familiarity1){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          // Reset or clear regionInformation and dotPositions for Song 2
          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 1 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };


  //////////////////////////////////////////////////////////
    //song 2 familiarty and song...
    const handleFamiliarityChange2 = (event) => {
      setFamiliarityRating2(event.target.value);
    };
    const handleSubmitSentenceFamiliar2 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput2 = document.querySelector('input[name="familiar2"]:checked');
          const emotionSentenceInput2 = document.getElementById('emotion_sentence2');
          console.log('familiarityInput2:', familiarityInput2);
          console.log('emotionSentenceInput2:', emotionSentenceInput2);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput2 && emotionSentenceInput2) {
            const familiarityRating2 = familiarityInput2.value;
            const emotionSentence2 = emotionSentenceInput2.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song2ESF = {
              emotionSentence2,
              familiarityRating2,
              audioFile: audioFile2,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };


    /////// alert for submit sentence:
    const handleSubmitSong2 = async () => {
      const hasRegions2 = regionInformation.length > 0;  // Check if there are regions
      const hasDots2 = setDotPositions.length > 0;

      if (!hasRegions2 || !hasDots2) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence2 = document.getElementById('emotion_sentence2').value;
      const familiarity2 = document.querySelector('input[name="familiar2"]:checked')?.value;
  
      if(!emotionSentence2 || !familiarity2){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar2();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          // Reset or clear regionInformation and dotPositions for Song 2
          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 2 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };



    //////////////////////////////////////////////////////////
    //song 3 familiarty and song...
    const handleFamiliarityChange3 = (event) => {
      setFamiliarityRating3(event.target.value);
    };
    const handleSubmitSentenceFamiliar3 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput3 = document.querySelector('input[name="familiar3"]:checked');
          const emotionSentenceInput3 = document.getElementById('emotion_sentence3');
          console.log('familiarityInput3:', familiarityInput3);
          console.log('emotionSentenceInput3:', emotionSentenceInput3);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput3 && emotionSentenceInput3) {
            const familiarityRating3 = familiarityInput3.value;
            const emotionSentence3 = emotionSentenceInput3.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song3ESF = {
              emotionSentence3,
              familiarityRating3,
              audioFile: audioFile3,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong3 = async () => {
      const hasRegions3 = regionInformation.length > 0;  // Check if there are regions
      const hasDots3 = setDotPositions.length > 0;

      if (!hasRegions3 || !hasDots3) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence3 = document.getElementById('emotion_sentence3').value;
      const familiarity3 = document.querySelector('input[name="familiar3"]:checked')?.value;
  
      if(!emotionSentence3 || !familiarity3){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar3();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 3 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song4:
    const handleFamiliarityChange4 = (event) => {
      setFamiliarityRating4(event.target.value);
    };
    const handleSubmitSentenceFamiliar4 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput4 = document.querySelector('input[name="familiar4"]:checked');
          const emotionSentenceInput4 = document.getElementById('emotion_sentence4');
          console.log('familiarityInput4:', familiarityInput4);
          console.log('emotionSentenceInput4:', emotionSentenceInput4);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput4 && emotionSentenceInput4) {
            const familiarityRating4 = familiarityInput4.value;
            const emotionSentence4 = emotionSentenceInput4.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song4ESF = {
              emotionSentence4,
              familiarityRating4,
              audioFile: audioFile4,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong4 = async () => {
      const hasRegions4 = regionInformation.length > 0;  // Check if there are regions
      const hasDots4 = setDotPositions.length > 0;

      if (!hasRegions4 || !hasDots4) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence4 = document.getElementById('emotion_sentence4').value;
      const familiarity4 = document.querySelector('input[name="familiar4"]:checked')?.value;
  
      if(!emotionSentence4 || !familiarity4){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar4();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 4 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song5:
    const handleFamiliarityChange5 = (event) => {
      setFamiliarityRating5(event.target.value);
    };
    const handleSubmitSentenceFamiliar5 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput5 = document.querySelector('input[name="familiar5"]:checked');
          const emotionSentenceInput5 = document.getElementById('emotion_sentence5');
          console.log('familiarityInput5:', familiarityInput5);
          console.log('emotionSentenceInput5:', emotionSentenceInput5);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput5 && emotionSentenceInput5) {
            const familiarityRating5 = familiarityInput5.value;
            const emotionSentence5 = emotionSentenceInput5.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song5ESF = {
              emotionSentence5,
              familiarityRating5,
              audioFile: audioFile5,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
        /////// alert for submit sentence:
        const handleSubmitSong5 = async () => {
          const hasRegions5 = regionInformation.length > 0;  // Check if there are regions
          const hasDots5 = setDotPositions.length > 0;
    
          if (!hasRegions5 || !hasDots5) {
            // If there are no regions or dots, show an alert
            alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
            return; // Stop execution if conditions are not met
          }
          // Validate the form before allowing to proceed to the next page
          const emotionSentence5 = document.getElementById('emotion_sentence5').value;
          const familiarity5 = document.querySelector('input[name="familiar5"]:checked')?.value;
      
          if(!emotionSentence5 || !familiarity5){
            alert('Please fill out all form fields and click Submit.');
          } else {
            try {
              // Wait for the data to be submitted to Firestore before proceeding
              await handleSubmitSentenceFamiliar5();
              // If the form is valid and data is submitted, move to the next page
              nextPage();

              setRegionInformation([]);  // Reset or clear regionInformation
              setDotPositions([]);  // Reset or clear dotPositions
            } catch (error) {
              console.error('Error handling song 5 submission:', error);
              // Handle the error, e.g., show an alert to the user
            }
          }
        };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song6:
    const handleFamiliarityChange6 = (event) => {
      setFamiliarityRating6(event.target.value);
    };
    const handleSubmitSentenceFamiliar6 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput6 = document.querySelector('input[name="familiar6"]:checked');
          const emotionSentenceInput6 = document.getElementById('emotion_sentence6');
          console.log('familiarityInput6:', familiarityInput6);
          console.log('emotionSentenceInput6:', emotionSentenceInput6);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput6 && emotionSentenceInput6) {
            const familiarityRating6 = familiarityInput6.value;
            const emotionSentence6 = emotionSentenceInput6.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song6ESF = {
              emotionSentence6,
              familiarityRating6,
              audioFile: audioFile6,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong6 = async () => {
      const hasRegions6 = regionInformation.length > 0;  // Check if there are regions
      const hasDots6 = setDotPositions.length > 0;

      if (!hasRegions6 || !hasDots6) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence6 = document.getElementById('emotion_sentence6').value;
      const familiarity6 = document.querySelector('input[name="familiar6"]:checked')?.value;
  
      if(!emotionSentence6 || !familiarity6){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar6();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 6 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song7:
    const handleFamiliarityChange7 = (event) => {
      setFamiliarityRating7(event.target.value);
    };
    const handleSubmitSentenceFamiliar7 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput7 = document.querySelector('input[name="familiar7"]:checked');
          const emotionSentenceInput7 = document.getElementById('emotion_sentence7');
          console.log('familiarityInput7:', familiarityInput7);
          console.log('emotionSentenceInput7:', emotionSentenceInput7);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput7 && emotionSentenceInput7) {
            const familiarityRating7 = familiarityInput7.value;
            const emotionSentence7 = emotionSentenceInput7.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song7ESF = {
              emotionSentence7,
              familiarityRating7,
              audioFile: audioFile7,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong7 = async () => {
      const hasRegions7 = regionInformation.length > 0;  // Check if there are regions
      const hasDots7 = setDotPositions.length > 0;

      if (!hasRegions7 || !hasDots7) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence7 = document.getElementById('emotion_sentence7').value;
      const familiarity7 = document.querySelector('input[name="familiar7"]:checked')?.value;
  
      if(!emotionSentence7 || !familiarity7){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar7();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 7 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song8:
    const handleFamiliarityChange8 = (event) => {
      setFamiliarityRating8(event.target.value);
    };
    const handleSubmitSentenceFamiliar8 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput8 = document.querySelector('input[name="familiar8"]:checked');
          const emotionSentenceInput8 = document.getElementById('emotion_sentence8');
          console.log('familiarityInput8:', familiarityInput8);
          console.log('emotionSentenceInput8:', emotionSentenceInput8);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput8 && emotionSentenceInput8) {
            const familiarityRating8 = familiarityInput8.value;
            const emotionSentence8 = emotionSentenceInput8.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song8ESF = {
              emotionSentence8,
              familiarityRating8,
              audioFile: audioFile8,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong8 = async () => {
      const hasRegions8 = regionInformation.length > 0;  // Check if there are regions
      const hasDots8 = setDotPositions.length > 0;

      if (!hasRegions8 || !hasDots8) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence8 = document.getElementById('emotion_sentence8').value;
      const familiarity8 = document.querySelector('input[name="familiar8"]:checked')?.value;
  
      if(!emotionSentence8 || !familiarity8){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar8();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 8 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song9:
    const handleFamiliarityChange9 = (event) => {
      setFamiliarityRating9(event.target.value);
    };
    const handleSubmitSentenceFamiliar9 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput9 = document.querySelector('input[name="familiar9"]:checked');
          const emotionSentenceInput9 = document.getElementById('emotion_sentence9');
          console.log('familiarityInput9:', familiarityInput9);
          console.log('emotionSentenceInput9:', emotionSentenceInput9);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput9 && emotionSentenceInput9) {
            const familiarityRating9 = familiarityInput9.value;
            const emotionSentence9 = emotionSentenceInput9.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song9ESF = {
              emotionSentence9,
              familiarityRating9,
              audioFile: audioFile9,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong9 = async () => {
      const hasRegions9 = regionInformation.length > 0;  // Check if there are regions
      const hasDots9 = setDotPositions.length > 0;

      if (!hasRegions9 || !hasDots9) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence9 = document.getElementById('emotion_sentence9').value;
      const familiarity9 = document.querySelector('input[name="familiar9"]:checked')?.value;
  
      if(!emotionSentence9 || !familiarity9){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar9();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 9 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };

    /////////////////////////////////////////////////////////////////////////////////////////
    //song10:
    const handleFamiliarityChange10 = (event) => {
      setFamiliarityRating10(event.target.value);
    };
    const handleSubmitSentenceFamiliar10 = async () => {
      //e.preventDefault();
      try {
        if (participantID && participantDocRef) {
          // Get the current forms data from the participant's document
          const participantData = (await getDoc(participantDocRef)).data();
          const formsData = participantData.forms || {};
    
          // Collect data from the familiartiy emotion sentence form
          const familiarityInput10 = document.querySelector('input[name="familiar10"]:checked');
          const emotionSentenceInput10 = document.getElementById('emotion_sentence10');
          console.log('familiarityInput10:', familiarityInput10);
          console.log('emotionSentenceInput10:', emotionSentenceInput10);   
    
          // Check if the elements are not null or undefined
          if (familiarityInput10 && emotionSentenceInput10) {
            const familiarityRating10 = familiarityInput10.value;
            const emotionSentence10 = emotionSentenceInput10.value;
    
            // Save the familiartiy emotion sentence form
            formsData.song10ESF = {
              emotionSentence10,
              familiarityRating10,
              audioFile: audioFile10,
            };
    
            // Update the forms data in the participant's document
            await updateDoc(participantDocRef, { forms: formsData });
    
            alert('Sentence and Familiarity form submitted successfully!');
            //nextPage(); // Move to the next page
          } else {
            console.error('Form elements not found.');
            alert('Please fill in Emotion Sentence and Familiarity forms.');
          }
        } else {
          console.error('Participant ID or participant document reference missing.');
        }
      } catch (error) {
        console.error('Error submitting Sentence and Familiarity form:', error);
        alert('Please fill in Emotion Sentence and Familiarity forms.');
      }
    };
    /////// alert for submit sentence:
    const handleSubmitSong10 = async () => {
      const hasRegions10 = regionInformation.length > 0;  // Check if there are regions
      const hasDots10 = setDotPositions.length > 0;

      if (!hasRegions10 || !hasDots10) {
        // If there are no regions or dots, show an alert
        alert('Please ensure you have clicked "Update" AND "Save Regions And Dots" before continuing.                                                                    Please make sure you have added at least one marker.');
        return; // Stop execution if conditions are not met
      }
      // Validate the form before allowing to proceed to the next page
      const emotionSentence10 = document.getElementById('emotion_sentence10').value;
      const familiarity10 = document.querySelector('input[name="familiar10"]:checked')?.value;
  
      if(!emotionSentence10 || !familiarity10){
        alert('Please fill out all form fields and click Submit.');
      } else {
        try {
          // Wait for the data to be submitted to Firestore before proceeding
          await handleSubmitSentenceFamiliar10();
          // If the form is valid and data is submitted, move to the next page
          nextPage();

          setRegionInformation([]);  // Reset or clear regionInformation
          setDotPositions([]);  // Reset or clear dotPositions
        } catch (error) {
          console.error('Error handling song 10 submission:', error);
          // Handle the error, e.g., show an alert to the user
        }
      }
    };






  // Initialize Firebase Firestore
  const db = getFirestore();

  const dotCoordinatesCollection = collection(db, 'dotCoordinates'); // Replace 'dotCoordinates' with your desired collection name
  const handleSubmitDotsMarker = async () => {
    try {
      if (dotPositions.length === 3) {
        const dotCoordinatesCollection = collection(db, 'dotCoordinates');
        const dotDocument = {
          dots: dotPositions,
        };
        await addDoc(dotCoordinatesCollection, dotDocument);
        alert('Data submitted successfully!');
        console.log('Dot positions submitted to Firestore');
      } else {
        console.error('Not all dot positions are set.');
      }
    } catch (error) {
      console.error('Error uploading dot positions to Firestore:', error);
    }
  };

  const [dotPositions, setDotPositions] = useState([
    { x: 0.3, y: 0.5, color: 'rgba(247, 188, 3)' },
    { x: 0.5, y: 0.5, color: 'rgba(92, 172, 45)' },
    { x: 0.7, y: 0.5, color: 'rgba(253, 176, 192)' },
  ]);

  const handleDotPositionUpdate = (updatedPositions) => {
    setDotPositions(updatedPositions);
  };

  //submit to firestore dot and positions...
  const dotCoordinatesCollection0 = collection(db, 'dotCoordinates');
  const [regionInformation, setRegionInformation] = useState([]);

  //scaled dots...
  const scaleCoordinate = (coord, min, max) => {
    return 2 * (coord - min) / (max - min) - 1;
  };

  // Function to scale the dot positions array
  const scaleDotPositions = (dots) => {
    return dots.map(dot => ({
      x: scaleCoordinate(dot.x, 0, 1),
      y: scaleCoordinate(1-dot.y, 0, 1),
      color: dot.color,
    }));
  };



      

///////////////////////////////////////////////////////////////////
  const handleSaveToFirestore = async () => {
    try {
      const scaledDotPositions = scaleDotPositions(dotPositions);
      const dotDocument = {
        dots: scaledDotPositions,
        //dots: dotPositions,
      };
      await addDoc(dotCoordinatesCollection0, dotDocument);
      // Assuming you have a collection for regions in Firestore
      // Modify 'regions' and 'regionCollection' accordingly based on your Firestore structure
      const regionCollection = collection(db, 'regions');
      const regionDocument = {
        regions: regionInformation,
      };
      await addDoc(regionCollection, regionDocument);

      const regionDotCollection = collection(db, 'regionsAndDots');
      const combinedDataDocument = {
        dots: dotPositions,
        regions: regionInformation,
        //savedDotPositions: savedDotPositions,
      };
      await addDoc(regionDotCollection, combinedDataDocument);

      alert('Data submitted successfully!');
      console.log('data submitted to firestore!');
    } catch (error) {
      console.error('Error uploading data to Firestore:', error);
    }
  }; 

  //////
  const myRef8 = collection(firestore, 'regions');
 const handleSaveRegionsToFirestore = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};
        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);
        // Prepare the data to be saved to Firestore
        formsData.song1regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };
        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });
        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSaveToFirestore2 = async () => {
    try {
      const scaledDotPositions = scaleDotPositions(dotPositions);
      const dotDocument = {
        dots: scaledDotPositions,
        //dots: dotPositions,
      };
      await addDoc(dotCoordinatesCollection0, dotDocument);
      // Assuming you have a collection for regions in Firestore
      // Modify 'regions' and 'regionCollection' accordingly based on your Firestore structure
      const regionCollection = collection(db, 'regions');
      const regionDocument = {
        regions: regionInformation,
      };
      await addDoc(regionCollection, regionDocument);

      const regionDotCollection = collection(db, 'regionsAndDots');
      const combinedDataDocument = {
        dots: dotPositions,
        regions: regionInformation,
        //savedDotPositions: savedDotPositions,
      };
      await addDoc(regionDotCollection, combinedDataDocument);

      alert('Data submitted successfully!');
      console.log('data submitted to firestore!');
    } catch (error) {
      console.error('Error uploading data to Firestore:', error);
    }
  }; 

  //////////////////////////////////////////////////////////////////
  const myRef9 = collection(firestore, 'regions');
  const handleSaveRegionsToFirestore2 = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);

        // Prepare the data to be saved to Firestore
        formsData.song2regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };

        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });

        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 

  ///////////////////////////////////////////////////////////
  const myRef10 = collection(firestore, 'regions');
  const handleSaveRegionsToFirestore3 = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);

        // Prepare the data to be saved to Firestore
        formsData.song3regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };

        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });

        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 

  ///////////////////////////////////////////////////////////
  const myRef11 = collection(firestore, 'regions');
  const handleSaveRegionsToFirestore4 = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);

        // Prepare the data to be saved to Firestore
        formsData.song4regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };

        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });

        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 
  ///////////////////////////////////////////////////////////
  const myRef12 = collection(firestore, 'regions');
  const handleSaveRegionsToFirestore5 = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);

        // Prepare the data to be saved to Firestore
        formsData.song5regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };

        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });

        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 

  ///////////////////////////////////////////////////////////
  const myRef13 = collection(firestore, 'regions');
  const handleSaveRegionsToFirestore6 = async (e) => {
    e.preventDefault();
    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        // Collect data from the dots?
        const scaledDotPositions = scaleDotPositions(dotPositions);

        // Prepare the data to be saved to Firestore
        formsData.song6regions = {
          dotCoordinates: scaledDotPositions,
          regions: regionInformation,
        };

        // Add the data to the forms subcollection
        await updateDoc(participantDocRef, { forms: formsData });

        alert('Regions and Dots Saved!');
        //nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }; 
   ///////////////////////////////////////////////////////////
   const myRef14 = collection(firestore, 'regions');
   const handleSaveRegionsToFirestore7 = async (e) => {
     e.preventDefault();
     try {
       // Ensure participantID and participantDocRef are available
       if (participantID && participantDocRef) {
         const participantData = (await getDoc(participantDocRef)).data();
         const formsData = participantData.forms || {};
 
         // Collect data from the dots?
         const scaledDotPositions = scaleDotPositions(dotPositions);
 
         // Prepare the data to be saved to Firestore
         formsData.song7regions = {
           dotCoordinates: scaledDotPositions,
           regions: regionInformation,
         };
 
         // Add the data to the forms subcollection
         await updateDoc(participantDocRef, { forms: formsData });
 
         alert('Regions and Dots Saved!');
         //nextPage(); // Move to the next page
       } else {
         console.error('Participant ID or participant document reference missing.');
       }
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   }; 
   ///////////////////////////////////////////////////////////
   const myRef15 = collection(firestore, 'regions');
   const handleSaveRegionsToFirestore8 = async (e) => {
     e.preventDefault();
     try {
       // Ensure participantID and participantDocRef are available
       if (participantID && participantDocRef) {
         const participantData = (await getDoc(participantDocRef)).data();
         const formsData = participantData.forms || {};
 
         // Collect data from the dots?
         const scaledDotPositions = scaleDotPositions(dotPositions);
 
         // Prepare the data to be saved to Firestore
         formsData.song8regions = {
           dotCoordinates: scaledDotPositions,
           regions: regionInformation,
         };
 
         // Add the data to the forms subcollection
         await updateDoc(participantDocRef, { forms: formsData });
 
         alert('Regions and Dots Saved!');
         //nextPage(); // Move to the next page
       } else {
         console.error('Participant ID or participant document reference missing.');
       }
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   }; 
   ///////////////////////////////////////////////////////////
   const myRef16 = collection(firestore, 'regions');
   const handleSaveRegionsToFirestore9 = async (e) => {
     e.preventDefault();
     try {
       // Ensure participantID and participantDocRef are available
       if (participantID && participantDocRef) {
         const participantData = (await getDoc(participantDocRef)).data();
         const formsData = participantData.forms || {};
 
         // Collect data from the dots?
         const scaledDotPositions = scaleDotPositions(dotPositions);
 
         // Prepare the data to be saved to Firestore
         formsData.song9regions = {
           dotCoordinates: scaledDotPositions,
           regions: regionInformation,
         };
 
         // Add the data to the forms subcollection
         await updateDoc(participantDocRef, { forms: formsData });
 
         alert('Regions and Dots Saved!');
         //nextPage(); // Move to the next page
       } else {
         console.error('Participant ID or participant document reference missing.');
       }
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   }; 
   ///////////////////////////////////////////////////////////
   const myRef17 = collection(firestore, 'regions');
   const handleSaveRegionsToFirestore10 = async (e) => {
     e.preventDefault();
     try {
       // Ensure participantID and participantDocRef are available
       if (participantID && participantDocRef) {
         const participantData = (await getDoc(participantDocRef)).data();
         const formsData = participantData.forms || {};
 
         // Collect data from the dots?
         const scaledDotPositions = scaleDotPositions(dotPositions);
 
         // Prepare the data to be saved to Firestore
         formsData.song10regions = {
           dotCoordinates: scaledDotPositions,
           regions: regionInformation,
         };
 
         // Add the data to the forms subcollection
         await updateDoc(participantDocRef, { forms: formsData });
 
         alert('Regions and Dots Saved!');
         //nextPage(); // Move to the next page
       } else {
         console.error('Participant ID or participant document reference missing.');
       }
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   }; 




  //participant ID:
  useEffect(() => {
    // Generate a unique ID for each participant when the component mounts
    setParticipantID(generateUniqueID());
  }, []);

  const generateUniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleStartSurvey = async () => {
    try {
      // Create a unique participant ID
      const participantID = generateUniqueID();

      // Save participant information to Firestore
      const participantsCollection = collection(db, 'participants');
      const participantDocRef = await addDoc(participantsCollection, {
        participantID,
        startedAt: new Date(),
        forms: {
          //demographics: {}, // Initialize an empty forms object
        }
      });

      // Set the participant ID and document reference in the component state
      setParticipantID(participantID);
      setParticipantDocRef(participantDocRef);

      // Move to the next page
      nextPage();
    } catch (error) {
      console.error('Error starting survey:', error);
    }
  };

    //////////////////////////////////////////////////////////////////////////////////////////////
  const handleSaveDemographics = async (e) => {
    e.preventDefault();
    try {
      if (participantID && participantDocRef) {
        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};
  
        const age = document.querySelector('input[name="age"]:checked').value;
        const occupation = document.querySelector('input[name="occupation"]:checked').value;
        const nationality = document.getElementById('nationality-data').value;
        const country = document.getElementById('country-data').value;
        const gender = document.getElementById('gender-data').value;
  
        formsData.demographics = {
          age,
          occupation,
          nationality,
          country,
          gender,
        };
  
        await updateDoc(participantDocRef, { forms: formsData });
  
        alert('Demographics form submitted successfully!');
        nextPage();
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      alert('Please fill in and submit all fields.')
      console.error('Error submitting demographics form:', error);
    }
  };
  
  // Add the state for demographics consent confirmation
  const [demographicsConsentConfirmed, setDemographicsConsentConfirmed] = useState(false);
  // Update the function for demographics consent confirmation
  const handleDemographicsConsentConfirmation = (e) => {
    e.preventDefault();
    const allChecked = Object.values(checkedConsentItems).every((checked) => checked);
    if (allChecked) {
      setDemographicsConsentConfirmed(true);
      console.log('All checkboxes are checked.');
      alert('Submitted!');
    } else {
      console.log('Not all checkboxes are checked.');
      alert('Please fill in all fields and click Submit.');
    }
  };
  const handleNextButtonClickP3 = () => {
    // Validate the form before allowing to proceed to the next page
    const age = document.querySelector('input[name="age"]:checked')?.value;
    const occupation = document.querySelector('input[name="occupation"]:checked')?.value;
    const nationality = document.getElementById('nationality-data').value.trim();
    const country = document.getElementById('country-data').value.trim();
    const gender = document.getElementById('gender-data').value.trim();
  
    if (!age || !occupation || !nationality || !country || !gender) {
      alert('Please fill out all form fields.');
    } else if (!demographicsConsentConfirmed) {
      alert('Please fill in all fields and click Submit.');
    } else {
      // If the form is valid, save the data and move to the next page
      handleSaveDemographics();
      nextPage();
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////


   // trying to save page 4 form...
  /*  const myRef3 = collection(firestore, 'responses_music');

   const handleSavePage4 = async (e) => {
    e.preventDefault();

    const music_hrs = document.querySelector('input[name="music-hrs"]:checked')?.value;
    const music_hrs2 = document.querySelector('input[name="music-hrs2"]:checked')?.value;
    const years = document.querySelector('input[name="years"]:checked')?.value;
    const singer = document.querySelector('input[name="singer"]:checked')?.value;
    const mistakes = document.querySelector('input[name="mistakes"]:checked')?.value;
    const differences = document.querySelector('input[name="differences"]:checked')?.value;
    const out_of_time = document.querySelector('input[name="out-of-time"]:checked')?.value;
    const out_of_tune = document.querySelector('input[name="out-of-tune"]:checked')?.value;
    const musician = document.querySelector('input[name="musician"]:checked')?.value;
    const production = document.querySelector('input[name="production"]:checked')?.value;

    if(!music_hrs || !music_hrs2 || !years || !singer || !mistakes || !differences || !out_of_time || !out_of_tune || !musician || !production){
      alert('Please fill in all the form fields.');
      return;
    }

    try {
      // Ensure participantID and participantDocRef are available
      if (participantID && participantDocRef) {

        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        formsData.page4musicExperienceForm = {
          music_hrs,
          music_hrs2,
          years,
          singer,
          mistakes,
          differences,
          out_of_time,
          out_of_tune,
          musician,
          production,
        }; 
  
        // Add the data to the forms collection
        await updateDoc(participantDocRef, { forms: formsData });
        //alerts:
        alert('Data submitted successfully!');
        nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleNextButtonClickP4 = () => {
    // Validate the form before allowing to proceed to the next page
    const music_hrs = document.querySelector('input[name="music-hrs"]:checked')?.value;
    const music_hrs2 = document.querySelector('input[name="music-hrs2"]:checked')?.value;
    const years = document.querySelector('input[name="years"]:checked')?.value;
    const singer = document.querySelector('input[name="singer"]:checked')?.value;
    const mistakes = document.querySelector('input[name="mistakes"]:checked')?.value;
    const differences = document.querySelector('input[name="differences"]:checked')?.value;
    const out_of_time = document.querySelector('input[name="out-of-time"]:checked')?.value;
    const out_of_tune = document.querySelector('input[name="out-of-tune"]:checked')?.value;
    const musician = document.querySelector('input[name="musician"]:checked')?.value;
    const production = document.querySelector('input[name="production"]:checked')?.value;

    if(!music_hrs || !music_hrs2 || !years || !singer || !mistakes || !differences || !out_of_time || !out_of_tune || !musician || !production){
      alert('Please fill out all form fields.');
    } else {
      // If the form is valid, save the data and move to the next page
      handleSavePage4();
      nextPage();
    }
  }; */
  
  // Add state for page 4 form submission confirmation
const [page4FormSubmitted, setPage4FormSubmitted] = useState(false);

// ...

// trying to save page 4 form...
const myRef3 = collection(firestore, 'responses_music');

const handleSavePage4 = async (e) => {
  e.preventDefault();

  const music_hrs = document.querySelector('input[name="music-hrs"]:checked')?.value;
  const music_hrs2 = document.querySelector('input[name="music-hrs2"]:checked')?.value;
  const years = document.querySelector('input[name="years"]:checked')?.value;
  const singer = document.querySelector('input[name="singer"]:checked')?.value;
  const mistakes = document.querySelector('input[name="mistakes"]:checked')?.value;
  const differences = document.querySelector('input[name="differences"]:checked')?.value;
  const out_of_time = document.querySelector('input[name="out-of-time"]:checked')?.value;
  const out_of_tune = document.querySelector('input[name="out-of-tune"]:checked')?.value;
  const musician = document.querySelector('input[name="musician"]:checked')?.value;
  const production = document.querySelector('input[name="production"]:checked')?.value;

  if(!music_hrs || !music_hrs2 || !years || !singer || !mistakes || !differences || !out_of_time || !out_of_tune || !musician || !production){
    alert('Please fill out all form fields.');
    return;
  }

  try {
    // Ensure participantID and participantDocRef are available
    if (participantID && participantDocRef) {
      const participantData = (await getDoc(participantDocRef)).data();
      const formsData = participantData.forms || {};

      formsData.page4musicExperienceForm = {
        music_hrs,
        music_hrs2,
        years,
        singer,
        mistakes,
        differences,
        out_of_time,
        out_of_tune, 
        musician,
        production
      };

      // Add the data to the forms collection
      await updateDoc(participantDocRef, { forms: formsData });
      
      // Set the form submission state to true
      setPage4FormSubmitted(true);
      // alerts:
      alert('Data submitted successfully!');
    } else {
      console.error('Participant ID or participant document reference missing.');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

const handleNextButtonClickP4 = () => {
  // Check if the form has been submitted before allowing to proceed to the next page
  if (!page4FormSubmitted) {
    alert('Please submit the form before proceeding to the next page.');
  } else {
    // If the form is valid, move to the next page
    nextPage();
  }
};





////////////////////////////////////////////////////////////////////////////////////////////////////
// Add state for page 4 form submission confirmation
const [page5FormSubmitted, setPage5FormSubmitted] = useState(false);
// trying to save page 4 form...
const myRef4 = collection(firestore, 'responses_emotion');

const handleSavePage5 = async (e) => {
  e.preventDefault();

  const importance = document.querySelector('input[name="importance"]:checked')?.value;
  const activities = document.querySelector('input[name="activities"]:checked')?.value;
  const addiction = document.querySelector('input[name="addiction"]:checked')?.value;
  const new_music = document.querySelector('input[name="new_music"]:checked')?.value;
  const search = document.querySelector('input[name="search"]:checked')?.value;
  const genre = document.getElementById('genre_data').value.trim();
  const evoke = document.querySelector('input[name="evoke"]:checked')?.value;
  const memories = document.querySelector('input[name="memories"]:checked')?.value;
  const shiver = document.querySelector('input[name="shiver"]:checked')?.value;
  const excite = document.querySelector('input[name="excite"]:checked')?.value;
  const talk = document.querySelector('input[name="talk"]:checked')?.value;

  if(!importance || !activities || !addiction || !new_music || !search || !genre || !evoke || !memories || !shiver || !excite || !talk){
    alert('Please fill in all the form fields.');
    return;
  }

  try {
    // Ensure participantID and participantDocRef are available
    if (participantID && participantDocRef) {
      const participantData = (await getDoc(participantDocRef)).data();
      const formsData = participantData.forms || {};

      formsData.page5musicEmotionForm = {
        importance,
        activities,
        addiction,
        new_music,
        search,
        genre,
        evoke,
        memories,
        shiver,
        excite,
        talk,
      };

      // Add the data to the forms collection
      await updateDoc(participantDocRef, { forms: formsData });
      
      // Set the form submission state to true
      setPage5FormSubmitted(true);
      // alerts:
      alert('Data submitted successfully!');
    } else {
      console.error('Participant ID or participant document reference missing.');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

const handleNextButtonClickP5 = () => {
  // Check if the form has been submitted before allowing to proceed to the next page
  if (!page5FormSubmitted) {
    alert('Please submit the form before proceeding to the next page.');
  } else {
    // If the form is valid, move to the next page
    nextPage();
  }
};
  ////////////////

  /* const myRef6 = collection(firestore, 'music-personality');
  const handleSavePage6 = async (e) => {
    e.preventDefault();
      const faveplace = document.querySelector('input[name="radio-option0"]:checked')?.value;
      const matters = document.querySelector('input[name="radio-option1"]:checked')?.value;
      const discover = document.querySelector('input[name="radio-option2"]:checked')?.value;
      const describetaste = document.querySelector('input[name="radio-option3"]:checked')?.value;
      const feelinggenre = document.querySelector('input[name="radio-option4"]:checked')?.value;
    if (!faveplace || !matters || !discover || !describetaste || !feelinggenre) {
      alert('Please fill in all the form fields.');
      return;
    }
    try {
      if (participantID && participantDocRef) {

        const participantData = (await getDoc(participantDocRef)).data();
        const formsData = participantData.forms || {};

        formsData.musicPersonalityQuiz = {
          faveplace,
          matters,
          discover,
          describetaste,
          feelinggenre,
        }; 
        // Add the data to the forms collection
        await updateDoc(participantDocRef, { forms: formsData });
        //alerts:
        alert('Data submitted successfully!');
        nextPage(); // Move to the next page
      } else {
        console.error('Participant ID or participant document reference missing.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleNextButtonClickP6 = () => {
    // Validate the form before allowing to proceed to the next page
      const faveplace = document.querySelector('input[name="radio-option0"]:checked')?.value;
      const matters = document.querySelector('input[name="radio-option1"]:checked')?.value;
      const discover = document.querySelector('input[name="radio-option2"]:checked')?.value;
      const describetaste = document.querySelector('input[name="radio-option3"]:checked')?.value;
      const feelinggenre = document.querySelector('input[name="radio-option4"]:checked')?.value;

    if (!faveplace || !matters || !discover || !describetaste || !feelinggenre) {
      alert('Please fill out all form fields.');
    } else {
      // If the form is valid, save the data and move to the next page
      handleSavePage();
      nextPage();
    }
  }; */

   ///////////////////////////////////////////////////////////////////////////////////////////////////
  //music personality quiz - page 6:
  const [userResponses, setUserResponses] = useState([]);
  const [musicPersonality, setMusicPersonality] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[questionIndex] = answerIndex;
      console.log('Updated Responses:', updatedResponses);
      return updatedResponses;
    });
  };

  const determineMusicPersonality = () => {
    const letterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  
    // Count the occurrences of each letter in user responses
    userResponses.forEach((responseIndex) => {
      const letter = String.fromCharCode(65 + responseIndex); // Convert index to letter (A-F)
      letterCounts[letter]++;
    });
  
    // Find the most common letter(s)
    const maxCount = Math.max(...Object.values(letterCounts));
    const topLetters = Object.keys(letterCounts).filter((letter) => letterCounts[letter] === maxCount);
  
    // Set the music personality based on the result
    if (topLetters.length === 1) {
      setMusicPersonality(topLetters[0]);
    } else {
       // Handle tie by selecting the top 2 letters
      setMusicPersonality(topLetters.join(' and '));
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    determineMusicPersonality();
    console.log('User Responses:', userResponses);
    alert('Submitted!');
    //set state to true...
    setFormSubmitted(true);
  };

  const personalityDescriptions = {
    A: "A - The Introspective Explorer!",
    B: "B - The Social Harmonizer!",
    C: "C - The Outdoor Melodist!",
    D: "D - The Groove Commander!",
    E: "E - The Sonic Innovator!",
    F: "F - The Serenading Poet!"
  };


  const handleNextButtonClickMusicPersonality = () => {
    // Check if the form has been submitted before allowing to proceed to the next page
    if (!formSubmitted) {
      alert('Please submit the form before proceeding to the next page.');
    } else {
      // If the form is valid, move to the next page
      nextPage();
    }
  };

  // volume change - practise page
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  //////////////////////////////////////////////////////////////////////////
  /* const handleNextButtonClickP6 = (e) => {
    e.preventDefault();
    const faveplace = document.querySelector('input[name="radio-option0"]:checked')?.value;
    const matters = document.querySelector('input[name="radio-option1"]:checked')?.value;
    const discover = document.querySelector('input[name="radio-option2"]:checked')?.value;
    const describetaste = document.querySelector('input[name="radio-option3"]:checked')?.value;
    const feelinggenre = document.querySelector('input[name="radio-option4"]:checked')?.value;

  if (!faveplace || !matters || !discover || !describetaste || !feelinggenre) {
    alert('Please answer all questions.');
  } else {
    // If the form is valid, save the data and move to the next page
    determineMusicPersonality();
    nextPage();
  }
}; */
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  const nextPage = () => {
    // debug current page
    // Define a function to navigate to the next page
    switch (currentPage) {
      case 'page1':
        setCurrentPage('page2');
        break;
      case 'page2':
        setCurrentPage('page3');
        break;
      case 'page3':
        setCurrentPage('page4');
        break;
      case 'page4':
        setCurrentPage('page5');
        break;
      case 'page5':
        setCurrentPage('page6');
        break;
      case 'page6':
        setCurrentPage('page7');
        break;
      case 'page7':
        setCurrentPage('page8');
        break;
      case 'page8':
        setCurrentPage('page9');
        break;
      case 'page9':
        setCurrentPage('page10');
        break;
      case 'page10':
        setCurrentPage('page11');
        break;
      case 'page11':
        setCurrentPage('page12');
        break;
      case 'page12':
        setCurrentPage('page13');
        break;
      case 'page13':
        setCurrentPage('page14');
        break;
      case 'page14':
        setCurrentPage('page15');
        break;
      case 'page15':
        setCurrentPage('page16');
        break;
      case 'page16':
        setCurrentPage('page17');
        break;
      case 'page17':
        setCurrentPage('page18');
      case 'page18':
        break;
      default:
        // Handle reaching the end of the story
        break;
    }
  };

  const handlePreviousButtonClick = () => {
    // Define a function to navigate to the previous page
    switch (currentPage) {
      case 'page2':
        setCurrentPage('page1');
        break;
      case 'page3':
        setCurrentPage('page2');
        break;
      case 'page4':
        setCurrentPage('page3');
        break;
      case 'page5':
        setCurrentPage('page4');
        break;
      case 'page6':
        setCurrentPage('page5');
        break;
      case 'page7':
        setCurrentPage('page6');
        break;
      case 'page8':
        setCurrentPage('page7');
        break;
      case 'page9':
        setCurrentPage('page8');
        break;
      case 'page10':
        setCurrentPage('page9');
        break;
      case 'page11':
        setCurrentPage('page10');
        break;
      case 'page12':
        setCurrentPage('page11');
        break;
      case 'page13':
        setCurrentPage('page12');
        break;
      case 'page14':
        setCurrentPage('page13');
        break;
      case 'page15':
        setCurrentPage('page14');
        break;
      case 'page16':
        setCurrentPage('page15');
        break;
      case 'page17':
        setCurrentPage('page16');
        break;
      case 'page18':
        setCurrentPage('page17');
        break;
      // Add more cases as needed
  
      default:
        // Handle reaching the beginning of the story
        break;
    }
  };

  const [checkedItems, setCheckedItems] = useState({}); // State to track checked items
  
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    
    // Check if it's a consent checkbox, and use the appropriate state
    if (id.startsWith('item')) {
      setCheckedConsentItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [id]: checked,
      }));
    } else {
      // Handle other checkboxes if needed
      // For example, you might have other checkboxes on the page
      // and want to manage their state differently
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [id]: checked,
      }));
    }
  };




  return (
    <>
      {currentPage === 'page1' && (
        <div class="page" id="page1">
          <div class="main" id="'main1">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 1 - Study Introduction </h5>

            <h4> The purpose of this study is to understand how music in films makes us feel. By sharing your thoughts, you'll help us learn more about how emotions are created in film music! </h4>
            <br></br>
            <h4> This study will consist of 2 main surveys. </h4>
            <h4> The first survey aims to assess how you listen to music based on a questionnaire so please answer truthfully.</h4>
            <br></br>
            <h4> In the second survey participants will engage in 10 listening tasks involving labelling excerpts from film soundtracks. </h4>
            <h4> There will be interactive graphs and pointers for you to annotate your mood and emotion while listening to the short film excerpts.</h4>
            <br></br>
            <h4> There will also be some brief questions on demographics and music skill/ability to begin.</h4>
            <h4> The entire study should take participants roughly 30 minutes to complete, depending on how detailed the participants want to be with their annotations.</h4>
            <br></br>
            <h4> At the end of the study your 'music personality' will be shown based on your responses! 
              It will tell you about your music listening profile and listening style! </h4>
            <h4>This part of the study is a ‘gamified’ element, it is meant for amusement and is not to be 
              interpreted too seriously, it was created for enjoyment rather than strict scientific analysis.</h4>
            <br></br>
            <br></br>
            <div class="inputBox">
              <form action="" id="contactForm">
                <input type="text" id="name" placeholder='Please type your email here if you want to stay updated about this study' ref={messageRef}/>
                <button type="submit" onClick={handleSave}>Submit</button>
              </form>
            </div>
      </div>
        {/* <button id="introduction-next-button" onClick={nextPage} class="button" value="hide">Next</button> */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <div class="navBox">
                <button onClick={handleStartSurvey} className="button">
                  Start
                </button>
          </div>
        </div>
      </div> 
        
      )}

      {/* Page 2 */}
      {currentPage === 'page2' && (
        <div class="page" id="page2">
          <div class="main" id="main2">
          <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
          <h5> Page 2 - Consent Page </h5>
            <form>
            <p> Please provide consent for the following statements to proceed with taking part in this study, 
              however you are reminded that you are free to withdraw your participation to the study at any point:</p>
            <br />
            <label class="container1" id="consent">
              I agree that the research project named above has been explained to me to my satisfaction on the information page.
					    <input type="checkbox" id="item1" checked={checkedItems.item1} onChange={handleCheckboxChange}/>
            </label>
            <label class="container1" id="consent">
              I understand that if I decide at any other time during the research that I no longer wish to
					    participate in this study, I can notify the researchers through the email address provided
					    and be withdrawn from it immediately.
					      <input type="checkbox" id="item2" checked={checkedItems.item2} onChange={handleCheckboxChange}/>
				    </label>
            <label class="container1" id="consent">
              I have read the information page and understand what the research study involves
					      <input type="checkbox" id="item3" checked={checkedItems.item3} onChange={handleCheckboxChange}/>
				    </label>
            <label class="container1" id="consent">
              I agree to take part in the study, which will include use of my personal data. The data will be
					    anonymised, stored securely and not shared with any third parties.
                <input type="checkbox" id="item4" checked={checkedItems.item4} onChange={handleCheckboxChange}/>
            </label>
            <label class="container1" id="consent">
              I confirm I am over the age of 18.
                <input type="checkbox" id="item5" checked={checkedItems.item5} onChange={handleCheckboxChange}/>
            </label>
            <p2>Please read the pdfs below:</p2>
            <br></br>
            <a href="https://arcs.qmul.ac.uk/media/arcs/policyzone/Privacy-Notice-for-Research-Participants.pdf"> Privacy Notice for Research Participants.pdf</a>
            <br></br>
            <a href="https://www.qmul.ac.uk/media/arcs/policyzone/Data-Protection-Policy-v03.1.pdf"> Data Protection Policy.pdf</a>
            <br></br>
            <br></br>
            <div>
              <button id="page2-next-button" onClick={confirmConsent} class="button" value="hide">Confirm Consent</button>
            </div>
            
            </form>
          </div>

          <div class="navBox">
            {/* <button id="page2-next-button" onClick={nextPage} class="button" value="hide">Next</button> */}
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide" title="If you go to the previous page you must fill out all forms again.">Previous</button>
            <button id="page2-next-button" onClick={handleNextButtonClickP2} class="button" value="hide">Next</button>
          </div>
        </div>
        

      )}

      {/* Page 3 */}
      {currentPage === 'page3' && (
        <div class="page" id="page3">
          <div class="main" id="main3">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 3 - Demographics Form </h5>
            <form action="" id="P3contactForm">
            <p> My age range is: </p>

            <div id="age-range" class="radio-group">
              <label class="container"> 
						    <input type="radio" name="age" id="18-24" value="18-24"></input>18-24
						    <span class="checkmark"> </span>
					    </label>

              <label class="container"> 
						    <input type="radio" name="age" id="25-34" value="25-34"></input>25-34
						    <span class="checkmark"> </span>
					    </label>

              <label class="container"> 
                <input type="radio" name="age" id="35-44" value="35-44"></input>35-44
                <span class="checkmark"> </span>
              </label>

              <label class="container"> 
                <input type="radio" name="age" id="45-54" value="45-54"></input>45-54
                <span class="checkmark"> </span>
              </label>

              <label class="container"> 
                <input type="radio" name="age" id="55-64" value="55-64"></input>55-64
                <span class="checkmark"> </span>
              </label>

              <label class="container"> 
                <input type="radio" name="age" id="65+" value="65+"></input>65+
                <span class="checkmark"> </span>
              </label>

            </div>

            <p> I would best describe my current occupation as: </p>
            <div id="occupation-type" class="radio-group"></div>
              <label class="container"> 
                <input type="radio" name="occupation" id="at-school" value="at-school"></input>At School
                <span class="checkmark"></span>
              </label>

              <label class="container"> 
                <input type="radio" name="occupation" id="university" value="university"></input>At University
                <span class="checkmark"></span>
              </label>

              <label class="container"> 
                <input type="radio" name="occupation" id="full-time-employment" value="full-time-employment"></input>Full-Time Employed
                <span class="checkmark"></span>
              </label>

              <label class="container"> 
                <input type="radio" name="occupation" id="part-time-employment" value="part-time-employment"></input>Part-Time Employed
                <span class="checkmark"></span>
              </label>

              <label class="container"> 
                <input type="radio" name="occupation" id="self-employment" value="self-employment"></input>Self-Employed
                <span class="checkmark"></span>
              </label>

               <label class="container"> 
                <input type="radio" name="occupation" id="full-time-parent" value="full-time-parent"></input>Full-Time Parent
                <span class="checkmark"></span>
              </label>

              <label class="container">
                <input type="radio" name="occupation" id="retired" value="retired"></input>Retired
                <span class="checkmark"></span>
              </label>

              <label class="container">
                <input type="radio" name="occupation" id="other" value="other"></input>Other
                <span class="checkmark"></span>
              </label> 

            <p> I would describe my nationality as: </p>
				    <input type="text" id="nationality-data" name="nationality"></input>
				    <label for="nationality"> </label>

            <p> The countr(ies) that I spent most of my formative years in was: </p>
				    <input type="text" id="country-data" name="country"></input>
				    <label for="country"> </label>

            <p> I would describe my gender as: </p>
				    <input type="text" id="gender-data" name="gender"></input>
				    <label for="gender"> </label>

            <p></p>

            <button id="submit-demographics-button" type="submit"onClick={handleSaveDemographics} >Submit</button>

              </form>
            </div>
            <div class="navBox">
              <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
              <button id="page3-next-button" onClick={handleNextButtonClickP3} class="button" value="hide">Next</button>
            </div>
        </div>

        
      )}

      {/* Page 4 - Music experience */ }
      {currentPage === 'page4' && (
        <div class="page" id="page4">
          <div class="main" id="main4">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 4 - Music Background</h5>
            <p> Please fill out the below form based on your music background and experience:</p>

            <form action="" id="P4contactForm" >
              <p> 1. I listen to music attentively ... day: </p>
                <sub-paragraph>
                  <sup>(The main activity/focus is music listening)</sup>
                </sub-paragraph>
                <div id="music-hours" class="radio-group">
                  <label class="container">  
                    <input type="radio" name="music-hrs" id="0-15" value="0-15"></input>0-15 mins
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs" id="15-30" value="15-30"></input>15-30 mins 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs" id="30-60" value="30-60"></input>30-60 mins 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs" id="1-2hrs" value="1-2hrs"></input>1-2 hrs 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs" id="2-4 hrs" value="2-4 hrs"></input>2-4 hrs 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs" id="4+ hrs" value="4+ hrs"></input>4+ hrs 
                    <span class="checkmark"></span>
                  </label>
                </div>
              <p> 2. I listen to music casually ... a day</p>
                <sub-paragraph>
                  <sup>(The main activity/focus isn't music listening/ I am doing something else/ It's on in the background)</sup>
                </sub-paragraph>
                <div id="music-hours2" class="radio-group">
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="0-15" value="0-15"></input> 0-15 mins 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="15-30" value="15-30"></input>15-30 mins 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="30-60" value="30-60"></input>30-60 mins 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="1-2hrs" value="1-2hrs"></input>1-2 hrs 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="2-4 hrs" value="2-4 hrs"></input>2-4 hrs 
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="music-hrs2" id="4+ hrs" value="4+ hrs"></input>4+ hrs 
                    <span class="checkmark"></span>
                  </label>
                </div>


              <p> 3. I engaged in regular, daily practice of a musical instrument (including voice) for the following number of years: </p>
              <div id="music-years" class="radio-group">
                  <label class="container"> 
                    <input type="radio" name="years" id="0-1" value="0-1"></input>0-1 yr
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="years" id="1-2" value="1-2"></input>1-2 yrs
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="years" id="2-4" value="2-4"></input>2-4 yrs
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="years" id="4-6" value="4-6"></input>4-6 yrs
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="years" id="6-9" value="6-10"></input>6-10 yrs
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="years" id="10+" value="10+"></input>10+ yrs
                    <span class="checkmark"></span>
                  </label>
              </div>

              <p> 4. I am able to judge whether someone is a good singer or not.</p>
              <div id="music-singer" class="radio-group">
                <label class="container">  
                  <input type="radio" name="singer" id="strongly-agree" value="strongly-agree"></input>Strongly Agree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="singer" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 5. I find it difficult to spot mistakes in a performance of a song even if I know the tune.</p>
              <div id="music-mistakes" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="mistakes" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="mistakes" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 6. I can compare and discuss differences between two performances or versions of the same piece of music.</p>
              <div id="music-differences" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="differences" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="differences" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 7. I can tell when people sing or play out of time to the beat</p>
              <div id="music-out-of-time" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-time" id="most-agree" value="most-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="out-of-time" id="strongly-disagree" value="strongly-disagree"></input> Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 8. I can tell when people sing or play out of tune.</p>
              <div id="music-out-of-tune" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="out-of-tune" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 9. I would consider myself a musician.</p>
              <div id="music-musician" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="musician" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="musician" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="musician" id="sort-of-agree" value="sort-of-agree"></input> Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="musician" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">  
                  <input type="radio" name="musician" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="musician" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="musician" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 10. I am familiar with music production and/or using DAWs etc: </p>
              <div id="music-production" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="production" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="production" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p></p>
            <button id="submit-page4-button" type="submit"onClick={handleSavePage4}>Submit</button>
            


            </form>
          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page4-next-button" onClick={handleNextButtonClickP4} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* Page 5 - Emotion in music ...and film?...form */}
      {currentPage === 'page5' && (
        <div class="page" id="page5">
          <div class="main" id="main5">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5>Page 5 - Emotion and Music Form </h5>
            <p>Please complete the form below based on your music listening preferences: </p>
            <form action="" id="P4contactForm">
            <p> 1. Music is very important to me: </p>
                <sub-paragraph>
                  <sup>(0 - not important at all, 10 - one of the most important things to me)</sup>
                </sub-paragraph>
              <div id="music-importance" class="radio-group">
                  <label class="container"> 
                    <input type="radio" name="importance" id="0" value="0"></input>0
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="1" value="1"></input>1
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="2" value="2"></input>2
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="3" value="3"></input>3
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="4" value="4"></input>4
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="5" value="5"></input>5
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="6" value="6"></input>6
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="7" value="7"></input>7
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="8" value="8"></input>8
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="9" value="9"></input>9
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"> 
                    <input type="radio" name="importance" id="10" value="10"></input>10
                    <span class="checkmark"></span>
                  </label>
                </div>

              <p> 2. I spend a lot of my free time doing music-related activities</p>
              <div id="music-activities" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="activities" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="activities" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 3. Music is kind of an addiction for me – I couldn’t live without it.</p>
              <div id="music-addiction" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="addiction" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="addiction" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 4. I keep track of new music that I come across (e.g. new artists or recordings).</p>
              <div id="music-new-music" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="new_music" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new_music" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new_music" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new_music" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">  
                  <input type="radio" name="new_music" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new_music" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new_music" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 5. I often read or search the internet for things related to music.</p>
              <div id="music-search" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="search" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="search" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="search" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="search" id="not-sure" value="not-sure"></input> Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="search" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="search" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="search" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 6. My favourite genre of music is:</p>
                <sub-paragraph>
                  <sup>(If you don't know your favourite try which genre you mostly listen to)</sup>
                </sub-paragraph>
              <p></p>
              <input type="text" id="genre_data" name="genre"></input>
				      <label for="genre"> </label> 

              <p> 7. Pieces of music rarely evoke emotions for me. </p>
              <div id="music-evoke" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="evoke" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evoke" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 8. Music can evoke my memories of past people and places.</p>
              <div id="music-memories" class="radio-group">
                <label class="container">  
                  <input type="radio" name="memories" id="strongly-agree" value="strongly-agree"></input>Strongly Agree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="memories" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>


              <p> 9. I sometimes choose (to listen/to play) music that can trigger shivers down my spine.</p>
              <div id="music-shiver" class="radio-group">
                <label class="container"> 
                  <input type="radio" name="shiver" id="stronly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="shiver" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>
              <p> 10. I often pick certain music to motivate or excite me.</p>
              <div id="music-excite" class="radio-group">
                <label class="container">  
                  <input type="radio" name="excite" id="strongly-agree" value="strongly-agree"></input>Strongly Agree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="excite" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>

              <p> 11. I am able to talk about the emotions that a piece of music evokes for me.</p>
              <div id="music-talk" class="radio-group">
                <label class="container">  
                  <input type="radio" name="talk" id="strongly-agree" value="strongly-agree"></input>Strongly Agree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="talk" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>
              <p></p>
              <button id="submit-page5-button" type="submit"onClick={handleSavePage5}>Submit</button>

            </form>
          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page5-next-button" onClick={handleNextButtonClickP5} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* Page 6 -  */}
      {currentPage === 'page6' && (
        <div class="page" id="page6">
          <div class="main" id="main6">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5>Page 6 - Music Personality Questions</h5>
            <p>Please complete the form below: </p>
            <form action="" id="QuizForm">

              <h3> Question 1: </h3>
              <p> Choose your favorite place to listen to music:</p>
              <div id="q1" class="radio-group2">
              <label class="container">
                  <input type="radio" name="radio-option-0" id="option-0" value="0" onChange={() => handleAnswerChange(0, 0)}></input>
                   A) In a cosy corner with headphones on, shutting out the world
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-0" id="option-1" value="1" onChange={() => handleAnswerChange(0, 1)}></input>
                   B) Surrounded by friends and family, enjoying music together
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-0" id="option-2" value="2" onChange={() => handleAnswerChange(0, 2)}></input>
                   C) Out in nature, under the open sky, connected to music, emotion and the outdoors
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-0" id="option-3" value="3" onChange={() => handleAnswerChange(0, 3)}></input> 
                  D) In a vibrant, crowded music venue, emersed in the music and atmosphere
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-0" id="option-4" value="4" onChange={() => handleAnswerChange(0, 4)}></input> 
                  E) In the kitchen, cooking and singing along while the soothing melodies wash away the day's stresses
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-0" id="option-5" value="5" onChange={() => handleAnswerChange(0, 5)}></input> 
                  F) In the car on a long drive, the music as your companion
                  <span class="checkmark"></span>
                </label>
              </div>




              <h3> Question 2: </h3>
              <p> When you hear a new song, what matters most to you?</p>
              <div id="q2" class="radio-group2">
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-0" value="0" onChange={() => handleAnswerChange(1, 0)}></input>
                   A) The emotions it evokes and the specific instrumental sounds
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-1" value="1" onChange={() => handleAnswerChange(1, 1)}></input> 
                  B) The rhythm and whether it's dance-worthy
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-2" value="2" onChange={() => handleAnswerChange(1, 2)}></input> 
                  C) The atmosphere it creates and the soundscapes
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-3" value="3" onChange={() => handleAnswerChange(1, 3)}></input> 
                  D) The energy and excitement it brings
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-4" value="4" onChange={() => handleAnswerChange(1, 4)}></input> 
                  E) The creativity and unique instrumentations
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-1" id="option-5" value="5" onChange={() => handleAnswerChange(1, 5)}></input> 
                  F) The storytelling and the lyrics' depth
                  <span class="checkmark"></span>
                </label>
              </div>

              <h3> Question 3: </h3>
              <p> How do you discover new music?</p>
              <div id="q3" class="radio-group2">
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-0" value="0" onChange={() => handleAnswerChange(2, 0)}></input> 
                  A) By exploring moods and emotions through curated playlists/radio shows
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-1" value="1" onChange={() => handleAnswerChange(2, 1)}></input> 
                  B) Recommendations from friends and family
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-2" value="2" onChange={() => handleAnswerChange(2, 2)}></input> 
                  C) Through outdoor adventures and music festivals
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-3" value="3" onChange={() => handleAnswerChange(2, 3)}></input> 
                  D) By attending concerts/gigs and live performances
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-4" value="4" onChange={() => handleAnswerChange(2, 4)}></input> 
                  E) Scouring online forums/sources for hidden gems
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-2" id="option-5" value="5" onChange={() => handleAnswerChange(2, 5)}></input> 
                  F) By reading music blogs and reviews/ exploring record shops
                  <span class="checkmark"></span>
                </label>
              </div>

              <h3> Question 4: </h3>
              <p> How would you describe your music taste?</p>
              <div id="q4" class="radio-group2">
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-0" value="0" onChange={() => handleAnswerChange(3, 0)}></input> 
                  A) Eclectic, based on the feeling, not the genre
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-1" value="1" onChange={() => handleAnswerChange(3, 1)}></input> 
                  B) A mix of classics and crowd-pleasers, what makes me want to sing a long
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-2" value="2" onChange={() => handleAnswerChange(3, 2)}></input> 
                  C) A mix of ambient sounds, lots of fusion, mellow and cultural
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-3" value="3" onChange={() => handleAnswerChange(3, 3)}></input> 
                  D) High-energy and dance-centric
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-4" value="4" onChange={() => handleAnswerChange(3, 4)}></input> 
                  E) Focused on experimental and innovative music
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-3" id="option-5" value="5" onChange={() => handleAnswerChange(3, 5)}></input> 
                  F) Focused on thought-provoking lyrics and expressive sounds
                  <span class="checkmark"></span>
                </label>
              </div>

              <h3> Question 5: </h3>
              <p> How much do you agree with this statement: "Music I like is based on the feeling, not the genre"?</p>
              <div id="q5" class="radio-group2">
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-0" value="0" onChange={() => handleAnswerChange(4, 0)}></input> 
                  A) Strongly agree, my emotions guide my music choices
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-1" value="1" onChange={() => handleAnswerChange(4, 1)}></input> 
                  B) Somewhat agree, I like a mix of genres, but mood matters
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-2" value="2" onChange={() => handleAnswerChange(4, 2)}></input> 
                  C) Neutral, I appreciate various genres equally
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-3" value="3" onChange={() => handleAnswerChange(4, 3)}></input> 
                  D) Somewhat disagree, I tend to stick to specific genres
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-4" value="4" onChange={() => handleAnswerChange(4, 4)}></input> 
                  E) Strongly disagree, genre is the primary factor in my choices
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  <input type="radio" name="radio-option-4" id="option-5" value="5" onChange={() => handleAnswerChange(4, 5)}></input> 
                  F) My music taste is a complex blend of mood and genre considerations
                  <span class="checkmark"></span>
                </label>
              </div>

              <button id="submit-page6-button" onClick={handleSubmit}>Submit</button> 

            </form>

            </div>
            <div class="navBox">
              <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
              <button id="page6-next-button" onClick={handleNextButtonClickMusicPersonality} class="button" value="hide">Next</button>
            </div>
        </div>
      )} 





      {/* Page 7 - */}
      {currentPage === 'page7' && (
        <div class="page" id="page7">
          <div class="main" id="main7">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5>Page 7 - Music Listening Survey </h5>
            <p> This next section will require you to listen and label excerpts of music from films. Please make sure you have high quality headphones and/or speakers. And a quiet listening space away from distractions.</p>
            <h1>Test your volume here: </h1>
            <audio ref={audioRef} controls>
              <source src="400hz_sine.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
            <h1> Please watch the video below: </h1>
            <p>
              This video shows how the next few pages will be structured and how to naviagate around the interactive space:
            </p>
            <sub-paragraph> 
              (Don't worry too much, it will be clear on the next few pages!) 
            </sub-paragraph>
            <br></br>
            <img src="src/example-exp.gif" style={{ width: '700px', height: '700px' }}/>
            <p> - First, label the waveform </p>{/*(the position where you feel the emotion) */}
            <p> - Then, label the graph with the corresponding dot colour.</p>{/*(high/low energy and high/low positivity) */}
            <p> - Then, add a short sentence on the emotions you felt.</p>
            <p>Then, Submit!</p>
            <p> </p>
            <h1> Guide for the Energy/Positivity Graph:</h1>
            <p>
              If you are struggling to interpret the Energy/Positivity Graph, this is an example of how the graph could be interpreted by emotion annotations. However you can interpret it any way you want.
            </p>
            <br></br>
            <img src="src/en-pos-anno.png" style={{ width: '400px', height: '400px' }}/>
            <br></br>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page7-next-button" onClick={nextPage} class="button" value="hide">Next</button>
          </div>
        </div>
      )}




      {/* Page 8 -  */}
      
      {currentPage === 'page8' && (
        <div class="page" id="page8">
          <div class="main" id="main8">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 8 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 1/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              
              <WavesurferVertex
                  //audioFile={handleRandomizeAudio}
                  audioFile={audioFile1}
                  loadRandomAudioFile={loadRandomAudioFile1}
                  containerId="audiowave1"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 

              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn' onClick={handleSaveRegionsToFirestore}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt:</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>

                <div class="inputBox">
                  <form>
                  <textarea 
                  rows="2"
                  type="text" 
                  id="emotion_sentence" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence"
                  value={emotionSentence}
                  onChange={(e) => setEmotionSentence(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence"> </label>
                  </form>
                
                </div>
                
            </div>

            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio1DataButton"
                className="submit-audio1-data-btn"
                onClick={handleSubmitSentenceFamiliar}> Submit Responses </button>
            </div>
            
          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page8-next-button" onClick={handleSubmitSong1} class="button" value="hide">Next</button>
          </div>
        </div>
      )}
      


      {/* --------------------------------------------------------------------------------------------------- */}
      {/* Page 9 - */}
      {/* Song 2 - */}
      {currentPage === 'page9' && (
        <div class="page" id="page9">
          <div class="main" id="main9">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 9 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 2/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              
              <WavesurferVertex
                  audioFile={audioFile2}
                  loadRandomAudioFile={loadRandomAudioFile2}
                  containerId="audiowave2"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn2' onClick={handleSaveRegionsToFirestore2}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>

                <div class="inputBox">
                  <form>
                  <textarea
                  type="text" 
                  id="emotion_sentence2" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence2"
                  value={emotionSentence2}
                  onChange={(e) => setEmotionSentence2(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence2"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt2" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar2" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar2" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar2" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar2" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar2" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio2DataButton"
                className="submit-audio2-data-btn"
                onClick={handleSubmitSentenceFamiliar2}> Submit Responses </button>
            </div>
            
          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page9-next-button" onClick={handleSubmitSong2} class="button" value="hide">Next</button>
          </div>
        </div>
      )}



{/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 10 - */}
      {currentPage === 'page10' && (
        <div class="page" id="page10">
          <div class="main" id="main10">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 10 - Music Emotion Survey</h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 3/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile3}
                  loadRandomAudioFile={loadRandomAudioFile3}
                  containerId="audiowave3"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn3' onClick={handleSaveRegionsToFirestore3}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence3" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence3"
                  value={emotionSentence3}
                  onChange={(e) => setEmotionSentence3(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence3"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt3" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar3" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar3" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar3" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar3" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar3" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio3DataButton"
                className="submit-audio3-data-btn"
                onClick={handleSubmitSentenceFamiliar3}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page10-next-button" onClick={handleSubmitSong3} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 11 - */}
      {currentPage === 'page11' && (
        <div class="page" id="page11">
          <div class="main" id="main11">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 11 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 4/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile4}
                  loadRandomAudioFile={loadRandomAudioFile4}
                  containerId="audiowave4"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn4' onClick={handleSaveRegionsToFirestore4}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence4" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence4"
                  value={emotionSentence4}
                  onChange={(e) => setEmotionSentence4(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence4"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt4" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar4" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar4" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar4" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar4" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar4" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio4DataButton"
                className="submit-audio4-data-btn"
                onClick={handleSubmitSentenceFamiliar4}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page11-next-button" onClick={handleSubmitSong4} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 12 - */}
      {currentPage === 'page12' && (
        <div class="page" id="page12">
          <div class="main" id="main12">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 12 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 5/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile5}
                  loadRandomAudioFile={loadRandomAudioFile5}
                  containerId="audiowave5"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn5' onClick={handleSaveRegionsToFirestore5}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence5" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence5"
                  value={emotionSentence5}
                  onChange={(e) => setEmotionSentence5(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence5"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt5" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar5" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar5" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar5" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar5" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar5" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio5DataButton"
                className="submit-audio5-data-btn"
                onClick={handleSubmitSentenceFamiliar5}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page12-next-button" onClick={handleSubmitSong5} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 13 - */}
      {currentPage === 'page13' && (
        <div class="page" id="page13">
          <div class="main" id="main13">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 13 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 6/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile6}
                  loadRandomAudioFile={loadRandomAudioFile6}
                  containerId="audiowave6"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn6' onClick={handleSaveRegionsToFirestore6}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence6" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence6"
                  value={emotionSentence6}
                  onChange={(e) => setEmotionSentence6(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence6"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt6" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar6" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar6" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar6" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar6" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar6" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio6DataButton"
                className="submit-audio6-data-btn"
                onClick={handleSubmitSentenceFamiliar6}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page13-next-button" onClick={handleSubmitSong6} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 14 - */}
      {currentPage === 'page14' && (
        <div class="page" id="page14">
          <div class="main" id="main14">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 14 - Music Emotion Survey</h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 7/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile7}
                  loadRandomAudioFile={loadRandomAudioFile7}
                  containerId="audiowave7"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn7' onClick={handleSaveRegionsToFirestore7}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence7" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence7"
                  value={emotionSentence7}
                  onChange={(e) => setEmotionSentence7(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence7"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt7" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar7" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar7" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar7" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar7" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar7" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio7DataButton"
                className="submit-audio7-data-btn"
                onClick={handleSubmitSentenceFamiliar7}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page14-next-button" onClick={handleSubmitSong7} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 15 - */}
      {currentPage === 'page15' && (
        <div class="page" id="page15">
          <div class="main" id="main15">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 15 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 8/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile8}
                  loadRandomAudioFile={loadRandomAudioFile8}
                  containerId="audiowave8"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn8' onClick={handleSaveRegionsToFirestore8}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence8" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence8"
                  value={emotionSentence8}
                  onChange={(e) => setEmotionSentence8(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence8"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt8" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar8" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar8" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar8" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar8" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar8" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio8DataButton"
                className="submit-audio8-data-btn"
                onClick={handleSubmitSentenceFamiliar8}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page15-next-button" onClick={handleSubmitSong8} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 16 - */}
      {currentPage === 'page16' && (
        <div class="page" id="page16">
          <div class="main" id="main16">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 16 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 9/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile9}
                  loadRandomAudioFile={loadRandomAudioFile9}
                  containerId="audiowave9"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn9' onClick={handleSaveRegionsToFirestore9}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence9" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence9"
                  value={emotionSentence9}
                  onChange={(e) => setEmotionSentence9(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence9"> </label>
                  </form>
                
                </div>
                
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt9" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar9" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar9" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar9" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar9" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar9" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio9DataButton"
                className="submit-audio9-data-btn"
                onClick={handleSubmitSentenceFamiliar9}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page16-next-button" onClick={handleSubmitSong9} class="button" value="hide">Next</button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 17 - */}
      {currentPage === 'page17' && (
        <div class="page" id="page17">
          <div class="main" id="main17">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 17 - Music Emotion Survey </h5>
            <p> Please fill out all fields. Add AT LEAST one marker and one dot coordinate below:</p>
            <p>Song 10/10</p>
            <div className='wavesurfer-vertex' style={{ backgroundColor: '#d4eaf1' }}>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform as soon as you feel a change in emotion/mood. </p1> 
              <p1> Add as many markers as you'd like. </p1>
              <WavesurferVertex
                  audioFile={audioFile10}
                  loadRandomAudioFile={loadRandomAudioFile10}
                  containerId="audiowave10"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={(updatedPositions) => setDotPositions(updatedPositions)}
                  onRegionInformationUpdate={(updatedRegionInfo) => setRegionInformation(updatedRegionInfo)}
                  lockOriginalDot={lockOriginalDot}
                  /> 
              </div> 
          <div>
          <form>
            {/* button below saves regions and dots inside participant info in firebase: */}
            <button id='save-region-dot-btn10' onClick={handleSaveRegionsToFirestore10}> Save regions and dots </button> 
          </form>
          <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
                <div class="inputBox">
                  <form>
                  <textarea 
                  type="text" 
                  id="emotion_sentence10" 
                  placeholder="Click here to write your sentence..." 
                  name="ME_sentence10"
                  value={emotionSentence10}
                  onChange={(e) => setEmotionSentence10(e.target.value)}>
                  </textarea>
                  <label for="ME_sentence10"> </label>
                  </form>
                
                </div>
               
            </div>
            <h2> Was this music excerpt familiar to you? </h2>
            <form>
              <div id="familiar-excerpt10" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar10" id="definitely-familiar" value="definitely-familiar"
                  checked={familiarityRating === 'definitely-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar10" id="familiar" value="familiar"
                  checked={familiarityRating === 'familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar10" id="not-sure" value="not-sure"
                  checked={familiarityRating === 'not-sure'}
                  onChange={handleFamiliarityChange}
                  ></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar10" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"
                  checked={familiarityRating === 'familiar-feeling-not-familiar'}
                  onChange={handleFamiliarityChange}
                  ></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar10" id="never-heard-this" value="never-heard-this"
                  checked={familiarityRating === 'never-heard-this'}
                  onChange={handleFamiliarityChange}
                  ></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
              </form>
              <br></br>
                <button type="submit" id="submitAudio10DataButton"
                className="submit-audio10-data-btn"
                onClick={handleSubmitSentenceFamiliar10}> Submit Responses </button>
            </div>

          </div>
          <div class="navBox">
            <button id="previous-button" onClick={handlePreviousButtonClick} class="button" value="hide">Previous</button>
            <button id="page17-next-button" onClick={handleSubmitSong10} class="button" value="hide">Next</button>
          </div>
        </div>
      )}
      
      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Page 18 - */}
      {currentPage === 'page18' && (
        <div class="page" id="page18">
          <div class="main" id="main18">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
            <h5> Page 18 - Music Personality Results: </h5>
            <p> music personality results page... </p>

            {musicPersonality && (
              <div>
                <h2>Your Music Personality: {musicPersonality}</h2>
                {musicPersonality.split(' and ').map((personality) => (
                  <p key={personality}>{personalityDescriptions[personality]}</p>
                ))}
                {/* Add short description based on the music personality */}
              </div>
            )}
          </div>
           {/*<button id="page18-next-button" onClick={nextPage} class="button" value="hide">Next</button>*/}
        </div>
      )}




      

      


    </>
  );
}


export default App;


