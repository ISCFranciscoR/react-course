import { Todo } from '../src/models/todo';
import { FILTER_TYPES, FilterType, TodoId } from '../src/types/types.d';

export interface TodoState {
  todos: Todo[];
  sync: boolean;
  activeFilter: FilterType;
}

export const todoInitialState: TodoState = {
  todos: [],
  sync: false,
  activeFilter: FILTER_TYPES.ALL
}

export const TODO_ACTIONS = {
  INIT_TASKS: 'INIT_TASKS',
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  TOGGLE_COMPLETE_TASK: 'TOGGLE_COMPLETE_TASK',
  FILTER: 'SET_FILTER_TASKS',
  CLEAR: 'CLEAR_TASKS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  EDIT_TASK: 'EDIT_TASK'
}

type ActionTodoReducer = { type: typeof TODO_ACTIONS.INIT_TASKS, payload: Todo[] } |
{ type: typeof TODO_ACTIONS.ADD_TASK, payload: Todo } |
{ type: typeof TODO_ACTIONS.REMOVE_TASK, payload: TodoId } |
{ type: typeof TODO_ACTIONS.TOGGLE_COMPLETE_TASK, payload: boolean } |
{ type: typeof TODO_ACTIONS.FILTER, payload: FilterType } |
{ type: typeof TODO_ACTIONS.CLEAR } |
{ type: typeof TODO_ACTIONS.TOGGLE_ALL, payload: boolean } |
{ type: typeof TODO_ACTIONS.EDIT_TASK, payload: TodoId };

export const todoReducer = ( state: TodoState, action: ActionTodoReducer ): TodoState => {
  const { type, payload } = action;
  const REDUCER = {
    [ TODO_ACTIONS.INIT_TASKS ]: (): TodoState => {
      return {
        ...state,
        sync: false,
        todos: payload
      }
    },
    [ TODO_ACTIONS.ADD_TASK ]: (): TodoState => {
      return {
        ...state,
        sync: true,
        todos: [ ...state.todos, payload ]
      };
    },
    [ TODO_ACTIONS.REMOVE_TASK ]: (): TodoState => {
      const id: TodoId = payload;
      return {
        ...state,
        sync: true,
        todos: state.todos.filter( ( _task: Todo ) => _task.id !== id )
      };
    },
    [ TODO_ACTIONS.TOGGLE_COMPLETE_TASK ]: (): TodoState => {
      const id: TodoId = payload;
      return {
        ...state,
        sync: true,
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
        sync: false,
        activeFilter: filterType
      }
    },
    [ TODO_ACTIONS.TOGGLE_ALL ]: (): TodoState => {
      const completed = payload;
      return {
        ...state,
        sync: true,
        todos: state.todos.map( task => ( {
          ...task,
          completed
        } ) )
      }
    },
    [ TODO_ACTIONS.CLEAR ]: (): TodoState => {
      return {
        ...state,
        sync: true,
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
        sync: true,
        todos: newTasks
      }
    }

  }

  return REDUCER[ type ]() || todoInitialState;
}
