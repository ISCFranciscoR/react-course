import React from 'react';
import { Todo as TodoModel } from '../models/todo';
import { Todo } from './Todo';

interface Props {
  todos: TodoModel[];
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map(({ id, completed, title }: TodoModel) => (
        <li key={id} className={`${completed ? 'completed' : ''}`}>
          <Todo key={id} id={id} title={title} completed={completed} />
        </li>
      ))}
    </ul>
  );
};
