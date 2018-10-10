import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/screenRegister';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'screens.Intro', // unique ID registered with Navigation.registerScreen
    title: 'Intro Page',
  },
});
