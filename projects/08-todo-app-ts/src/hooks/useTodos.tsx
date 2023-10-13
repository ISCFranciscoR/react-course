import { useContext } from 'react';
import { TodosContext } from '../context/todos';

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodosProvicer');
  }
  return context;
};
