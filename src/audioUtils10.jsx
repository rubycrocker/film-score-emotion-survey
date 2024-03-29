import { useEffect } from 'react';

const AudioSelectorPage17 = ({ audioPathPage17, setAudioPathPage17 }) => {
  useEffect(() => {
    if (!audioPathPage17) {
      // Define your audio files for Page 17 here
      const audioFolderFilesPage17 = ["aaronburrsir_hamilton_sample_1.mp3",
      "aaronburrsir_hamilton_sample_2.mp3",
      "alexanderhamilton_hamilton_sample_1.mp3",
      "alexanderhamilton_hamilton_sample_2.mp3",
      "audiomachinethebigsmoke1917_sample_1.mp3",
      "audiomachinethebigsmoke1917_sample_2.mp3",
      "capharnaum_khaled_mouzanarfromcapharnaumoriginalmotionpicturesoundtrack_sample_1.mp3",
      "capharnaum_khaled_mouzanarfromcapharnaumoriginalmotionpicturesoundtrack_sample_2.mp3",
      "greenbooksoundtrackmakethefirstmovekrisbowers_sample_1.mp3",
      "greenbooksoundtrackmakethefirstmovekrisbowers_sample_2.mp3",
      "greenbooksoundtracksolongloversislandthebluejays_sample_1.mp3",
      "greenbooksoundtracksolongloversislandthebluejays_sample_2.mp3",
      "josslovickiamapoorwayfaringstrangerfrom1917acappella1917ost_sample_1.mp3",
      "josslovickiamapoorwayfaringstrangerfrom1917acappella1917ost_sample_2.mp3",
      "khaledmouzanarzeyn_capernaum_sample_1.mp3",
      "khaledmouzanarzeyn_capernaum_sample_2.mp3",
      "sparkleyournameradwimps_sample_1.mp3",
      "sparkleyournameradwimps_sample_2.mp3",
      "themeofmsokudera_radwimps_your_name_sample_1.mp3",
      "themeofmsokudera_radwimps_your_name_sample_2.mp3",
      "toystory3lefreak_chic_sample_1.mp3",
      "toystory3lefreak_chic_sample_2.mp3",
      "walking_home_andre_matthias_the_gravediggers_wife_sample_1.mp3",
      "walking_home_andre_matthias_the_gravediggers_wife_sample_2.mp3",
      "walle_thomas_newman_sample_1.mp3",
      "walle_thomas_newman_sample_2.mp3",
      "walter_time_theodore_shapiro_jose_gonzalez_mark_graham_the_secret_life_of_walter_mitty_sample_1.mp3",
      "walter_time_theodore_shapiro_jose_gonzalez_mark_graham_the_secret_life_of_walter_mitty_sample_2.mp3",
      "west_jonny_greenwood_the_power_of_the_dog_sample_1.mp3",
      "west_jonny_greenwood_the_power_of_the_dog_sample_2.mp3",
      "west_side_waltz__dick_walter_spotlight_sample_1.mp3",
      "west_side_waltz__dick_walter_spotlight_sample_2.mp3",
      "what_a_life__scarlet_pleasure__another_round_sample_1.mp3",
      "what_a_life__scarlet_pleasure__another_round_sample_2.mp3",
      "what_i_love_about_nicole_randy_newman_marriage_story_sample_1.mp3",
      "what_i_love_about_nicole_randy_newman_marriage_story_sample_2.mp3",
      "what_this_missions_about__da_5_bloods_terence_blanchard_sample_1.mp3",
      "what_this_missions_about__da_5_bloods_terence_blanchard_sample_2.mp3",
      "whiplash_hank_levy_sample_1.mp3",
      "whiplash_hank_levy_sample_2.mp3",
      "whiplash_overture_justin_hurwitz_sample_1.mp3",
      "whiplash_overture_justin_hurwitz_sample_2.mp3",
      "why_so_serious_hans_zimmer_the_dark_knight_sample_1.mp3",
      "why_so_serious_hans_zimmer_the_dark_knight_sample_2.mp3",
      "wont_get_fooled_again_the_who_top_gun_maverick_sample_1.mp3",
      "wont_get_fooled_again_the_who_top_gun_maverick_sample_2.mp3",
      "working_the_boulder_problem_marco_beltrami_free_solo_sample_1.mp3",
      "working_the_boulder_problem_marco_beltrami_free_solo_sample_2.mp3",
      "wtf_is_that_michael_abels_nope_sample_1.mp3",
      "wtf_is_that_michael_abels_nope_sample_2.mp3",
      "yo_la_tengo__ill_be_around_yolatengo_georgia_hubley_irakaplan_james_mcnew_boyhood_sample_1.mp3",
      "yo_la_tengo__ill_be_around_yolatengo_georgia_hubley_irakaplan_james_mcnew_boyhood_sample_2.mp3",
      "you_are_not_a_cow__gary_gunn_a_thousand_and_one_sample_1.mp3",
      "you_are_not_a_cow__gary_gunn_a_thousand_and_one_sample_2.mp3",
      "you_know_youre_not_asleep_steven_price_last_night_in_soho_sample_1.mp3",
      "you_know_youre_not_asleep_steven_price_last_night_in_soho_sample_2.mp3",
      "youandwhosearmy_radiohead_incendies_sample_1.mp3",
      "youandwhosearmy_radiohead_incendies_sample_2.mp3",
      "zara_larsson__invisible_klaus_sample_1.mp3",
      "zara_larsson__invisible_klaus_sample_2.mp3"]; 

      // Shuffle the array
      const shuffledFiles = [...audioFolderFilesPage17];
      for (let i = shuffledFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
      }

      // Select the first file from the shuffled array
      const selectedFile = shuffledFiles[0];

      // Generate the full path
      const basePath = "/film-score-emotion-survey/audioFolder10/";
      const fullPath = basePath + selectedFile;

      // Set the full path in the state
      setAudioPathPage17(fullPath);
    }
  }, [audioPathPage17, setAudioPathPage17]);

  return null; // or return a placeholder element if needed
};

export default AudioSelectorPage17;


/*"WTF_Is_That_Michael_Abels_Nope_sample_1.mp3",
      "WTF_Is_That_Michael_Abels_Nope_sample_2.mp3",
      "Walking_Home_Andre_Matthias_The_Gravedigger's_Wife_sample_1.mp3",
      "Walking_Home_Andre_Matthias_The_Gravedigger's_Wife_sample_2.mp3",
      "Wall-E_Thomas_Newman_sample_1.mp3",
      "Wall-E_Thomas_Newman_sample_2.mp3",
      "Walter_Time_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_1.mp3",
      "Walter_Time_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_2.mp3",
      "West_Jonny_Greenwood_The_Power_of_the_Dog_sample_1.mp3",
      "West_Jonny_Greenwood_The_Power_of_the_Dog_sample_2.mp3",
      "West_Side_Waltz_-_Dick_Walter_Spotlight_sample_1.mp3",
      "West_Side_Waltz_-_Dick_Walter_Spotlight_sample_2.mp3",
      "What_A_Life_-_Scarlet_Pleasure__Another_Round_sample_1.mp3",
      "What_A_Life_-_Scarlet_Pleasure__Another_Round_sample_2.mp3",
      "What_I_Love_About_Nicole_Randy_Newman_Marriage_Story_sample_1.mp3",
      "What_I_Love_About_Nicole_Randy_Newman_Marriage_Story_sample_2.mp3",
      "What_This_Mission's_About__Da_5_Bloods_Terence_Blanchard_sample_1.mp3",
      "What_This_Mission's_About__Da_5_Bloods_Terence_Blanchard_sample_2.mp3",
      "Whiplash_Hank_Levy_sample_1.mp3",
      "Whiplash_Hank_Levy_sample_2.mp3",
      "Whiplash_Overture_Justin_Hurwitz_sample_1.mp3",
      "Whiplash_Overture_Justin_Hurwitz_sample_2.mp3",
      "Why_So_Serious_Hans_Zimmer_The_Dark_Knight_sample_1.mp3",
      "Why_So_Serious_Hans_Zimmer_The_Dark_Knight_sample_2.mp3",
      "Won't_Get_Fooled_Again_The_Who_Top_Gun_Maverick_sample_1.mp3",
      "Won't_Get_Fooled_Again_The_Who_Top_Gun_Maverick_sample_2.mp3",
      "Working_The_Boulder_Problem_Marco_Beltrami_Free_Solo_sample_1.mp3",
      "Working_The_Boulder_Problem_Marco_Beltrami_Free_Solo_sample_2.mp3",
      "Yo_La_Tengo_-_I'll_Be_Around_Yo_La_Tengo,_Georgia_Hubley,_Ira_Kaplan,_James_McNew_Boyhood_sample_1.mp3",
      "Yo_La_Tengo_-_I'll_Be_Around_Yo_La_Tengo,_Georgia_Hubley,_Ira_Kaplan,_James_McNew_Boyhood_sample_2.mp3",
      "You_Are_Not_A_Cow__Gary_Gunn_A_Thousand_and_One_sample_1.mp3",
      "You_Are_Not_A_Cow__Gary_Gunn_A_Thousand_and_One_sample_2.mp3",
      "You_Know_You're_Not_Asleep_Steven_Price_Last_Night_In_Soho_sample_1.mp3",
      "You_Know_You're_Not_Asleep_Steven_Price_Last_Night_In_Soho_sample_2.mp3",
      "Zara_Larsson_-_Invisible_Klaus_sample_1.mp3",
      "Zara_Larsson_-_Invisible_Klaus_sample_2.mp3",
      "aaron-burr-sir_Hamilton_sample_1.mp3",
      "aaron-burr-sir_Hamilton_sample_2.mp3",
      "alexander-hamilton_Hamilton_sample_1.mp3",
      "alexander-hamilton_Hamilton_sample_2.mp3",
      "audiomachine-the-big-smoke-1917_sample_1.mp3",
      "audiomachine-the-big-smoke-1917_sample_2.mp3",
      "capharnaum_khaled_mouzanar-from-capharnaum-original-motion-picture-soundtrack_sample_1.mp3",
      "capharnaum_khaled_mouzanar-from-capharnaum-original-motion-picture-soundtrack_sample_2.mp3",
      "green-book-soundtrack-make-the-first-move-kris-bowers_sample_1.mp3",
      "green-book-soundtrack-make-the-first-move-kris-bowers_sample_2.mp3",
      "green-book-soundtrack-so-long-lovers-island-the-blue-jays_sample_1.mp3",
      "green-book-soundtrack-so-long-lovers-island-the-blue-jays_sample_2.mp3",
      "jos-slovick-i-am-a-poor-wayfaring-stranger-from-1917-a-cappella-1917-ost_sample_1.mp3",
      "jos-slovick-i-am-a-poor-wayfaring-stranger-from-1917-a-cappella-1917-ost_sample_2.mp3",
      "khaled-mouzanar-zeyn_Capernaum_sample_1.mp3",
      "khaled-mouzanar-zeyn_Capernaum_sample_2.mp3",
      "sparkle-your-name-radwimps_sample_1.mp3",
      "sparkle-your-name-radwimps_sample_2.mp3",
      "theme-of-ms-okudera_radwimps_your_name_sample_1.mp3",
      "theme-of-ms-okudera_radwimps_your_name_sample_2.mp3",
      "toy-story-3-le-freak_chic_sample_1.mp3",
      "toy-story-3-le-freak_chic_sample_2.mp3",
      "you-and-whose-army_radiohead_incendies_sample_1.mp3",
      "you-and-whose-army_radiohead_incendies_sample_2.mp3"*/

       
/* export function getRandomAudioPath10() {
    const audioFiles = ["WTF_Is_That_Michael_Abels_Nope_sample_1.mp3",
    "Walking_Home_Andre_Matthias_The_Gravedigger's_Wife_sample_1.mp3",
    "WallE_Thomas_Newman_sample_1.mp3",
    "Walter_Time_Theodore_Shapiro,_Jose_Gonzalez,_Mark_Graham_The_Secret_Life_of_Walter_Mitty_sample_1.mp3",
    "West_Jonny_Greenwood_The_Power_of_the_Dog_sample_1.mp3",
    "West_Side_Waltz_-_Dick_Walter_Spotlight_sample_1.mp3",
    "What_A_Life_-_Scarlet_Pleasure__Another_Round_sample_1.mp3",
    "What_I_Love_About_Nicole_Randy_Newman_Marriage_Story_sample_1.mp3",
    "What_This_Mission's_About__Da_5_Bloods_Terence_Blanchard_sample_1.mp3",
    "Whiplash_Hank_Levy_sample_1.mp3",
    "Whiplash_Overture_Justin_Hurwitz_sample_1.mp3",
    "Why_So_Serious_Hans_Zimmer_The_Dark_Knight_sample_1.mp3",
    "Won't_Get_Fooled_Again_The_Who_Top_Gun_Maverick_sample_1.mp3",
    "Working_The_Boulder_Problem_Marco_Beltrami_Free_Solo_sample_1.mp3",
    "Yo_La_Tengo_-_I'll_Be_Around_Yo_La_Tengo,_Georgia_Hubley,_Ira Kaplan,_James_McNew_Boyhood_sample_1.mp3",
    "You_Are_Not_A_Cow__Gary_Gunn_A_Thousand_and_One_sample_1.mp3",
    "You_Know_You're_Not_Asleep_Steven_Price_Last_Night_In_Soho_sample_1.mp3",
    "Zara_Larsson_-_Invisible_Klaus_sample_1.mp3",
    "aaron-burr-sir_Hamilton_sample_1.mp3",
    "alexander-hamilton_Hamilton_sample_1.mp3",
    "audiomachine-the-big-smoke-1917_sample_1.mp3",
    "capharnaum_khaled_mouzanar-from-capharnaum-original-motion-picture-soundtrack_sample_1.mp3",
    "green-book-soundtrack-make-the-first-move-kris-bowers_sample_1.mp3",
    "green-book-soundtrack-so-long-lovers-island-the-blue-jays_sample_1.mp3",
    "jos-slovick-i-am-a-poor-wayfaring-stranger-from-1917-a-cappella-1917-ost_sample_1.mp3",
    "khaled-mouzanar-zeyn_Capernaum_sample_1.mp3",
    "sparkle-your-name-radwimps_sample_1.mp3",
    "theme-of-ms-okudera_radwimps_your_name_sample_1.mp3",
    "toy-story-3-le-freak_chic_sample_1.mp3",
    "you-and-whose-army_radiohead_incendies_sample_1.mp3"]; // Add all your audio file names
    const savedAudioPath = localStorage.getItem('randomAudioPath');

  if (savedAudioPath) {
    return savedAudioPath;
  }

  // If no saved audio path, generate a random one
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioPath = `./audioFolder10/${audioFiles[randomIndex]}`;

  // Save the randomly selected audio path to local storage
  localStorage.setItem('randomAudioPath', randomAudioPath);

  return randomAudioPath;
} */