# Putting Little Takhti on Google Play

## 1. Google Play Console account (one time, $25)
Go to https://play.google.com/console/signup, sign in with the Google account you want to own the app,
choose **Personal** (or Organisation if you have a registered business), pay the $25 fee and verify your identity.
New personal accounts must run a **closed test with at least 12 testers for 14 days** before the app can go public.

## 2. Signing key (one secret, no Java needed)
github.com/ProjectCobra/little-takhti > Settings > Secrets and variables > Actions > New repository secret:

- Name: `ANDROID_UPLOAD_PASSWORD`
- Value: a long password you make up (20 or more characters). Save it in a password manager too.

The next app build creates the upload key on GitHub, locks it with that password and keeps only the locked
file (app/keys/upload.jks.enc). The signed Play Store file then appears on the `apps` branch as
android/little-takhti-release.aab and under Actions > the run > Artifacts.
If the password is ever lost, Google Play can reset the upload key (Play Console > Setup > App signing).

(Advanced, optional: the older four-secret setup with your own keystore still works.)

## 4. Create the app in Play Console
- Create app: name Little Takhti, App, Free, language English (United Kingdom).
- App content: privacy policy URL **https://littletakhti.netlify.app/app-privacy.html** (live after the next deploy),
  Ads: No, App access: see `content-rating.md`, Target audience: ages 5 and under and 6 to 8,
  Data safety: answers in `data-safety.md`, Content rating: `content-rating.md`.
- Store listing: text in `listing.md`, graphics in this folder (`icon-512.png`, `feature-graphic.png`, `screenshots/`).
- Testing > Closed testing: upload the `.aab`, add 12+ tester emails, run 14 days, then apply for production.
- Play App Signing: accept the default (Google keeps the app signing key, your keystore is the upload key).
