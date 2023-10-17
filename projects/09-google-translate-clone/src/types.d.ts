export interface TranslationState {
  fromLanguage: string;
  toLanguage: string;
  fromText: string;
  result: string;
  loading: boolean;
}

export enum TRANSLATE_ACTIONS {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_TO_TEXT = 'SET_TO_TEXT'
}

export type Action = { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  | { type: 'SET_TO_LANGUAGE', payload: string }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_TO_TEXT', payload: string };