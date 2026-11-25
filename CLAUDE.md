# Little Takhti: brief for Claude agents

Little Takhti (littletakhti.netlify.app) is Sumbul's free website of printable worksheets, quiz games, parent guides and games for children in Pakistan, Nursery to Grade 3. Subjects: English, Urdu, Maths, Science, Geography, Computer, Islamiat and more. Audience: parents and teachers, mostly at British-curriculum schools (LGS, Beaconhouse, City School, Aitchison).

## Rules from Sumbul (always follow)

1. **Never deploy without asking.** Netlify publishes the `main` branch. Work and push on `dev` only. Merge `dev` into `main` only after Sumbul says "deploy" in the current conversation.
2. **Religious content** (Islamiat, Quran verses, Hadith, duas, Hamd, Naat): use only material from authenticated course books, quoted exactly. If unsure, leave it out and ask.
3. **Content policy**: only educational, age-appropriate material. Nothing indecent.
4. **Writing style**: plain, warm, short. No em-dashes, no AI-sounding phrasing. Messages to Sumbul are brief and conversational.
5. **Pushing to GitHub on `dev` is fine without asking.** End commit messages with the attribution lines your session gives you.

## Repo layout

- `site/`: the finished website Netlify serves (publish dir `site`, no build command). Includes `site/pdf` (one PDF per worksheet pack) and `site/thumbs`.
- `source/src/`: all code and content.
  - `build.py` builds the single-page app; `seo.py` writes the per-worksheet Google pages, sitemap, `build.json`, `_headers`, `_redirects`.
  - Content files: `g1.js`, `grades.js`, `english_plus.js`, `english_g3.js`, `urdu_g1.js`, `plus_*.js`, `writing.js` (handwriting practice), `quizbank.js`, `xq_more.js` (extra quiz questions).
  - `render.js` + `sheet.css` render A4 worksheets; `app.js` routes and quizzes; `fun.js` games; `powerups.js`; `family.js`; `help.js` (help, share, curriculum map, stats).
- `source/tools/`: build and test scripts (below).
- `source/firebase/`: Firestore and Storage rules (already published by Sumbul).
- `admin/`: separate admin site (littletakhti-admin.netlify.app), Google sign-in, admin email sumbulaftab@gmail.com only.
- `source/deploys.json`: deploy log shown in the admin panel. Add an entry on each deploy.

## Build and test

```bash
bash source/tools/setup.sh                       # once per session: playwright, pillow, local fonts
bash source/tools/build.sh                       # rebuild site/ (keeps existing PDFs)
bash source/tools/build.sh --pdf                 # also regenerate all worksheet PDFs (slow, ~15 min)
ONLY=g2-maths bash source/tools/build.sh --pdf   # regenerate only matching PDFs
python3 source/tools/render_sheets.py check      # every worksheet page fits above the footer (exit 1 if not)
python3 source/tools/render_sheets.py zoom       # refit per-page zoom after changing page content
python3 source/tools/render_sheets.py sheets g1-english-2,g1-english-3   # PNG previews in source/tools/out/sheets
python3 source/tools/test_site.py                # crawl desktop and phone widths + check every quiz (exit 1 on problems)
```

Before pushing a content change: run `zoom` (if pages changed), `check`, rebuild PDFs for the changed subject, `build.sh`, then `test_site.py`. Look at a PNG preview of any new page before sending it to Sumbul.

New worksheet packs need their Google page: `build.sh` runs `tools/gen_seo.py`, which adds new packs to `source/seo/data.json` and makes thumbnails from their PDFs.

## Content decisions already made

- Page IDs are `subject-n` (1-based page number), packs are `subject-tN` (topic N), e.g. `g2-english-t3`. Grade 1 ids are mixed: `g1-english` and `g1-urdu` are the main Grade 1 English and Urdu, `english` and `urdu` are their Warm-ups, and `maths` is the main Grade 1 Maths (its old writing set is `maths-write-warmup`).
- **English is one level up**: Grade 1 English uses former Grade 2 work, Grade 2 former Grade 3, Grade 3 is written at Grade 4 level. The old Grade 1 English is "English Warm-up" (kept out of the weekly plan).
- **Grade 1 Urdu follows Urdu ka Guldasta: Motia (OUP, Class 1)**, in its lesson order, with original exercises (not copied). Old Grade 1 Urdu is "Urdu Warm-up".
- **Grade 1 Maths follows the common international Year 1 / Grade 1 sequence** (Sumbul, Nov 2026): the topics shared by Oxford (International Primary Maths), Pearson, Heinemann and New Syllabus Mathematics. Use the order in `source/term-plan.md` (Grade 1 Maths sequence). When Sumbul shares the Shapes Mathematics Book 1 contents page, line the order up with it.
- **School references**: `source/references/` holds notes on real classwork Sumbul shares (e.g. `lgs-grade1.md`). Read the matching file before writing material for that grade and subject, and match its topics and level.
- **Ten pages per worksheet pack** (Sumbul, Nov 2026): every new topic gets 10 pages. Older packs have 3 and have not been expanded yet.
- **Richer worksheets** (Sumbul, Nov 2026): new topics should mix pictures, word problems and concept explanations, not only fill in the blanks. Helpers in `grades.js`: `FP` (picture cards with a blank), `CP` (picture choice), `WP` (word problems), `CN` (big idea box with pictures), `CY` (life cycle or sequence strip, optional size per step), and `{t:"map",rows:["icon:Label|..."]}` for a grid map with compass labels. Pictures are Fluent Emoji SVGs in `source/img` (fetch more from github.com/microsoft/fluentui-emoji, Color variant, saved as lowercase-hyphen names; don't overwrite existing files).
- **Benchmark**: Little Takhti Grade N ≈ Cambridge Primary Stage N+1 ≈ UK Year N+1 (Grade 1 = age 6 to 7 = Aitchison K2).
- **Handwriting practice** (`writing.js`): English on red, blue, blue, red four lines with a gap between sets; Urdu on plain ruled lines with a margin on the right; Maths on a square grid. English sets include words, sentences and stories.
- **Site structure** (Nov 2026 UX pass, `ux.js`): menu is Home, This week, Play, Parents. Grade is asked once on the first visit, then shown as "Grade 1 · Change grade". The resource page is the topic page (worksheets, quiz, parent guide, PowerUps, handwriting, week). Subject pages list topics in teaching order. Warm-ups are a level switch inside English and Urdu. Kids' Play area (`#kids`) links quizzes, games, PowerUps, stickers and stories. The host's floating Netlify badge is hidden; the footer keeps the credit.
- **Colours** (Nov 2026): brand palette layer at the end of `site.css`. Deep green #123B28 for text and banners, yellow #FFD93B for main buttons and selected states, green #1F7A4C for links and secondary buttons. Subject colours have 4.5:1 contrast with white. Check contrast before adding colours.
- **Read aloud**: British or American English voice for every subject except Urdu.

## Brand (Sumbul, Nov 2026: keep the same everywhere)

- **Logo**: exactly the header logo in `source/src/build.py` (also `source/src/favicon.svg` and `logo_mark.svg`): deep green #123B28 rounded square, yellow #FFD93B takhti with a hanger tab, a green hole dot in the tab, a green smile and a green dot below the smile. Never draw it without the two dots. Use these files; do not redraw it.
- **Colours**: #123B28 deep green, #FFD93B yellow, #1F7A4C green, cream #FFFBEA / #FFF3D1.
- **Takhti character**: the 3D cream-face Takhti from `source/tools/video2/assets/glow/tk-*.webp`. Same character in videos, banners, thumbnails and posts.
- Applies to the site, app icons and splash (`app/assets`), YouTube (profile, banner, watermark), video end cards and social posts.

## Instagram

- Brand colours: green #123B28, yellow #FFD93B, mid green #2F8F55, cream #FFFBEA. Fonts: Baloo 2 (headings), Lexend (body), Noto Nastaliq Urdu. Tagline: ننھے قدم، اونچی اڑان.
- Carousels are 1080 × 1350, 4 slides. Covers alternate between posts (last post started green, next starts yellow, and so on). Slides inside a post alternate green and yellow.
- Captions: short, casual, an emoji or two, the link littletakhti.netlify.app (link in bio), 6 to 8 hashtags including #LittleTakhti #PakistaniParents.
- Design canvas with posts 1 to 4: https://claude.ai/artifact/JBvUkNZTQNYRM8sfEJLZnZ
- Carousels are posted through the Buffer connector (Instagram channel "littletakhti", type post, alt text on every image). The daily song task posts them right away without asking Sumbul once they pass the fact check, saves the PNGs under `social/<date>-<slug>/` on `videos`, and logs each post in `source/social-log.md`. Reels, YouTube videos and Shorts still wait for her "post".

## Weekly Grade 1 topics from Classroom

Every Saturday a scheduled run reads the class's Google Classroom (Grade I (2026 - 2027) Green, signed in as sumbulaftab@gmail.com in the Claude app's built-in browser) and builds that week's new 10-page Grade 1 topics (English, Maths, Science, Social Studies, Urdu) from the concepts taught. These replace the planned Grade 1 topics; the content builder only does Grade 1 ICT and AI, plus fallbacks for subjects with no class work that week.
- Read the Stream and Classwork for posts since the last entry in `source/classroom-log.md`. Attachments are mostly scanned PDFs or photos in Drive: read them by screenshot.
- Write original exercises on the same concepts (never copy school sheets, names or photos). Put them in `source/src/classroom_g1.js` (or extend `plus_g.js` / `references/lgs-grade1.md`). English uses `addPlus("english",{g2:[...]})`, which lands in Grade 1 English.
- Never use the names of children written at the top of class worksheets (e.g. Ayesha, Manha) anywhere on the site. Teacher names and words from class lists are fine.
- Skip Islamiat and anything religious unless it comes from an authenticated course book. Skip announcements (stationery, dress-up days).
- Test, push to `dev`, add a line to `source/classroom-log.md`. Monday's deploy check asks Sumbul before anything goes live.
