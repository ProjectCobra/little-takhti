# Little Takhti

Printable worksheets, quizzes, parent guides and games for Nursery to Grade 3 in Pakistan.

- `site/` is the finished website. Netlify publishes this folder (build command: none, publish directory: `site`).
- `source/` is the code that builds it (`source/src/build.py --static`, then `source/src/seo.py`).
  Worksheet PDFs and thumbnails are kept only in `site/pdf` and `site/thumbs` to keep the repository small.
