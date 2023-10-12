import React from 'react';
import { FilterType } from '../types/types';
import { FilterInfo } from '../models/filter-info';

interface Props {
  activeFilter: FilterType;
  filterInfo: FilterInfo;
  onFilter: (filterType: FilterType) => void;
}

export const Filter: React.FC<Props> = ({
  activeFilter,
  filterInfo,
  onFilter,
}) => {
  const { type, label } = filterInfo;

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onFilter(type);
  };

  const className = type === activeFilter ? 'selected' : '';

  return (
    <li>
      <a className={className} href="" onClick={handleClick}>
        {label}
      </a>
    </li>
  );
};
