var currentClass = "hunter";

taldata = "122#P#\"Improved Aspect of the Monkey\"#\"ability_hunter_aspectofthemonkey.png\"#\"\"##5|||||#\n112#P#\"Improved Aspect of the Hawk\"#\"spell_nature_ravenform.png\"#\"\"##5|||||#\n131#P#\"Pathfinding\"#\"ability_mount_jungletiger.png\"#\"\"##2||#\n142#P#\"Improved Mend Pet\"#\"ability_hunter_mendpet.png\"#\"\"##2||#\n172#A#\"Bestial Wrath\"#\"ability_druid_ferociousbite.png\"#\"\"#152#12|procmana|casttime|0|120|0|100|||#\n152#A#\"Intimidation\"#\"ability_devour.png\"#\"\"##8|procmana|casttime|0|60|0|100|||#\n151#P#\"Spirit Bond\"#\"ability_druid_demoralizingroar.png\"#\"\"##2||#\n113#P#\"Endurance Training\"#\"spell_nature_reincarnation.png\"#\"\"##5|||||#\n154#P#\"Bestial Discipline\"#\"spell_nature_abolishmagic.png\"#\"\"##2||#\n132#P#\"Bestial Swiftness\"#\"ability_druid_dash.png\"#\"\"##1|#\n143#P#\"Ferocity\"#\"inv_misc_monsterclaw_04.png\"#\"\"##5|||||#\n123#P#\"Thick Hide\"#\"inv_misc_pelt_bear_03.png\"#\"\"##3|||#\n133#P#\"Unleashed Fury\"#\"ability_bullrush.png\"#\"\"##5|||||#\n163#P#\"Frenzy\"#\"inv_misc_monsterclaw_03.png\"#\"\"#143#5|||||#\n121#P#\"Improved Eyes of the Beast\"#\"ability_eyeoftheowl.png\"#\"\"##2||#\n124#P#\"Improved Revive Pet\"#\"ability_hunter_beastsoothe.png\"#\"\"##2||#\n212#P#\"Improved Concussive Shot\"#\"spell_frost_stun.png\"#\"\"##5|||||#\n213#P#\"Efficiency\"#\"spell_frost_wizardmark.png\"#\"\"##5|||||#\n222#P#\"Improved Hunter\'s Mark\"#\"ability_hunter_snipershot.png\"#\"\"##5|||||#\n223#P#\"Lethal Shots\"#\"ability_searingarrow.png\"#\"\"##5|||||#\n231#A#\"Aimed Shot\"#\"inv_spear_07.png\"#\"\"##310|mana|casttime|3|6|8|35||Ranged Weapon|Rank 6#\n232#P#\"Improved Arcane Shot\"#\"ability_impalingbolt.png\"#\"\"##5|||||#\n252#P#\"Barrage\"#\"ability_upgrademoonglaive.png\"#\"\"##3|||#\n242#P#\"Improved Serpent Sting\"#\"ability_hunter_quickshot.png\"#\"\"##5|||||#\n243#P#\"Mortal Shots\"#\"ability_piercedamage.png\"#\"\"#223#5|||||#\n253#P#\"Improved Scorpid Sting\"#\"ability_hunter_criticalshot.png\"#\"\"##3|||#\n234#P#\"Hawk Eye\"#\"ability_townwatch.png\"#\"\"##3|||#\n251#A#\"Scatter Shot\"#\"ability_golemstormbolt.png\"#\"\"##8|procmana|instant|-1000|30|0|15||Ranged Weapon|#\n272#A#\"Trueshot Aura\"#\"ability_trueshot.png\"#\"\"#252#525|mana|casttime|0|0|0|0|||Rank 3#\n263#P#\"Ranged Weapon Specialization\"#\"inv_weapon_rifle_06.png\"#\"\"##5|||||#\n312#P#\"Humanoid Slaying\"#\"spell_holy_prayerofhealing.png\"#\"\"##3|||#\n363#P#\"Lightning Reflexes\"#\"spell_nature_invisibilty.png\"#\"\"##5|||||#\n321#P#\"Entrapment\"#\"spell_nature_stranglevines.png\"#\"\"##5|||||#\n323#P#\"Improved Wing Clip\"#\"ability_rogue_trip.png\"#\"\"##5|||||#\n331#P#\"Clever Traps\"#\"spell_nature_timestop.png\"#\"\"##2||#\n333#A#\"Deterrence\"#\"ability_whirlwind.png\"#\"\"##0|mana|casttime|0|300|0|0|||#\n344#P#\"Improved Feign Death\"#\"ability_rogue_feigndeath.png\"#\"\"##2||#\n342#P#\"Surefooted\"#\"ability_kick.png\"#\"\"##3|||#\n313#P#\"Deflection\"#\"ability_parry.png\"#\"\"##5|||||#\n353#A#\"Counterattack\"#\"ability_warrior_challange.png\"#\"\"#333#85|mana|casttime|0|5|0|5|||Rank 3#\n352#P#\"Killer Instinct\"#\"spell_holy_blessingofstamina.png\"#\"\"##3|||#\n341#P#\"Trap Mastery\"#\"ability_ensnare.png\"#\"\"##2||#\n372#A#\"Wyvern Sting\"#\"inv_spear_02.png\"#\"\"#352#205|mana|casttime|0|120|8|35||Ranged Weapon|Rank 3#\n322#P#\"Savage Strikes\"#\"ability_racial_bloodrage.png\"#\"\"##2||#\n332#P#\"Survivalist\"#\"spell_shadow_twilight.png\"#\"\"##5|||||#\n311#P#\"Monster Slaying\"#\"inv_misc_head_dragon_black.png\"#\"\"##3|||#\n";
var descriptionTable = new Array();
descriptionTable["1221"] = "Increases the Dodge bonus of your Aspect of the Monkey by 1%."
descriptionTable["1222"] = "Increases the Dodge bonus of your Aspect of the Monkey by 2%."
descriptionTable["1223"] = "Increases the Dodge bonus of your Aspect of the Monkey by 3%."
descriptionTable["1224"] = "Increases the Dodge bonus of your Aspect of the Monkey by 4%."
descriptionTable["1225"] = "Increases the Dodge bonus of your Aspect of the Monkey by 5%."
descriptionTable["1121"] = "While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec."
descriptionTable["1122"] = "While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec."
descriptionTable["1123"] = "While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 sec."
descriptionTable["1124"] = "While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 sec."
descriptionTable["1125"] = "While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 sec."
descriptionTable["1311"] = "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%."
descriptionTable["1312"] = "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%."
descriptionTable["1421"] = "Gives the Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
descriptionTable["1422"] = "Gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick."
descriptionTable["1721"] = "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed."
descriptionTable["1521"] = "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec."
descriptionTable["1511"] = "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec."
descriptionTable["1512"] = "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec."
descriptionTable["1131"] = "Increases the Health of your pets by 3%."
descriptionTable["1132"] = "Increases the Health of your pets by 6%."
descriptionTable["1133"] = "Increases the Health of your pets by 9%."
descriptionTable["1134"] = "Increases the Health of your pets by 12%."
descriptionTable["1135"] = "Increases the Health of your pets by 15%."
descriptionTable["1541"] = "Increases the Focus regeneration of your pets by 10%."
descriptionTable["1542"] = "Increases the Focus regeneration of your pets by 20%."
descriptionTable["1321"] = "Increases the outdoor movement speed of your pets by 30%."
descriptionTable["1431"] = "Increases the critical strike chance of your pets by 3%."
descriptionTable["1432"] = "Increases the critical strike chance of your pets by 6%."
descriptionTable["1433"] = "Increases the critical strike chance of your pets by 9%."
descriptionTable["1434"] = "Increases the critical strike chance of your pets by 12%."
descriptionTable["1435"] = "Increases the critical strike chance of your pets by 15%."
descriptionTable["1231"] = "Increases the Armor rating of your pets by 10%."
descriptionTable["1232"] = "Increases the Armor rating of your pets by 20%."
descriptionTable["1233"] = "Increases the Armor rating of your pets by 30%."
descriptionTable["1331"] = "Increases the damage done by your pets by 4%."
descriptionTable["1332"] = "Increases the damage done by your pets by 8%."
descriptionTable["1333"] = "Increases the damage done by your pets by 12%."
descriptionTable["1334"] = "Increases the damage done by your pets by 16%."
descriptionTable["1335"] = "Increases the damage done by your pets by 20%."
descriptionTable["1631"] = "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
descriptionTable["1632"] = "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
descriptionTable["1633"] = "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
descriptionTable["1634"] = "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
descriptionTable["1635"] = "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
descriptionTable["1211"] = "Increases the duration of your Eyes of the Beast by 30 sec."
descriptionTable["1212"] = "Increases the duration of your Eyes of the Beast by 60 sec."
descriptionTable["1241"] = "Revive Pet\'s casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%."
descriptionTable["1242"] = "Revive Pet\'s casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
descriptionTable["2121"] = "Gives your Concussive Shot a 4% chance to stun the target for 3 sec."
descriptionTable["2122"] = "Gives your Concussive Shot a 8% chance to stun the target for 3 sec."
descriptionTable["2123"] = "Gives your Concussive Shot a 12% chance to stun the target for 3 sec."
descriptionTable["2124"] = "Gives your Concussive Shot a 16% chance to stun the target for 3 sec."
descriptionTable["2125"] = "Gives your Concussive Shot a 20% chance to stun the target for 3 sec."
descriptionTable["2131"] = "Reduces the Mana cost of your Shots and Stings by 2%."
descriptionTable["2132"] = "Reduces the Mana cost of your Shots and Stings by 4%."
descriptionTable["2133"] = "Reduces the Mana cost of your Shots and Stings by 6%."
descriptionTable["2134"] = "Reduces the Mana cost of your Shots and Stings by 8%."
descriptionTable["2135"] = "Reduces the Mana cost of your Shots and Stings by 10%."
descriptionTable["2221"] = "Increases the Ranged Attack Power bonus of your Hunter\'s Mark spell by 3%."
descriptionTable["2222"] = "Increases the Ranged Attack Power bonus of your Hunter\'s Mark spell by 6%."
descriptionTable["2223"] = "Increases the Ranged Attack Power bonus of your Hunter\'s Mark spell by 9%."
descriptionTable["2224"] = "Increases the Ranged Attack Power bonus of your Hunter\'s Mark spell by 12%."
descriptionTable["2225"] = "Increases the Ranged Attack Power bonus of your Hunter\'s Mark spell by 15%."
descriptionTable["2231"] = "Increases your critical strike chance with ranged weapons by 1%."
descriptionTable["2232"] = "Increases your critical strike chance with ranged weapons by 2%."
descriptionTable["2233"] = "Increases your critical strike chance with ranged weapons by 3%."
descriptionTable["2234"] = "Increases your critical strike chance with ranged weapons by 4%."
descriptionTable["2235"] = "Increases your critical strike chance with ranged weapons by 5%."
descriptionTable["2311"] = "An aimed shot that increases ranged damage by 600."
descriptionTable["2321"] = "Reduces the cooldown of your Arcane Shot by 0.2 sec."
descriptionTable["2322"] = "Reduces the cooldown of your Arcane Shot by 0.4 sec."
descriptionTable["2323"] = "Reduces the cooldown of your Arcane Shot by 0.6 sec."
descriptionTable["2324"] = "Reduces the cooldown of your Arcane Shot by 0.8 sec."
descriptionTable["2325"] = "Reduces the cooldown of your Arcane Shot by 1 sec."
descriptionTable["2521"] = "Increases the damage done by your Multi-Shot and Volley spells by 5%."
descriptionTable["2522"] = "Increases the damage done by your Multi-Shot and Volley spells by 10%."
descriptionTable["2523"] = "Increases the damage done by your Multi-Shot and Volley spells by 15%."
descriptionTable["2421"] = "Increases the damage done by your Serpent Sting by 2%."
descriptionTable["2422"] = "Increases the damage done by your Serpent Sting by 4%."
descriptionTable["2423"] = "Increases the damage done by your Serpent Sting by 6%."
descriptionTable["2424"] = "Increases the damage done by your Serpent Sting by 8%."
descriptionTable["2425"] = "Increases the damage done by your Serpent Sting by 10%."
descriptionTable["2431"] = "Increases your ranged weapon critical strike damage bonus by 6%."
descriptionTable["2432"] = "Increases your ranged weapon critical strike damage bonus by 12%."
descriptionTable["2433"] = "Increases your ranged weapon critical strike damage bonus by 18%."
descriptionTable["2434"] = "Increases your ranged weapon critical strike damage bonus by 24%."
descriptionTable["2435"] = "Increases your ranged weapon critical strike damage bonus by 30%."
descriptionTable["2531"] = "Reduces the Stamina of targets affected by your Scorpid Sting by 10% of the amount of Strength reduced."
descriptionTable["2532"] = "Reduces the Stamina of targets affected by your Scorpid Sting by 20% of the amount of Strength reduced."
descriptionTable["2533"] = "Reduces the Stamina of targets affected by your Scorpid Sting by 30% of the amount of Strength reduced."
descriptionTable["2341"] = "Increases the range of your ranged weapons by 2 yards."
descriptionTable["2342"] = "Increases the range of your ranged weapons by 4 yards."
descriptionTable["2343"] = "Increases the range of your ranged weapons by 6 yards."
descriptionTable["2511"] = "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used."
descriptionTable["2721"] = "Increases the attack power of party members within 45 yards by 100.  Lasts 30 min."
descriptionTable["2631"] = "Increases the damage you deal with ranged weapons by 1%."
descriptionTable["2632"] = "Increases the damage you deal with ranged weapons by 2%."
descriptionTable["2633"] = "Increases the damage you deal with ranged weapons by 3%."
descriptionTable["2634"] = "Increases the damage you deal with ranged weapons by 4%."
descriptionTable["2635"] = "Increases the damage you deal with ranged weapons by 5%."
descriptionTable["3121"] = "Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%."
descriptionTable["3122"] = "Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%."
descriptionTable["3123"] = "Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%."
descriptionTable["3631"] = "Increases your Agility by 3%."
descriptionTable["3632"] = "Increases your Agility by 6%."
descriptionTable["3633"] = "Increases your Agility by 9%."
descriptionTable["3634"] = "Increases your Agility by 12%."
descriptionTable["3635"] = "Increases your Agility by 15%."
descriptionTable["3211"] = "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 5% chance to entrap the target, preventing them from moving for 5 sec."
descriptionTable["3212"] = "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 10% chance to entrap the target, preventing them from moving for 5 sec."
descriptionTable["3213"] = "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 15% chance to entrap the target, preventing them from moving for 5 sec."
descriptionTable["3214"] = "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 20% chance to entrap the target, preventing them from moving for 5 sec."
descriptionTable["3215"] = "Gives your Immolation Trap, Frost Trap, and Explosive Trap a 25% chance to entrap the target, preventing them from moving for 5 sec."
descriptionTable["3231"] = "Gives your Wing Clip ability a 4% chance to immobilize the target for 5 sec."
descriptionTable["3232"] = "Gives your Wing Clip ability a 8% chance to immobilize the target for 5 sec."
descriptionTable["3233"] = "Gives your Wing Clip ability a 12% chance to immobilize the target for 5 sec."
descriptionTable["3234"] = "Gives your Wing Clip ability a 16% chance to immobilize the target for 5 sec."
descriptionTable["3235"] = "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
descriptionTable["3311"] = "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%."
descriptionTable["3312"] = "Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
descriptionTable["3331"] = "When activated, increases your Dodge and Parry chance by 25% for 10 sec."
descriptionTable["3441"] = "Reduces the chance your Feign Death ability will be resisted by 2%."
descriptionTable["3442"] = "Reduces the chance your Feign Death ability will be resisted by 4%."
descriptionTable["3421"] = "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%."
descriptionTable["3422"] = "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%."
descriptionTable["3423"] = "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%."
descriptionTable["3131"] = "Increases your Parry chance by 1%."
descriptionTable["3132"] = "Increases your Parry chance by 2%."
descriptionTable["3133"] = "Increases your Parry chance by 3%."
descriptionTable["3134"] = "Increases your Parry chance by 4%."
descriptionTable["3135"] = "Increases your Parry chance by 5%."
descriptionTable["3531"] = "A strike that becomes active after parrying an opponent\'s attack.  This attack deals 110 damage and immobilizes the target for 5 sec.  Counterattack cannot be blocked, dodged, or parried."
descriptionTable["3521"] = "Increases your critical strike chance with all attacks by 1%."
descriptionTable["3522"] = "Increases your critical strike chance with all attacks by 2%."
descriptionTable["3523"] = "Increases your critical strike chance with all attacks by 3%."
descriptionTable["3411"] = "Decreases the chance enemies will resist trap effects by 5%."
descriptionTable["3412"] = "Decreases the chance enemies will resist trap effects by 10%."
descriptionTable["3721"] = "A stinging shot that puts the target to sleep for 12 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 600 Nature damage over 12 sec.  Only usable out of combat.  Only one Sting per Hunter can be active on the target at a time."
descriptionTable["3221"] = "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 10%."
descriptionTable["3222"] = "Increases the critical strike chance of Raptor Strike and Mongoose Bite by 20%."
descriptionTable["3321"] = "Increases total health by 2%."
descriptionTable["3322"] = "Increases total health by 4%."
descriptionTable["3323"] = "Increases total health by 6%."
descriptionTable["3324"] = "Increases total health by 8%."
descriptionTable["3325"] = "Increases total health by 10%."
descriptionTable["3111"] = "Increases all damage caused against Beasts, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 1%."
descriptionTable["3112"] = "Increases all damage caused against Beasts, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 2%."
descriptionTable["3113"] = "Increases all damage caused against Beasts, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 3%."
