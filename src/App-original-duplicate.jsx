import { useState } from 'react'
import { firestore } from './firebase';
import { initializeApp } from 'firebase/app';
import { useRef } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

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
  const [count, setCount] = useState(0)

  const firestore = getFirestore(initializeApp); // Assuming you have initialized Firebase

  const messageRef = useRef();

  const myRef = collection(firestore, 'messages');

  const handleSave = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    }

    try{
      addDoc(myRef, data);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <div class="page" id="page1">
        <div class="main" id="'main1">
          <h1> Page 1 - Study Introduction </h1>
            <p> This study aims to observe perceived emotion in film music.</p>
            <br />
        </div>

        <div class="inputBox">
          <form action="" id="contactForm" onSubmit={handleSave}>
            <input type="text" id="name" placeholder="Please type your email here if you want to stay updated about this study" ref={messageRef} />
            <button type="submit"onClick={() => alert('submitted!')}>Submit</button>
          </form>
        </div>

        <div class="navi">
          <p>
          <button id="introduction-next-button" onClick="nextPage()" class="button" value="hide"> Next </button>
          <span id="page-ref" class="page-ref"> </span>
          </p>
		    </div>

        <div class="page" id="page2">
          <div class="main" id="main2">
            <h1> Page 2 - Consent Page</h1>
            <p> Please provide consent for the following statements to proceed with taking part in this study.</p>
          </div>
        </div>

          

       {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + RUBY</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
  </p>  */}
  </div>
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p>*/}
    </>
  )
}

export default App
 