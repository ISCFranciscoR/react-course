import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants/general';
import React from 'react';
import { FromLanguage, Language, SectionType } from '../types.d';

type Props =
  | {
      type: SectionType.from;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.to;
      value: Language;
      onChange: (language: Language) => void;
    };

export const LanguageSelector: React.FC<Props> = ({
  type,
  value,
  onChange,
}): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select
      aria-label="Seleciona el idioma"
      onChange={handleChange}
      value={value}
    >
      {type === SectionType.from && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
