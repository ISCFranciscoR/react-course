import { FromLanguage, Language } from "../types";


interface TranslateServiceParams {
  text: string;
  fromLanguage: FromLanguage;
  toLanguage: Language;
}

const TRANSLATE_HOST = import.meta.env.VITE_TRANSLATE_HOST;

export async function translateText( { text, fromLanguage, toLanguage }: TranslateServiceParams ) {
  const res = await fetch( TRANSLATE_HOST, {
    method: "POST",
    body: JSON.stringify( {
      q: text,
      source: fromLanguage,
      target: toLanguage,
      format: "text",
      api_key: ""
    } ),
    headers: { "Content-Type": "application/json" }
  } );

  return await res.json();
}