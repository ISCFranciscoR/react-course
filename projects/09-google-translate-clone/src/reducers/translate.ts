import { AUTO_LANGUAGE } from "../constants/general";
import { Action, TRANSLATE_ACTIONS, type TranslationState } from "../types.d";

export const initialTranslationState: TranslationState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

export function translateReducer( state: TranslationState, action: Action ): TranslationState {
  const { type } = action;

  if ( type === TRANSLATE_ACTIONS.INTERCHANGE_LANGUAGES ) {
    if ( state.fromLanguage === AUTO_LANGUAGE ) {
      return state;
    }
    const loading = !!state.fromText && state.fromLanguage !== state.toLanguage;
    return {
      ...state,
      loading,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_FROM_LANGUAGE ) {
    const { payload: fromLanguage } = action;
    const loading = !!state.fromText && state.fromLanguage !== fromLanguage;
    return {
      ...state,
      loading,
      fromLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_TO_LANGUAGE ) {
    const { payload: toLanguage } = action;
    const loading = !!state.fromText && state.toLanguage !== toLanguage;
    return {
      ...state,
      loading,
      toLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_FROM_TEXT ) {
    const { payload: fromText } = action;
    const loading = !!fromText;
    return {
      ...state,
      loading,
      fromText,
      result: ''
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_TO_TEXT ) {
    const { payload: result } = action;
    return {
      ...state,
      loading: false,
      result
    }
  }

  return state;
}