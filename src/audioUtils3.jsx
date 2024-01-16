export function getRandomAudioPath3() {
    const audioFiles = ["Drive_After_The_Chase_Cliff_Martinez_sample_1.mp3",
    "Drive_My_Car_(the_important_thing_is_to_work)_Eiko_Ishibashi_sample_1.mp3",
    "Drive_My_Car_Eiko_Ishibashi_Drive_My_Car_sample_1.mp3",
    "Drum_&_Drone_Whiplash_Justin_Hurwitz_sample_1.mp3",
    "Duke_Ellington_And_His_Cotton_Club_Orchestra_-_Jubilee_Stomp__The_Artist_sample_1.mp3",
    "Dune_Ripples_in_the_Sand_Hans_Zimmer_sample_1.mp3",
    "Dust_My_Broom_-_Elmore_James_The_Wolf_Of_Wall_Street._sample_1.mp3",
    "Elisa's_Theme_Alexandre_Desplat_The_Shape_of_Water_sample_1.mp3",
    "Emile_Mosseri_–_Big Country_Minari_sample_1.mp3",
    "Ending_from_Bedroom_Jim_Williams_Titane_sample_1.mp3",
    "Ennio_Morricone_-_L'incontro_Con_La_Figlia_Inglorious_Basterds_sample_1.mp3",
    "Escape_Mad_Max_Fury_Road_Junkie_XL_sample_1.mp3",
    "Everything_Everywhere_All_At_Once__In Another Life_-_Son_Lux_sample_1.mp3",
    "Everything_Everywhere_All_At_Once__Ryan_Lott_-_Stutter_Apertures_sample_1.mp3",
    "Family_Trip_Jung_Jaeil_Broker_sample_1.mp3",
    "Fare_Thee_Well_(Dink's Song)_Oscar_Isaac_Marcus_Mumford_Inside_Llewyn_Davis_sample_1.mp3",
    "Femme_Fatale_Michael_Abels_Us_sample_1.mp3",
    "Final_Ascent_Hans_Zimmer_No_Time_To_Die_sample_1.mp3",
    "First_Kisses__Ludwig_Goransson_Everything,_Everything_sample_1.mp3",
    "Francesco_De_Masi_-_Ecce_Homo_Once_Upon_a_Time_in_Hollywood_sample_1.mp3",
    "Free_Haircut_Marco_Beltrami_Free_Solo_sample_1.mp3",
    "Garden_of_Eden_Emile_Mosseri_Minari_sample_1.mp3",
    "Gregoire_Hetzel_-_Chere_petite_Chantal__Un_amour_impossible_sample_1.mp3",
    "Gregoire_Hetzel_-_Trente_ans__Un_amour_impossible_sample_1.mp3",
    "Guled's_Decision_Andre_Matthias_The_Gravedigger's_Wife_sample_1.mp3",
    "Guonadottir_For_Petra_Tar_Hildur Guonadottir_sample_1.mp3",
    "Guonadottir_Tar_-_I._Largo_Hildur_Guonadottir_sample_1.mp3",
    "Hand_Covers_Bruise_Trent Reznor_and_Atticus Ross_The_Social_Network_sample_1.mp3",
    "Hans_Zimmer_-_Day_One_Interstellar_Soundtrack_sample_1.mp3",
    "Hans_Zimmer_-_Time_-_Inception_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder3/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
}
