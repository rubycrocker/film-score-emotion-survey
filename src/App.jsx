import { useState } from 'react'
import { firestore } from './firebase';
import { initializeApp } from 'firebase/app';
import { useRef } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { Vertex } from '/Users/rubycrocker/ruby-fme-app/src/vertex.jsx';
//import WaveSurferComponent from './WaveSurferComponent';
//import WavSurfer from '/Users/rubycrocker/ruby-fme-app/src/wavsurfer.jsx';
//import { Dots } from '/Users/rubycrocker/ruby-fme-app/src/assets/dots.jsx';
import { WavesurferVertex } from '/Users/rubycrocker/ruby-fme-app/src/wavesurferVertex.jsx';
//import { WaveSurferComponent } from '/Users/rubycrocker/ruby-fme-app/src/WaveSurferComponent.jsx';


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

  const firestore = getFirestore(initializeApp); // Assuming you have initialized Firebase

  const messageRef = useRef();
  const audioRef = useRef(null);
  const myRef = collection(firestore, 'messages');
  const [volume, setVolume] = useState(1.0); // Initial volume set to 100%


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





  // Initialize Firebase Firestore
  const db = getFirestore();

  const dotCoordinatesCollection = collection(db, 'dotCoordinates'); // Replace 'dotCoordinates' with your desired collection name
  const handleConfirmDotPosition = async () => {
    try {
      if (dotPositions.length === 3) {
        const dotCoordinatesCollection = collection(db, 'dotCoordinates');

        const dotDocument = {
          dots: dotPositions,
        };
  
        await addDoc(dotCoordinatesCollection, dotDocument);
    /*  const batch = [];
        for (let i = 0; i < dotPositions.length; i++) {
          const dotPosition = dotPositions[i];
          batch.push(addDoc(dotCoordinatesCollection, dotPosition));
        }
        await Promise.all(batch); */
        // Create a single document that contains the array of dot data
      
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









  
    //music personality quiz - page 6 

  const [userResponses, setUserResponses] = useState([]);
  const [musicPersonality, setMusicPersonality] = useState(null);

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
  };

  const personalityDescriptions = {
    A: "A - The Introspective Explorer!",
    B: "B - The Social Harmonizer!",
    C: "C - The Outdoor Melodist!",
    D: "D - The Groove Commander!",
    E: "E - The Sonic Innovator!",
    F: "F - The Serenading Poet!"
  };




  




  // volume change - practise page
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSave = async(e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };
    try{
      addDoc(myRef, data);
    } catch (e) {
      console.log(e);
    }
  };


  // trying to save page 3 form...
  const myRef2 = collection(firestore, 'responses');

  const handleSavePage3 = async (e) => {
    e.preventDefault();

    // Collect data from the form
    const age = document.querySelector('input[name="age"]:checked').value;
    const occupation = document.querySelector('input[name="occupation"]:checked').value;
    const nationality = document.getElementById('nationality-data').value;
    const country = document.getElementById('country-data').value;
    const gender = document.getElementById('gender-data').value;
  
    // Prepare the data to be saved to Firestore
    const data = {
      age,
      occupation,
      nationality,
      country,
      gender,
    };
  
    try {
      // Add the data to Firestore
      await addDoc(myRef2, data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

   // trying to save page 4 form...
   const myRef3 = collection(firestore, 'responses_music');

   const handleSavePage4 = async (e) => {
     e.preventDefault();
   
    // Collect data from the form
    const music_hrs = document.querySelector('input[name="music-hrs"]:checked').value;
    const music_hrs2 = document.querySelector('input[name="music-hrs2"]:checked').value;
    const years = document.querySelector('input[name="years"]:checked').value;
    const singer = document.querySelector('input[name="singer"]:checked').value;
    const mistakes = document.querySelector('input[name="mistakes"]:checked').value;
    const differences = document.querySelector('input[name="differences"]:checked').value;
    const out_of_time = document.querySelector('input[name="out-of-time"]:checked').value;
    const out_of_tune = document.querySelector('input[name="out-of-tune"]:checked').value;
    const musician = document.querySelector('input[name="musician"]:checked').value;
    const production = document.querySelector('input[name="production"]:checked').value;

  
    // Prepare the data to be saved to Firestore
    const data = {
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
   
     try {
       // Add the data to Firestore
       await addDoc(myRef3, data);
       alert('Data submitted successfully!');
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   };

   // trying to save page 5 form...
   const myRef4 = collection(firestore, 'responses_emotion');

   const handleSavePage5 = async (e) => {
     e.preventDefault();
   
    // Collect data from the form
    const importance = document.querySelector('input[name="importance"]:checked').value;
    const activities = document.querySelector('input[name="activities"]:checked').value;
    const addiction = document.querySelector('input[name="addiction"]:checked').value;
    const new_music = document.querySelector('input[name="new-music"]:checked').value;
    const search = document.querySelector('input[name="search"]:checked').value;
    const genre = document.getElementById('genre-data').value;
    const evoke = document.querySelector('input[name="evoke"]:checked').value;
    const memories = document.querySelector('input[name="memories"]:checked').value;
    const shiver = document.querySelector('input[name="shiver"]:checked').value;
    const excite = document.querySelector('input[name="excite"]:checked').value;
    const evokes = document.querySelector('input[name="evokes"]:checked').value;

  
    // Prepare the data to be saved to Firestore
    const data = {
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
      evokes,
    };
   
     try {
       // Add the data to Firestore
       await addDoc(myRef4, data);
       alert('Data submitted successfully!');
     } catch (error) {
       console.error('Error submitting data:', error);
     }
   };

   ////////////////


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
        break;
      default:
        // Handle reaching the end of the story
        break;
    }
  };

  const [checkedItems, setCheckedItems] = useState({}); // State to track checked items
  
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems({ ...checkedItems, [id]: checked });
    };




  return (
    <>
      {currentPage === 'page1' && (
        <div class="page" id="page1">
          <div class="main" id="'main1">
            <h1>Music, Mood, and Motion: A Survey on Emotion in Film Music</h1>
          <h1> Page 1 - Study Introduction </h1>

            <p> The purpose of this study is to understand how music in films makes us feel. By sharing your thoughts, you'll help us learn more about how emotions are created in film music! </p>
            <p> The study includes a series of questionnaires and interactive labelling of audio excerpts.</p>
            <p> This study will consist of 2 main surveys. The first survey aims to assess how you listen to music based on a questionnaire so please answer truthfully.</p>
            <p> The second survey consists of 10 music excerpts from film soundtracks from the last 20 years. 
              There will be interactive graphs and pointers for you to annotate your mood and emotion while listening to the short film excerpts.</p>
            <p> There will also be some brief questions on demographics and music skill/ability to begin.</p>
            <p> The entire study should take participants roughly 30 minutes to complete, depending on how detailed the participants want to be with their annotations.</p>
            <br></br>
            <p> At the end of the study your 'music personality' will be shown based on your responses! 
              It will tell you about your music listening profile and listening style! 
              This part of the study is a ‘gamified’ element, it is meant for amusement and is not to be 
              interpreted too seriously, it was created for enjoyment rather than strict scientific analysis.</p>
            <br></br>
            <br></br>
            <div class="inputBox">
              <form action="" id="contactForm" onSubmit={handleSave}>
                <input type="text" id="name" placeholder='Please type your email here if you want to stay updated about this study' ref={messageRef}/>
                <button type="submit"onClick={() => alert('submitted!')}>Submit</button>
              </form>
            </div>
        </div>
        <button id="introduction-next-button" onClick={nextPage} class="button" value="hide">Next</button>
      </div>
        
      )}

      {/* Page 2 */}
      {currentPage === 'page2' && (
        <div class="page" id="page2">
          <div class="main" id="main2">
          <h1> Page 2 - Consent Page </h1>
            <form>
            <p> Please provide consent for the following statements to proceed with taking part in this study, 
              however you are reminded that you are free to withdraw your participation to the study at any point:</p>
            <br />
            <label class="container1" id="consent">
              I agree that the research project named above has been explained to me to my satisfaction on the information page.
					    <input type="checkbox" id="item1" checked={checkedItems.item1 || false} onChange={handleCheckboxChange}/>
            </label>
            <label class="container1" id="consent">
              I understand that if I decide at any other time during the research that I no longer wish to
					    participate in this study, I can notify the researchers through the email address provided
					    and be withdrawn from it immediately.
					      <input type="checkbox" id="item2" checked={checkedItems.item2 || false} onChange={handleCheckboxChange}/>
				    </label>
            <label class="container1" id="consent">
              I have read the information page and understand what the research study involves
					      <input type="checkbox" id="item3" checked={checkedItems.item3 || false} onChange={handleCheckboxChange}/>
				    </label>
            <label class="container1" id="consent">
              I agree to take part in the study, which will include use of my personal data. The data will be
					    anonymised, stored securely and not shared with any third parties.
                <input type="checkbox" id="item4" checked={checkedItems.item4 || false} onChange={handleCheckboxChange}/>
            </label>
            <label class="container1" id="consent">
              I confirm I am over the age of 18.
                <input type="checkbox" id="item5" checked={checkedItems.item5 || false} onChange={handleCheckboxChange}/>
            </label>
            <p2>Please read the pdfs below:</p2>
            <br></br>
            <a href="https://arcs.qmul.ac.uk/media/arcs/policyzone/Privacy-Notice-for-Research-Participants.pdf"> Privacy Notice for Research Participants.pdf</a>
            <br></br>
            <a href="https://www.qmul.ac.uk/media/arcs/policyzone/Data-Protection-Policy-v03.1.pdf"> Data Protection Policy.pdf</a>

            </form>
          </div>
        

          <button id="page2-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>
        

      )}

      {/* Page 3 */}
      {currentPage === 'page3' && (
        <div class="page" id="page3">
          <div class="main" id="main3">
            <h1> Page 3 - Demographics Questionnaire </h1>
            <form action="" id="P3contactForm" onSubmit={handleSavePage3}>
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

            <button type="submit"onClick={() => alert('submitted!')}>Submit</button>

              </form>
            </div>


          <button id="page3-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>

        
      )}

      {/* Page 4 - Music experience */ }
      {currentPage === 'page4' && (
        <div class="page" id="page4">
          <div class="main" id="main4">
            <h1> Page 4 - Music and Emotion background</h1>
            <p> This section aims to understand you as a music listener to provide a better understanding of how you listen to music.</p>
            <p> Please fill out the below form based on your music listening and experience:</p>

            <form action="" id="P4contactForm" onSubmit={handleSavePage4}>
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
            <button type="submit"onClick={() => alert('submitted!')}>Submit</button>


            </form>
          </div>
          <button id="page4-next-button" onClick={nextPage} class="button" value="hide">Next</button>

        </div>
      )}

      {/* Page 5 - Emotion in music ...and film?...form */}
      {currentPage === 'page5' && (
        <div class="page" id="page5">
          <div class="main" id="main5">
            <h1>Page 5 - Emotion and Music form. </h1>
            <form action="" id="P4contactForm" onSubmit={handleSavePage5}>
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
                  <input type="radio" name="new-music" id="strongly-agree" value="strongly-agree"></input>Strongly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new-music" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new-music" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new-music" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container">  
                  <input type="radio" name="new-music" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new-music" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="new-music" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
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
              <input type="text" id="genre-data" name="genre"></input>
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
              <div id="music-evokes" class="radio-group">
                <label class="container">  
                  <input type="radio" name="evokes" id="strongly-agree" value="strongly-agree"></input>Strongly Agree
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="mostly-agree" value="mostly-agree"></input>Mostly Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="sort-of-agree" value="sort-of-agree"></input>Somewhat Agree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="not-sure" value="not-sure"></input>Neither Agree or Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="sort-of-disagree" value="sort-of-disagree"></input>Somewhat Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="mostly-agree" value="mostly-agree"></input>Mostly Disagree 
                  <span class="checkmark"></span>
                </label>
                <label class="container"> 
                  <input type="radio" name="evokes" id="strongly-disagree" value="strongly-disagree"></input>Strongly Disagree 
                  <span class="checkmark"></span>
                </label>
              </div>
              <p></p>
              <button type="submit"onClick={() => alert('submitted!')}>Submit</button>

            </form>
          </div>
          <button id="page5-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>
      )}

      {/* Page 6 -  */}
      {currentPage === 'page6' && (
        <div class="page" id="page6">
          <div class="main" id="main6">
            <h1>Page 6 - Music Personality Questions</h1>
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

              


              <button onClick={handleSubmit}>Submit</button>

            </form>

            
            </div>
          <button id="page6-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>
      )} 





      {/* Page 7 - */}
      {currentPage === 'page7' && (
        <div class="page" id="page7">
          <div class="main" id="main7">
            <h1>Page 7 - Music Listening Survey </h1>
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
              This video shows how the interactive space works.
            </p>
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
          <button id="page7-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>
      )}




      {/* Page 8 -  */}
      {currentPage === 'page8' && (
        <div class="page" id="page8">
          <div class="main" id="main8">
            <h1> Page 8 - Music Emotion Survey Example </h1>
            <div className='wavesurfer-vertex'>
              <h2>1. Audio Waveform - Region and Markers </h2>
              <p1>Please add markers to the waveform: </p1>

                  

                  <WavesurferVertex
                  audioFile="310.mp3" 
                  containerId="audiowave1"

                  point={dotPosition}
                  onPositionUpdate={handlePositionUpdate}
                  onDotPositionUpdate={handleDotPositionUpdate}
                  lockOriginalDot={lockOriginalDot}/> 
              </div>


          <div className='form'>
            <div>
                <h2> 3. How did you feel? - Explain with a sentence </h2>
                <p>Please add a sentence based on the emotion you felt while listening to this excerpt</p>
                <div class="inputBox">
                  <form>
                  <input type="text" 
                  id="gender-data" 
                  placeholder="Click here to write your sentence..." 
                  name="gender"></input>
				          <label for="gender"> </label>
                  </form>
                </div>
                <sub-paragraph>
                <p></p>
                Example 1: Overall the excerpt felt tense, the first marker indicates when i felt most tense. The second marker indicates where my fear was highest.
                <p></p>
                Example 2: The third marker position is where I felt the mood change - the highest energy point and a feeling of fear followed by a feeling of slight relief, yet still uneasy.
                </sub-paragraph>
            </div>

            <h2> Was this music excerpt familiar to you? </h2>
              <div id="familiar-excerpt" class="radio-group">
                <label class="container2">
                  <input type="radio" name="familiar" id="definitely-familiar" value="definitely-familiar"></input> It is definitely familiar, I know the song and what film it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="familiar" value="familiar"></input> It is very familiar but I am not sure where it's from.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="not-sure" value="not-sure"></input> Not Sure/ Don't know.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="familiar-feeling-not-familiar" value="familiar-feeling-not-familiar"></input> It is not familiar, although it has a familiar feeling.
                  <span class="checkmark"></span>
                </label>
                <label class="container2">
                  <input type="radio" name="familiar" id="never-heard-this" value="never-heard-this"></input> I have never heard this.
                  <span class="checkmark"></span>
                </label>
              </div>
                <button id="submitAudio1DataButton" className="submit-audio1-data-btn"> Submit Responses </button>
            </div>


            
          </div>
          <button id="page8-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        
        </div>
      )}



      {/* Page 9 - */}
      {currentPage === 'page9' && (
        <div class="page" id="page9">
          <div class="main" id="main9">
            <h1> Page 9 - Music Emotion Survey </h1>
            <p> Audio #1 </p>

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
          <button id="page9-next-button" onClick={nextPage} class="button" value="hide">Next</button>
        </div>
      )}



      

      


    </>
  );
}


export default App;


