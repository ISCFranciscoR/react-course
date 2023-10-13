import { ReactNode, createContext, useEffect, useState } from 'react';
import { useTodosReducer } from '../hooks/useTodosReducer';
import { FILTER_TYPES, FilterType, TodoId } from '../types/types.d';
import { Todo } from '../models/todo';
import { TodoState } from '../../reducers/todo';

interface TodosContextData extends TodoState {
  addTask: (task: Todo) => void;
  removeTask: (id: TodoId) => void;
  toggleCompleteTask: (id: TodoId) => void;
  setFilter: (filter: FilterType) => void;
  clearAllCompleted: () => void;
  toggleAll: () => void;
  editTask: ({ id, title }: { id: TodoId; title: string }) => void;
}

export const TodosContext = createContext<TodosContextData>({
  todos: [],
  activeFilter: FILTER_TYPES.ALL,
  addTask: () => {},
  removeTask: () => {},
  toggleCompleteTask: () => {},
  setFilter: () => {},
  clearAllCompleted: () => {},
  toggleAll: () => {},
  editTask: () => {},
});

interface Props {
  children: ReactNode;
}

export function TodosProvider({ children }: Props) {
  const {
    addTask,
    removeTask,
    toggleCompleteTask,
    setFilter,
    clearAllCompleted,
    toggleAll,
    editTask,
    state,
  } = useTodosReducer();

  const { todos, activeFilter } = state;
  const [filteredTodos, setFilteresTodos] = useState(todos);
  const valueProvider = {
    activeFilter,
    todos: filteredTodos,
    addTask,
    removeTask,
    toggleCompleteTask,
    setFilter,
    clearAllCompleted,
    toggleAll,
    editTask,
  };

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
    setFilteresTodos(newFilteredTodos);
  }, [todos, activeFilter]);

  return (
    <TodosContext.Provider value={valueProvider}>
      {children}
    </TodosContext.Provider>
  );
}
