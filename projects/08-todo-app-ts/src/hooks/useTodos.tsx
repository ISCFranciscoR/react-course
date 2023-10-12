import { useContext, useEffect, useState } from 'react';
import { TodosContext } from '../context/todos';
import { Todo } from '../models/todo';
import { FILTER_TYPES } from '../types/types.d';

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodosProvicer');
  }
  const { todos, activeFilter } = context;
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo: Todo) => {
      if (activeFilter === FILTER_TYPES.ACTIVE) {
        return !todo.completed;
      }
      if (activeFilter === FILTER_TYPES.COMPLETED) {
        return todo.completed;
      }
      return true;
    });
    setFilteredTodos(newFilteredTodos);
  }, [activeFilter, todos]);
  return { ...context, todos: filteredTodos };
};
