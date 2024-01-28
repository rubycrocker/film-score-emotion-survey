
import { useEffect } from 'react';

const AudioSelector = ({ audioPath, setAudioPath }) => {
  useEffect(() => {
    // If the audio path is not set, set it using the AudioComponent logic
    if (!audioPath) {
      const audioFolderFiles1 = ["25_Years_Jonny_Greenwood_The_Power_of_the_Dog_sample_1.mp3",
      "25_Years_Jonny_Greenwood_The_Power_of_the_Dog_sample_2.mp3",
      "528491_Inception_Hans_Zimmer_sample_1.mp3",
      "528491_Inception_Hans_Zimmer_sample_2.mp3",
      "7Horse_-_Meth_Lab_Zoso_Sticker_The_Wolf_Of_Wall_Street_sample_1.mp3",
      "7Horse_-_Meth_Lab_Zoso_Sticker_The_Wolf_Of_Wall_Street_sample_2.mp3",
      "A_Story_About_Letters_Alfonso_G_Aguilar_Klaus_sample_1.mp3",
      "A_Story_About_Letters_Alfonso_G_Aguilar_Klaus_sample_2.mp3",
      "Across_The_Ocean_Thomas_Newman_Elemental_sample_1.mp3",
      "Across_The_Ocean_Thomas_Newman_Elemental_sample_2.mp3",
      "Airlock_Steven_Price_Gravity_sample_1.mp3",
      "Airlock_Steven_Price_Gravity_sample_2.mp3",
      "Alan_Silvestri_-_Infinity_War_From_Avengers_sample_2.mp3",
      "Alan_Silvestri_-_Infinity_War_From_Avengers_sample_1.mp3",
      "Alberto_Iglesias_Claqueta_Final_Pain_and_Glory_sample_1.mp3",
      "Alberto_Iglesias_Claqueta_Final_Pain_and_Glory_sample_2.mp3",
      "All-quiet-on-the-western-front_main-theme-song-volker-bertelmann_sample_1.mp3",
      "All-quiet-on-the-western-front_main-theme-song-volker-bertelmann_sample_2.mp3",
      "All-quiet-on-the-western-front_remains-volker-bertelmann_sample_1.mp3",
      "All-quiet-on-the-western-front_remains-volker-bertelmann_sample_2.mp3",
      "Almost_Human_Antonio_Sanchez_Birdman_sample_1.mp3",
      "Almost_Human_Antonio_Sanchez_Birdman_sample_2.mp3",
      "Angela_Tries_to_Leave_Cliff_Martinez__KIMI_sample_1.mp3",
      "Angela_Tries_to_Leave_Cliff_Martinez__KIMI_sample_2.mp3",
      "Anna_Karenin_Overture_Dario_Marianelli_sample_1.mp3",
      "Anna_Karenin_Overture_Dario_Marianelli_sample_2.mp3",
      "Anna_Karenina_Too_Late_Dario_Marianelli_sample_1.mp3",
      "Anna_Karenina_Too_Late_Dario_Marianelli_sample_2.mp3",
      "Another_Round__DRUK_-_Schubert_Fantasie_in_f_Moll_D940_Fantasy_in_F_minor_sample_1.mp3",
      "Another_Round__DRUK_-_Schubert_Fantasie_in_f_Moll_D940_Fantasy_in_F_minor_sample_2.mp3",
      "Antonio_Sanchez_Doors_and_Distance_Birdman_sample_1.mp3",
      "Antonio_Sanchez_Doors_and_Distance_Birdman_sample_2.mp3",
      "Arrival_Heptapod_B_Johann_Johannsson_sample_1.mp3",
      "Arrival_Heptapod_B_Johann_Johannsson_sample_2.mp3",
      "Arrival_Jonny_Greenwood_Spencer_sample_1.mp3",
      "Arrival_Jonny_Greenwood_Spencer_sample_2.mp3",
      "Arrival_Johann_Johannsson_Arrival_sample_1.mp3",
      "Arrival_Johann_Johannsson_Arrival_sample_2.mp3",
      "Ava_Ex_Machina_Ben_Salisbury_Geoff_Barrow_sample_1.mp3",
      "Ava_Ex_Machina_Ben_Salisbury_Geoff_Barrow_sample_2.mp3",
      "Bali_Girls_-_Michael_Stearns_Bonnie_Jo_Hunt_Ron_Sunsinger_Samsara_sample_1.mp3",
      "Bali_Girls_-_Michael_Stearns_Bonnie_Jo_Hunt_Ron_Sunsinger_Samsara_sample_2.mp3",
      "Beach_Puke__Jim_Williams_Titane_sample_1.mp3",
      "Beach_Puke__Jim_Williams_Titane_sample_2.mp3",
      "Beyond_the_Black_Rainbow_Sinoia_Caves_-_Forever_Dilating_Eye_sample_1.mp3",
      "Beyond_the_Black_Rainbow_Sinoia_Caves_-_Forever_Dilating_Eye_sample_2.mp3",
      "Beyond_the_Black_Rainbow_Sinoia_Caves_Arboria_Tapes_sample_1.mp3",
      "Beyond_the_Black_Rainbow_Sinoia_Caves_Arboria_Tapes_sample_2.mp3",
      "Blackfish_Jeff_Beal_Blackfish_sample_1.mp3",
      "Blackfish_Jeff_Beal_Blackfish_sample_2.mp3",
      "Blackway_and_Black_Caviar_-_Whats_Up_Danger_Spider-Man_Into_the_Spider-Verse_sample_1.mp3",
      "Blackway_and_Black_Caviar_-_Whats_Up_Danger_Spider-Man_Into_the_Spider-Verse_sample_2.mp3",
      "Blade_Runner_Hans_Zimmer_Benjamin_Wallfisch_Blade_Runner_2049_sample_1.mp3",
      "Blade_Runner_Hans_Zimmer_Benjamin_Wallfisch_Blade_Runner_2049_sample_2.mp3",
      "Bliss_Main_Theme_Valentin_Hadjadj_Close_sample_1.mp3",
      "Bliss_Main_Theme_Valentin_Hadjadj_Close_sample_2.mp3",
      "Book_Reviews_and_Big_Dates_Ludwig_Goransson_Everything_Everything_sample_1.mp3",
      "Book_Reviews_and_Big_Dates_Ludwig_Goransson_Everything_Everything_sample_2.mp3",
      "Bottom_Of_The_List__The_Help_Thomas_Newman_sample_1.mp3",
      "Bottom_Of_The_List__The_Help_Thomas_Newman_sample_2.mp3"]; // Add all your audio file names

      // Shuffle the array
      const shuffledFiles = [...audioFolderFiles1];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder1/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPath(fullPath);
    }
  }, [audioPath, setAudioPath]);

  // You can render any UI components related to audio selection here if needed

  return null; // or return a placeholder element if needed
};

export default AudioSelector;