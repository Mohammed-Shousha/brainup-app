# BrainUp App

_**An educational app which simplifies the teaching process for teachers and the learning process for students.**_

## Folder Structure

```
src/
├── app/
├── core/
│   ├── enums/
│   ├── types/
│   └── utils/
├── data/
│   └── repositories/
├── domain/
│   ├── enitites/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── components/
    ├── context/
    ├── screens/
    └── styles/
```

- app: Contains the routes of the app which uses expo-router as routing library.
- core: Contains some utils (like constants and helper functions), custom enums and types.
- data: Contains the data layer files of the app, like repositories.
- domain: Contains the domain layer files of the app, like entities, repositories and usecases.
- presentation: Contains the presentation layer files of the app, like screens, components, styles and context.

## Used Technologies

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Context API](https://react.dev/reference/react/useContext)
- [Expo Router](https://github.com/expo/router)
- [Expo AV](https://docs.expo.dev/versions/latest/sdk/av/)
- [react-native-pdf](https://github.com/wonday/react-native-pdf)
- [Jest](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## How to run the app

1. Clone the repo.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the expo server.
4. Install the [expo go](https://expo.dev/client) app on your phone.
5. Scan the QR code from the expo server to run the app on your phone.

## How to run the tests

- Run `npm test` to run the tests.
- Run `npm test:watch` to run the tests in watch mode.
- Run `npm test:cov` to run the tests with coverage.

## Video Demo

https://github.com/Mohammed-Shousha/brainup-app/assets/65350067/9274e579-b1d9-42b0-9a8f-37c3031afeca

