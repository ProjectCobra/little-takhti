# Putting Little Takhti on Google Play

## 1. Google Play Console account (one time, $25)
Go to https://play.google.com/console/signup, sign in with the Google account you want to own the app,
choose **Personal** (or Organisation if you have a registered business), pay the $25 fee and verify your identity.
New personal accounts must run a **closed test with at least 12 testers for 14 days** before the app can go public.

## 2. Make the upload key (once, on your Windows PC)
Install Java if you don't have it (https://adoptium.net, Temurin 21). Then open Command Prompt and run:

    keytool -genkeypair -v -keystore little-takhti-upload.jks -alias littletakhti -keyalg RSA -keysize 2048 -validity 10000

It asks for a password (use a strong one and write it down) and your name and city. Keep
`little-takhti-upload.jks` and the password somewhere safe, like a password manager and a USB stick.
Never put it in GitHub. If it is lost, Google can reset the upload key, but it takes a few days.

Turn the file into text for GitHub (PowerShell, in the same folder):

    [Convert]::ToBase64String([IO.File]::ReadAllBytes("little-takhti-upload.jks")) | Set-Content keystore-base64.txt

## 3. Add four secrets in GitHub
github.com/ProjectCobra/little-takhti > Settings > Secrets and variables > Actions > New repository secret:

| Name | Value |
|---|---|
| ANDROID_KEYSTORE_BASE64 | everything inside keystore-base64.txt |
| ANDROID_KEYSTORE_PASSWORD | the password you chose |
| ANDROID_KEY_ALIAS | littletakhti |
| ANDROID_KEY_PASSWORD | the same password (keytool uses one password for both unless you chose two) |

Then delete keystore-base64.txt. The workflow **Android app (Play Store release)** now builds a signed
`.aab` on every app change (Actions tab > the run > Artifacts > little-takhti-release-N). You can also start it by hand with "Run workflow".

## 4. Create the app in Play Console
- Create app: name Little Takhti, App, Free, language English (United Kingdom).
- App content: privacy policy URL **https://littletakhti.netlify.app/app-privacy.html** (live after the next deploy),
  Ads: No, App access: see `content-rating.md`, Target audience: ages 5 and under and 6 to 8,
  Data safety: answers in `data-safety.md`, Content rating: `content-rating.md`.
- Store listing: text in `listing.md`, graphics in this folder (`icon-512.png`, `feature-graphic.png`, `screenshots/`).
- Testing > Closed testing: upload the `.aab`, add 12+ tester emails, run 14 days, then apply for production.
- Play App Signing: accept the default (Google keeps the app signing key, your keystore is the upload key).
