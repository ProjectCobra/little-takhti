# Term plan: weeks 12 to 16 (16 Nov to 18 Dec 2026, before the winter break)

Weeks follow the school year (Week 1 = 31 Aug 2026). Weeks 1 to 10 are topics 1 to 10, Week 11 is the term revision, and topics 11 onwards run from Week 12. Every new topic has 10 pages (see CLAUDE.md for helpers and style). Tick a line when the topic is built and pushed.

Islamiat is not in this plan: new Islamiat topics need an authenticated course book from Sumbul first.

Content files: put each grade's topics in `source/src/term2_<grade>.js` (nursery, kg, g1, g2, g3) and AI in `source/src/ai.js`. Use `addPlus(kind,{<grade>:[...]})`. Grade 1 English is already full to Week 17. For English, remember the one-level-up rule: Grade 2 English is `addPlus("english",{g3:[...]})`, Grade 3 English is added straight to `G3_ENGLISH` in `english_g3.js` (or `GRADE_DATA.g3.english` after data load); Grade 1 English topics go in `addPlus("english",{g2:[...]})`. Check `data.js` before writing.

## Nursery
- English: 11 Sounds o, g, u, l · 12 Sounds f, b, e, h · 13 Big and small letters · 14 Picture words and labels · 15 Rhymes and songs about winter
- Maths: 11 Numbers to 15 · 12 Big and small, tall and short · 13 Circles, squares and triangles around us · 14 Adding with pictures · 15 Counting to 20 with objects
- General Knowledge: 11 My family · 12 Our helpers at home · 13 Winter in Pakistan · 14 Water and keeping clean · 15 Sounds around us
- Urdu: 11 Letters with dots · 12 Joining two letters · 13 Two letter words with pictures · 14 Winter words · 15 Little poems: rain and sun

## KG
- English: 11 Long vowel sounds with e · 12 Blends bl, cl, fl · 13 Sentences with I can · 14 Opposites · 15 Reading short stories
- Maths: 11 Numbers to 50 · 12 Number bonds to 10 · 13 Adding and taking away stories · 14 Measuring with hands and feet · 15 Halves
- General Knowledge: 11 Our solar system · 12 Food we eat · 13 Clothes for each season · 14 Places in our town · 15 Winter animals and birds
- Urdu: 11 Four-letter words · 12 Simple sentences · 13 Colours and shapes in Urdu · 14 Poem: Winter · 15 Short story with questions

## Grade 1
(English, Maths, Science, Social Studies and Urdu: from Google Classroom each week; the topics below are fallbacks only.)
- Maths: 13 Place value: tens and ones · 14 Ordering numbers to 100 · 15 Shapes: sides and corners
- Maths sequence after Week 16 (common international Grade 1 topics from Oxford, Pearson, Heinemann, New Syllabus Mathematics; skip any that already exist): 17 3D shapes around us · 18 Position and direction · 19 Adding within 20 on a number line · 20 Subtracting within 20 and fact families · 21 Halves and quarters · 22 Equal groups (early multiplication) · 23 Sharing equally (early division) · 24 Length and height in cm · 25 Heavier, lighter and capacity · 26 Time: half past, days and months · 27 Tally charts and pictograms · 28 Patterns with shapes and numbers · 29 Counting in 2s, 5s and 10s · 30 One more, one less, ten more, ten less to 100
- Science: 13 What plants need to grow · 14 Healthy habits and germs · 15 Weather and seasons
- Social Studies: 11 Our neighbourhood · 12 Transport then and now · 13 Festivals and celebrations · 14 Saving water and electricity · 15 Good citizens
- Urdu (follow Motia lesson order, original exercises): 11 Lesson 11 · 12 Lesson 12 · 13 Lesson 13 · 14 Lesson 14 · 15 Lesson 15 (if the Motia contents for these lessons are not in `references/`, use: Winter words, Days of the week, Opposites, Singular and plural, Story with questions)
- ICT: 11 Typing my name · 12 Simple apps on a tablet · 13 Pictures and sounds on a computer · 14 Asking a grown-up online · 15 Coding with arrows

## Grade 2
- English (old Grade 3 level, now Grade 2): 11 Adverbs · 12 Similes · 13 Fact and opinion · 14 Book review · 15 Poems about winter
- Maths: 11 Place value to 1000 · 12 Adding and subtracting with regrouping · 13 Multiplying by 3 and 4 · 14 Fractions of shapes and amounts · 15 Telling time to 5 minutes
- Science: 11 Our senses · 12 Hot and cold · 13 Magnets · 14 Sound around us · 15 Weather and seasons
- History: 11 The Harappan city · 12 Ancient India and Gandhara art · 13 Islamic golden age scholars · 14 Allama Iqbal's dream · 15 How we learn about the past
- Geography: 11 Weather maps · 12 Mountains of Pakistan · 13 Rivers and lakes · 14 Farming in Pakistan · 15 Winter around the world
- Social Studies: 11 Our local government · 12 Money and saving · 13 Markets and shops · 14 Caring for animals · 15 Being a good neighbour
- Urdu: 11 Verbs (fel) · 12 Describing words (sifat) · 13 Writing a short paragraph · 14 Poem about winter · 15 Story with questions
- ICT: 11 Typing practice · 12 Simple slides · 13 Block coding: sequences · 14 Passwords and privacy · 15 Using a tablet camera safely

## Grade 3
- English (Grade 4 level): 11 Adverbs and adverbials · 12 Figurative language · 13 Persuasive writing · 14 Poetry: rhyme and rhythm · 15 Reading comprehension: non-fiction
- Maths: 11 Multiplying 2-digit numbers · 12 Long division basics · 13 Equivalent fractions · 14 Area and perimeter · 15 Roman numerals
- Science: 11 Food chains · 12 Teeth and digestion · 13 Light and reflection · 14 Sound and vibration · 15 Earth and the Moon
- History: 11 The Mughal empire · 12 Sir Syed Ahmad Khan · 13 Fatima Jinnah · 14 Ancient Persia · 15 Explorers and maps
- Geography: 11 Climate zones of the world · 12 Natural resources of Pakistan · 13 Population and cities · 14 Pollution and the environment · 15 Reading atlases
- Social Studies: 11 Provinces and their capitals · 12 Our constitution · 13 Taxes and public services · 14 Volunteering · 15 Global citizens
- Urdu: 11 Tenses (zamana) · 12 Punctuation in Urdu · 13 Story writing · 14 Poem study · 15 Comprehension passage
- ICT: 11 Spreadsheets: totals · 12 Making a poster · 13 Coding with loops and conditions · 14 Online research and checking sources · 15 Cyberbullying and kindness

## AI (all grades): topics 4 to 15
- Grade 1: 4 Smart helpers at home · 5 Robots around us · 6 Sorting like a computer · 7 Good questions · 8 Real or pretend? · 9 Voices and speakers · 10 Kind and fair · 11 Pictures and patterns · 12 Instructions for robots · 13 Learning from mistakes · 14 AI and animals · 15 My AI rules
- Grade 2: 4 Sorting and labelling · 5 Predictions · 6 Robots and sensors · 7 Asking clear questions · 8 Checking answers · 9 Pictures made by AI · 10 Privacy and safety · 11 AI in the doctor's clinic · 12 AI on the farm · 13 Training a model (unplugged) · 14 Fair or unfair? · 15 Designing an AI helper
- Grade 3: 4 How chatbots work · 5 Data and bias · 6 Image recognition · 7 AI and creativity · 8 Deepfakes and fake news · 9 AI and jobs · 10 Machine learning steps · 11 Translation and languages · 12 AI in games · 13 Ethics: who decides? · 14 AI and the environment · 15 Build a prompt plan

## Build order (one batch per scheduled run)
Group A = Nursery, KG, Grade 1 ICT only. Grade 1 English, Maths, Science, Social Studies and Urdu now come from the class's Google Classroom (the Saturday task builds each week's 10-page topics from that week's class work); skip them here unless the Classroom log says a subject had no class work that week, then build the planned topic below as a fallback. Group B = Grade 2. Group C = Grade 3. Skip Islamiat.
"Week N" means: every subject in the group gets the topic that falls in Week N (topic N-1 for subjects that had 10 topics; Grade 1 Maths and Science already reach Week 13, so they start at Week 14 with topic 13).
- [x] 1. Group A, Week 12
- [x] 2. Group B, Week 12
- [x] 3. Group C, Week 12
- [x] 4. AI Grade 1, topics 4 to 11
- [x] 5. AI Grade 2, topics 4 to 11
- [x] 6. AI Grade 3, topics 4 to 11
- [x] 7. Group A, Week 13
- [x] 8. Group B, Week 13
- [x] 9. Group C, Week 13
- [x] 10. Group A, Week 14
- [x] 11. Group B, Week 14
- [x] 12. Group C, Week 14
- [x] 13. AI Grades 1 to 3, topics 12 and 13
- [x] 14. Group A, Week 15
- [x] 15. Group B, Week 15
- [x] 16. Group C, Week 15
- [x] 17. Group A, Week 16
- [x] 18. Group B, Week 16
- [x] 19. Group C, Week 16
- [x] 20. AI Grades 1 to 3, topics 14 and 15

## Term plan: weekly mode from Week 13 (added 21 Nov 2026)
Current school week on 21 Nov 2026: Week 12 just finished (Week 13 starts 23 Nov). Target: every subject has topics up to Week 14.
Nursery, KG, Grades 2 and 3, Grade 1 English and ICT, and AI already reach Week 16. The Saturday Classroom task is paused, so Grade 1 Maths, Science, Social Studies and Urdu got their fallback topics:
- [x] Grade 1 Maths, Week 14: Place value: tens and ones (maths-t13)
- [x] Grade 1 Science, Week 14: What plants need to grow (science-t13)
- [x] Grade 1 Social Studies, Week 13: Transport then and now (social-t12); Week 14: Festivals and celebrations (social-t13)
- [x] Grade 1 Urdu, Week 13: ہفتے کے دن (days of the week, g1-urdu-t12); Week 14: الٹ الفاظ (opposites, g1-urdu-t13)
22 Nov 2026 (weekend before Week 13, counted as Week 13 so the new topics reach Monday's deploy check): target Week 15.
- [x] Grade 1 Maths, Week 15: Ordering numbers to 100 (maths-t14)
- [x] Grade 1 Science, Week 15: Healthy habits and germs (science-t14)
- [x] Grade 1 Social Studies, Week 15: Saving water and electricity (social-t14)
- [x] Grade 1 Urdu, Week 15: واحد اور جمع (singular and plural, g1-urdu-t14)
Still to come for Week 16 if the Classroom task stays paused: Maths Shapes: sides and corners; Science Weather and seasons; Social Studies Good citizens; Urdu کہانی اور سوالات (story with questions). Everything else already reaches Week 16.
Earlier note: Next in sequence if the Classroom task stays paused: Maths Week 15 Ordering numbers to 100, Week 16 Shapes: sides and corners; Science Week 15 Healthy habits and germs, Week 16 Weather and seasons; Social Studies Week 15 Saving water and electricity, Week 16 Good citizens; Urdu Week 15 واحد جمع (singular and plural), Week 16 کہانی اور سوالات (story with questions).

## Progress
(add a line per batch: date, what was built, commit)
- 19 Nov 2026: batch 1 (Group A, Week 12). Nursery: Sounds o, g, u, l; Numbers to 15; My family; نقطے والے حروف. KG: Long vowel sounds with e; Numbers to 50; Our solar system; چار حرفی الفاظ. Grade 1: Our neighbourhood; سردی کے الفاظ (Motia lessons 11+ not in references, used fallback); Typing my name. Grade 1 Maths and Science already reach Week 13. Files: term2_nursery.js, term2_kg.js, term2_g1.js.
- 19 Nov 2026: batch 2 (Group B, Week 12). Grade 2: Adverbs (English); Place value to 1000; Our senses; The Harappan city; Weather maps; Our local government; فعل (Urdu); Typing practice (ICT). File: term2_g2.js. New pictures: eye, nose, tongue, thermometer, weather symbols, ballot box and more.
- 19 Nov 2026: batch 3 (Group C, Week 12). Grade 3: Adverbs and adverbials (English, Grade 4 level); Multiplying 2-digit numbers; Food chains; The Mughal empire; Climate zones of the world; Provinces and their capitals; زمانہ (Urdu tenses); Spreadsheets: totals (ICT). File: term2_g3.js. New pictures: fox, eagle, crown, castle, palm tree, camel, bar chart, mushroom, ship and more.
- 19 Nov 2026: batch 4 (AI Grade 1, topics 4 to 11). Smart helpers at home; Robots around us; Sorting like a computer; Good questions; Real or pretend?; Voices and speakers; Kind and fair; Pictures and patterns. File: ai.js. New pictures: unicorn, dragon, alien, handshake, red heart, balance scale, gear, mechanical arm, headphone and more. New Grade 1 words: robot, helper, speaker, pattern, pretend, sorting.
- 19 Nov 2026: batch 5 (AI Grade 2, topics 4 to 11). Sorting and labelling; Predictions; Robots and sensors; Asking clear questions; Checking answers; Pictures made by AI; Privacy and safety; AI in the doctor's clinic. File: ai.js. New pictures: label, crystal ball, stethoscope, X-ray, bandage, syringe, key, shield, stop sign, artist palette and more. New Grade 2 words: sensor, predict, label, private, password, doctor.
- 19 Nov 2026: batch 6 (AI Grade 3, topics 4 to 11). How chatbots work; Data and bias; Image recognition; AI and creativity; Deepfakes and fake news; AI and jobs; Machine learning steps; Translation and languages. File: ai.js. New pictures: detective, video game, puzzle piece, factory, technologist, scientist, pilot, artist, globe with meridians, memo and more. New Grade 3 words: chatbot, translate, language, creative, training, accuracy.
- 19 Nov 2026: batch 7 (Group A, Week 13). Nursery: Sounds f, b, e, h; Big and small, tall and short; Our helpers at home; دو حروف جوڑنا (joining two letters). KG: Blends bl, cl, fl; Number bonds to 10; Food we eat; آسان جملے (simple sentences). Grade 1: Simple apps on a tablet (ICT). Grade 1 English, Maths, Science, Social Studies and Urdu left to the Saturday Classroom task. Files: term2_nursery.js, term2_kg.js, term2_g1.js. New pictures: fly, blossom, flag, flamingo, clown, top hat, giraffe, broccoli, potato, rice, flatbread, salad, candy, low battery, feather, mango and more. New words: fox, big, hen, hut (Nursery); flag, clap, blue, rice, clock, bread (KG); tablet, camera (Grade 1).
- 20 Nov 2026: batch 8 (Group B, Week 13). Grade 2: Similes (English); Adding and subtracting with regrouping; Hot and cold; Ancient India and Gandhara art; Mountains of Pakistan; Money and saving; صفت کے الفاظ (Urdu describing words); Simple slides (ICT). File: term2_g2.js. New pictures: money bag, credit card, shopping bags, film projector, leopard, snowman, rock, cooking. New Grade 2 words: glacier, valley, museum, saving, melting, simile.
- 20 Nov 2026: batch 9 (Group C, Week 13). Grade 3: Figurative language (English, Grade 4 level); Long division basics; Teeth and digestion; Sir Syed Ahmad Khan; Natural resources of Pakistan; Our constitution; رموزِ اوقاف (Urdu punctuation); Making a poster (ICT). File: term2_g3.js. New pictures: tooth, red exclamation mark, page with curl, oil drum, pick, scissors, pushpin, lungs, bone, fountain pen, newspaper, ledger. New Grade 3 words: metaphor, simile, remainder, digestion, resource, constitution.
- 20 Nov 2026: batch 10 (Group A, Week 14). Nursery: Big and small letters; Circles, squares and triangles around us; Winter in Pakistan; تصویر والے دو حرفی الفاظ (two letter words with pictures). KG: Sentences with I can; Adding and taking away stories; Clothes for each season; رنگ اور شکلیں (colours and shapes). Grade 1: Pictures and sounds on a computer (ICT). Grade 1 English, Maths, Science, Social Studies and Urdu left to the Saturday Classroom task. Files: term2_nursery.js, term2_kg.js, term2_g1.js. New pictures: colour circles and squares, shorts, dress, billed cap, jeans, hiking boot, sunglasses, sandwich, wheel, envelope, printer, video camera, cloud with snow, roasted sweet potato. New words: cap, fog (Nursery); coat, jump, wool (KG); picture, printer, volume (Grade 1).
- 20 Nov 2026: batch 11 (Group B, Week 14). Grade 2: Fact and opinion (English); Multiplying by 3 and 4; Magnets; Islamic golden age scholars; Rivers and lakes; Markets and shops; مختصر پیراگراف لکھنا (Urdu, writing a short paragraph); Block coding: sequences (ICT). File: term2_g2.js. New pictures: paperclip, nut and bolt, canoe, fishing pole, sailboat, arrows, repeat button, receipt, glasses, tomato, onion and more. New Grade 2 words: magnet, opinion, delta, market, sequence, scholar. Also fixed the sheet preview tool (site CSS was hiding the preview overlay).
- 20 Nov 2026: batch 12 (Group C, Week 14). Grade 3: Persuasive writing (English, Grade 4 level); Equivalent fractions; Light and reflection; Fatima Jinnah; Population and cities; Taxes and public services; کہانی نویسی (Urdu story writing); Coding with loops and conditions (ICT). File: term2_g3.js. New pictures: flashlight, mirror, chocolate bar, pie, cityscape, motorway, megaphone, candle, busts in silhouette, money with wings, railway car. New Grade 3 words: persuade, fraction, reflection, mirror, population, loop. Also rebuilt 93 topic PDFs that went missing from site/pdf in the mobile app commit, and gen_seo.py now skips packs without a PDF instead of stopping before the thumbnails.
- 20 Nov 2026: batch 13 (AI Grades 1 to 3, topics 12 and 13). Grade 1: Instructions for robots; Learning from mistakes. Grade 2: AI on the farm; Training a model (unplugged). Grade 3: AI in games; Ethics: who decides?. File: ai.js. New pictures: tractor, ear of corn, sports medal. New words: arrow, forward, mistake, follow (Grade 1); harvest, farmer, tractor, model, drought (Grade 2); ethics, opponent, strategy, privacy, consent, responsible (Grade 3).
- 20 Nov 2026: batch 14 (Group A, Week 15). Nursery: Picture words and labels; Adding with pictures; Water and keeping clean; سردی کے الفاظ (winter words). KG: Opposites; Measuring with hands and feet; Places in our town; نظم: سردی (an original winter poem). Grade 1: Asking a grown-up online (ICT). Grade 1 English, Maths, Science, Social Studies and Urdu left to the Saturday Classroom task. Files: term2_nursery.js, term2_kg.js, term2_g1.js. New pictures: sponge, bubbles, bucket, stadium. New words: bed, mat, tap (Nursery); fast, slow, park, hand, town (KG); private, online, trusted (Grade 1).
- 20 Nov 2026: batch 15 (Group B, Week 15). Grade 2: Book review (English); Fractions of shapes and amounts; Sound around us; Allama Iqbal's dream; Farming in Pakistan; Caring for animals; سردی کی نظم (Urdu, an original poem about a winter morning, different from the KG one); Passwords and privacy (ICT). File: term2_g2.js. New pictures: guitar, trumpet, violin, bat, ewe, parrot, hamster, paw prints, locked with key, unlocked, identification card. New Grade 2 words: review, fraction, echo, vibrate, poet, wheat, shelter.
- 20 Nov 2026: batch 16 (Group C, Week 15). Grade 3: Poetry: rhyme and rhythm (English, Grade 4 level); Area and perimeter; Sound and vibration; Ancient Persia; Pollution and the environment; Volunteering; نظم کا مطالعہ (Urdu poem study, with an original poem صبح کا منظر); Online research and checking sources (ICT). File: term2_g3.js. New pictures: airplane, brain, firecracker, litter in bin sign, face with medical mask, link, nest with eggs, bouquet. New Grade 3 words: rhythm, perimeter, vibration, empire, pollution, volunteer, research.
- 20 Nov 2026: batch 17 (Group A, Week 16). Nursery: Rhymes and songs about winter (original rhymes); Counting to 20 with objects; Sounds around us; ننھی نظمیں: بارش اور دھوپ (two original little poems about rain and sun). KG: Reading short stories; Halves; Winter animals and birds; مختصر کہانی اور سوالات (an original story about Ali and his parrot Mithu). Grade 1: Coding with arrows (ICT). Grade 1 English, Maths, Science, Social Studies and Urdu left to the Saturday Classroom task. Files: term2_nursery.js, term2_kg.js, term2_g1.js. New pictures: bear, polar bear, hedgehog, chipmunk, swan, dove. New words: bell, drum, snow (Nursery); half, bear, nest, story, share (KG); code, debug, repeat (Grade 1).
- 20 Nov 2026: batch 18 (Group B, Week 16). Grade 2: Poems about winter (English, with an original poem Winter Morning and an acrostic); Telling time to 5 minutes; Weather and seasons; How we learn about the past; Winter around the world; Being a good neighbour; کہانی اور سوالات (Urdu, an original story گم شدہ بستہ); Using a tablet camera safely (ICT). File: term2_g2.js. New pictures: kangaroo, sled, ice skate, beach with umbrella, camera with flash, pot of food, teacup without handle. New Grade 2 words: season, poem, camera, neighbour, artefact, minute, equator, gallery.
- 20 Nov 2026: batch 19 (Group C, Week 16). Grade 3: Reading comprehension: non-fiction (English, Grade 4 level, with texts on the Indus river dolphin and the Khewra Salt Mine); Roman numerals; Earth and the Moon; Explorers and maps (Ibn Battuta, Al-Idrisi and others); Reading atlases; Global citizens; فہمِ عبارت (Urdu comprehension, with original passages دادا جان کا باغ and سکول کی لائبریری); Cyberbullying and kindness (ICT). File: term2_g3.js. New pictures: moon phases, globes showing the Americas and Europe-Africa, anchor, hugging face, pensive face, pouting face, prohibited. New Grade 3 words: explorer, atlas, numeral, orbit, crater, gravity, citizen, glossary. Week 16 is now ready for every grade.
- 21 Nov 2026: batch 20 (AI Grades 1 to 3, topics 14 and 15). Grade 1: AI and animals; My AI rules. Grade 2: Fair or unfair?; Designing an AI helper. Grade 3: AI and the environment; Build a prompt plan. File: ai.js. New picture: bullseye. New words: turtle, whale, polite, rules (Grade 1); fair, equal, designer, include (Grade 2); environment, satellite, prompt, energy, recycle (Grade 3). All AI topics 4 to 15 are now built, and the term plan is finished.
- 21 Nov 2026: weekly mode, Grade 1 catch-up to Week 14. Maths: Place value: tens and ones. Science: What plants need to grow. Social Studies: Transport then and now; Festivals and celebrations. Urdu: ہفتے کے دن (days of the week); الٹ الفاظ (opposites). File: term2_g1.js. New pictures: auto rickshaw, locomotive, motorcycle, fireworks, birthday cake, wilted flower, sparkler, calendar. New Grade 1 words: seed, soil, sunlight, festival, balloon, transport, train, bundle.
- 22 Nov 2026: weekly mode, Grade 1 Week 15. Maths: Ordering numbers to 100. Science: Healthy habits and germs. Social Studies: Saving water and electricity. Urdu: واحد اور جمع (singular and plural). File: term2_g1.js. New pictures: microbe, sneezing face, electric plug, roll of paper, toilet. New Grade 1 words: germs, soap, healthy, between, order, save, switch.
- 26 Nov 2026: depth batch P1. Nursery Term 2 Practice Papers for Maths (39 marks), English (52), Urdu (35) and General Knowledge (42): 4 pages each, marks on every question, score and star bands on page 1, a "How did I do?" line, answer keys. They cover the five term 2 topics of each subject and sit with the term 2 revision week. File: depth_nursery.js. PDFs: nursery-maths-paper2, nursery-english-paper2, nursery-urdu-paper2, nursery-gk-paper2. Every paper page is 0.75 full or more.
- 26 Nov 2026: depth batch P2. KG Term 2 Practice Papers for Maths (58 marks), English (48), Urdu (36) and General Knowledge (41): 4 pages each, marks on every question, score and star bands on page 1, answer keys. They cover the five term 2 topics of each subject (Urdu story and English story are new and original). File: depth_kg.js. PDFs: kg-maths-paper2, kg-english-paper2, kg-urdu-paper2, kg-gk-paper2. Every paper page is 0.75 full or more.
- 26 Nov 2026: depth batch P3a (Grade 1 December test prep). Six new 10-page topics for the gaps in the LGS December syllabus, each with a Warm-up ★, Challenge ★★★, 2-page Topic Test and Word Mat (15 pages per topic): Maths Times table of 3 (maths-t15), Number names to 50 (maths-t16), Making 10 and fact families (maths-t17, with counting on and back and picture problems); English Names and initials (g1-english-t17, with statements and questions), Ending sound t (g1-english-t18); Urdu دو چشمی ھ اور بھاری الفاظ (g1-urdu-t15: ھ joined with ا و ی ے, break and join, picture naming with جھاگ، ڈھول، ہاتھی، ہاتھ، بھالو, counting ایک تا پانچ). Left out: the بو/یو and بے/یے fill-ins and the کہانی دوست questions (school book exercises we do not have). 7 quiz questions per topic, new Grade 1 words. Every new page is 0.75 full or more, no overflow. File: depth_g1.js (added after term2_g1.js so earlier topic numbers stay the same). Also built the missing PDFs for maths-t13, maths-t14 and g1-urdu-t11 to t14.
- 26 Nov 2026: depth batch P3. Grade 1 Term 2 Practice Papers matched to the LGS December syllabus (same sections and question types, original questions): Maths (77 marks: counting on and back, comparing and ordering, number names to 50, adding by counting on and making 10, taking away, fact families, tens and ones, patterns, comparing by taking away, times tables of 2 and 3, picture problems), English (54: a new reading story with questions, statements and questions, capitals, names and initials, verbs, ending m d n t, picture prompt writing), Urdu (46: توڑ جوڑ with ھ, ھ with ا و ی ے, heavy words, picture naming, counting ایک تا پانچ), Science (43: groups of living things, parts of a plant, how plants grow, how animals grow), Social Studies (42: neighbourhood, school, maps with directions), ICT (40) and AI (43) on their term 2 topics. 4 pages each, marks on every question, score and star bands on page 1, answer keys, every page 0.75 full or more, no overflow. Left out as before: the بو/یو and بے/یے fill-ins and the کہانی دوست questions. Also fixed two wrong match answer keys in the KG papers (Urdu colours, GK who works here) and rebuilt those PDFs. File: depth_g1.js.
- 26 Nov 2026: depth batch P4. Grade 2 Term 2 Practice Papers for Maths (66 marks: place value to 1000, adding and subtracting with regrouping, the 3 and 4 times tables, fractions of shapes and amounts, time to 5 minutes), English (49: a new reading story, adverbs, similes, fact and opinion, book reviews, rhyme and an acrostic poem), Urdu (35: a new story ننھی چڑیا, فعل, صفت, paragraph sentences, rhyming words), Science (45), History (39), Geography (38), Social Studies (40), ICT (41) and AI (37), each on that subject's five term 2 topics. 4 pages each, marks on every question, score and star bands on page 1, answer keys, every page 0.75 full or more, no overflow. Islamiat not in this batch. File: depth_g2.js. PDFs: g2-<subject>-paper2.
- 26 Nov 2026: Sumbul: every term paper has ten sheets of content. The Grade 2 Term 2 Practice Papers now have 10 pages each: Maths (150 marks), English (109), Urdu (87), Science (113), History (100), Geography (102), Social Studies (109), ICT (106), AI (97). Pages 5 to 10 add more questions on every term 2 topic (a second reading story in English and Urdu, a weather map of Pakistan, a mixed reasoning page per subject). Every page 0.75 full or more, no overflow, answer keys fit. CLAUDE.md and the content builder now say 10 pages; batches P1b, P2b and P3b take the Nursery, KG and Grade 1 papers from 4 to 10 pages. File: depth_g2.js.
- 26 Nov 2026: depth batch P1b. Nursery Term 2 Practice Papers now 10 pages each: Maths (112 marks), English (136), Urdu (91) and General Knowledge (110). Pages 5 to 10 add more questions on every term 2 topic (an original winter rhyme in English, an original sun poem سورج آیا in Urdu) and a mixed reasoning page; the "How did I do?" line is on page 10 and the totals and star bands on page 1 are updated. Every paper page is 0.75 full or more, no overflow, answer keys fit. File: depth_nursery.js. PDFs: nursery-<subject>-paper2.
- 26 Nov 2026: depth batch P2b. KG Term 2 Practice Papers now 10 pages each: Maths (149 marks), English (128), Urdu (86) and General Knowledge (111). Pages 5 to 10 add more questions on every term 2 topic (a new English story The Lost Kitten, a new Urdu story احمد کا پودا, the winter poem سردی in Urdu) and a mixed reasoning page; the "How did I do?" line is on page 10 and the totals and star bands on page 1 are updated. Every paper page is 0.75 full or more, no overflow, answer keys fit. File: depth_kg.js. PDFs: kg-<subject>-paper2.
- 26 Nov 2026: depth batch P3b. Grade 1 Term 2 Practice Papers now 10 pages each, still matched to the LGS December syllabus: Maths (193 marks), English (140), Urdu (123), Science (117), Social Studies (115), ICT (105) and AI (110). Pages 5 to 10 add more questions on every December topic (a new English story The Red Kite, number names to 50, times tables of 2 and 3, more ھ break and join and heavy words, Urdu counting, animal groups and young ones, a new neighbourhood map, input and output, coding with arrows) and a mixed reasoning page; the "How did I do?" line is on page 10 and the totals and star bands on page 1 are updated. Every paper page is 0.75 full or more, no overflow, answer keys fit. Still left out: the بو/یو and بے/یے fill-ins and the کہانی دوست questions. File: depth_g1.js. PDFs: maths-paper2, g1-english-paper2, g1-urdu-paper2, science-paper2, social-paper2, g1-computer-paper2, g1-ai-paper2.
- 26 Nov 2026: depth batch P5. Grade 3 Term 2 Practice Papers, 10 pages each, on each subject's five term 2 topics: Maths (149 marks: multiplying 2-digit numbers, division with remainders, equivalent fractions, area and perimeter, Roman numerals), English (110, Grade 4 level: two new non-fiction texts The Markhor and Busy Honeybees, adverbials, figurative language, persuasive writing with a new letter, a new poem Morning), Urdu (85: زمانہ، رموزِ اوقاف، کہانی نویسی, a new poem ہمارا میدان and a new passage ہمارا قومی پرندہ), Science (108), History (105), Geography (107), Social Studies (98), ICT (109) and AI (93). Marks on every question, total and star bands on page 1 (worked out from the question marks), a mixed reasoning page and the "How did I do?" line on page 10, answer keys. Every page 0.75 full or more, no overflow. Islamiat not in this batch. File: depth_g3.js. PDFs: g3-<subject>-paper2. All P batches are now done.
- 26 Nov 2026: depth batch D1. Nursery Maths topics 1 to 4 (Numbers 1 to 5, Numbers 6 to 10, Shapes, Numbers in order): the 12 old pages topped up to 0.75 full or more (more counting, comparing groups, shapes around us, patterns, before and after), and each topic got a Warm-up ★, a Challenge ★★★, a 2-page Topic Test (20, 21, 20 and 26 marks, star bands, "How did I do?" line) and a Word Mat. 20 new pages (nursery-maths p95 to p114, after the practice paper so no page number moves). Every page of these topics is 0.75 full or more, no overflow, answer keys fit. File: depth_nursery.js. PDFs: nursery-maths-t1 to t4.
- 26 Nov 2026: depth batch D2. Nursery Maths topics 5 to 8 (Sorting and matching; Long, short, heavy, light; One more, one less; Simple patterns): the 12 old pages topped up to 0.75 full or more (counting and comparing groups, odd one out, sorting by kind and colour, picture cards for long, tall and heavy, a short to tallest strip, a balance concept box, one more and one less word problems, colour and sound patterns), and each topic got a Warm-up ★, a Challenge ★★★, a 2-page Topic Test (20, 23, 25 and 20 marks, star bands, "How did I do?" line) and a Word Mat. 20 new pages (nursery-maths p115 to p134, at the end so no page number moves). Every page of these topics is 0.75 full or more, no overflow, answer keys fit. File: depth_nursery.js. PDFs: nursery-maths-t5 to t8 and rev.
- 26 Nov 2026: depth batch D3. Nursery Maths topics 9 to 12 (First, next, last; Counting back and zero; Numbers to 15; Big and small, tall and short): the 26 old pages topped up to 0.75 full or more (race stories with first to last, hatching and growing order strips, countdown and cross-out-one sums, zero stories, counting and comparing 11 to 15, ten and some more, big and tall picture cards and size stories), and each topic got a Warm-up ★, a Challenge ★★★, a 2-page Topic Test (20, 25, 22 and 22 marks, star bands, "How did I do?" line) and a Word Mat
- 26 Nov 2026: depth batch D4. Nursery Maths topics 13 to 15 (Circles, squares and triangles around us; Adding with pictures; Counting to 20 with objects): the 30 old pages topped up to 0.75 full or more (shapes at home, sides and corners, picture sums to 5, ways to make 5, counting 11 to 20, one more and one less, stories), and each topic got a Warm-up ★, a Challenge ★★★, a 2-page Topic Test with marks and star bands, and a Word Mat. Every Nursery Maths page is now 0.75 full or more.

## Status
- 21 Nov 2026: term plan finished (all batches ticked). Sumbul has been told. The content builder could not switch itself to weekly (changing a scheduled task needs Sumbul's approval in a live chat), so it may still fire every 2 hours; weekly-mode runs simply stop when every subject already has topics up to (current week + 2).
- 21 Nov 2026 (later run): the Saturday Classroom task is paused, so weekly mode now also keeps Grade 1 Maths, Science, Social Studies and Urdu two weeks ahead with the fallback topics. Switching this task to weekly still needs Sumbul.
- 23 Nov 2026: Sumbul moved the content builder to weekly, Fridays at 14:49 Pakistan time.


## Content depth programme (Sumbul, 26 Nov 2026)
Sumbul asked for fuller worksheets, benchmarked on Twinkl's numeracy range (breadth only, never copy their content). The content builder works through these batches, one per run, every 2 hours, before going back to weekly mode. Rules are in CLAUDE.md, "Content depth". Pilot done: Grade 1 Maths, Numbers to 20 (`source/src/depth_g1.js`).

Covers every grade and every subject, including the English and Urdu Warm-ups and Islamiat (Sumbul, 26 Nov 2026). Practice papers first (term 2 tests are in December), then depth batches, then daily practice.
- [x] P1. Term 2 practice papers, Nursery: one paper per subject (built with 4 pages; P1b takes them to 10) (Maths, English, Urdu, General Knowledge), marked, with answer key
- [x] P2. Term 2 practice papers, KG: Maths, English, Urdu, General Knowledge
- [x] P3a. Grade 1 December test prep (Sumbul, 26 Nov: the class's December syllabus is in `source/references/lgs-grade1-december-2026.md`): new 10-page topics with depth pages for the gaps listed there, in `source/src/classroom_g1.js` or `depth_g1.js`: Maths "Times Table of 3", Maths "Number Names to 50", Maths "Making 10 and Fact Families", English "Names and Initials", English "Ending Sounds t", Urdu "دو چشمی ھ اور بھاری الفاظ" (ھ joined with ا و ی ے, the listed words, picture naming, counting ایک تا پانچ)
- [x] P3. Term 2 practice papers, Grade 1, matching the December syllabus in `source/references/lgs-grade1-december-2026.md` exactly (same sections and question types, original questions): Maths, English, Urdu, Science, Social Studies; then Computer and AI
- [x] P4. Term 2 practice papers, Grade 2: Maths, English, Urdu, Science, Social Studies, History, Geography, Computer, AI (10 pages each)
- [x] P1b. Expand the Nursery Term 2 practice papers (Maths, English, Urdu, General Knowledge) from 4 to 10 pages: add pages 5 to 10 covering every term 2 topic, move the "How did I do?" line to page 10, update the totals on page 1
- [x] P2b. Expand the KG Term 2 practice papers (Maths, English, Urdu, General Knowledge) from 4 to 10 pages, as P1b
- [x] P3b. Expand the Grade 1 Term 2 practice papers (Maths, English, Urdu, Science, Social Studies, ICT, AI) from 4 to 10 pages, as P1b, still matching the December syllabus in `source/references/lgs-grade1-december-2026.md`
- [x] P5. Term 2 practice papers, Grade 3: Maths, English, Urdu, Science, Social Studies, History, Geography, Computer, AI (10 pages each)

Depth batches. For each topic: fill every existing page to 0.75 or more (fill-report.md), then add a Warm-up ★ page, a Challenge ★★★ page, a 2-page Topic Test and a Word Mat (see CLAUDE.md). Grade 1 Maths topic 1 is done (pilot): start that subject at its topic 2.
- [x] D1. Nursery Maths (`nursery-maths`), topics 1 to 4
- [x] D2. Nursery Maths (`nursery-maths`), topics 5 to 8
- [x] D3. Nursery Maths (`nursery-maths`), topics 9 to 12
- [x] D4. Nursery Maths (`nursery-maths`), topics 13 to 15
- [ ] D5. KG Maths (`kg-maths`), topics 1 to 4
- [ ] D6. KG Maths (`kg-maths`), topics 5 to 8
- [ ] D7. KG Maths (`kg-maths`), topics 9 to 12
- [ ] D8. KG Maths (`kg-maths`), topics 13 to 15
- [ ] D9. Grade 1 Maths (`maths`), topics 1 to 4
- [ ] D10. Grade 1 Maths (`maths`), topics 5 to 8
- [ ] D11. Grade 1 Maths (`maths`), topics 9 to 12
- [ ] D12. Grade 1 Maths (`maths`), topics 13 to 14
- [ ] D13. Grade 2 Maths (`g2-maths`), topics 1 to 4
- [ ] D14. Grade 2 Maths (`g2-maths`), topics 5 to 8
- [ ] D15. Grade 2 Maths (`g2-maths`), topics 9 to 12
- [ ] D16. Grade 2 Maths (`g2-maths`), topics 13 to 15
- [ ] D17. Grade 3 Maths (`g3-maths`), topics 1 to 4
- [ ] D18. Grade 3 Maths (`g3-maths`), topics 5 to 8
- [ ] D19. Grade 3 Maths (`g3-maths`), topics 9 to 12
- [ ] D20. Grade 3 Maths (`g3-maths`), topics 13 to 15
- [ ] D21. Nursery English (`nursery-english`), topics 1 to 4
- [ ] D22. Nursery English (`nursery-english`), topics 5 to 8
- [ ] D23. Nursery English (`nursery-english`), topics 9 to 12
- [ ] D24. Nursery English (`nursery-english`), topics 13 to 15
- [ ] D25. KG English (`kg-english`), topics 1 to 4
- [ ] D26. KG English (`kg-english`), topics 5 to 8
- [ ] D27. KG English (`kg-english`), topics 9 to 12
- [ ] D28. KG English (`kg-english`), topics 13 to 15
- [ ] D29. Grade 1 English (`g1-english`), topics 1 to 4
- [ ] D30. Grade 1 English (`g1-english`), topics 5 to 8
- [ ] D31. Grade 1 English (`g1-english`), topics 9 to 12
- [ ] D32. Grade 1 English (`g1-english`), topics 13 to 16
- [ ] D33. Grade 2 English (`g2-english`), topics 1 to 4
- [ ] D34. Grade 2 English (`g2-english`), topics 5 to 8
- [ ] D35. Grade 2 English (`g2-english`), topics 9 to 12
- [ ] D36. Grade 2 English (`g2-english`), topics 13 to 15
- [ ] D37. Grade 3 English (`g3-english`), topics 1 to 4
- [ ] D38. Grade 3 English (`g3-english`), topics 5 to 8
- [ ] D39. Grade 3 English (`g3-english`), topics 9 to 12
- [ ] D40. Grade 3 English (`g3-english`), topics 13 to 15
- [ ] D41. Nursery Urdu (`nursery-urdu`), topics 1 to 4
- [ ] D42. Nursery Urdu (`nursery-urdu`), topics 5 to 8
- [ ] D43. Nursery Urdu (`nursery-urdu`), topics 9 to 12
- [ ] D44. Nursery Urdu (`nursery-urdu`), topics 13 to 15
- [ ] D45. KG Urdu (`kg-urdu`), topics 1 to 4
- [ ] D46. KG Urdu (`kg-urdu`), topics 5 to 8
- [ ] D47. KG Urdu (`kg-urdu`), topics 9 to 12
- [ ] D48. KG Urdu (`kg-urdu`), topics 13 to 15
- [ ] D49. Grade 1 Urdu (`g1-urdu`), topics 1 to 4
- [ ] D50. Grade 1 Urdu (`g1-urdu`), topics 5 to 8
- [ ] D51. Grade 1 Urdu (`g1-urdu`), topics 9 to 12
- [ ] D52. Grade 1 Urdu (`g1-urdu`), topics 13 to 14
- [ ] D53. Grade 2 Urdu (`g2-urdu`), topics 1 to 4
- [ ] D54. Grade 2 Urdu (`g2-urdu`), topics 5 to 8
- [ ] D55. Grade 2 Urdu (`g2-urdu`), topics 9 to 12
- [ ] D56. Grade 2 Urdu (`g2-urdu`), topics 13 to 15
- [ ] D57. Grade 3 Urdu (`g3-urdu`), topics 1 to 4
- [ ] D58. Grade 3 Urdu (`g3-urdu`), topics 5 to 8
- [ ] D59. Grade 3 Urdu (`g3-urdu`), topics 9 to 12
- [ ] D60. Grade 3 Urdu (`g3-urdu`), topics 13 to 15
- [ ] D61. Grade 1 Science (`science`), topics 1 to 4
- [ ] D62. Grade 1 Science (`science`), topics 5 to 8
- [ ] D63. Grade 1 Science (`science`), topics 9 to 12
- [ ] D64. Grade 1 Science (`science`), topics 13 to 14
- [ ] D65. Grade 2 Science (`g2-science`), topics 1 to 4
- [ ] D66. Grade 2 Science (`g2-science`), topics 5 to 8
- [ ] D67. Grade 2 Science (`g2-science`), topics 9 to 12
- [ ] D68. Grade 2 Science (`g2-science`), topics 13 to 15
- [ ] D69. Grade 3 Science (`g3-science`), topics 1 to 4
- [ ] D70. Grade 3 Science (`g3-science`), topics 5 to 8
- [ ] D71. Grade 3 Science (`g3-science`), topics 9 to 12
- [ ] D72. Grade 3 Science (`g3-science`), topics 13 to 15
- [ ] D73. Nursery General Knowledge (`nursery-gk`), topics 1 to 4
- [ ] D74. Nursery General Knowledge (`nursery-gk`), topics 5 to 8
- [ ] D75. Nursery General Knowledge (`nursery-gk`), topics 9 to 12
- [ ] D76. Nursery General Knowledge (`nursery-gk`), topics 13 to 15
- [ ] D77. KG General Knowledge (`kg-gk`), topics 1 to 4
- [ ] D78. KG General Knowledge (`kg-gk`), topics 5 to 8
- [ ] D79. KG General Knowledge (`kg-gk`), topics 9 to 12
- [ ] D80. KG General Knowledge (`kg-gk`), topics 13 to 15
- [ ] D81. Grade 1 Social Studies (`social`), topics 1 to 4
- [ ] D82. Grade 1 Social Studies (`social`), topics 5 to 8
- [ ] D83. Grade 1 Social Studies (`social`), topics 9 to 12
- [ ] D84. Grade 1 Social Studies (`social`), topics 13 to 14
- [ ] D85. Grade 2 Social Studies (`g2-social`), topics 1 to 4
- [ ] D86. Grade 2 Social Studies (`g2-social`), topics 5 to 8
- [ ] D87. Grade 2 Social Studies (`g2-social`), topics 9 to 12
- [ ] D88. Grade 2 Social Studies (`g2-social`), topics 13 to 15
- [ ] D89. Grade 3 Social Studies (`g3-social`), topics 1 to 4
- [ ] D90. Grade 3 Social Studies (`g3-social`), topics 5 to 8
- [ ] D91. Grade 3 Social Studies (`g3-social`), topics 9 to 12
- [ ] D92. Grade 3 Social Studies (`g3-social`), topics 13 to 15
- [ ] D93. Grade 2 History (`g2-history`), topics 1 to 4
- [ ] D94. Grade 2 History (`g2-history`), topics 5 to 8
- [ ] D95. Grade 2 History (`g2-history`), topics 9 to 12
- [ ] D96. Grade 2 History (`g2-history`), topics 13 to 15
- [ ] D97. Grade 3 History (`g3-history`), topics 1 to 4
- [ ] D98. Grade 3 History (`g3-history`), topics 5 to 8
- [ ] D99. Grade 3 History (`g3-history`), topics 9 to 12
- [ ] D100. Grade 3 History (`g3-history`), topics 13 to 15
- [ ] D101. Grade 2 Geography (`g2-geography`), topics 1 to 4
- [ ] D102. Grade 2 Geography (`g2-geography`), topics 5 to 8
- [ ] D103. Grade 2 Geography (`g2-geography`), topics 9 to 12
- [ ] D104. Grade 2 Geography (`g2-geography`), topics 13 to 15
- [ ] D105. Grade 3 Geography (`g3-geography`), topics 1 to 4
- [ ] D106. Grade 3 Geography (`g3-geography`), topics 5 to 8
- [ ] D107. Grade 3 Geography (`g3-geography`), topics 9 to 12
- [ ] D108. Grade 3 Geography (`g3-geography`), topics 13 to 15
- [ ] D109. Grade 1 ICT (`g1-computer`), topics 1 to 4
- [ ] D110. Grade 1 ICT (`g1-computer`), topics 5 to 8
- [ ] D111. Grade 1 ICT (`g1-computer`), topics 9 to 12
- [ ] D112. Grade 1 ICT (`g1-computer`), topics 13 to 15
- [ ] D113. Grade 2 ICT (`g2-computer`), topics 1 to 4
- [ ] D114. Grade 2 ICT (`g2-computer`), topics 5 to 8
- [ ] D115. Grade 2 ICT (`g2-computer`), topics 9 to 12
- [ ] D116. Grade 2 ICT (`g2-computer`), topics 13 to 15
- [ ] D117. Grade 3 ICT (`g3-computer`), topics 1 to 4
- [ ] D118. Grade 3 ICT (`g3-computer`), topics 5 to 8
- [ ] D119. Grade 3 ICT (`g3-computer`), topics 9 to 12
- [ ] D120. Grade 3 ICT (`g3-computer`), topics 13 to 15
- [ ] D121. Grade 1 AI (`g1-ai`), topics 1 to 4
- [ ] D122. Grade 1 AI (`g1-ai`), topics 5 to 8
- [ ] D123. Grade 1 AI (`g1-ai`), topics 9 to 12
- [ ] D124. Grade 1 AI (`g1-ai`), topics 13 to 15
- [ ] D125. Grade 2 AI (`g2-ai`), topics 1 to 4
- [ ] D126. Grade 2 AI (`g2-ai`), topics 5 to 8
- [ ] D127. Grade 2 AI (`g2-ai`), topics 9 to 12
- [ ] D128. Grade 2 AI (`g2-ai`), topics 13 to 15
- [ ] D129. Grade 3 AI (`g3-ai`), topics 1 to 4
- [ ] D130. Grade 3 AI (`g3-ai`), topics 5 to 8
- [ ] D131. Grade 3 AI (`g3-ai`), topics 9 to 12
- [ ] D132. Grade 3 AI (`g3-ai`), topics 13 to 15

- [ ] D133. Grade 1 English Warm-up (`english`), topics 1 to 4
- [ ] D134. Grade 1 English Warm-up (`english`), topics 5 to 8
- [ ] D135. Grade 1 Urdu Warm-up (`urdu`), topics 1 to 4
- [ ] D136. Grade 1 Urdu Warm-up (`urdu`), topics 5 to 8
- [ ] D137. Grade 1 Islamiat (`g1-islamiat`), topics 1 to 4 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D138. Grade 1 Islamiat (`g1-islamiat`), topics 5 to 8 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D139. Grade 1 Islamiat (`g1-islamiat`), topics 9 to 10 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D140. Grade 2 Islamiat (`g2-islamiat`), topics 1 to 4 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D141. Grade 2 Islamiat (`g2-islamiat`), topics 5 to 8 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D142. Grade 2 Islamiat (`g2-islamiat`), topics 9 to 10 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D143. Grade 3 Islamiat (`g3-islamiat`), topics 1 to 4 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D144. Grade 3 Islamiat (`g3-islamiat`), topics 5 to 8 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)
- [ ] D145. Grade 3 Islamiat (`g3-islamiat`), topics 9 to 10 (Islamiat: only facts and exercises from the official PCTB / Single National Curriculum Islamiat textbook for this grade; Quran verses, Hadith and duas only if quoted exactly from that book; leave out anything unsure)

Daily practice and fun, after the depth batches:
- [ ] Q1. 5-a-day morning sheets: one pack per grade per week for weeks 1 to 17 (Monday to Friday, 5 quick mixed questions a day from that week's Maths and English topics)
- [ ] Q2. Fun practice packs per grade for Maths: colour by number, mosaics, cut and stick sorting, number tracing strips, challenge cards
- [ ] Q3. Display posters and topic summaries for parents: one A4 poster per topic (key facts and words), Maths and Science first
- [ ] Q4. When every batch is ticked: switch the content builder back to weekly ("CRON_TZ=Asia/Karachi 49 14 * * 5") and tell Sumbul in one line
