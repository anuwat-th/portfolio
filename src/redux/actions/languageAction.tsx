export const SET_LANGUAGE = 'SET_LANGUAGE';

interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export type languageAction = SetLanguageAction;

export const setLanguage = (language: string): languageAction => ({
  type: SET_LANGUAGE,
  payload: language,
});