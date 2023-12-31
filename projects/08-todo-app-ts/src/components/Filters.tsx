import React from 'react';
import { Filter } from './Filter';
import { FilterInfo } from '../models/filter-info';
import { FILTER_TYPES } from '../types/types.d';
import { useTodos } from '../hooks/useTodos';

interface Props {}

const FILTER_BUTTONS: FilterInfo[] = [
  {
    type: FILTER_TYPES.ALL,
    label: 'Todos',
  },
  {
    type: FILTER_TYPES.ACTIVE,
    label: 'Activas',
  },
  {
    type: FILTER_TYPES.COMPLETED,
    label: 'Completadas',
  },
];

export const Filters: React.FC<Props> = () => {
  const { activeFilter, setFilter } = useTodos();
  return (
    <ul className="filters">
      {FILTER_BUTTONS.map((filter) => {
        return (
          <Filter
            key={filter.type}
            activeFilter={activeFilter}
            filterInfo={filter}
            onFilter={setFilter}
          />
        );
      })}
    </ul>
  );
};
