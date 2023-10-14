import React from 'react';
import { Filters } from './Filters';
import { useTodos } from '../hooks/useTodos';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { todos, clearAllCompleted } = useTodos();
  const completedTask = todos.filter((task) => task.completed).length || 0;
  const activeCount = todos.length - completedTask;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tarea(s) restante(s)
      </span>
      <Filters />
      {completedTask > 0 && (
        <button className="clear-completed" onClick={clearAllCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
