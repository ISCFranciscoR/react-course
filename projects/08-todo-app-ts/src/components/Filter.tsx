import React from 'react';
import { FilterType } from '../types/types';
import { FilterInfo } from '../models/filter-info';

interface Props {
  activeFilter: FilterType;
  filterInfo: FilterInfo;
}

export const Filter: React.FC<Props> = ({ activeFilter, filterInfo }) => {
  const { type, label } = filterInfo;
  return (
    <li>
      <a className={type === activeFilter ? 'selected' : ''} href="">
        {label}
      </a>
    </li>
  );
};
