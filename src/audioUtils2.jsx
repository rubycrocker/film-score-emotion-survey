
import { useEffect } from 'react';

      const AudioSelectorPage9 = ({ audioPathPage9, setAudioPathPage9 }) => {
        useEffect(() => {
          if (!audioPathPage9) {
            // Define your audio files for Page 9 here
            const audioFolderFilesPage9 = ["bounty_hunter_puss_in_boots_heitor_pereira_sample_1.mp3",
            "bounty_hunter_puss_in_boots_heitor_pereira_sample_2.mp3",
            "boys_in_the_mirror__fatima_al_qadiri_atlantics_sample_1.mp3",
            "boys_in_the_mirror__fatima_al_qadiri_atlantics_sample_2.mp3",
            "brothers_in_arms_mad_max_fury_road_junkie_xl_sample_1.mp3",
            "brothers_in_arms_mad_max_fury_road_junkie_xl_sample_2.mp3",
            "buckskin_stallion_blues__townes_van_zandt__three_billboards_outside_ebbing_missouri_sample_1.mp3",
            "buckskin_stallion_blues__townes_van_zandt__three_billboards_outside_ebbing_missouri_sample_2.mp3",
            "bundle_of_joy__michael_giancchio_inside_out_sample_1.mp3",
            "bundle_of_joy__michael_giancchio_inside_out_sample_2.mp3",
            "bunsen_burner__ex_machinaanthony_william_tombling_cuts_sample_1.mp3",
            "bunsen_burner__ex_machinaanthony_william_tombling_cuts_sample_2.mp3",
            "c90__soundtree__under_the_skin_sample_1.mp3",
            "c90__soundtree__under_the_skin_sample_2.mp3",
            "calling_the_whipper_in_jonny_greenwood_spencer_sample_1.mp3",
            "calling_the_whipper_in_jonny_greenwood_spencer_sample_2.mp3",
            "camille__she_was_corsage_sample_1.mp3",
            "camille__she_was_corsage_sample_2.mp3",
            "canto_at_gabelmeisters_peak_the_grand_budapest_hotel_alexandre_desplat_sample_1.mp3",
            "canto_at_gabelmeisters_peak_the_grand_budapest_hotel_alexandre_desplat_sample_2.mp3",
            "caravan_duke_ellingtonjuan_tizoljohn_wasson_whiplash_sample_1.mp3",
            "caravan_duke_ellingtonjuan_tizoljohn_wasson_whiplash_sample_2.mp3",
            "childish_gambino__redbone_get_out_sample_1.mp3",
            "childish_gambino__redbone_get_out_sample_2.mp3",
            "christ_in_the_mountains_mychael_danna_life_of_pi_sample_1.mp3",
            "christ_in_the_mountains_mychael_danna_life_of_pi_sample_2.mp3",
            "ciao_papa_gregory_mann_alexandre_desplat_guillermo_del_toros_pinnochio_sample_1.mp3",
            "ciao_papa_gregory_mann_alexandre_desplat_guillermo_del_toros_pinnochio_sample_2.mp3",
            "closer_valentin_hadjadj_close_sample_1.mp3",
            "closer_valentin_hadjadj_close_sample_2.mp3",
            "conciliation_ii_parasite_jung_jaeil_sample_1.mp3",
            "conciliation_ii_parasite_jung_jaeil_sample_2.mp3",
            "creation_mica_levi_under_the_skin_sample_1.mp3",
            "creation_mica_levi_under_the_skin_sample_2.mp3",
            "david_alvarez_sharks__la_borinquena_felix_astol_artes_lola_rodriguez_de_tio_david_newman_matt_sullivan_jeanine_tesori_west_side_story_sample_1.mp3",
            "david_alvarez_sharks__la_borinquena_felix_astol_artes_lola_rodriguez_de_tio_david_newman_matt_sullivan_jeanine_tesori_west_side_story_sample_2.mp3",
            "david_talks_about_his_mother_da_5_bloods_terence_blanchard_sample_1.mp3",
            "david_talks_about_his_mother_da_5_bloods_terence_blanchard_sample_2.mp3",
            "daydream_believer_the_monkees_women_talking_sample_1.mp3",
            "daydream_believer_the_monkees_women_talking_sample_2.mp3",
            "death_shall_have_no_dominion_cliffmartinez_solaris_sample_1.mp3",
            "death_shall_have_no_dominion_cliffmartinez_solaris_sample_2.mp3",
            "debris_steven_price_gravity_sample_1.mp3",
            "debris_steven_price_gravity_sample_2.mp3",
            "decision_to_leave_evidence__cho_youngwuk_sample_1.mp3",
            "decision_to_leave_evidence__cho_youngwuk_sample_2.mp3",
            "decision_to_leave_mist__jung_hoon_hee_sample_1.mp3",
            "decision_to_leave_mist__jung_hoon_hee_sample_2.mp3",
            "deportation_iguazu_gustavo_santaolalla_babel_sample_1.mp3",
            "deportation_iguazu_gustavo_santaolalla_babel_sample_2.mp3",
            "detach_hans_zimmer_interstellar_sample_1.mp3",
            "detach_hans_zimmer_interstellar_sample_2.mp3",
            "dickon_hinchliffe__leda_the_lost_daughter_sample_1.mp3",
            "dickon_hinchliffe__leda_the_lost_daughter_sample_2.mp3",
            "dickon_hinchliffe__octopus_the_lost_daughter_sample_1.mp3",
            "dickon_hinchliffe__octopus_the_lost_daughter_sample_2.mp3",
            "django_unchained_luis_bacalov_django_sample_1.mp3",
            "django_unchained_luis_bacalov_django_sample_2.mp3",
            "dune_the_one_hans_zimmer_sample_1.mp3",
            "dune_the_one_hans_zimmer_sample_2.mp3"];
      
            // Shuffle the array
            const shuffledFiles = [...audioFolderFilesPage9];
            for (let i = shuffledFiles.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledFiles[i], shuffledFiles[j]] = [shuffledFiles[j], shuffledFiles[i]];
            }
      
            // Select the first file from the shuffled array
            const selectedFile = shuffledFiles[0];
      
            // Generate the full path
            const basePath = "/film-score-emotion-survey/audioFolder2/";
            const fullPath = basePath + selectedFile;
      
            // Set the full path in the state
            setAudioPathPage9(fullPath);
          }
        }, [audioPathPage9, setAudioPathPage9]);
      
        return null; // or return a placeholder element if needed
      };
      
      export default AudioSelectorPage9;

/* "Bounty_Hunter_Puss_In_Boots_Heitor_Pereira_sample_1.mp3",
            "Bounty_Hunter_Puss_In_Boots_Heitor_Pereira_sample_2.mp3",
            "Boys_in_the_Mirror__Fatima_Al_Qadiri_Atlantics_sample_1.mp3",
            "Boys_in_the_Mirror__Fatima_Al_Qadiri_Atlantics_sample_2.mp3",
            "Brothers_In_Arms_Mad_Max_Fury_Road_Junkie_XL_sample_1.mp3",
            "Brothers_In_Arms_Mad_Max_Fury_Road_Junkie_XL_sample_2.mp3",
            "Buckskin_Stallion_Blues_-_Townes_Van_Zandt_-_Three_Billboards_Outside_Ebbing_Missouri_sample_1.mp3",
            "Buckskin_Stallion_Blues_-_Townes_Van_Zandt_-_Three_Billboards_Outside_Ebbing_Missouri_sample_2.mp3",
            "Bundle_of_Joy_-_Michael_Giancchio_Inside_Out_sample_1.mp3",
            "Bundle_of_Joy_-_Michael_Giancchio_Inside_Out_sample_2.mp3",
            "Bunsen_Burner_-_Ex_Machina-Anthony_William_Tombling_CUTS_sample_1.mp3",
            "Bunsen_Burner_-_Ex_Machina-Anthony_William_Tombling_CUTS_sample_2.mp3",
            "C90_-_Soundtree__Under_The_Skin_sample_1.mp3",
            "C90_-_Soundtree__Under_The_Skin_sample_2.mp3",
            "Calling_The_Whipper_In_Jonny_Greenwood_Spencer_sample_1.mp3",
            "Calling_The_Whipper_In_Jonny_Greenwood_Spencer_sample_2.mp3",
            "Camille_-_She_Was_Corsage_sample_1.mp3",
            "Camille_-_She_Was_Corsage_sample_2.mp3",
            "Canto_At_Gabelmeisters_Peak_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_1.mp3",
            "Canto_At_Gabelmeisters_Peak_The_Grand_Budapest_Hotel_Alexandre_Desplat_sample_2.mp3",
            "Caravan_Duke_Ellington_Juan_Tizol_John_Wasson_Whiplash_sample_1.mp3",
            "Caravan_Duke_Ellington_Juan_Tizol_John_Wasson_Whiplash_sample_2.mp3",
            "Childish_Gambino_-_Redbone_Get_Out_sample_1.mp3",
            "Childish_Gambino_-_Redbone_Get_Out_sample_2.mp3",
            "Christ_in_the_Mountains_Mychael_Danna_Life_of_Pi_sample_1.mp3",
            "Christ_in_the_Mountains_Mychael_Danna_Life_of_Pi_sample_2.mp3",
            "Ciao_Papa_Gregory_Mann_Alexandre_Desplat_Guillermo_Del_Toros_Pinnochio_sample_1.mp3",
            "Ciao_Papa_Gregory_Mann_Alexandre_Desplat_Guillermo_Del_Toros_Pinnochio_sample_2.mp3",
            "Closer_Valentin_Hadjadj_Close_sample_1.mp3",
            "Closer_Valentin_Hadjadj_Close_sample_2.mp3",
            "Conciliation_II_Parasite_Jung_Jaeil_sample_1.mp3",
            "Conciliation_II_Parasite_Jung_Jaeil_sample_2.mp3",
            "Creation_Mica_Levi_Under_the_Skin_sample_1.mp3",
            "Creation_Mica_Levi_Under_the_Skin_sample_2.mp3",
            "DUNE_The_One_Hans_Zimmer_sample_1.mp3",
            "DUNE_The_One_Hans_Zimmer_sample_2.mp3",
            "David_Alvarez_Sharks_-_La_Borinquena_Felix_Astol_Artes_Lola_Rodriguez_de_Tio_David_Newman_Matt_Sullivan_Jeanine_Tesori_West_Side_Story_sample_1.mp3",
            "David_Alvarez_Sharks_-_La_Borinquena_Felix_Astol_Artes_Lola_Rodriguez_de_Tio_David_Newman_Matt_Sullivan_Jeanine_Tesori_West_Side_Story_sample_2.mp3",
            "David_Talks_About_His_Mother_Da_5_Bloods_Terence_Blanchard_sample_1.mp3",
            "David_Talks_About_His_Mother_Da_5_Bloods_Terence_Blanchard_sample_2.mp3",
            "Daydream_Believer_The_Monkees_Women_Talking_sample_1.mp3",
            "Daydream_Believer_The_Monkees_Women_Talking_sample_2.mp3",
            "Death_Shall_Have_No_Dominion_Cliff_Martinez_Solaris_sample_1.mp3",
            "Death_Shall_Have_No_Dominion_Cliff_Martinez_Solaris_sample_2.mp3",
            "Debris_Steven_Price_Gravity_sample_1.mp3",
            "Debris_Steven_Price_Gravity_sample_2.mp3",
            "Decision_To_Leave_Evidence_-_Cho_Young-wuk_sample_1.mp3",
            "Decision_To_Leave_Evidence_-_Cho_Young-wuk_sample_2.mp3",
            "Decision_To_Leave_Mist_-_Jung_Hoon_Hee_sample_1.mp3",
            "Decision_To_Leave_Mist_-_Jung_Hoon_Hee_sample_2.mp3",
            "Deportation_Iguazu_Gustavo_Santaolalla_Babel_sample_1.mp3",
            "Deportation_Iguazu_Gustavo_Santaolalla_Babel_sample_2.mp3",
            "Detach_Hans_Zimmer_interstellar_sample_1.mp3",
            "Detach_Hans_Zimmer_interstellar_sample_2.mp3",
            "Dickon_Hinchliffe_-_Leda_The_Lost_Daughter_sample_1.mp3",
            "Dickon_Hinchliffe_-_Leda_The_Lost_Daughter_sample_2.mp3",
            "Dickon_Hinchliffe_-_Octopus_The_Lost_Daughter_sample_1.mp3",
            "Dickon_Hinchliffe_-_Octopus_The_Lost_Daughter_sample_2.mp3",
            "Django_Unchained_Luis_Bacalov_Django_sample_1.mp3",
            "Django_Unchained_Luis_Bacalov_Django_sample_2.mp3" */