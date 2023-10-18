import { useEffect, useReducer } from "react";
import { initialTranslationState, translateReducer } from "../reducers/translate";
import { type FromLanguage, type Language } from "../types";
import { translateText } from "../services/translate";
import { useDebounce } from "./useDebounce";

export function useTranslateReducer() {
  const [ state, dispatch ] = useReducer( translateReducer, initialTranslationState );
  const debouncedFromText = useDebounce<string>( state.fromText );

  const interchangeLanguages = () => {
    return dispatch( { type: "INTERCHANGE_LANGUAGES" } );
  }

  const setFromLanguage = ( language: FromLanguage ) => {
    return dispatch( { type: 'SET_FROM_LANGUAGE', payload: language } )
  }

  const setToLanguage = ( language: Language ) => {
    return dispatch( { type: 'SET_TO_LANGUAGE', payload: language } )
  }

  const setFromText = ( text: string ) => {
    return dispatch( { type: 'SET_FROM_TEXT', payload: text } )
  }

  const setResult = ( text: string ) => {
    return dispatch( { type: 'SET_TO_TEXT', payload: text } )
  }

  useEffect( () => {
    const getTranslation = async () => {
      const { fromLanguage, toLanguage } = state;

      if ( !debouncedFromText ) return;
      if ( fromLanguage === toLanguage ) {
        setResult( debouncedFromText );
      }
      const result = await translateText( { text: debouncedFromText, fromLanguage, toLanguage } );
      const { translatedText } = result;
      setResult( translatedText );
    }
    getTranslation();
  }, [ debouncedFromText, state.fromLanguage, state.toLanguage ] );

  return { state, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult };
}