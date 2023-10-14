import React, { useId, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { getUUID } from '../helpers/utils';
import { KEY_CODES } from '../constants/key-codes';

interface Props {}

export const Header: React.FC<Props> = () => {
  const id = useId();
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTodos();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KEY_CODES.ENTER.key) {
      addTask({
        id: getUUID(),
        title: newTask,
        completed: false,
      });
      setNewTask('');
    }
  };

  return (
    <header className="header">
      <h1 style={{ color: 'rgba(175, 47, 47, 0.15)' }}>Todo App</h1>
      <input
        id={id}
        className="new-todo"
        placeholder="¿Qué necesitas hacer?"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};
