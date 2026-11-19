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

## Progress
(add a line per batch: date, what was built, commit)
