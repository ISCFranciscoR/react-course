import React, { useId } from 'react';
import { Todo as TodoModel } from '../models/todo';
import { useTodos } from '../hooks/useTodos';

interface Props extends TodoModel {}

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const idNode = useId();
  const { removeTask, toggleCompleteTask } = useTodos();

  return (
    <div className="view">
      <input
        id={idNode}
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {
          toggleCompleteTask(id);
        }}
      />
      <label htmlFor={idNode}>{title}</label>
      <button className="destroy" onClick={() => removeTask(id)}></button>
    </div>
  );
};
