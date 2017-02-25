import { Navigation } from 'react-native-navigation';
import SignInScreen from './screens/signin.screen';
import HomeScreen from './screens/home.screen';
import SettingsScreen from './screens/settings.screen';

export const Screen = {
  SignInScreen: 'api_rn_starter.SignInScreen',
  HomeScreen: 'api_rn_starter.HomeScreen',
  SettingsScreen: 'api_rn_starter.SettingsScreen',
}

export function registerScreens() {
  Navigation.registerComponent(Screen.SignInScreen, () => SignInScreen);
  Navigation.registerComponent(Screen.HomeScreen, () => HomeScreen);
  Navigation.registerComponent(Screen.SettingsScreen, () => SettingsScreen);
}
