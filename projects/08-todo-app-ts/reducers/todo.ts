import { todos as mockTodos } from '../src/mocks/todos';
import { Todo } from '../src/models/todo';
import { FILTER_TYPES, FilterType, TodoId } from '../src/types/types.d';

export interface TodoState {
  todos: Todo[];
  activeFilter: FilterType;
}

export const todoInitialState: TodoState = {
  todos: mockTodos,
  activeFilter: FILTER_TYPES.ALL
}

export const TODO_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  TOGGLE_COMPLETE_TASK: 'TOGGLE_COMPLETE_TASK',
  FILTER: 'SET_FILTER_TASKS',
  CLEAR: 'CLEAR_TASKS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  EDIT_TASK: 'EDIT_TASK'
}

export const todoReducer = ( state: TodoState, action ): TodoState => {
  const { type, payload } = action;
  const REDUCER = {
    [ TODO_ACTIONS.ADD_TASK ]: (): TodoState => {
      return {
        ...state,
        todos: [ ...state.todos, payload ]
      };
    },
    [ TODO_ACTIONS.REMOVE_TASK ]: (): TodoState => {
      const id: TodoId = payload;
      return {
        ...state,
        todos: state.todos.filter( ( _task: Todo ) => _task.id !== id )
      };
    },
    [ TODO_ACTIONS.TOGGLE_COMPLETE_TASK ]: (): TodoState => {
      const id: TodoId = payload;
      return {
        ...state,
        todos: state.todos.map( ( _task: Todo ) => {
          if ( _task.id === id ) {
            return {
              ..._task,
              completed: !_task.completed
            }
          }
          return _task;
        } )
      };
    },
    [ TODO_ACTIONS.FILTER ]: (): TodoState => {
      const filterType: FilterType = payload;
      return {
        ...state,
        activeFilter: filterType
      }
    },
    [ TODO_ACTIONS.TOGGLE_ALL ]: (): TodoState => {
      return {
        ...state, todos: state.todos.map( task => ( {
          ...task,
          completed: !task.completed
        } ) )
      }
    },
    [ TODO_ACTIONS.CLEAR ]: (): TodoState => {
      return {
        ...state,
        todos: state.todos.filter( task => !task.completed )
      }
    },
    [ TODO_ACTIONS.EDIT_TASK ]: (): TodoState => {
      const { id, title } = payload;
      const newTasks = state.todos.map( task => {
        if ( task.id === id ) {
          return { ...task, title }
        }
        return task;
      } );
      return {
        ...state,
        todos: newTasks
      }
    }

  }

  return REDUCER[ type ]() || todoInitialState;
}
