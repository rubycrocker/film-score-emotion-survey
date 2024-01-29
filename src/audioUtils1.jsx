
import { useEffect } from 'react';

const AudioSelector = ({ audioPath, setAudioPath }) => {
  useEffect(() => {
    // If the audio path is not set, set it using the AudioComponent logic
    if (!audioPath) {
      const audioFolderFiles1 = ["25_years_jonny_greenwood_the_power_of_the_dog_sample_1.mp3",
      "25_years_jonny_greenwood_the_power_of_the_dog_sample_2.mp3",
      "528491_inception_hans_zimmer_sample_1.mp3",
      "528491_inception_hans_zimmer_sample_2.mp3",
      "7horse__meth_lab_zoso_sticker_the_wolf_of_wall_street_sample_1.mp3",
      "7horse__meth_lab_zoso_sticker_the_wolf_of_wall_street_sample_2.mp3",
      "a_story_about_letters_alfonso_g_aguilar_klaus_sample_1.mp3",
      "a_story_about_letters_alfonso_g_aguilar_klaus_sample_2.mp3",
      "across_the_ocean_thomas_newman_elemental_sample_1.mp3",
      "across_the_ocean_thomas_newman_elemental_sample_2.mp3",
      "airlock_steven_price_gravity_sample_1.mp3",
      "airlock_steven_price_gravity_sample_2.mp3",
      "alan_silvestri__infinity_war_from_avengers_sample_1.mp3",
      "alan_silvestri__infinity_warfromavengers_sample_2.mp3",
      "alberto_iglesias_claqueta_final_pain_and_glory_sample_1.mp3",
      "alberto_iglesias_claqueta_final_pain_and_glory_sample_2.mp3",
      "allquietonthewesternfront_mainthemesongvolkerbertelmann_sample_1.mp3",
      "allquietonthewesternfront_mainthemesongvolkerbertelmann_sample_2.mp3",
      "allquietonthewesternfront_remainsvolkerbertelmann_sample_1.mp3",
      "allquietonthewesternfront_remainsvolkerbertelmann_sample_2.mp3",
      "almost_human_antonio_sanchez_birdman_sample_1.mp3",
      "almost_human_antonio_sanchez_birdman_sample_2.mp3",
      "angela_tries_to_leave_cliff_martinez__kimi_sample_1.mp3",
      "angela_tries_to_leave_cliff_martinez__kimi_sample_2.mp3",
      "anna_karenin_overture_dario_marianelli_sample_1.mp3",
      "anna_karenin_overture_dario_marianelli_sample_2.mp3",
      "anna_karenina_toolate_dario_marianelli_sample_1.mp3",
      "anna_karenina_toolate_dario_marianelli_sample_2.mp3",
      "another_round__druk__schubert_fantasie_in_f_moll_d940_fantasy_in_f_minor_sample_1.mp3",
      "another_round__druk__schubert_fantasie_in_f_moll_d940_fantasy_in_f_minor_sample_2.mp3",
      "antonio_sanchez_doors_and_distance_birdman_sample_2.mp3",
      "arrival_heptapod_b_johannjohannsson_sample_1.mp3",
      "arrival_heptapod_b_johannjohannsson_sample_2.mp3",
      "arrival_johann_johannsson_arrival_sample_1.mp3",
      "arrival_johann_johannsson_arrival_sample_2.mp3",
      "arrival_jonny_greenwood_spencer_sample_1.mp3",
      "arrival_jonny_greenwood_spencer_sample_2.mp3",
      "ava_ex_machina_ben_salisbury_geoff_barrow_sample_1.mp3",
      "ava_ex_machina_ben_salisbury_geoff_barrow_sample_2.mp3",
      "bali_girls__michael_stearns_bonnie_jo_hunt_ron_sunsinger_samsara_sample_1.mp3",
      "bali_girls__michael_stearns_bonnie_jo_hunt_ron_sunsinger_samsara_sample_2.mp3",
      "beach_puke__jim_williams_titane_sample_1.mp3",
      "beach_puke__jim_williams_titane_sample_2.mp3",
      "beyond_the_black_rainbow_sinoia_caves__forever_dilating_eye_sample_1.mp3",
      "beyond_the_black_rainbow_sinoia_caves__forever_dilating_eye_sample_2.mp3",
      "beyond_the_black_rainbow_sinoia_caves_arboria_tapes_sample_1.mp3",
      "beyond_the_black_rainbow_sinoia_caves_arboria_tapes_sample_2.mp3",
      "blackfish_jeff_beal_blackfish_sample_1.mp3",
      "blackfish_jeff_beal_blackfish_sample_2.mp3",
      "blackway__black_caviar__whats_up_danger_spiderman_into_the_spiderverse_sample_1.mp3",
      "blackway__black_caviar__whats_up_danger_spiderman_into_the_spiderverse_sample_2.mp3",
      "blade_runner_hans_zimmer_benjamin_wallfisch_blade_runner_2049_sample_1.mp3",
      "blade_runner_hans_zimmer_benjamin_wallfisch_blade_runner_2049_sample_2.mp3",
      "bliss_main_theme_valentin_hadjadj_close_sample_1.mp3",
      "bliss_main_theme_valentin_hadjadj_close_sample_2.mp3",
      "book_reviews_and_big_dates_ludwig_goransson_everything_everything_sample_1.mp3",
      "book_reviews_and_big_dates_ludwig_goransson_everything_everything_sample_2.mp3",
      "bottom_of_the_list__the_help_thomas_newman_sample_1.mp3",
      "bottom_of_the_list__the_help_thomas_newman_sample_2.mp3"]; // Add all your audio file names

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

/* "25_Years_Jonny_Greenwood_The_Power_of_the_Dog_sample_1.mp3",
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
      "Bottom_Of_The_List__The_Help_Thomas_Newman_sample_2.mp3" */