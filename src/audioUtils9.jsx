import { useEffect } from 'react';

const AudioSelectorPage16 = ({ audioPathPage16, setAudioPathPage16 }) => {
  useEffect(() => {
    if (!audioPathPage16) {
      // Define your audio files for Page 16 here
      const audioFolderFilesPage16 = ["The_Hunt_the-end_Nikolaj_Egelund_sample_1.mp3",
      "The_Hunt_the-end_Nikolaj_Egelund_sample_2.mp3",
      "The_Hunt_theme_Nikolaj_Egeland_sample_1.mp3",
      "The_Hunt_theme_Nikolaj_Egeland_sample_2.mp3",
      "The_Irishman__Robbie_Robertson_-_Theme_for_The_Irishman_sample_1.mp3",
      "The_Irishman__Robbie_Robertson_-_Theme_for_The_Irishman_sample_2.mp3",
      "The_Irishman__Sleepwalk_-_Santo_&_Johnny_sample_1.mp3",
      "The_Irishman__Sleepwalk_-_Santo_&_Johnny_sample_2.mp3",
      "The_King's_Choice_Johan_Soderqvist_The_King's_Choice_sample_1.mp3",
      "The_King's_Choice_Johan_Soderqvist_The_King's_Choice_sample_2.mp3",
      "The_Log_Marius_de_Vries_Coda_sample_1.mp3",
      "The_Log_Marius_de_Vries_Coda_sample_2.mp3",
      "The_Maze__Patrick_Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_1.mp3",
      "The_Maze__Patrick_Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_2.mp3",
      "The_Mystery_of_Inisherin_Carter_Burwell_The_Banshees_Of_Inisherin_sample_1.mp3",
      "The_Mystery_of_Inisherin_Carter_Burwell_The_Banshees_Of_Inisherin_sample_2.mp3",
      "The_Rubberband_Man_The_Spinners_Avengers_infinity_sample_1.mp3",
      "The_Rubberband_Man_The_Spinners_Avengers_infinity_sample_2.mp3",
      "The_Trees_Tell_You_Where_To_Look_Alexis_Grapsas_Philip_Klein_Pig_sample_1.mp3",
      "The_Trees_Tell_You_Where_To_Look_Alexis_Grapsas_Philip_Klein_Pig_sample_2.mp3",
      "The_Wings_Gustavo_Santaolalla_Brokeback_Mountain_sample_1.mp3",
      "The_Wings_Gustavo_Santaolalla_Brokeback_Mountain_sample_2.mp3",
      "The_Worst_Person_in_the_World-Harry_Nilsson_-_I_Said_Goodbye_to_Me_sample_1.mp3",
      "The_Worst_Person_in_the_World-Harry_Nilsson_-_I_Said_Goodbye_to_Me_sample_2.mp3",
      "The_Worst_Person_in_the_World_-_Suite_Theme-_Ola_Fløttum_sample_1.mp3",
      "The_Worst_Person_in_the_World_-_Suite_Theme-_Ola_Fløttum_sample_2.mp3",
      "Tilikum's_Theme_Jeff_Beal_Blackfish_sample_1.mp3",
      "Tilikum's_Theme_Jeff_Beal_Blackfish_sample_2.mp3",
      "Time_&_Life_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_1.mp3",
      "Time_&_Life_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_2.mp3",
      "To_Titovka__The_Midwife_Pessi_Levanto_sample_1.mp3",
      "To_Titovka__The_Midwife_Pessi_Levanto_sample_2.mp3",
      "Tomorrow_May_Not_Be_Your_Day_Taj_Mahal__Licorice_Pizza_sample_1.mp3",
      "Tomorrow_May_Not_Be_Your_Day_Taj_Mahal__Licorice_Pizza_sample_2.mp3",
      "Too_Old_To_Die_Young-Brother_Dege_Django_Unchained_sample_1.mp3",
      "Too_Old_To_Die_Young-Brother_Dege_Django_Unchained_sample_2.mp3",
      "Top_Gun_Harold_Faltermeyer,_Lady_Gaga,_Hans_Zimmer,_&_Lorne_Balfe_–_Darkstar_sample_1.mp3",
      "Top_Gun_Harold_Faltermeyer,_Lady_Gaga,_Hans_Zimmer,_&_Lorne_Balfe_–_Darkstar_sample_2.mp3",
      "Trapped_Air__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_1.mp3",
      "Trapped_Air__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_2.mp3",
      "Trent-reznor-and-atticus-ross-epiphany__soul_sample_1.mp3",
      "Trent-reznor-and-atticus-ross-epiphany__soul_sample_2.mp3",
      "Trent-reznor-and-atticus-ross__pursuit_terrys-world-soul_sample_1.mp3",
      "Trent-reznor-and-atticus-ross__pursuit_terrys-world-soul_sample_2.mp3",
      "Un_Poco_Loco_From_Coco_Anthony_Gonzalez_Gael_García_Bernal_sample_1.mp3",
      "Un_Poco_Loco_From_Coco_Anthony_Gonzalez_Gael_García_Bernal_sample_2.mp3",
      "Underwater_Secrets_Patrick_Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_1.mp3",
      "Underwater_Secrets_Patrick_Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_2.mp3",
      "Up_Is_Down__Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_1.mp3",
      "Up_Is_Down__Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_2.mp3",
      "Van_Morrison-And_the_Healing_Has_Begun_Belfast_sample_1.mp3",
      "Van_Morrison-And_the_Healing_Has_Begun_Belfast_sample_2.mp3",
      "Van_Morrison-Warm_Love_Belfast_sample_1.mp3",
      "Van_Morrison-Warm_Love_Belfast_sample_2.mp3",
      "Vehicular_Jeff-slaughter_Leo_Birenberg_Bottoms_sample_1.mp3",
      "Vehicular_Jeff-slaughter_Leo_Birenberg_Bottoms_sample_2.mp3",
      "Voodoo_Mama_Babylon_Justin_Hurwitz_sample_1.mp3",
      "Voodoo_Mama_Babylon_Justin_Hurwitz_sample_2.mp3",
      "WALLE_Define_Dancing_Thomas_newman_sample_1.mp3",
      "WALLE_Define_Dancing_Thomas_newman_sample_2.mp3"]; 

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage16];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder9/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage16(fullPath);
    }
  }, [audioPathPage16, setAudioPathPage16]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage16;

/* export function getRandomAudioPath9() {
    const audioFiles = ["The_Hunt_the-end_Nikolaj_Egelund_sample_1.mp3",
    "The_Hunt_theme_Nikolaj_Egeland_sample_1.mp3",
    "The_Irishman__Robbie_Robertson_-_Theme for The Irishman_sample_1.mp3",
    "The_Irishman__Sleepwalk_-_Santo_&_Johnny_sample_1.mp3",
    "The_King's_Choice_Johan_Soderqvist_The_King's_Choice_sample_1.mp3",
    "The_Log_Marius_de_Vries_Coda_sample_1.mp3",
    "The_Maze__Patrick Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_1.mp3",
    "The_Mystery_of_Inisherin_Carter_Burwell_The_Banshees_Of_Inisherin_sample_1.mp3",
    "The_Rubberband_Man_The_Spinners_Avengers_infinity_sample_1.mp3",
    "The_Trees_Tell_You_Where_To_Look_Alexis Grapsas_Philip Klein_Pig_sample_1.mp3",
    "The_Wings_Gustavo_Santaolalla_Brokeback_Mountain_sample_1.mp3",
    "The_Worst_Person_in_the_World-Harry_Nilsson_-_I_Said_Goodbye_to_Me_sample_1.mp3",
    "The_Worst_Person_in_the_World_-_Suite_Theme-_Ola_Flottum_sample_1.mp3",
    "Tilikum's_Theme_Jeff_Beal_Blackfish_sample_1.mp3",
    "Time_&_Life_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_1.mp3",
    "To_Titovka__The_Midwife_Pessi_Levanto_sample_1.mp3",
    "Tomorrow_May_Not_Be_Your_Day_Taj_Mahal__Licorice_Pizza_sample_1.mp3",
    "Too_Old_To_Die_Young-Brother_Dege_Django_Unchained_sample_1.mp3",
    "Top_Gun_Harold_Faltermeyer,_Lady_Gaga,_Hans_Zimmer,_&_Lorne_Balfe_–_Darkstar_sample_1.mp3",
    "Trapped_Air__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_1.mp3",
    "Trent-reznor-and-atticus-ross-epiphany__soul_sample_1.mp3",
    "Trent-reznor-and-atticus-ross__pursuit_terrys-world-soul_sample_1.mp3",
    "Un_Poco_Loco_From_Coco_Anthony_Gonzalez_Gael_Garcia_Bernal_sample_1.mp3",
    "Underwater_Secrets_Patrick Doyle_Harry_Potter_and_the_Goblet_of_Fire_sample_1.mp3",
    "Up_Is_Down__Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_1.mp3",
    "Van_Morrison-And_the_Healing_Has_Begun_Belfast_sample_1.mp3",
    "Van_Morrison-Warm_Love_Belfast_sample_1.mp3",
    "Vehicular_Jeff-slaughter_Leo_Birenberg_Bottoms_sample_1.mp3",
    "Voodoo_Mama_Babylon_Justin_Hurwitz_sample_1.mp3",
    "WALLE_Define Dancing_Thomas_newman_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder9/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */