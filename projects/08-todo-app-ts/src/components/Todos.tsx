import React, { useState } from 'react';
import { Todo as TodoModel } from '../models/todo';
import { Todo } from './Todo';
import { useTodos } from '../hooks/useTodos';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props {}

export const Todos: React.FC<Props> = () => {
  const { todos, toggleAll } = useTodos();
  const [checkAll, setCheckAll] = useState(false);
  const [parent] = useAutoAnimate();

  const handleToggleAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const completed = !!event.target.checked;
    setCheckAll(completed);
    toggleAll(completed);
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkAll}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all" className="cursor-pointer"></label>
      <ul className="todo-list" ref={parent}>
        {todos?.map(({ id, completed, title }: TodoModel) => (
          <li key={id} className={`${completed ? 'completed' : ''}`}>
            <Todo key={id} id={id} title={title} completed={completed} />
          </li>
        ))}
      </ul>
    </section>
  );
};
