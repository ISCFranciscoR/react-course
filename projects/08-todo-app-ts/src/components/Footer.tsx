import React from 'react';
import { Filters } from './Filters';
import { useTodos } from '../hooks/useTodos';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { todos, clearAllCompleted } = useTodos();
  const activeCount = todos.filter((task) => !task.completed).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tarea(s) reastante(s)
      </span>
      <Filters />
      <button className="clear-completed" onClick={clearAllCompleted}>
        Borrar completados
      </button>
    </footer>
  );
};
