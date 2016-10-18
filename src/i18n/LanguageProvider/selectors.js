import { createSelector } from 'reselect';

const selectLanguage = () => state => state.language;

const selectLocale = () => createSelector(
  selectLanguage(),
  languageState => languageState.locale,
);

export {
  selectLanguage,
  selectLocale,
};
