import { ReactNode, createContext } from 'react';
import { FromLanguage, Language, type TranslationState } from '../types';
import { initialTranslationState } from '../reducers/translate';
import { useTranslateReducer } from '../hooks/useTranslateReducer';

interface TranslationContextData {
  interchangeLanguages: () => void;
  setFromLanguage: (language: FromLanguage) => void;
  setToLanguage: (language: Language) => void;
  setFromText: (text: string) => void;
  setResult: (text: string) => void;
  state: TranslationState;
}

export const TranslateContext = createContext<TranslationContextData>({
  interchangeLanguages: () => {},
  setFromLanguage: () => {},
  setToLanguage: () => {},
  setFromText: () => {},
  setResult: () => {},
  state: initialTranslationState,
});

interface Props {
  children: ReactNode;
}

export function TranslateProvider({ children }: Props) {
  const {
    state,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useTranslateReducer();
  const valueProvider = {
    state,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
  return (
    <TranslateContext.Provider value={valueProvider}>
      {children}
    </TranslateContext.Provider>
  );
}
