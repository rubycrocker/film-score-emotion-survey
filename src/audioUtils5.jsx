import { useEffect } from 'react';

const AudioSelectorPage12 = ({ audioPathPage12, setAudioPathPage12 }) => {
  useEffect(() => {
    if (!audioPathPage12) {
      // Define your audio files for Page 12 here
      const audioFolderFilesPage12 = ["Kyle_Eastwood_-_Gran Torino_feat._Hugh_Coltman.crdownload_sample_1.mp3",
      "L'Ultima_Diligenza_di_Red_Rock_Ennio_Morricone_The_Hateful_Eight_sample_1.mp3",
      "L'amitie_Jean-Michel_Blais_Matthias_&_Maxime_sample_1.mp3",
      "La_Jeune_Fille_en_Feu_Portrait_of_a_Lady_on_Fire_Para_One_Arthur_Simonini_sample_1.mp3",
      "La_Musique_du_Futur_-_Mon Coeur_Petite_Maman_Jean-Baptiste_de_Laubier_Para_One_Celine_Sciamma_sample_1.mp3",
      "La_Puntura_Della_Morte_Ennio_Morricone__The_Hateful_Eight_sample_1.mp3",
      "Lady_Bird__Jon_Brion_Lady_Bird_sample_1.mp3",
      "Las-visitas_Alberto__Iglesias_Parallel_Mothers_sample_1.mp3",
      "Le_feu_Jean-Benoit_Dunckel_Summer_Of_85'_sample_1.mp3",
      "Leo_Birenberg_Bottoms_End Credits_sample_1.mp3",
      "Leonard_Bernstein_-_The_Dance_at_the_Gym_Mambo_West_Side_Story_Leonard_Berstein,_David_Newman,_Matt_Sullivan,_Jeanine_Tesori_sample_1.mp3",
      "Les_feuilles_mortes_Jean-Michel_Blais_Matthias_&_Maxime_sample_1.mp3",
      "Licorice_Pizza__Jonny_Greenwood_Licorice_Pizza_sample_1.mp3",
      "Limpeza_Pesada_Mateus_Alves,_Tomaz_Alves_Souza_Bacurau_sample_1.mp3",
      "Little_Women_-_Alexandre _desplat_-_Laurie_and_Jo_on_the_Hill_sample_1.mp3",
      "Little_Women_-_Robert_Schumann_-_Kinderszenen_op.15_I._Von_Fremden_Landern_und_Menschen_sample_1.mp3",
      "Loneliness_#3_(Night_Talking)_Arcade_Fire_Owen_Pallett_Her_sample_1.mp3",
      "Lost_but_Won_Hans_Zimmer_Rush_sample_1.mp3",
      "Love_Letters_Dario_Marianelli_Atonement_sample_1.mp3",
      "Love_Scooter_Thomas_Newman_Elemental_sample_1.mp3",
      "Love_Theme_from_The_Midwife_Pessi_Levanto_sample_1.mp3",
      "Ludovico_Einaudi_ Low_Mist_Var. 2_(Day_1)__The_Father_sample_1.mp3",
      "Ludovico_Einaudi_Cold_Wind_Var.2_(Day_4)_The_Father_sample_1.mp3",
      "Ludwig_Goransson_-_Yucatan__Black_Panther_Wakanda_Forever_sample_1.mp3",
      "Ludwig_Goransson_T'Challa_Black_Panther_Wakanda_Forever_sample_1.mp3",
      "Main_Theme_Terence_Blanchard_BlacKkKlansman_sample_1.mp3",
      "Marco_Beltrami,_Buck Sanders_-_Le_Mans_66_Ford_v_Ferrari_sample_1.mp3",
      "Married_Life_Michael_Giacchino_Up_sample_1.mp3",
      "Max_-_Richter_On_the_Nature_of_Daylight_Shutter_Island_sample_1.mp3",
      "Mexican_Institute_of_Sound_-_Jalale_From Coco_sample_1.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage12];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder5/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage12(fullPath);
    }
  }, [audioPathPage12, setAudioPathPage12]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage12;

/* export function getRandomAudioPath5() {
    const audioFiles = ["Kyle_Eastwood_-_Gran Torino_feat._Hugh_Coltman.crdownload_sample_1.mp3",
    "L'Ultima_Diligenza_di_Red_Rock_Ennio_Morricone_The_Hateful_Eight_sample_1.mp3",
    "L'amitie_Jean-Michel_Blais_Matthias_&_Maxime_sample_1.mp3",
    "La_Jeune_Fille_en_Feu_Portrait_of_a_Lady_on_Fire_Para_One_Arthur_Simonini_sample_1.mp3",
    "La_Musique_du_Futur_-_Mon Coeur_Petite_Maman_Jean-Baptiste_de_Laubier_Para_One_Celine_Sciamma_sample_1.mp3",
    "La_Puntura_Della_Morte_Ennio_Morricone__The_Hateful_Eight_sample_1.mp3",
    "Lady_Bird__Jon_Brion_Lady_Bird_sample_1.mp3",
    "Las-visitas_Alberto__Iglesias_Parallel_Mothers_sample_1.mp3",
    "Le_feu_Jean-Benoit_Dunckel_Summer_Of_85'_sample_1.mp3",
    "Leo_Birenberg_Bottoms_End Credits_sample_1.mp3",
    "Leonard_Bernstein_-_The_Dance_at_the_Gym_Mambo_West_Side_Story_Leonard_Berstein,_David_Newman,_Matt_Sullivan,_Jeanine_Tesori_sample_1.mp3",
    "Les_feuilles_mortes_Jean-Michel_Blais_Matthias_&_Maxime_sample_1.mp3",
    "Licorice_Pizza__Jonny_Greenwood_Licorice_Pizza_sample_1.mp3",
    "Limpeza_Pesada_Mateus_Alves,_Tomaz_Alves_Souza_Bacurau_sample_1.mp3",
    "Little_Women_-_Alexandre _desplat_-_Laurie_and_Jo_on_the_Hill_sample_1.mp3",
    "Little_Women_-_Robert_Schumann_-_Kinderszenen_op.15_I._Von_Fremden_Landern_und_Menschen_sample_1.mp3",
    "Loneliness_#3_(Night_Talking)_Arcade_Fire_Owen_Pallett_Her_sample_1.mp3",
    "Lost_but_Won_Hans_Zimmer_Rush_sample_1.mp3",
    "Love_Letters_Dario_Marianelli_Atonement_sample_1.mp3",
    "Love_Scooter_Thomas_Newman_Elemental_sample_1.mp3",
    "Love_Theme_from_The_Midwife_Pessi_Levanto_sample_1.mp3",
    "Ludovico_Einaudi_ Low_Mist_Var. 2_(Day_1)__The_Father_sample_1.mp3",
    "Ludovico_Einaudi_Cold_Wind_Var.2_(Day_4)_The_Father_sample_1.mp3",
    "Ludwig_Goransson_-_Yucatan__Black_Panther_Wakanda_Forever_sample_1.mp3",
    "Ludwig_Goransson_T'Challa_Black_Panther_Wakanda_Forever_sample_1.mp3",
    "Main_Theme_Terence_Blanchard_BlacKkKlansman_sample_1.mp3",
    "Marco_Beltrami,_Buck Sanders_-_Le_Mans_66_Ford_v_Ferrari_sample_1.mp3",
    "Married_Life_Michael_Giacchino_Up_sample_1.mp3",
    "Max_-_Richter_On_the_Nature_of_Daylight_Shutter_Island_sample_1.mp3",
    "Mexican_Institute_of_Sound_-_Jalale_From Coco_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder5/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */