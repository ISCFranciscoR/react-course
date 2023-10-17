import { useReducer } from "react";
import { initialTranslationState, translateReducer } from "../reducers/translate";

export function useTranslateReducer() {
  const [ state, dispatch ] = useReducer( translateReducer, initialTranslationState );


  const interchangeLanguages = () => {
    return dispatch( { type: "INTERCHANGE_LANGUAGES" } );
  }

  const setFromLanguage = ( language: string ) => {
    return dispatch( { type: 'SET_FROM_LANGUAGE', payload: language } )
  }

  const setToLanguage = ( language: string ) => {
    return dispatch( { type: 'SET_TO_LANGUAGE', payload: language } )
  }

  const setFromText = ( text: string ) => {
    return dispatch( { type: 'SET_FROM_LANGUAGE', payload: text } )
  }

  const setToText = ( text: string ) => {
    return dispatch( { type: 'SET_TO_LANGUAGE', payload: text } )
  }

  return { state, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setToText };
}