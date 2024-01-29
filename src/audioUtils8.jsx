import { useEffect } from 'react';

const AudioSelectorPage15 = ({ audioPathPage15, setAudioPathPage15 }) => {
  useEffect(() => {
    if (!audioPathPage15) {
      // Define your audio files for Page 15 here
      const audioFolderFilesPage15 = ["spotlight_howard_shore_sample_1.mp3",
      "spotlight_howard_shore_sample_2.mp3",
      "spy_meeting_alexandre_desplat_the_shape_of_water_sample_1.mp3",
      "spy_meeting_alexandre_desplat_the_shape_of_water_sample_2.mp3",
      "square_escape_hans_zimmer_no_time_to_die__sample_1.mp3",
      "square_escape_hans_zimmer_no_time_to_die__sample_2.mp3",
      "star_lightstar_bright__heitor_pereira_puss_in_boots_thelast_wish_sample_1.mp3",
      "star_lightstar_bright__heitor_pereira_puss_in_boots_thelast_wish_sample_2.mp3",
      "start_a_war__the_national_warrior_sample_1.mp3",
      "start_a_war__the_national_warrior_sample_2.mp3",
      "sugar_storm_gone_girl_trent_reznor_atticus_ross_sample_1.mp3",
      "sugar_storm_gone_girl_trent_reznor_atticus_ross_sample_2.mp3",
      "summer_montage_madeline_la_la_land_justin_hurwitz_sample_1.mp3",
      "summer_montage_madeline_la_la_land_justin_hurwitz_sample_2.mp3",
      "surveillance_sicario_johan_johannsson_sample_1.mp3",
      "surveillance_sicario_johan_johannsson_sample_2.mp3",
      "surveillance_video__johann_johannssonprisoners_sample_1.mp3",
      "surveillance_video__johann_johannssonprisoners_sample_2.mp3",
      "swimming_and_skiing_lisa_gerrard_marcello_de_francisci_samsara_sample_1.mp3",
      "swimming_and_skiing_lisa_gerrard_marcello_de_francisci_samsara_sample_2.mp3",
      "tape_cul_jeanbenoit_dunckel_summer_of_85_sample_1.mp3",
      "tape_cul_jeanbenoit_dunckel_summer_of_85_sample_2.mp3",
      "tazarine_gustavo_santaolalla_babel_sample_1.mp3",
      "tazarine_gustavo_santaolalla_babel_sample_2.mp3",
      "technically_missing_gone_girl_trent_reznor_atticus_ross_sample_1.mp3",
      "technically_missing_gone_girl_trent_reznor_atticus_ross_sample_2.mp3",
      "tell_me_a_tale_of_yourself_so_that_i_might_know_thee_the_green_knight_daniel_hart_sample_1.mp3",
      "tell_me_a_tale_of_yourself_so_that_i_might_know_thee_the_green_knight_daniel_hart_sample_2.mp3",
      "tenet_rainy_night_in_tallinn__ludwig_goransson_sample_1.mp3",
      "tenet_rainy_night_in_tallinn__ludwig_goransson_sample_2.mp3",
      "tenet_red_room_blue_room__ludwig_goransson_sample_1.mp3",
      "tenet_red_room_blue_room__ludwig_goransson_sample_2.mp3",
      "thanksgiving_in_sacramento_jon_brion_lady_bird_sample_1.mp3",
      "thanksgiving_in_sacramento_jon_brion_lady_bird_sample_2.mp3",
      "thats_life_frank_sinatra_joker_sample_1.mp3",
      "thats_life_frank_sinatra_joker_sample_2.mp3",
      "the_artist_main_theme__georgevalentin__ludovicbource_sample_1.mp3",
      "the_artist_main_theme__georgevalentin__ludovicbource_sample_2.mp3",
      "the_batman_michaelgiacchino_sample_1.mp3",
      "the_batman_michaelgiacchino_sample_2.mp3",
      "the_bee_gees__to_love_somebody_glass_onion_sample_1.mp3",
      "the_bee_gees__to_love_somebody_glass_onion_sample_2.mp3",
      "the_candlelight_vigil__johann_johannssonprisoners_sample_1.mp3",
      "the_candlelight_vigil__johann_johannssonprisoners_sample_2.mp3",
      "the_dark_knight_main_theme__hans_zimmer__sample_1.mp3",
      "the_dark_knight_main_theme__hans_zimmer__sample_2.mp3",
      "the_do__despair_hangover__ecstasy__raw_sample_1.mp3",
      "the_do__despair_hangover__ecstasy__raw_sample_2.mp3",
      "the_ferry__michaelandrews_nosajthing_the_king_of_staten_island_sample_1.mp3",
      "the_ferry__michaelandrews_nosajthing_the_king_of_staten_island_sample_2.mp3",
      "the_four_seasonssummer_in_g_minor_rv_315_iii_presto_antonio_vivaldi_portrait_of_a_lady_on_fire_sample_1.mp3",
      "the_four_seasonssummer_in_g_minor_rv_315_iii_presto_antonio_vivaldi_portrait_of_a_lady_on_fire_sample_2.mp3",
      "the_frontal_lobe_of_ki_taek_parasite_jung_jaeil_sample_1.mp3",
      "the_frontal_lobe_of_ki_taek_parasite_jung_jaeil_sample_2.mp3",
      "the_hem_jonny_greenwood_phantom_thread_sample_1.mp3",
      "the_hem_jonny_greenwood_phantom_thread_sample_2.mp3",
      "the_hives__hate_to_say_i_told_you_so_randy_fitzsimmons_boyhood_sample_1.mp3",
      "the_hives__hate_to_say_i_told_you_so_randy_fitzsimmons_boyhood_sample_2.mp3",
      "the_hungry_ghost__aaron_cupples_island_of_the_hungry_ghosts_sample_1.mp3",
      "the_hungry_ghost__aaron_cupples_island_of_the_hungry_ghosts_sample_2.mp3"];

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage15];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder8/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage15(fullPath);
    }
  }, [audioPathPage15, setAudioPathPage15]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage15;

/*"Spotlight_Howard_Shore_sample_1.mp3",
      "Spotlight_Howard_Shore_sample_2.mp3",
      "Spy_Meeting_Alexandre_Desplat_The_Shape_of_Water_sample_1.mp3",
      "Spy_Meeting_Alexandre_Desplat_The_Shape_of_Water_sample_2.mp3",
      "Square_Escape_Hans_Zimmer_No_Time_To_Die__sample_1.mp3",
      "Square_Escape_Hans_Zimmer_No_Time_To_Die__sample_2.mp3",
      "Star_Light-Star_Bright__Heitor_Pereira_Puss_in_Boots_The_Last_Wish_sample_1.mp3",
      "Star_Light-Star_Bright__Heitor_Pereira_Puss_in_Boots_The_Last_Wish_sample_2.mp3",
      "Start_a_War_-_The_National_Warrior_sample_1.mp3",
      "Start_a_War_-_The_National_Warrior_sample_2.mp3",
      "Sugar_Storm_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_1.mp3",
      "Sugar_Storm_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_2.mp3",
      "Summer_Montage_Madeline_La_La_Land_Justin_Hurwitz_sample_1.mp3",
      "Summer_Montage_Madeline_La_La_Land_Justin_Hurwitz_sample_2.mp3",
      "Surveillance_Sicario_Johan_Johannsson_sample_1.mp3",
      "Surveillance_Sicario_Johan_Johannsson_sample_2.mp3",
      "Surveillance_Video_-_Johann_Johannsson-Prisoners_sample_1.mp3",
      "Surveillance_Video_-_Johann_Johannsson-Prisoners_sample_2.mp3",
      "Swimming_And_Skiing_Lisa_Gerrard,_Marcello_de_Francisci_Samsara_sample_1.mp3",
      "Swimming_And_Skiing_Lisa_Gerrard,_Marcello_de_Francisci_Samsara_sample_2.mp3",
      "TENET_RAINY_NIGHT_IN_TALLINN_-_Ludwig_Goransson_sample_1.mp3",
      "TENET_RAINY_NIGHT_IN_TALLINN_-_Ludwig_Goransson_sample_2.mp3",
      "TENET_RED_ROOM_BLUE_ROOM_-_Ludwig_Goransson_sample_1.mp3",
      "TENET_RED_ROOM_BLUE_ROOM_-_Ludwig_Goransson_sample_2.mp3",
      "Tape_cul_Jean-Benoit_Dunckel_Summer_Of_85'_sample_1.mp3",
      "Tape_cul_Jean-Benoit_Dunckel_Summer_Of_85'_sample_2.mp3",
      "Tazarine_Gustavo_Santaolalla_Babel_sample_1.mp3",
      "Tazarine_Gustavo_Santaolalla_Babel_sample_2.mp3",
      "Technically,_Missing_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_1.mp3",
      "Technically,_Missing_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_2.mp3",
      "Tell_Me_A_Tale_Of_Yourself,_So_That_I_Might_Know_Thee_The_Green_Knight_Daniel_Hart_sample_1.mp3",
      "Tell_Me_A_Tale_Of_Yourself,_So_That_I_Might_Know_Thee_The_Green_Knight_Daniel_Hart_sample_2.mp3",
      "Thanksgiving_in_Sacramento_Jon_Brion_Lady_Bird_sample_1.mp3",
      "Thanksgiving_in_Sacramento_Jon_Brion_Lady_Bird_sample_2.mp3",
      "That's_Life_Frank_Sinatra_Joker_sample_1.mp3",
      "That's_Life_Frank_Sinatra_Joker_sample_2.mp3",
      "The_Artist_Main_Theme_-_George_Valentin__Ludovic_Bource_sample_1.mp3",
      "The_Artist_Main_Theme_-_George_Valentin__Ludovic_Bource_sample_2.mp3",
      "The_Batman_Michael_Giacchino_sample_1.mp3",
      "The_Batman_Michael_Giacchino_sample_2.mp3",
      "The_Bee_Gees_-_To_Love_Somebody_Glass_Onion_sample_1.mp3",
      "The_Bee_Gees_-_To_Love_Somebody_Glass_Onion_sample_2.mp3",
      "The_Candlelight_Vigil_-_Johann_Johannsson-Prisoners_sample_1.mp3",
      "The_Candlelight_Vigil_-_Johann_Johannsson-Prisoners_sample_2.mp3",
      "The_Dark_Knight_Main_Theme_-_Hans_Zimmer__sample_1.mp3",
      "The_Dark_Knight_Main_Theme_-_Hans_Zimmer__sample_2.mp3",
      "The_Do_-_Despair_Hangover_&_Ecstasy__Raw_sample_1.mp3",
      "The_Do_-_Despair_Hangover_&_Ecstasy__Raw_sample_2.mp3",
      "The_Ferry__Michael_Andrews_Nosaj_Thing_The_King_Of_Staten_Island_sample_1.mp3",
      "The_Ferry__Michael_Andrews_Nosaj_Thing_The_King_Of_Staten_Island_sample_2.mp3",
      "The_Four_Seasons-Summer_in_G_Minor,_RV._315_III._Presto_Antonio_Vivaldi_Portrait_of_a_Lady_on_Fire_sample_1.mp3",
      "The_Four_Seasons-Summer_in_G_Minor,_RV._315_III._Presto_Antonio_Vivaldi_Portrait_of_a_Lady_on_Fire_sample_2.mp3",
      "The_Frontal_Lobe_of_Ki_Taek_Parasite_Jung_Jaeil_sample_1.mp3",
      "The_Frontal_Lobe_of_Ki_Taek_Parasite_Jung_Jaeil_sample_2.mp3",
      "The_Hem_Jonny_Greenwood_Phantom_Thread_sample_1.mp3",
      "The_Hem_Jonny_Greenwood_Phantom_Thread_sample_2.mp3",
      "The_Hives_-_Hate_to_Say_I_Told_You_So_Randy_Fitzsimmons_Boyhood_sample_1.mp3",
      "The_Hives_-_Hate_to_Say_I_Told_You_So_Randy_Fitzsimmons_Boyhood_sample_2.mp3",
      "The_Hungry_Ghost__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_1.mp3",
      "The_Hungry_Ghost__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_2.mp3"*/



/* export function getRandomAudioPath8() {
    const audioFiles = ["Spotlight_Howard_Shore_sample_1.mp3",
    "Spy_Meeting_Alexandre_Desplat_The_Shape_of_Water_sample_1.mp3",
    "Square_Escape_Hans_Zimmer_No_Time_To_Die__sample_1.mp3",
    "Star_Light-Star_Bright__Heitor_Pereira_Puss_in_Boots_The Last_Wish_sample_1.mp3",
    "Start_a_War_-_The_National_Warrior_sample_1.mp3",
    "Sugar_Storm_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_1.mp3",
    "Summer_Montage_Madeline_La_La_Land_Justin_Hurwitz_sample_1.mp3",
    "Surveillance_Sicario_Johan_Johannsson_sample_1.mp3",
    "Surveillance_Video_-_Johann_Johannsson-Prisoners_sample_1.mp3",
    "Swimming_And_Skiing_Lisa_Gerrard,_Marcello_de_Francisci_Samsara_sample_1.mp3",
    "TENET_RAINY_NIGHT_IN_TALLINN_-_Ludwig_Goransson_sample_1.mp3",
    "TENET_RED_ROOM_BLUE_ROOM_-_Ludwig_Goransson_sample_1.mp3",
    "Tape_cul_Jean-Benoit_Dunckel_Summer_Of_85'_sample_1.mp3",
    "Tazarine_Gustavo_Santaolalla_Babel_sample_1.mp3",
    "Technically,_Missing_Gone_Girl_Trent_Reznor_Atticus_Ross_sample_1.mp3",
    "Tell_Me_A_Tale_Of_Yourself,_So_That_I_Might_Know_Thee_The_Green_Knight_Daniel_Hart_sample_1.mp3",
    "Thanksgiving_in_Sacramento_Jon_Brion_Lady_Bird_sample_1.mp3",
    "That's_Life_Frank_Sinatra_Joker_sample_1.mp3",
    "The_Artist_Main_Theme_-_George Valentin__Ludovic Bource_sample_1.mp3",
    "The_Batman_Michael Giacchino_sample_1.mp3",
    "The_Bee_Gees_-_To_Love_Somebody_Glass_Onion_sample_1.mp3",
    "The_Candlelight_Vigil_-_Johann_Johannsson-Prisoners_sample_1.mp3",
    "The_Dark_Knight_Main_Theme_-_Hans_Zimmer__sample_1.mp3",
    "The_Do_-_Despair_Hangover_&_Ecstasy__Raw_sample_1.mp3",
    "The_Ferry__Michael Andrews_Nosaj Thing_The_King_Of_Staten_Island_sample_1.mp3",
    "The_Four_Seasons-Summer_in_G_Minor,_RV._315_III._Presto_Antonio_Vivaldi_Portrait_of_a_Lady_on_Fire_sample_1.mp3",
    "The_Frontal_Lobe_of_Ki_Taek_Parasite_Jung_Jaeil_sample_1.mp3",
    "The_Hem_Jonny_Greenwood_Phantom_Thread_sample_1.mp3",
    "The_Hives_-_Hate_to_Say_I_Told_You_So_Randy_Fitzsimmons_Boyhood_sample_1.mp3",
    "The_Hungry_Ghost__Aaron_Cupples_Island_of_the_Hungry_Ghosts_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder8/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */