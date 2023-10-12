import { createContext } from 'react';
import { useTodosReducer } from '../hooks/useTodosReducer';

export const TodosContext = createContext();

export function TodosProvider({ children }): JSX.Element {
  const { addTask, removeTask, toggleCompleteTask, filter, state } =
    useTodosReducer();
  const valueProvider = {
    addTask,
    removeTask,
    toggleCompleteTask,
    filter,
    state,
  };
  return (
    <TodosContext.Provider value={valueProvider}>
      {children}
    </TodosContext.Provider>
  );
}
