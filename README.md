# Ozzy OS

A voice-driven AI command center styled as a holographic HUD. Ozzy, a calm British butler AI, sits at the center of the home screen. You talk, Ozzy talks back.

## What's inside

- **Home**: the assistant core in the center, with a command bar and quick actions. Mail, Messages, Focus, Notes and System panels sit on each side.
- **Voice**: tap the core or the mic and speak. Turn on the wake word in Settings, then say the assistant's name and a command, for example "Ozzy, check my email". You can rename the assistant.
- **Studio voice**: an optional lifelike voice from ElevenLabs, using your own API key. Without a key, Ozzy uses the best British voice on your device.
- **Mail**: your Gmail inbox through the Claude Gmail connector, with tabs, search, threads, replies and new emails. Ozzy drafts replies, and nothing sends until you press Send. Extra addresses show as their own inboxes once their mail is routed into the linked Gmail.
- **Messages**: saved contacts with Call and Send in Messages buttons. The text opens in your phone's Messages app, ready to send from your own number.
- **Microphone**: a panel showing mic status, an Allow button, a level test and fix-it steps.
- **Reminders and timers**: "remind me at 6pm to call Mum", "set a timer for 10 minutes". Ozzy speaks and chimes when they're due, and sends a notification when the installed app is in the background.
- **Weather**: current conditions and a 3-day outlook from Open-Meteo, for your city or your location. Installed app only.
- **Music**: what's playing on Spotify, and playlists built from a description, through the Claude Spotify connector.
- **Files**: recent and searched Google Drive files, through the Claude Google Drive connector.
- **Daily brief**: say "brief me" for the time, weather, email, reminders and focus in one spoken summary.
- **Connect**: one panel for the brain, services, weather location and notifications. In the installed app, paste your own Anthropic API key to give Ozzy the full Claude brain. Calls bill to your Anthropic account.
- **Notes** and **Focus**: notes with summaries and read-aloud, and a 15, 25 or 50 minute timer.

## Where each feature works

| Feature | Inside Claude | Installed app (GitHub Pages) |
| --- | --- | --- |
| Claude brain | Yes | With your own API key, else built-in commands |
| Spotify, Google Drive | Yes | No |
| Weather | No, Claude blocks it | Yes |
| Gmail | Yes | No |
| Microphone and wake word | No, Claude blocks it | Yes |
| Studio voice | No, Claude blocks it | Yes |
| Device voice, notes, focus, messages | Yes | Yes |

## Install on iPhone

1. GitHub Pages serves the `gh-pages` branch at https://ozzyboii.github.io/OzzyBoii/. If the address says "Site not found", open the repo Settings, then Pages, pick Deploy from a branch, choose `gh-pages` and the root folder, then Save.
2. Open the address in Safari on your iPhone.
3. Tap Share, then Add to Home Screen. Allow the microphone when Ozzy asks.

## Files

- `src/parts/` holds the app in seven pieces, listed in order in `parts.json`.
- `index.html` joins the pieces and loads the app with the home screen settings.
- `build.sh` joins the same pieces into `dist/ozzy-os.html`, the file published as the Claude artifact.
- `manifest.webmanifest`, `sw.js` and `icons/icon.svg` make it installable and offline-ready.
