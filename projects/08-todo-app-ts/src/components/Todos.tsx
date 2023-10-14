import React from 'react';
import { Todo as TodoModel } from '../models/todo';
import { Todo } from './Todo';
import { useTodos } from '../hooks/useTodos';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props {}

export const Todos: React.FC<Props> = () => {
  const { todos, toggleAll } = useTodos();
  const [parent] = useAutoAnimate();

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label
        htmlFor="toggle-all"
        className="cursor-pointer"
        onClick={toggleAll}
      ></label>
      <ul className="todo-list" ref={parent}>
        {/* <ul className="todo-list" > */}
        {todos?.map(({ id, completed, title }: TodoModel) => (
          <li key={id} className={`${completed ? 'completed' : ''}`}>
            <Todo key={id} id={id} title={title} completed={completed} />
          </li>
        ))}
      </ul>
    </section>
  );
};
