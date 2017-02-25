import I18n from 'react-native-i18n';
import { translations, useFallbacks, defaultLocale } from './translations';

let service = I18n;
service.fallbacks = useFallbacks;
service.translations = translations;
service.defaultLocale = defaultLocale;

export default class TranslateService {

  static translate(key) {
    return service.t(key);
  }

  static t(key) {
    return service.translate(key);
  }
}
