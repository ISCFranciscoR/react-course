import { useReducer } from 'react';
import {
  TODO_ACTIONS,
  todoInitialState,
  todoReducer,
} from '../../reducers/todo';
import { FilterType, TodoId } from '../types/types';
import { Todo } from '../models/todo';

export function useTodosReducer() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);

  const addTask = (task: Todo) => {
    dispatch({ type: TODO_ACTIONS.ADD_TASK, payload: task });
  };
  const removeTask = (id: TodoId) => {
    dispatch({ type: TODO_ACTIONS.REMOVE_TASK, payload: id });
  };
  const toggleCompleteTask = (id: TodoId) => {
    dispatch({ type: TODO_ACTIONS.TOGGLE_COMPLETE_TASK, payload: id });
  };
  const setFilter = (filterType: FilterType) => {
    dispatch({ type: TODO_ACTIONS.FILTER, payload: filterType });
  };
  const clearAllCompleted = () => {
    dispatch({ type: TODO_ACTIONS.CLEAR });
  };
  const toggleAll = () => {
    dispatch({ type: TODO_ACTIONS.TOGGLE_ALL });
  };
  const editTask = (task: { id: TodoId; title: string }) => {
    dispatch({ type: TODO_ACTIONS.EDIT_TASK, payload: task });
  };

  return {
    addTask,
    removeTask,
    toggleCompleteTask,
    setFilter,
    clearAllCompleted,
    toggleAll,
    editTask,
    state,
  };
}
