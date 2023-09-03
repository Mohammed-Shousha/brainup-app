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
- [Expo Router](https://docs.expo.dev/routing/introduction/)
- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)
