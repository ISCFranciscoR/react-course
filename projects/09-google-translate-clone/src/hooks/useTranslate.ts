import { useContext } from "react";
import { TranslateContext } from "../context/translate";

export function useTranslate() {
  const context = useContext( TranslateContext );
  if ( !context ) {
    throw new Error( 'Tou\'re not able to use translate context out of its provider' );
  }
  return context;
}