import { Form } from 'react-bootstrap';
import React from 'react';
import { SectionType } from '../types.d';

interface Props {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles = {
  border: 0,
  height: '200px',
  position: 'relative',
  zIndex: 0,
  backgroundColor: 'trasnparent',
};

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.from) return 'Introducir texto';
  if (loading) return 'Traduciendo...';
  return 'Traducción';
};

export const TextArea: React.FC<Props> = ({
  loading,
  type,
  value,
  onChange,
}) => {
  const styles =
    type === SectionType.from
      ? commonStyles
      : {
          ...commonStyles,
          backgroundColor: '#f5f5f5',
        };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      disabled={type === SectionType.to}
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.from}
      style={styles}
      value={value}
      onChange={handleChange}
    ></Form.Control>
  );
};
