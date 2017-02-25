import translations_fr from './translations_fr';
import translations_en from './translations_en';

export const useFallbacks = true;
export const defaultLocale = 'en-EN';
export const translations = { ...translations_en, ...translations_fr };
