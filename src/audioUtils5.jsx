import { useEffect } from 'react';

const AudioSelectorPage12 = ({ audioPathPage12, setAudioPathPage12 }) => {
  useEffect(() => {
    if (!audioPathPage12) {
      // Define your audio files for Page 12 here
      const audioFolderFilesPage12 = ["kyle_eastwood__grantorino_feat_hugh_coltmancrdownload_sample_1.mp3",
      "kyle_eastwood__grantorino_feat_hugh_coltmancrdownload_sample_2.mp3",
      "la_jeune_fille_en_feu_portrait_of_a_lady_on_fire_para_one_arthur_simonini_sample_1.mp3",
      "la_jeune_fille_en_feu_portrait_of_a_lady_on_fire_para_one_arthur_simonini_sample_2.mp3",
      "la_musique_du_futur__moncoeur_petite_maman_jeanbaptiste_de_laubier_para_one_celine_sciamma_sample_1.mp3",
      "la_musique_du_futur__moncoeur_petite_maman_jeanbaptiste_de_laubier_para_one_celine_sciamma_sample_2.mp3",
      "la_puntura_della_morte_ennio_morricone__the_hateful_eight_sample_1.mp3",
      "la_puntura_della_morte_ennio_morricone__the_hateful_eight_sample_2.mp3",
      "lady_bird__jon_brion_lady_bird_sample_1.mp3",
      "lady_bird__jon_brion_lady_bird_sample_2.mp3",
      "lamitie_jeanmichel_blais_matthias__maxime_sample_1.mp3",
      "lamitie_jeanmichel_blais_matthias__maxime_sample_2.mp3",
      "lasvisitas_alberto__iglesias_parallel_mothers_sample_1.mp3",
      "lasvisitas_alberto__iglesias_parallel_mothers_sample_2.mp3",
      "le_feu_jeanbenoit_dunckel_summer_of_85_sample_1.mp3",
      "le_feu_jeanbenoit_dunckel_summer_of_85_sample_2.mp3",
      "leo_birenberg_bottoms_endcredits_sample_1.mp3",
      "leo_birenberg_bottoms_endcredits_sample_2.mp3",
      "leonard_bernstein__the_dance_at_the_gym_mambo_west_side_story_leonard_berstein_david_newman_matt_sullivan_jeanine_tesori_sample_1.mp3",
      "leonard_bernstein__the_dance_at_the_gym_mambo_west_side_story_leonard_berstein_david_newman_matt_sullivan_jeanine_tesori_sample_2.mp3",
      "les_feuilles_mortes_jeanmichel_blais_matthias__maxime_sample_1.mp3",
      "les_feuilles_mortes_jeanmichel_blais_matthias__maxime_sample_2.mp3",
      "licorice_pizza__jonny_greenwood_licorice_pizza_sample_1.mp3",
      "licorice_pizza__jonny_greenwood_licorice_pizza_sample_2.mp3",
      "limpeza_pesada_mateus_alves_tomaz_alves_souza_bacurau_sample_1.mp3",
      "limpeza_pesada_mateus_alves_tomaz_alves_souza_bacurau_sample_2.mp3",
      "little_women__alexandre_desplat__laurie_and_jo_on_the_hill_sample_1.mp3",
      "little_women__alexandre_desplat__laurie_and_jo_on_the_hill_sample_2.mp3",
      "little_women__robert_schumann__kinderszenen_op15_i_von_fremden_landern_und_menschen_sample_1.mp3",
      "little_women__robert_schumann__kinderszenen_op15_i_von_fremden_landern_und_menschen_sample_2.mp3",
      "loneliness_3_night_talking_arcade_fire_owen_pallett_her_sample_1.mp3",
      "loneliness_3_night_talking_arcade_fire_owen_pallett_her_sample_2.mp3",
      "lost_but_won_hans_zimmer_rush_sample_1.mp3",
      "lost_but_won_hans_zimmer_rush_sample_2.mp3",
      "love_letters_dario_marianelli_atonement_sample_1.mp3",
      "love_letters_dario_marianelli_atonement_sample_2.mp3",
      "love_scooter_thomas_newman_elemental_sample_1.mp3",
      "love_scooter_thomas_newman_elemental_sample_2.mp3",
      "love_theme_from_the_midwife_pessi_levanto_sample_1.mp3",
      "love_theme_from_the_midwife_pessi_levanto_sample_2.mp3",
      "ludovico_einaudi_cold_wind_var2_day_4_the_father_sample_1.mp3",
      "ludovico_einaudi_cold_wind_var2_day_4_the_father_sample_2.mp3",
      "ludovico_einaudi_low_mist_var2_day_1__the_father_sample_1.mp3",
      "ludovico_einaudi_low_mist_var2_day_1__the_father_sample_2.mp3",
      "ludwig_goransson__yucatan__black_panther_wakanda_forever_sample_1.mp3",
      "ludwig_goransson__yucatan__black_panther_wakanda_forever_sample_2.mp3",
      "ludwig_goransson_tchalla_black_panther_wakanda_forever_sample_1.mp3",
      "ludwig_goransson_tchalla_black_panther_wakanda_forever_sample_2.mp3",
      "lultima_diligenza_di_red_rock_ennio_morricone_the_hateful_eight_sample_1.mp3",
      "lultima_diligenza_di_red_rock_ennio_morricone_the_hateful_eight_sample_2.mp3",
      "main_theme_terence_blanchard_blackkklansman_sample_1.mp3",
      "main_theme_terence_blanchard_blackkklansman_sample_2.mp3",
      "marco_beltrami_bucksanders__le_mans_66_ford_v_ferrari_sample_1.mp3",
      "marco_beltrami_bucksanders__le_mans_66_ford_v_ferrari_sample_2.mp3",
      "married_life_michael_giacchino_up_sample_1.mp3",
      "married_life_michael_giacchino_up_sample_2.mp3",
      "max__richter_on_the_nature_of_daylight_shutter_island_sample_1.mp3",
      "max__richter_on_the_nature_of_daylight_shutter_island_sample_2.mp3",
      "mexican_institute_of_sound__jalale_fromcoco_sample_1.mp3",
      "mexican_institute_of_sound__jalale_fromcoco_sample_2.mp3"];

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

/* "Kyle_Eastwood_-_Gran_Torino_feat_Hugh_Coltman_crdownload_sample_1.mp3",
      "Kyle_Eastwood_-_Gran_Torino_feat_Hugh_Coltman_crdownload_sample_2.mp3",
      "L_Ultima_Diligenza_di_Red_Rock_Ennio_Morricone_The_Hateful_Eight_sample_1.mp3",
      "L_Ultima_Diligenza_di_Red_Rock_Ennio_Morricone_The_Hateful_Eight_sample_2.mp3",
      "L_amitie_Jean-Michel_Blais_Matthias_and_Maxime_sample_1.mp3",
      "L_amitie_Jean-Michel_Blais_Matthias_and_Maxime_sample_2.mp3",
      "La_Jeune_Fille_en_Feu_Portrait_of_a_Lady_on_Fire_Para_One_Arthur_Simonini_sample_1.mp3",
      "La_Jeune_Fille_en_Feu_Portrait_of_a_Lady_on_Fire_Para_One_Arthur_Simonini_sample_2.mp3",
      "La_Musique_du_Futur_-_Mon_Coeur_Petite_Maman_Jean-Baptiste_de_Laubier_Para_One_Celine_Sciamma_sample_1.mp3",
      "La_Musique_du_Futur_-_Mon_Coeur_Petite_Maman_Jean-Baptiste_de_Laubier_Para_One_Celine_Sciamma_sample_2.mp3",
      "La_Puntura_Della_Morte_Ennio_Morricone__The_Hateful_Eight_sample_1.mp3",
      "La_Puntura_Della_Morte_Ennio_Morricone__The_Hateful_Eight_sample_2.mp3",
      "Lady_Bird__Jon_Brion_Lady_Bird_sample_1.mp3",
      "Lady_Bird__Jon_Brion_Lady_Bird_sample_2.mp3",
      "Las-visitas_Alberto__Iglesias_Parallel_Mothers_sample_1.mp3",
      "Las-visitas_Alberto__Iglesias_Parallel_Mothers_sample_2.mp3",
      "Le_feu_Jean-Benoit_Dunckel_Summer_Of_85_sample_1.mp3",
      "Le_feu_Jean-Benoit_Dunckel_Summer_Of_85_sample_2.mp3",
      "Leo_Birenberg_Bottoms_End_Credits_sample_1.mp3",
      "Leo_Birenberg_Bottoms_End_Credits_sample_2.mp3",
      "Leonard_Bernstein_-_The_Dance_at_the_Gym_Mambo_West_Side_Story_Leonard_Berstein_David_Newman_Matt_Sullivan_Jeanine_Tesori_sample_1.mp3",
      "Leonard_Bernstein_-_The_Dance_at_the_Gym_Mambo_West_Side_Story_Leonard_Berstein_David_Newman_Matt_Sullivan_Jeanine_Tesori_sample_2.mp3",
      "Les_feuilles_mortes_Jean-Michel_Blais_Matthias_and_Maxime_sample_1.mp3",
      "Les_feuilles_mortes_Jean-Michel_Blais_Matthias_and_Maxime_sample_2.mp3",
      "Licorice_Pizza__Jonny_Greenwood_Licorice_Pizza_sample_1.mp3",
      "Licorice_Pizza__Jonny_Greenwood_Licorice_Pizza_sample_2.mp3",
      "Limpeza_Pesada_Mateus_Alves_Tomaz_Alves_Souza_Bacurau_sample_1.mp3",
      "Limpeza_Pesada_Mateus_Alves_Tomaz_Alves_Souza_Bacurau_sample_2.mp3",
      "Little_Women_-_Alexandre_desplat_-_Laurie_and_Jo_on_the_Hill_sample_1.mp3",
      "Little_Women_-_Alexandre_desplat_-_Laurie_and_Jo_on_the_Hill_sample_2.mp3",
      "Little_Women_-_Robert_Schumann_-_Kinderszenen_op_15_I_Von_Fremden_Landern_und_Menschen_sample_1.mp3",
      "Little_Women_-_Robert_Schumann_-_Kinderszenen_op_15_I_Von_Fremden_Landern_und_Menschen_sample_2.mp3",
      "Loneliness_3_Night_Talking_Arcade_Fire_Owen_Pallett_Her_sample_1.mp3",
      "Loneliness_3_Night_Talking_Arcade_Fire_Owen_Pallett_Her_sample_2.mp3",
      "Lost_but_Won_Hans_Zimmer_Rush_sample_1.mp3",
      "Lost_but_Won_Hans_Zimmer_Rush_sample_2.mp3",
      "Love_Letters_Dario_Marianelli_Atonement_sample_1.mp3",
      "Love_Letters_Dario_Marianelli_Atonement_sample_2.mp3",
      "Love_Scooter_Thomas_Newman_Elemental_sample_1.mp3",
      "Love_Scooter_Thomas_Newman_Elemental_sample_2.mp3",
      "Love_Theme_from_The_Midwife_Pessi_Levanto_sample_1.mp3",
      "Love_Theme_from_The_Midwife_Pessi_Levanto_sample_2.mp3",
      "Ludovico_Einaudi_Low_Mist_Var_2_Day_1__The_Father_sample_1.mp3",
      "Ludovico_Einaudi_Low_Mist_Var_2_Day_1__The_Father_sample_2.mp3",
      "Ludovico_Einaudi_Cold_Wind_Var_2_Day_4_The_Father_sample_1.mp3",
      "Ludovico_Einaudi_Cold_Wind_Var_2_Day_4_The_Father_sample_2.mp3",
      "Ludwig_Goransson_-_Yucatan__Black_Panther_Wakanda_Forever_sample_1.mp3",
      "Ludwig_Goransson_-_Yucatan__Black_Panther_Wakanda_Forever_sample_2.mp3",
      "Ludwig_Goransson_T_Challa_Black_Panther_Wakanda_Forever_sample_1.mp3",
      "Ludwig_Goransson_T_Challa_Black_Panther_Wakanda_Forever_sample_2.mp3",
      "Main_Theme_Terence_Blanchard_BlacKkKlansman_sample_1.mp3",
      "Main_Theme_Terence_Blanchard_BlacKkKlansman_sample_2.mp3",
      "Marco_Beltrami_Buck_Sanders_-_Le_Mans_66_Ford_v_Ferrari_sample_1.mp3",
      "Marco_Beltrami_Buck_Sanders_-_Le_Mans_66_Ford_v_Ferrari_sample_2.mp3",
      "Married_Life_Michael_Giacchino_Up_sample_1.mp3",
      "Married_Life_Michael_Giacchino_Up_sample_2.mp3",
      "Max_-_Richter_On_the_Nature_of_Daylight_Shutter_Island_sample_2.mp3",
      "Max_-_Richter_On_the_Nature_of_Daylight_Shutter_Island_sample_1.mp3",
      "Mexican_Institute_of_Sound_-_Jalale_From_Coco_sample_1.mp3",
      "Mexican_Institute_of_Sound_-_Jalale_From_Coco_sample_2.mp3" */

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