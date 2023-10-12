import React from 'react';
import { Todo } from '../models/todo';
import { Filters } from './Filters';

interface Props {
  activeCount: number;
  todos: Todo[];
}

export const Footer: React.FC<Props> = ({ activeCount, todos }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong> item left
      </span>
      <Filters />
    </footer>
  );
};
