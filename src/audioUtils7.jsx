import { useEffect } from 'react';

const AudioSelectorPage14 = ({ audioPathPage14, setAudioPathPage14 }) => {
  useEffect(() => {
    if (!audioPathPage14) {
      // Define your audio files for Page 14 here
      const audioFolderFilesPage14 = ["Quisling's_Speech_Johan_Soderqvist_The_King's_Choice_sample_1.mp3",
      "Quisling's_Speech_Johan_Soderqvist_The_King's_Choice_sample_2.mp3",
      "Raw_-_Main_Theme_by_Jim_Williams_sample_1.mp3",
      "Raw_-_Main_Theme_by_Jim_Williams_sample_2.mp3",
      "Real_Gone_Kid_-_Deacon_Blue_Aftersun_sample_1.mp3",
      "Real_Gone_Kid_-_Deacon_Blue_Aftersun_sample_2.mp3",
      "River_Alexandre_Desplat_The_Tree_of_Life_sample_1.mp3",
      "River_Alexandre_Desplat_The_Tree_of_Life_sample_2.mp3",
      "Rob,_Robin_Caudert-Haunted_Piano_Maniac_sample_1.mp3",
      "Rob,_Robin_Caudert-Haunted_Piano_Maniac_sample_2.mp3",
      "Rob,_Robin_Caudert-Slow_Machine_Maniac_sample_1.mp3",
      "Rob,_Robin_Caudert-Slow_Machine_Maniac_sample_2.mp3",
      "Robbies_Note_Dario_Marianelli_Atonement_sample_1.mp3",
      "Robbies_Note_Dario_Marianelli_Atonement_sample_2.mp3",
      "Robots_Capture_Humans__Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_1.mp3",
      "Robots_Capture_Humans__Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_2.mp3",
      "Roll_Jordan_Roll_-_Topsy_Chapman_12_Years_A_Slave_sample_1.mp3",
      "Roll_Jordan_Roll_-_Topsy_Chapman_12_Years_A_Slave_sample_2.mp3",
      "Ron_Meets_FBI_Agent_Terence_Blanchard_BlacKkKlansman_sample_1.mp3",
      "Ron_Meets_FBI_Agent_Terence_Blanchard_BlacKkKlansman_sample_2.mp3",
      "Root_of_an_Unfocus_Boris-Berman-John_Cage-Shutter_Island_sample_1.mp3",
      "Root_of_an_Unfocus_Boris-Berman-John_Cage-Shutter_Island_sample_2.mp3",
      "Rosie's_Nocturne_Michael_Giacchino_Jojo_Rabbit_sample_1.mp3",
      "Rosie's_Nocturne_Michael_Giacchino_Jojo_Rabbit_sample_2.mp3",
      "Ruby's_Theme_Marius_de_Vries_Coda_sample_1.mp3",
      "Ruby's_Theme_Marius_de_Vries_Coda_sample_2.mp3",
      "Running__Jung_Jaeil_Broker_sample_1.mp3",
      "Running__Jung_Jaeil_Broker_sample_2.mp3",
      "See_You__Christopher_Bear,_Daniel_Rossen_Past_Lives._sample_1.mp3",
      "See_You__Christopher_Bear,_Daniel_Rossen_Past_Lives._sample_2.mp3",
      "Sgt._Pepper_Shoelaces_Randy_Newman_Marriage_Story_sample_1.mp3",
      "Sgt._Pepper_Shoelaces_Randy_Newman_Marriage_Story_sample_2.mp3",
      "She's_Not_Real__Hans_Zimmer_The_Creator_sample_1.mp3",
      "She's_Not_Real__Hans_Zimmer_The_Creator_sample_2.mp3",
      "Shiva_Theme_Brahmastra__Pritam_sample_1.mp3",
      "Shiva_Theme_Brahmastra__Pritam_sample_2.mp3",
      "Sicario_The_Beast-Johan_Johannsson_sample_1.mp3",
      "Sicario_The_Beast-Johan_Johannsson_sample_2.mp3",
      "Sikiliza_Kwa_Wahenga_-_Michael_Abels_Get_Out_sample_1.mp3",
      "Sikiliza_Kwa_Wahenga_-_Michael_Abels_Get_Out_sample_2.mp3",
      "Singapore_Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_1.mp3",
      "Singapore_Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_2.mp3",
      "Skies_Alexandre_Desplat_The_Tree_of_Life_sample_1.mp3",
      "Skies_Alexandre_Desplat_The_Tree_of_Life_sample_2.mp3",
      "Skinny_Vegetarian_Boy_Mychael_Danna_Life_of_Pi_sample_1.mp3",
      "Skinny_Vegetarian_Boy_Mychael_Danna_Life_of_Pi_sample_2.mp3",
      "So_Long_-Randy_Newman_toy_story_3_sample_1.mp3",
      "So_Long_-Randy_Newman_toy_story_3_sample_2.mp3",
      "Society_Eddie_Vedder_Into_The_Wild_sample_1.mp3",
      "Society_Eddie_Vedder_Into_The_Wild_sample_2.mp3",
      "Solomon_Hans_Zimmer_12_Years_A_Slave_sample_1.mp3",
      "Solomon_Hans_Zimmer_12_Years_A_Slave_sample_2.mp3",
      "Souleiman's_Theme_Fatima_Al_Qadiri_Atlantics_sample_1.mp3",
      "Souleiman's_Theme_Fatima_Al_Qadiri_Atlantics_sample_2.mp3",
      "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_She's-out-of-this-world-_Annette_sample_1.mp3",
      "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_She's-out-of-this-world-_Annette_sample_2.mp3",
      "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_So_May_We_Start_-_Annette_sample_1.mp3",
      "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_So_May_We_Start_-_Annette_sample_2.mp3",
      "Speak_Up_Hildur_Guonadottir_Women_Talking_sample_1.mp3",
      "Speak_Up_Hildur_Guonadottir_Women_Talking_sample_2.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage14];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder7/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage14(fullPath);
    }
  }, [audioPathPage14, setAudioPathPage14]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage14;

/* export function getRandomAudioPath7() {
    const audioFiles = ["Quisling's_Speech_Johan_Soderqvist_The_King's_Choice_sample_1.mp3",
    "Raw_-_Main_Theme_by_Jim_Williams_sample_1.mp3",
    "Real_Gone_Kid_-_Deacon_Blue_Aftersun_sample_1.mp3",
    "River_Alexandre_Desplat_The_Tree_of_Life_sample_1.mp3",
    "Rob,_Robin_Caudert-Haunted_Piano_Maniac_sample_1.mp3",
    "Rob,_Robin_Caudert-Slow_Machine_Maniac_sample_1.mp3",
    "Robbies_Note_Dario_Marianelli_Atonement_sample_1.mp3",
    "Robots_Capture_Humans__Mark_Mothersbaugh_The_Mitchells_vs_The_Machines_sample_1.mp3",
    "Roll_Jordan_Roll_-_Topsy Chapman_12_Years_A_Slave_sample_1.mp3",
    "Ron_Meets_FBI_Agent_Terence_Blanchard_BlacKkKlansman_sample_1.mp3",
    "Root_of_an_Unfocus_Boris-Berman-John_Cage-Shutter_Island_sample_1.mp3",
    "Rosie's_Nocturne_Michael_Giacchino_Jojo_Rabbit_sample_1.mp3",
    "Ruby's_Theme_Marius_de_Vries_Coda_sample_1.mp3",
    "Running__Jung_Jaeil_Broker_sample_1.mp3",
    "See_You__Christopher_Bear,_Daniel_Rossen_Past_Lives._sample_1.mp3",
    "Sgt._Pepper_Shoelaces_Randy_Newman_Marriage_Story_sample_1.mp3",
    "She's_Not_Real__Hans_Zimmer_The_Creator_sample_1.mp3",
    "Shiva_Theme_Brahmastra__Pritam_sample_1.mp3",
    "Sicario_The_Beast-Johan_Johannsson_sample_1.mp3",
    "Sikiliza_Kwa_Wahenga_-_Michael_Abels_Get_Out_sample_1.mp3",
    "Singapore_Hans_Zimmer_Pirates_of_the_Caribbean_-_At_World's_End_sample_1.mp3",
    "Skies_Alexandre_Desplat_The_Tree_of_Life_sample_1.mp3",
    "Skinny_Vegetarian_Boy_Mychael_Danna_Life_of_Pi_sample_1.mp3",
    "So_Long_-Randy_Newman_toy_story_3_sample_1.mp3",
    "Society_Eddie_Vedder_Into_The_Wild_sample_1.mp3",
    "Solomon_Hans_Zimmer_12_Years_A_Slave_sample_1.mp3",
    "Souleiman's_Theme_Fatima_Al_Qadiri_Atlantics_sample_1.mp3",
    "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_She's-out-of-this-world-_Annette_sample_1.mp3",
    "Sparks_Leos_Carax_Ron_Mael_Russel_Mael_So_May_We_Start_-_Annette_sample_1.mp3",
    "Speak_Up_Hildur_Guonadottir_Women_Talking_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder7/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */