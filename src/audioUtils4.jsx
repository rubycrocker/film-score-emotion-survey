import { useEffect } from 'react';

const AudioSelectorPage11 = ({ audioPathPage11, setAudioPathPage11 }) => {
  useEffect(() => {
    if (!audioPathPage11) {
      // Define your audio files for Page 11 here
      const audioFolderFilesPage11 = ["Ha_Dias_-_Luca_Mundaca_sample_1.mp3",
      "Ha_Dias_-_Luca_Mundaca_sample_2.mp3",
      "He_Had_a_Good_Time_Cliff_Martinez_Drive_sample_1.mp3",
      "He_Had_a_Good_Time_Cliff_Martinez_Drive_sample_2.mp3",
      "Help_Me_Make_It_Through_the_Night-Kris_Kristofferson-Corsage_sample_1.mp3",
      "Help_Me_Make_It_Through_the_Night-Kris_Kristofferson-Corsage_sample_2.mp3",
      "Hope_James_Newton_Howard_A_Hidden_Life_sample_1.mp3",
      "Hope_James_Newton_Howard_A_Hidden_Life_sample_2.mp3",
      "Hungry_Spirit_Cornel_Wilczek_Thomas_E_Rouch_Talk_To_Me_sample_1.mp3",
      "Hungry_Spirit_Cornel_Wilczek_Thomas_E_Rouch_Talk_To_Me_sample_2.mp3",
      "Hunting_Alexis_Grapsas_Philip_Klein_Pig_sample_1.mp3",
      "Hunting_Alexis_Grapsas_Philip_Klein_Pig_sample_2.mp3",
      "I'm_With_You_To_The_End_Steven_Price_Last_Night_In_Soho_sample_1.mp3",
      "I'm_With_You_To_The_End_Steven_Price_Last_Night_In_Soho_sample_2.mp3",
      "I_Could_Show_You_If_You'd_Like_Hans_Zimmer_Rush_sample_1.mp3",
      "I_Could_Show_You_If_You'd_Like_Hans_Zimmer_Rush_sample_2.mp3",
      "I_Remember_You_Christopher_Bear,_Daniel_Rossen_Past_Lives_sample_1.mp3",
      "I_Remember_You_Christopher_Bear,_Daniel_Rossen_Past_Lives_sample_2.mp3",
      "In_Motion_-_Trent_Reznor_and_Atticus_Ross_The_Social_Network_sample_1.mp3",
      "In_Motion_-_Trent_Reznor_and_Atticus_Ross_The_Social_Network_sample_2.mp3",
      "In_Stori_Stif_And_Stronge_The_Green_Knight_Daniel_Hart_sample_1.mp3",
      "In_Stori_Stif_And_Stronge_The_Green_Knight_Daniel_Hart_sample_2.mp3",
      "Inglorious_Basterds_The_Green_Leaves_of_Summer_-_Nick_Perito_sample_1.mp3",
      "Inglorious_Basterds_The_Green_Leaves_of_Summer_-_Nick_Perito_sample_2.mp3",
      "Into_the_Spider-Verse_Daniel_Pemberton_sample_1.mp3",
      "Into_the_Spider-Verse_Daniel_Pemberton_sample_2.mp3",
      "Into_the_Wild_Timekeeper_Michael_Brook_sample_1.mp3",
      "Into_the_Wild_Timekeeper_Michael_Brook_sample_2.mp3",
      "Is_That_What_Everybody_Wants_Cliff_Martinez_Solaris_sample_1.mp3",
      "Is_That_What_Everybody_Wants_Cliff_Martinez_Solaris_sample_2.mp3",
      "It'll_All_Be_Over_The_Supreme_Jubilees_Moonlight_sample_1.mp3",
      "It'll_All_Be_Over_The_Supreme_Jubilees_Moonlight_sample_2.mp3",
      "It’s_on_Your_Buzzer_-_Cliff_Martinez__KIMI_sample_1.mp3",
      "It’s_on_Your_Buzzer_-_Cliff_Martinez__KIMI_sample_2.mp3",
      "Jim_Crow_The_Help_Thomas_Newman_sample_1.mp3",
      "Jim_Crow_The_Help_Thomas_Newman_sample_2.mp3",
      "John_Williams_The_Fabelmans_sample_1.mp3",
      "John_Williams_The_Fabelmans_sample_2.mp3",
      "Joi_Hans_Zimmer_Benjamin_Wallfisch_Blade_Runner_2049_sample_1.mp3",
      "Joi_Hans_Zimmer_Benjamin_Wallfisch_Blade_Runner_2049_sample_2.mp3",
      "Jojo's_Theme_Michael_Giacchino_Jojo_Rabbit_sample_1.mp3",
      "Jojo's_Theme_Michael_Giacchino_Jojo_Rabbit_sample_2.mp3",
      "Joker_-_Defeated_Clown:_Call_Me_Joker_Hildur_Guonadottir_sample_1.mp3",
      "Joker_-_Defeated_Clown:_Call_Me_Joker_Hildur_Guonadottir_sample_2.mp3",
      "Joy_Turns_to_Sadness_A_Growing_Personality_Michael_Giacchino-Inside_Out_sample_1.mp3",
      "Joy_Turns_to_Sadness_A_Growing_Personality_Michael_Giacchino-Inside_Out_sample_2.mp3",
      "Judas_and_the_Black_Messiah_Jimmy_Enters_Store_-_Mark_Isham_&_Craig_Harris_sample_1.mp3",
      "Judas_and_the_Black_Messiah_Jimmy_Enters_Store_-_Mark_Isham_&_Craig_Harris_sample_2.mp3",
      "Judas_and_the_Black_Messiah_The_Inflated_Tear_-_The_Car,_the_Club_Mark_Isham_sample_1.mp3",
      "Judas_and_the_Black_Messiah_The_Inflated_Tear_-_The_Car,_the_Club_Mark_Isham_sample_2.mp3",
      "Julie_Roue_-_Revolution_Day_Jeune_Femme_sample_1.mp3",
      "Julie_Roue_-_Revolution_Day_Jeune_Femme_sample_2.mp3",
      "Jupiter's_Claim_Michael_Abels_Nope_sample_1.mp3",
      "Jupiter's_Claim_Michael_Abels_Nope_sample_2.mp3",
      "Katie's_Life_Good_Cop_Dog_Cop_Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_1.mp3",
      "Katie's_Life_Good_Cop_Dog_Cop_Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_2.mp3",
      "Kesariya_-_Brahmastra__Pritam_sample_1.mp3",
      "Kesariya_-_Brahmastra__Pritam_sample_2.mp3",
      "Kevin_Beak'n__Michael_Giacchino_Up_sample_1.mp3",
      "Kevin_Beak'n__Michael_Giacchino_Up_sample_2.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage11];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder4/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage11(fullPath);
    }
  }, [audioPathPage11, setAudioPathPage11]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage11;
/* 
export function getRandomAudioPath4() {
    const audioFiles = ["Ha_Dias_-_Luca_Mundaca_sample_1.mp3",
    "He_Had_a_Good_Time_Cliff_Martinez_Drive_sample_1.mp3",
    "Help_Me_Make_It_Through_the_Night-Kris_Kristofferson-Corsage_sample_1.mp3",
    "Hope_James Newton Howard_A_Hidden_Life_sample_1.mp3",
    "Hungry Spirit_Cornel_Wilczek_Thomas_E_Rouch_Talk_To_Me_sample_1.mp3",
    "Hunting_Alexis Grapsas_Philip Klein_Pig_sample_1.mp3",
    "I'm_With_You_To_The_End_Steven_Price_Last_Night_In_Soho_sample_1.mp3",
    "I_Could_Show_You_If_You'd_Like_Hans_Zimmer_Rush_sample_1.mp3",
    "I_Remember_You_Christopher_Bear,_Daniel_Rossen_Past_Lives_sample_1.mp3",
    "In_Motion_-_Trent Reznor_and_Atticus Ross_The_Social_Network_sample_1.mp3",
    "In_Stori_Stif_And_Stronge_The_Green_Knight_Daniel_Hart_sample_1.mp3",
    "Inglorious_Basterds_The_Green_Leaves_of_Summer_-_Nick_Perito_sample_1.mp3",
    "Into_the_Spider-Verse_Daniel_Pemberton_sample_1.mp3",
    "Into_the_Wild_Timekeeper_Michael_Brook_sample_1.mp3",
    "Is_That_What_Everybody_Wants_Cliff Martinez_Solaris_sample_1.mp3",
    "It'll_All_Be_Over_The_Supreme_Jubilees_Moonlight_sample_1.mp3",
    "It’s_on_Your_Buzzer_-_Cliff_Martinez__KIMI_sample_1.mp3",
    "Jim_Crow_The_Help_Thomas_Newman_sample_1.mp3",
    "John_Williams_The_Fabelmans_sample_1.mp3",
    "Joi_Hans_Zimmer_Benjamin_Wallfisch_Blade_Runner_2049_sample_1.mp3",
    "Jojo's_Theme_Michael_Giacchino_Jojo_Rabbit_sample_1.mp3",
    "Joker_-_Defeated_Clown:_Call_Me_Joker_Hildur_Guonadottir_sample_1.mp3",
    "Joy_Turns_to_Sadness_A_Growing_Personality_Michael_Giacchino-Inside_Out_sample_1.mp3",
    "Judas_and_the_Black_Messiah_Jimmy_Enters_Store_-_Mark_Isham_&_Craig_Harris_sample_1.mp3",
    "Judas_and_the_Black_Messiah_The_Inflated_Tear_-_The_Car,_the_Club_Mark_Isham_sample_1.mp3",
    "Julie_Roue_-_Revolution_Day_Jeune_Femme_sample_1.mp3",
    "Jupiter's_Claim_Michael_Abels_Nope_sample_1.mp3",
    "Katie's_Life_Good_Cop_Dog_Cop_Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_1.mp3",
    "Kesariya_-_Brahmastra__Pritam_sample_1.mp3",
    "Kevin_Beak'n__Michael_Giacchino_Up_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder4/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */