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
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_FROM_LANGUAGE ) {
    const { payload: fromLanguage } = action;
    return {
      ...state,
      fromLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_TO_LANGUAGE ) {
    const { payload: toLanguage } = action;
    return {
      ...state,
      toLanguage
    }
  }
  if ( type === TRANSLATE_ACTIONS.SET_FROM_TEXT ) {
    const { payload: fromText } = action;
    return {
      ...state,
      loading: true,
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