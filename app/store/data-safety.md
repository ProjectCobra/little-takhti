# Google Play: Data safety answers

Play Console > App content > Data safety.

**Does your app collect or share any of the required user data types?** No.

Why: the app has no accounts, no ads, no analytics and no crash reporting SDKs. Nothing the child or parent types leaves the device.
- Child nickname, grade, quiz stars, stickers, parent PIN (stored as a hash) and saved worksheets are kept only on the device (local storage and the app's private files). Google's definition of "collected" covers data sent off the device, so on-device data is not collected.
- The app downloads worksheet PDFs from https://littletakhti.netlify.app. These are plain file downloads with no identifiers attached. The web host keeps normal server logs (IP address) for security, as every website does; we do not receive or use them for tracking.

**Is all of the user data collected by your app encrypted in transit?** Yes (all downloads use HTTPS). (Only asked if you answer that data is collected.)

**Do you provide a way for users to request that their data is deleted?** Not applicable: no data is collected. Parents can delete everything by removing the app, and can delete saved worksheets in Parents > Saved worksheets.

**Security practices to declare**: data encrypted in transit (HTTPS). No independent security review.

## Permissions the app uses
- `INTERNET` only (to fetch worksheet PDFs). No camera, microphone, location, contacts or storage permissions.

## Families policy checklist (Target audience and content)
- Target age groups: Ages 5 and under, Ages 6 to 8. (Also add 9 to 12 only if you want older siblings; not needed.)
- Appeals to children: Yes.
- Ads: No ads. Answer "No, my app does not contain ads".
- No third-party SDKs that collect data (Capacitor core, App, Browser, Filesystem, Share, Status Bar and Splash Screen plugins run on the device only).
- Links that leave the app sit behind the parent PIN (a "neutral age screen" style grown-up gate).
- No in-app purchases, no chat, no user-generated content shared with others.
