import { useEffect } from 'react';

const AudioSelectorPage13 = ({ audioPathPage13, setAudioPathPage13 }) => {
  useEffect(() => {
    if (!audioPathPage13) {
      // Define your audio files for Page 13 here
      const audioFolderFilesPage13 = ["Mia_&_Sebastian’s_Theme_La_La_Land_Justin_Hurwitz_sample_1.mp3",
      "Mica_Levi_-_Lipstick_to_Void__Under_the_Skin_sample_1.mp3",
      "Mica_Levi_-_Love__Under_the_Skin_sample_1.mp3",
      "Mildred_Goes_To_War_-_Carter_Burwell_Three_Billboards_Outside_Ebbing,_Missouri_sample_1.mp3",
      "Milk_&_Honey_#1_Arcade_Fire_Owen_Pallett_Her_sample_1.mp3",
      "Montparnasse_Julie_Roue_Jeune_Femme_sample_1.mp3",
      "Morality_in_Darkness_James Newton Howard_A_Hidden_Life_sample_1.mp3",
      "Mother_Cornel_Wilczek_Talk_To_Me_sample_1.mp3",
      "Mr._Moustafa_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_1.mp3",
      "Nathan_Johnson_-_Theme_From_Glass_Onion_Glass_Onion_sample_1.mp3",
      "Neil_Diamond_-_Brother_Love's_Travelling_Salvation_Show_Once_Upon_a_Time_in_Hollywood_sample_1.mp3",
      "Nicholas_Britell_-_The_Middle_Of_The_World_-_Moonlight_sample_1.mp3",
      "Nighthawk_Mateus_Alves,_Tomaz_Alves_Souza_Bacurau_sample_1.mp3",
      "Nina_Simone_-_I_Put_A_Spell_On_You_-_Ford_V_Ferrari_sample_1.mp3",
      "Nirvana_-_Something_In_The_Way_The_Batman_sample_1.mp3",
      "One_Without_Aftersun_-_Oliver_Coates_sample_1.mp3",
      "Opening_Theme_From_A_Thousand_and_One__Gary_Gunn_A_Thousand_and_One_sample_1.mp3",
      "Opening__Gustavo_Santaolalla_Brokeback_Mountain_sample_1.mp3",
      "Oppenheimer_Can_You_Hear_The_Music__Ludwig_Goransson_sample_1.mp3",
      "Oppenheimer_Fission_Ludwig_Goransson_sample_1.mp3",
      "Paddy_&_Tommy_-_Mark_Isham-Warrior_sample_1.mp3",
      "Parallel_Mothers_Sesion_de_fotos_-_Alberto_Iglesias_Madres_Paralelas_sample_1.mp3",
      "Pas_De_Deux_Michael_Abels_Us_sample_1.mp3",
      "Pawel_Mykietyn-Love_Story_EO_sample_1.mp3",
      "Pawel_Mykietyn_-_The Beginning_EO_sample_1.mp3",
      "Phantom_Thread_I_Jonny_Greenwood_Phantom_Thread_sample_1.mp3",
      "Pharmacy_Heist__Michael Andrews_Nosaj Thing_The_King_Of_Staten_Island_sample_1.mp3",
      "Pinocchio's_Choice_Alexandre_Desplat_Guillermo_Del_Toro's_Pinnochio_sample_1.mp3",
      "Polegnala_E_Todora__The_Ensemble_of_the_Bulgarian_Republic-The_Banshees_Of_Inisherin_sample_1.mp3",
      "Prayer_Hans_Zimmer_The_Creator_sample_1.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage13];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder6/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage13(fullPath);
    }
  }, [audioPathPage13, setAudioPathPage13]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage13;
/* 
export function getRandomAudioPath6() {
    const audioFiles = ["Mia_&_Sebastian’s_Theme_La_La_Land_Justin_Hurwitz_sample_1.mp3",
    "Mica_Levi_-_Lipstick_to_Void__Under_the_Skin_sample_1.mp3",
    "Mica_Levi_-_Love__Under_the_Skin_sample_1.mp3",
    "Mildred_Goes_To_War_-_Carter_Burwell_Three_Billboards_Outside_Ebbing,_Missouri_sample_1.mp3",
    "Milk_&_Honey_#1_Arcade_Fire_Owen_Pallett_Her_sample_1.mp3",
    "Montparnasse_Julie_Roue_Jeune_Femme_sample_1.mp3",
    "Morality_in_Darkness_James Newton Howard_A_Hidden_Life_sample_1.mp3",
    "Mother_Cornel_Wilczek_Talk_To_Me_sample_1.mp3",
    "Mr._Moustafa_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_1.mp3",
    "Nathan_Johnson_-_Theme_From_Glass_Onion_Glass_Onion_sample_1.mp3",
    "Neil_Diamond_-_Brother_Love's_Travelling_Salvation_Show_Once_Upon_a_Time_in_Hollywood_sample_1.mp3",
    "Nicholas_Britell_-_The_Middle_Of_The_World_-_Moonlight_sample_1.mp3",
    "Nighthawk_Mateus_Alves,_Tomaz_Alves_Souza_Bacurau_sample_1.mp3",
    "Nina_Simone_-_I_Put_A_Spell_On_You_-_Ford_V_Ferrari_sample_1.mp3",
    "Nirvana_-_Something_In_The_Way_The_Batman_sample_1.mp3",
    "One_Without_Aftersun_-_Oliver_Coates_sample_1.mp3",
    "Opening_Theme_From_A_Thousand_and_One__Gary_Gunn_A_Thousand_and_One_sample_1.mp3",
    "Opening__Gustavo_Santaolalla_Brokeback_Mountain_sample_1.mp3",
    "Oppenheimer_Can_You_Hear_The_Music__Ludwig_Goransson_sample_1.mp3",
    "Oppenheimer_Fission_Ludwig_Goransson_sample_1.mp3",
    "Paddy_&_Tommy_-_Mark_Isham-Warrior_sample_1.mp3",
    "Parallel_Mothers_Sesion_de_fotos_-_Alberto_Iglesias_Madres_Paralelas_sample_1.mp3",
    "Pas_De_Deux_Michael_Abels_Us_sample_1.mp3",
    "Pawel_Mykietyn-Love_Story_EO_sample_1.mp3",
    "Pawel_Mykietyn_-_The Beginning_EO_sample_1.mp3",
    "Phantom_Thread_I_Jonny_Greenwood_Phantom_Thread_sample_1.mp3",
    "Pharmacy_Heist__Michael Andrews_Nosaj Thing_The_King_Of_Staten_Island_sample_1.mp3",
    "Pinocchio's_Choice_Alexandre_Desplat_Guillermo_Del_Toro's_Pinnochio_sample_1.mp3",
    "Polegnala_E_Todora__The_Ensemble_of_the_Bulgarian_Republic-The_Banshees_Of_Inisherin_sample_1.mp3",
    "Prayer_Hans_Zimmer_The_Creator_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder6/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */