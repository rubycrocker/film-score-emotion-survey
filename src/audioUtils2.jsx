/* export function getRandomAudioPath2() {
    const audioFiles = ["Bounty_Hunter_Puss_In_Boots_Heitor_Pereira_sample_1.mp3",
    "Boys_in_the_Mirror__Fatima_Al_Qadiri_Atlantics_sample_1.mp3",
    "Brothers_In_Arms_Mad_Max_Fury_Road_Junkie_XL_sample_1.mp3",
    "Buckskin_Stallion_Blues_-_Townes_Van_Zandt_-_Three_Billboards_Outside_Ebbing,_Missouri_sample_1.mp3",
    "Bundle_of_Joy_-_Michael_Giancchio_Inside_Out_sample_1.mp3",
    "Bunsen_Burner_-_Ex_Machina-Anthony_William_Tombling_CUTS_sample_1.mp3",
    "C90_-_Soundtree__Under_The_Skin_sample_1.mp3",
    "Calling_The_Whipper_In_Jonny_Greenwood_Spencer_sample_1.mp3",
    "Camille_-_She_Was_Corsage_sample_1.mp3",
    "Canto_At_Gabelmeister's_Peak_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_1.mp3",
    "Caravan_Duke_Ellington:Juan_Tizol:John_Wasson_Whiplash_sample_1.mp3",
    "Childish_Gambino_-_Redbone_Get_Out_sample_1.mp3",
    "Christ_in_the_Mountains_Mychael_Danna_Life_of_Pi_sample_1.mp3",
    "Ciao_Papa_Gregory_Mann_Alexandre_Desplat_Guillermo_Del_Toro's_Pinnochio_sample_1.mp3",
    "Closer_Valentin_Hadjadj_Close_sample_1.mp3",
    "Conciliation_II_Parasite_Jung_Jaeil_sample_1.mp3",
    "Creation_Mica_Levi_Under_the_Skin_sample_1.mp3",
    "DUNE_The_One_Hans_Zimmer_sample_1.mp3",
    "David_Alvarez,_Sharks_-_La_Borinquena_Felix_Astol_Artes,_Lola_Rodriguez_de_Tio,_David_Newman,_Matt_Sullivan,_Jeanine_Tesori_West_Side_Story_sample_1.mp3",
    "David_Talks_About_His_Mother_Da_5_Bloods_Terence_Blanchard_sample_1.mp3",
    "Daydream_Believer_The_Monkees_Women_Talking_sample_1.mp3",
    "Death_Shall_Have_No_Dominion_Cliff Martinez_Solaris_sample_1.mp3",
    "Debris_Steven_Price_Gravity_sample_1.mp3",
    "Decision_To_Leave_Evidence_-_Cho_Young-wuk_sample_1.mp3",
    "Decision_To_Leave_Mist_-_Jung_Hoon_Hee_sample_1.mp3",
    "Deportation_Iguazu_Gustavo_Santaolalla_Babel_sample_1.mp3",
    "Detach_Hans_Zimmer_interstellar_sample_1.mp3",
    "Dickon_Hinchliffe_-_Leda_The_Lost_Daughter_sample_1.mp3",
    "Dickon_Hinchliffe_-_Octopus_The_Lost_Daughter_sample_1.mp3",
    "Django_Unchained_Luis_Bacalov_Django_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder2/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */

import { useEffect } from 'react';

      const AudioSelectorPage9 = ({ audioPathPage9, setAudioPathPage9 }) => {
        useEffect(() => {
          if (!audioPathPage9) {
            // Define your audio files for Page 9 here
            const audioFolderFilesPage9 = ["Bounty_Hunter_Puss_In_Boots_Heitor_Pereira_sample_1.mp3",
            "Bounty_Hunter_Puss_In_Boots_Heitor_Pereira_sample_2.mp3",
            "Boys_in_the_Mirror__Fatima_Al_Qadiri_Atlantics_sample_1.mp3",
            "Boys_in_the_Mirror__Fatima_Al_Qadiri_Atlantics_sample_2.mp3",
            "Brothers_In_Arms_Mad_Max_Fury_Road_Junkie_XL_sample_1.mp3",
            "Brothers_In_Arms_Mad_Max_Fury_Road_Junkie_XL_sample_2.mp3",
            "Buckskin_Stallion_Blues_-_Townes_Van_Zandt_-_Three_Billboards_Outside_Ebbing_Missouri_sample_1.mp3",
            "Buckskin_Stallion_Blues_-_Townes_Van_Zandt_-_Three_Billboards_Outside_Ebbing_Missouri_sample_2.mp3",
            "Bundle_of_Joy_-_Michael_Giancchio_Inside_Out_sample_1.mp3",
            "Bundle_of_Joy_-_Michael_Giancchio_Inside_Out_sample_2.mp3",
            "Bunsen_Burner_-_Ex_Machina-Anthony_William_Tombling_CUTS_sample_1.mp3",
            "Bunsen_Burner_-_Ex_Machina-Anthony_William_Tombling_CUTS_sample_2.mp3",
            "C90_-_Soundtree__Under_The_Skin_sample_1.mp3",
            "C90_-_Soundtree__Under_The_Skin_sample_2.mp3",
            "Calling_The_Whipper_In_Jonny_Greenwood_Spencer_sample_1.mp3",
            "Calling_The_Whipper_In_Jonny_Greenwood_Spencer_sample_2.mp3",
            "Camille_-_She_Was_Corsage_sample_1.mp3",
            "Camille_-_She_Was_Corsage_sample_2.mp3",
            "Canto_At_Gabelmeisters_Peak_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_1.mp3",
            "Canto_At_Gabelmeisters_Peak_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_2.mp3",
            "Caravan_Duke_Ellington_Juan_Tizol_John_Wasson_Whiplash_sample_1.mp3",
            "Caravan_Duke_Ellington_Juan_Tizol_John_Wasson_Whiplash_sample_2.mp3",
            "Childish_Gambino_-_Redbone_Get_Out_sample_1.mp3",
            "Childish_Gambino_-_Redbone_Get_Out_sample_2.mp3",
            "Christ_in_the_Mountains_Mychael_Danna_Life_of_Pi_sample_1.mp3",
            "Christ_in_the_Mountains_Mychael_Danna_Life_of_Pi_sample_2.mp3",
            "Ciao_Papa_Gregory_Mann_Alexandre_Desplat_Guillermo_Del_Toros_Pinnochio_sample_1.mp3",
            "Ciao_Papa_Gregory_Mann_Alexandre_Desplat_Guillermo_Del_Toros_Pinnochio_sample_2.mp3",
            "Closer_Valentin_Hadjadj_Close_sample_1.mp3",
            "Closer_Valentin_Hadjadj_Close_sample_2.mp3",
            "Conciliation_II_Parasite_Jung_Jaeil_sample_1.mp3",
            "Conciliation_II_Parasite_Jung_Jaeil_sample_2.mp3",
            "Creation_Mica_Levi_Under_the_Skin_sample_1.mp3",
            "Creation_Mica_Levi_Under_the_Skin_sample_2.mp3",
            "DUNE_The_One_Hans_Zimmer_sample_1.mp3",
            "DUNE_The_One_Hans_Zimmer_sample_2.mp3",
            "David_Alvarez_Sharks_-_La_Borinquena_Felix_Astol_Artes_Lola_Rodriguez_de_Tio_David_Newman_Matt_Sullivan_Jeanine_Tesori_West_Side_Story_sample_1.mp3",
            "David_Alvarez_Sharks_-_La_Borinquena_Felix_Astol_Artes_Lola_Rodriguez_de_Tio_David_Newman_Matt_Sullivan_Jeanine_Tesori_West_Side_Story_sample_2.mp3",
            "David_Talks_About_His_Mother_Da_5_Bloods_Terence_Blanchard_sample_1.mp3",
            "David_Talks_About_His_Mother_Da_5_Bloods_Terence_Blanchard_sample_2.mp3",
            "Daydream_Believer_The_Monkees_Women_Talking_sample_1.mp3",
            "Daydream_Believer_The_Monkees_Women_Talking_sample_2.mp3",
            "Death_Shall_Have_No_Dominion_Cliff_Martinez_Solaris_sample_1.mp3",
            "Death_Shall_Have_No_Dominion_Cliff_Martinez_Solaris_sample_2.mp3",
            "Debris_Steven_Price_Gravity_sample_1.mp3",
            "Debris_Steven_Price_Gravity_sample_2.mp3",
            "Decision_To_Leave_Evidence_-_Cho_Young-wuk_sample_1.mp3",
            "Decision_To_Leave_Evidence_-_Cho_Young-wuk_sample_2.mp3",
            "Decision_To_Leave_Mist_-_Jung_Hoon_Hee_sample_1.mp3",
            "Decision_To_Leave_Mist_-_Jung_Hoon_Hee_sample_2.mp3",
            "Deportation_Iguazu_Gustavo_Santaolalla_Babel_sample_1.mp3",
            "Deportation_Iguazu_Gustavo_Santaolalla_Babel_sample_2.mp3",
            "Detach_Hans_Zimmer_interstellar_sample_1.mp3",
            "Detach_Hans_Zimmer_interstellar_sample_2.mp3",
            "Dickon_Hinchliffe_-_Leda_The_Lost_Daughter_sample_1.mp3",
            "Dickon_Hinchliffe_-_Leda_The_Lost_Daughter_sample_2.mp3",
            "Dickon_Hinchliffe_-_Octopus_The_Lost_Daughter_sample_1.mp3",
            "Dickon_Hinchliffe_-_Octopus_The_Lost_Daughter_sample_2.mp3",
            "Django_Unchained_Luis_Bacalov_Django_sample_1.mp3",
            "Django_Unchained_Luis_Bacalov_Django_sample_2.mp3"];
      
            // Shuffle the array
            const shuffledFiles = [...audioFolderFilesPage9];
            for (let i = shuffledFiles.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
            }
      
            // Select the first file from the shuffled array
            const selectedFile = shuffledFiles[0];
      
            // Generate the full path
            const basePath = "/film-score-emotion-survey/audioFolder2/";
            const fullPath = basePath + selectedFile;
      
            // Set the full path in the state
            setAudioPathPage9(fullPath);
          }
        }, [audioPathPage9, setAudioPathPage9]);
      
        return null; // or return a placeholder element if needed
      };
      
      export default AudioSelectorPage9;