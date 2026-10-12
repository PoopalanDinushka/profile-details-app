# Cricket Profile App

A lightweight Expo/React Native mobile app that displays a simple player profile screen with a profile image, personal details, and a floating action button to increment a points counter.

## Features

- Mobile-first profile layout
- Player/profile details section
- Circular profile image
- Floating action button to add points
- Clean, minimal UI designed for cross-platform Expo usage

## Tech Stack

- Expo SDK 57
- React Native
- React 19
- Expo Status Bar

## Project Structure

```text
.
├── App.js
├── app.json
├── assets/
├── eslint.config.js
├── index.js
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npx expo start
```

3. Run on a device or emulator:

```bash
npx expo start --android
npx expo start --ios
npx expo start --web
```

## App Overview

The app currently presents the following information:

- Name: Diluka
- Email: diluka.w@nsbm.ac.lk
- Points counter

Pressing the floating + button increases the points value.

## Scripts

```bash
npx expo start
npx expo start --android
npx expo start --ios
npx expo start --web
npx expo lint
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
