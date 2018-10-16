import { Navigation } from 'react-native-navigation';

import TestPage from './TestPage';
import RnIntroPage from './RnIntroPage';
import MapPage from './MapPage';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('screens.Test', () => TestPage);
  Navigation.registerComponent('screens.Intro', () => RnIntroPage);
  Navigation.registerComponent('screens.Map', () => MapPage);
}
