import { todos as mockTodos } from '../src/mocks/todos';
import { Todo } from '../src/models/todo';
import { FILTER_TYPES, FilterType, TodoId } from '../src/types/types.d';


interface TodoState {
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
  FILTER: 'FILTER_TASKS',
  CLEAR: 'CLEAR_TASKS'
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
      // const id: TodoId = payload;
      // const newState = todos.filter( ( _task: Todo ) => _task.id !== id );
      // return newState;
    },
    [ TODO_ACTIONS.TOGGLE_COMPLETE_TASK ]: (): TodoState => {
      // const id: TodoId = payload;
      // return todos.map( ( _task: Todo ) => {
      //   if ( _task.id === id ) {
      //     return {
      //       ..._task,
      //       completed: !_task.completed
      //     }
      //   }
      //   return _task;
      // } );
    },
    [ TODO_ACTIONS.FILTER ]: ( filterType: FilterType ): TodoState => {
      // const FILTERS_FNS = {
      //   [ FILTER_TYPES.ALL ]: () => {
      //     return todoInitialState;
      //   },
      //   [ FILTER_TYPES.ACTIVE ]: () => {
      //     return todos.filter( ( _task: Todo ) => !_task.completed )
      //   },
      //   [ FILTER_TYPES.COMPLETED ]: () => {
      //     return todos.filter( ( _task: Todo ) => _task.completed )
      //   }
      // }
      // return FILTERS_FNS[ filterType ]() || [];
    }
  }

  return REDUCER[ type ]() || todoInitialState;
}
