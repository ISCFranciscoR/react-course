import { createContext } from 'react';
import { todoInitialState } from '../../reducers/todo';
import { useTodosReducer } from '../hooks/useTodosReducer';

export const TodosContext = createContext(todoInitialState);

export function TodosProvider({ children }): JSX.Element {
  const { addTask, removeTask, toggleCompleteTask, setFilter, clear, state } =
    useTodosReducer();
  const valueProvider = {
    ...state,
    addTask,
    removeTask,
    toggleCompleteTask,
    setFilter,
    clear,
  };
  return (
    <TodosContext.Provider value={valueProvider}>
      {children}
    </TodosContext.Provider>
  );
}
