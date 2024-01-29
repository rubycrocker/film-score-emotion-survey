import { useEffect } from 'react';

const AudioSelectorPage11 = ({ audioPathPage11, setAudioPathPage11 }) => {
  useEffect(() => {
    if (!audioPathPage11) {
      // Define your audio files for Page 11 here
      const audioFolderFilesPage11 = ["ha_dias__luca_mundaca_sample_1.mp3",
      "ha_dias__luca_mundaca_sample_2.mp3",
      "he_had_a_good_time_cliff_martinez_drive_sample_1.mp3",
      "he_had_a_good_time_cliff_martinez_drive_sample_2.mp3",
      "help_me_make_it_through_the_nightkris_kristoffersoncorsage_sample_1.mp3",
      "help_me_make_it_through_the_nightkris_kristoffersoncorsage_sample_2.mp3",
      "hope_jamesnewtonhoward_a_hidden_life_sample_1.mp3",
      "hope_jamesnewtonhoward_a_hidden_life_sample_2.mp3",
      "hungryspirit_cornel_wilczek_thomas_e_rouch_talk_to_me_sample_1.mp3",
      "hungryspirit_cornel_wilczek_thomas_e_rouch_talk_to_me_sample_2.mp3",
      "hunting_alexisgrapsas_philipklein_pig_sample_1.mp3",
      "hunting_alexisgrapsas_philipklein_pig_sample_2.mp3",
      "i_could_show_you_if_youd_like_hans_zimmer_rush_sample_1.mp3",
      "i_could_show_you_if_youd_like_hans_zimmer_rush_sample_2.mp3",
      "i_remember_you_christopher_bear_daniel_rossen_past_lives_sample_1.mp3",
      "i_remember_you_christopher_bear_daniel_rossen_past_lives_sample_2.mp3",
      "im_with_you_to_the_end_steven_price_last_night_in_soho_sample_1.mp3",
      "im_with_you_to_the_end_steven_price_last_night_in_soho_sample_2.mp3",
      "in_motion__trentreznor_and_atticusross_the_social_network_sample_1.mp3",
      "in_motion__trentreznor_and_atticusross_the_social_network_sample_2.mp3",
      "in_stori_stif_and_stronge_the_green_knight_daniel_hart_sample_1.mp3",
      "in_stori_stif_and_stronge_the_green_knight_daniel_hart_sample_2.mp3",
      "inglorious_basterds_the_green_leaves_of_summer__nick_perito_sample_1.mp3",
      "inglorious_basterds_the_green_leaves_of_summer__nick_perito_sample_2.mp3",
      "into_the_spiderverse_daniel_pemberton_sample_1.mp3",
      "into_the_spiderverse_daniel_pemberton_sample_2.mp3",
      "into_the_wild_timekeeper_michael_brook_sample_1.mp3",
      "into_the_wild_timekeeper_michael_brook_sample_2.mp3",
      "is_that_what_everybody_wants_cliffmartinez_solaris_sample_1.mp3",
      "is_that_what_everybody_wants_cliffmartinez_solaris_sample_2.mp3",
      "itll_all_be_over_the_supreme_jubilees_moonlight_sample_1.mp3",
      "itll_all_be_over_the_supreme_jubilees_moonlight_sample_2.mp3",
      "its_on_your_buzzer__cliff_martinez__kimi_sample_1.mp3",
      "its_on_your_buzzer__cliff_martinez__kimi_sample_2.mp3",
      "jim_crow_the_help_thomas_newman_sample_1.mp3",
      "jim_crow_the_help_thomas_newman_sample_2.mp3",
      "john_williams_the_fabelmans_sample_1.mp3",
      "john_williams_the_fabelmans_sample_2.mp3",
      "joi_hans_zimmer_benjamin_wallfisch_blade_runner_2049_sample_1.mp3",
      "joi_hans_zimmer_benjamin_wallfisch_blade_runner_2049_sample_2.mp3",
      "jojos_theme_michael_giacchino_jojo_rabbit_sample_1.mp3",
      "jojos_theme_michael_giacchino_jojo_rabbit_sample_2.mp3",
      "joker__defeated_clown_call_me_joker_hildur_gudnadottir_sample_1.mp3",
      "joker__defeated_clown_call_me_joker_hildur_gudnadottir_sample_2.mp3",
      "joy_turns_to_sadness_a_growing_personality_michael_giacchinoinside_out_sample_1.mp3",
      "joy_turns_to_sadness_a_growing_personality_michael_giacchinoinside_out_sample_2.mp3",
      "judas_and_the_black_messiah_jimmy_enters_store__mark_isham__craig_harris_sample_1.mp3",
      "judas_and_the_black_messiah_jimmy_enters_store__mark_isham__craig_harris_sample_2.mp3",
      "judas_and_the_black_messiah_the_inflated_tear__the_car_the_club_mark_isham_sample_1.mp3",
      "judas_and_the_black_messiah_the_inflated_tear__the_car_the_club_mark_isham_sample_2.mp3",
      "julie_roue__revolution_day_jeune_femme_sample_1.mp3",
      "julie_roue__revolution_day_jeune_femme_sample_2.mp3",
      "jupiters_claim_michael_abels_nope_sample_1.mp3",
      "jupiters_claim_michael_abels_nope_sample_2.mp3",
      "katies_life_good_cop_dog_cop_mark_mothersbaugh_the_mitchells_vs_the_machines_sample_1.mp3",
      "katies_life_good_cop_dog_cop_mark_mothersbaugh_the_mitchells_vs_the_machines_sample_2.mp3",
      "kesariya__brahmastra__pritam_sample_1.mp3",
      "kesariya__brahmastra__pritam_sample_2.mp3",
      "kevin_beakn__michael_giacchino_up_sample_1.mp3",
      "kevin_beakn__michael_giacchino_up_sample_2.mp3"];

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



/*"Ha_Dias_-_Luca_Mundaca_sample_1.mp3",
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
      "Kevin_Beak'n__Michael_Giacchino_Up_sample_2.mp3"*/


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