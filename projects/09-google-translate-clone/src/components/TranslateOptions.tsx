import React, { ReactNode } from 'react';
import { type Color } from '../types';

interface Props {
  children?: ReactNode;
  background?: Color;
}

export const TranslateOptions: React.FC<Props> = ({
  children,
  background = '#FFFFFF',
}) => {
  return (
    <div
      style={{
        backgroundColor: background,
        padding: '.375rem .75rem',
        display: 'flex',
        columnGap: '1rem',
      }}
    >
      {children}
    </div>
  );
};
