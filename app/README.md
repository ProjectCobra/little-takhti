# Little Takhti app (iOS, iPadOS, Android phones and tablets)

Capacitor wraps the website into native apps. `build_www.py` makes `www/` from `site/` in app mode:
no ads or web analytics (App Store Kids and Google Play Families rules), PDFs fetched from the website,
Print opens the PDF in the phone's viewer (print and share from there).

- Android test build: every push to `app/` on `dev` builds an APK and saves it to the `apps` branch
  (`android/little-takhti-test.apk`). Install it on a phone or tablet to test.
- iOS: project in `app/ios` (Swift Package Manager). Store builds need an Apple Developer account,
  signing certificates and a macOS GitHub runner (to be added once the account exists).
- Store release: Google Play Console account ($25) and Apple Developer account ($99/yr).

Next: Kid lock (grown-up PIN for Home/Parents), offline "Download this week", native Google and Apple sign-in.
