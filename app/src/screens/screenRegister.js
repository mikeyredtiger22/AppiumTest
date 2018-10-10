import { Navigation } from 'react-native-navigation';

import TestPage from './TestPage';
import RnIntroPage from './RnIntroPage';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('screens.Test', () => TestPage);
  Navigation.registerComponent('screens.Intro', () => RnIntroPage);
}
