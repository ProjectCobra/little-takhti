# Little Takhti app (iOS, iPadOS, Android phones and tablets)

Capacitor wraps the website into native apps. `build_www.py` makes `www/` from `site/` in app mode:
no ads or web analytics (App Store Kids and Google Play Families rules), PDFs fetched from the website,
Print opens the PDF in the phone's viewer (print and share from there).

- Android test build: every push to `app/` on `dev` builds an APK and saves it to the `apps` branch
  (`android/little-takhti-test.apk`). Install it on a phone or tablet to test.
- iOS: project in `app/ios` (Swift Package Manager). Store builds need an Apple Developer account,
  signing certificates and a macOS GitHub runner (to be added once the account exists).
- Store release: Google Play Console account ($25) and Apple Developer account ($99/yr).

## Version 1.1.0 (app-only code in `native/`)
- `native/native.js` and `native/native.css` are added to `www` by `build_www.py`; the website never loads them.
- Back button goes back and exits only from Home; outside links open in the browser after the parent PIN.
- Parent PIN (4 digits, stored hashed on the device) guards Parents, family profiles, help and outside links. Forgot PIN asks a grown-up sum.
- Worksheets open in an in-app PDF viewer (pdf.js) with Print (Android print screen, `LtPrintPlugin.java`) and Share.
- "Download this week" saves the week's PDFs to the app's files; Parents > Saved worksheets lists and deletes them.
- Fonts are bundled, so everything except a not-yet-saved PDF works offline.
- Tablets (768px and up): bottom tab bar, two-column topic lists and topic pages, bigger buttons.
- Test in a browser: `python3 app/build_www.py && python3 app/tools/test_app.py`.

## Play Store
`store/` has the listing, privacy policy, Data safety and rating answers, graphics (`store/make_graphics.py`) and
`store/PLAY_STORE.md` with the steps. `.github/workflows/app-android-release.yml` builds a signed AAB once the four
ANDROID_* secrets exist; versionCode is the Actions run number.

Next: native Google and Apple sign-in, iOS store build.
