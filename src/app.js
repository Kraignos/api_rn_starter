import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';
import { reaction } from 'mobx';
import { app } from './stores';
import { iconsMap, iconsLoaded } from './utils/icons';
import TranslateService from './i18n/translate';
import { Screen } from './screens';

registerScreens();
const { SignInScreen, HomeScreen, SettingsScreen } = Screen;

export default class App {
  constructor() {
    iconsLoaded.then(() => {
      // when the root of the app changes, call the startApp function
      reaction(() => app.root, () => this.startApp(app.root));
      app.appInitialized();
    }).catch(error => console.error(`Error while loading icons for app: ${error}`));
  }

  startApp(root) {
    console.debug('Starting the app...');
    switch (root) {
      case 'signin':
        Navigation.startSingleScreenApp({
          screen: {
            screen: SignInScreen,
            title: TranslateService.t('signin.title'),
            navigatorStyle: {},
          },
        });
        return;
      case 'home':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: TranslateService.t('homeTab.label'),
              screen: HomeScreen,
              icon: iconsMap['home'],
              selectedIcon: iconsMap['home'],
              title: TranslateService.t('homeTab.navigationTitle'),
              navigatorStyle: {},
            }, {
              label: TranslateService.t('settingsTab.label'),
              screen: SettingsScreen,
              icon: iconsMap['cog'],
              selectedIcon: iconsMap['cog'],
              title: TranslateService.t('settingsTab.navigationTitle'),
              navigatorStyle: {},
            },
          ],
          animationType: 'slide-down',
          title: 'api_rn_starter',
        });
        return;
      default:
        console.error('Unknown app root');
    }
  }
}
