import { ReactNode, createContext } from "react";
import { TranslationState } from "../types.d";
import { initialTranslationState } from '../reducers/translate';
import { useTranslateReducer } from "../hooks/useTranslateReducer";

interface TranslationContextData {
  interchangeLanguages: () => void,
  setFromLanguage: ( language: string ) => void,
  setToLanguage: ( language: string ) => void,
  setFromText: ( text: string ) => void,
  setToText: ( text: string ) => void,
  state: TranslationState
}

export const TranslateContext = createContext<TranslationContextData>( {
  interchangeLanguages: () => { },
  setFromLanguage: () => { },
  setToLanguage: () => { },
  setFromText: () => { },
  setToText: () => { },
  state: initialTranslationState
} );

interface Props {
  children: ReactNode;
}

export function TranslateProvider( { children }: Props ): JSX.Element {
  const { state, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setToText } = useTranslateReducer();
  const valueProvider = { state, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setToText };
  return <div></div>;
}