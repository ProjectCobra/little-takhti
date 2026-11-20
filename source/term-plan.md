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
- [ ] 20. AI Grades 1 to 3, topics 14 and 15

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
