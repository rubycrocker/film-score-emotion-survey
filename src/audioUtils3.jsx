import { useEffect } from 'react';

const AudioSelectorPage10 = ({ audioPathPage10, setAudioPathPage10 }) => {
  useEffect(() => {
    if (!audioPathPage10) {
      // Define your audio files for Page 10 here
      const audioFolderFilesPage10 = ["drive_after_the_chase_cliff_martinez_sample_1.mp3",
      "drive_after_the_chase_cliff_martinez_sample_2.mp3",
      "drive_my_car_eiko_ishibashi_drive_my_car_sample_1.mp3",
      "drive_my_car_eiko_ishibashi_drive_my_car_sample_2.mp3",
      "drive_my_car_the_important_thing_is_to_work_eiko_ishibashi_sample_1.mp3",
      "drive_my_car_the_important_thing_is_to_work_eiko_ishibashi_sample_2.mp3",
      "drum__drone_whiplash_justin_hurwitz_sample_1.mp3",
      "drum__drone_whiplash_justin_hurwitz_sample_2.mp3",
      "duke_ellington_and_his_cotton_club_orchestra__jubilee_stomp__the_artist_sample_1.mp3",
      "duke_ellington_and_his_cotton_club_orchestra__jubilee_stomp__the_artist_sample_2.mp3",
      "dune_ripples_in_the_sand_hans_zimmer_sample_1.mp3",
      "dune_ripples_in_the_sand_hans_zimmer_sample_2.mp3",
      "dust_my_broom__elmore_james_the_wolf_of_wall_street_sample_1.mp3",
      "dust_my_broom__elmore_james_the_wolf_of_wall_street_sample_2.mp3",
      "elisas_theme_alexandre_desplat_the_shape_of_water_sample_1.mp3",
      "elisas_theme_alexandre_desplat_the_shape_of_water_sample_2.mp3",
      "emile_mosseri__bigcountry_minari_sample_1.mp3",
      "emile_mosseri__bigcountry_minari_sample_2.mp3",
      "ending_from_bedroom_jim_williams_titane_sample_1.mp3",
      "ending_from_bedroom_jim_williams_titane_sample_2.mp3",
      "ennio_morricone__lincontro_con_la_figlia_inglorious_basterds_sample_1.mp3",
      "ennio_morricone__lincontro_con_la_figlia_inglorious_basterds_sample_2.mp3",
      "escape_mad_max_fury_road_junkie_xl_sample_1.mp3",
      "escape_mad_max_fury_road_junkie_xl_sample_2.mp3",
      "everything_everywhere_all_at_once__inanotherlife__son_lux_sample_1.mp3",
      "everything_everywhere_all_at_once__inanotherlife__son_lux_sample_2.mp3",
      "everything_everywhere_all_at_once__ryan_lott__stutter_apertures_sample_1.mp3",
      "everything_everywhere_all_at_once__ryan_lott__stutter_apertures_sample_2.mp3",
      "family_trip_jung_jaeil_broker_sample_1.mp3",
      "family_trip_jung_jaeil_broker_sample_2.mp3",
      "fare_thee_well_dinkssong_oscar_isaac_marcus_mumford_inside_llewyn_davis_sample_1.mp3",
      "fare_thee_well_dinkssong_oscar_isaac_marcus_mumford_inside_llewyn_davis_sample_2.mp3",
      "femme_fatale_michael_abels_us_sample_1.mp3",
      "femme_fatale_michael_abels_us_sample_2.mp3",
      "final_ascent_hans_zimmer_no_time_to_die_sample_1.mp3",
      "final_ascent_hans_zimmer_no_time_to_die_sample_2.mp3",
      "first_kisses__ludwig_goransson_everything_everything_sample_1.mp3",
      "first_kisses__ludwig_goransson_everything_everything_sample_2.mp3",
      "francesco_de_masi__ecce_homo_once_upon_a_time_in_hollywood_sample_1.mp3",
      "francesco_de_masi__ecce_homo_once_upon_a_time_in_hollywood_sample_2.mp3",
      "free_haircut_marco_beltrami_free_solo_sample_1.mp3",
      "free_haircut_marco_beltrami_free_solo_sample_2.mp3",
      "garden_of_eden_emile_mosseri_minari_sample_1.mp3",
      "garden_of_eden_emile_mosseri_minari_sample_2.mp3",
      "gregoire_hetzel__chere_petite_chantal__un_amour_impossible_sample_1.mp3",
      "gregoire_hetzel__chere_petite_chantal__un_amour_impossible_sample_2.mp3",
      "gregoire_hetzel__trente_ans__un_amour_impossible_sample_1.mp3",
      "gregoire_hetzel__trente_ans__un_amour_impossible_sample_2.mp3",
      "gudnadottir_for_petra_tar_hildurgudnadottir_sample_1.mp3",
      "gudnadottir_for_petra_tar_hildurgudnadottir_sample_2.mp3",
      "gudnadottir_tar__i_largo_hildur_gudnadottir_sample_1.mp3",
      "gudnadottir_tar__i_largo_hildur_gudnadottir_sample_2.mp3",
      "guleds_decision_andre_matthias_the_gravediggers_wife_sample_1.mp3",
      "guleds_decision_andre_matthias_the_gravediggers_wife_sample_2.mp3",
      "hand_covers_bruise_trentreznor_and_atticusross_the_social_network_sample_1.mp3",
      "hand_covers_bruise_trentreznor_and_atticusross_the_social_network_sample_2.mp3",
      "hans_zimmer__day_one_interstellar_soundtrack_sample_1.mp3",
      "hans_zimmer__day_one_interstellar_soundtrack_sample_2.mp3",
      "hans_zimmer__time__inception_sample_1.mp3",
      "hans_zimmer__time__inception_sample_2.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage10];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder3/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage10(fullPath);
    }
  }, [audioPathPage10, setAudioPathPage10]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage10;

/*  */

/* "Drive_After_The_Chase_Cliff_Martinez_sample_1.mp3",
      "Drive_After_The_Chase_Cliff_Martinez_sample_2.mp3",
      "Drive_My_Car_(the_important_thing_is_to_work)_Eiko_Ishibashi_sample_1.mp3",
      "Drive_My_Car_(the_important_thing_is_to_work)_Eiko_Ishibashi_sample_2.mp3",
      "Drive_My_Car_Eiko_Ishibashi_Drive_My_Car_sample_1.mp3",
      "Drive_My_Car_Eiko_Ishibashi_Drive_My_Car_sample_2.mp3",
      "Drum_&_Drone_Whiplash_Justin_Hurwitz_sample_1.mp3",
      "Drum_&_Drone_Whiplash_Justin_Hurwitz_sample_2.mp3",
      "Duke_Ellington_And_His_Cotton_Club_Orchestra_-_Jubilee_Stomp__The_Artist_sample_1.mp3",
      "Duke_Ellington_And_His_Cotton_Club_Orchestra_-_Jubilee_Stomp__The_Artist_sample_2.mp3",
      "Dune_Ripples_in_the_Sand_Hans_Zimmer_sample_1.mp3",
      "Dune_Ripples_in_the_Sand_Hans_Zimmer_sample_2.mp3",
      "Dust_My_Broom_-_Elmore_James_The_Wolf_Of_Wall_Street._sample_1.mp3",
      "Dust_My_Broom_-_Elmore_James_The_Wolf_Of_Wall_Street._sample_2.mp3",
      "Elisa's_Theme_Alexandre_Desplat_The_Shape_of_Water_sample_1.mp3",
      "Elisa's_Theme_Alexandre_Desplat_The_Shape_of_Water_sample_2.mp3",
      "Emile_Mosseri_–_Big_Country_Minari_sample_1.mp3",
      "Emile_Mosseri_–_Big_Country_Minari_sample_2.mp3",
      "Ending_from_Bedroom_Jim_Williams_Titane_sample_1.mp3",
      "Ending_from_Bedroom_Jim_Williams_Titane_sample_2.mp3",
      "Ennio_Morricone_-_L'incontro_Con_La_Figlia_Inglorious_Basterds_sample_1.mp3",
      "Ennio_Morricone_-_L'incontro_Con_La_Figlia_Inglorious_Basterds_sample_2.mp3",
      "Escape_Mad_Max_Fury_Road_Junkie_XL_sample_1.mp3",
      "Escape_Mad_Max_Fury_Road_Junkie_XL_sample_2.mp3",
      "Everything_Everywhere_All_At_Once__In_Another_Life_-_Son_Lux_sample_1.mp3",
      "Everything_Everywhere_All_At_Once__In_Another_Life_-_Son_Lux_sample_2.mp3",
      "Everything_Everywhere_All_At_Once__Ryan_Lott_-_Stutter_Apertures_sample_1.mp3",
      "Everything_Everywhere_All_At_Once__Ryan_Lott_-_Stutter_Apertures_sample_2.mp3",
      "Family_Trip_Jung_Jaeil_Broker_sample_1.mp3",
      "Family_Trip_Jung_Jaeil_Broker_sample_2.mp3",
      "Fare_Thee_Well_(Dink's_Song)_Oscar_Isaac_Marcus_Mumford_Inside_Llewyn_Davis_sample_1.mp3",
      "Fare_Thee_Well_(Dink's_Song)_Oscar_Isaac_Marcus_Mumford_Inside_Llewyn_Davis_sample_2.mp3",
      "Femme_Fatale_Michael_Abels_Us_sample_1.mp3",
      "Femme_Fatale_Michael_Abels_Us_sample_2.mp3",
      "Final_Ascent_Hans_Zimmer_No_Time_To_Die_sample_1.mp3",
      "Final_Ascent_Hans_Zimmer_No_Time_To_Die_sample_2.mp3",
      "First_Kisses__Ludwig_Goransson_Everything,_Everything_sample_1.mp3",
      "First_Kisses__Ludwig_Goransson_Everything,_Everything_sample_2.mp3",
      "Francesco_De_Masi_-_Ecce_Homo_Once_Upon_a_Time_in_Hollywood_sample_1.mp3",
      "Francesco_De_Masi_-_Ecce_Homo_Once_Upon_a_Time_in_Hollywood_sample_2.mp3",
      "Free_Haircut_Marco_Beltrami_Free_Solo_sample_1.mp3",
      "Free_Haircut_Marco_Beltrami_Free_Solo_sample_2.mp3",
      "Garden_of_Eden_Emile_Mosseri_Minari_sample_1.mp3",
      "Garden_of_Eden_Emile_Mosseri_Minari_sample_2.mp3",
      "Gregoire_Hetzel_-_Chere_petite_Chantal__Un_amour_impossible_sample_1.mp3",
      "Gregoire_Hetzel_-_Chere_petite_Chantal__Un_amour_impossible_sample_2.mp3",
      "Gregoire_Hetzel_-_Trente_ans__Un_amour_impossible_sample_1.mp3",
      "Gregoire_Hetzel_-_Trente_ans__Un_amour_impossible_sample_2.mp3",
      "Guled's_Decision_Andre_Matthias_The_Gravedigger's_Wife_sample_1.mp3",
      "Guled's_Decision_Andre_Matthias_The_Gravedigger's_Wife_sample_2.mp3",
      "Guonadottir_For_Petra_Tar_Hildur_Guonadottir_sample_1.mp3",
      "Guonadottir_For_Petra_Tar_Hildur_Guonadottir_sample_2.mp3",
      "Guonadottir_Tar_-_I._Largo_Hildur_Guonadottir_sample_1.mp3",
      "Guonadottir_Tar_-_I._Largo_Hildur_Guonadottir_sample_2.mp3",
      "Hand_Covers_Bruise_Trent_Reznor_and_Atticus_Ross_The_Social_Network_sample_1.mp3",
      "Hand_Covers_Bruise_Trent_Reznor_and_Atticus_Ross_The_Social_Network_sample_2.mp3",
      "Hans_Zimmer_-_Day_One_Interstellar_Soundtrack_sample_1.mp3",
      "Hans_Zimmer_-_Day_One_Interstellar_Soundtrack_sample_2.mp3",
      "Hans_Zimmer_-_Time_-_Inception_sample_1.mp3",
      "Hans_Zimmer_-_Time_-_Inception_sample_2.mp3" */










/* export function getRandomAudioPath3() {
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
} */

