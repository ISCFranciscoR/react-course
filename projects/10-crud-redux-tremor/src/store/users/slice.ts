import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserId } from '../../types';
import { users as DEFAULT_STATE } from '../../mocks/table-data';
import { getUUID } from '../../helpers/crypto';

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = ( () => {
  const persistedState = localStorage.getItem( '__redux__state__' );
  if ( persistedState ) {
    return JSON.parse( persistedState ).users;
  }
  return DEFAULT_STATE;
})();


export const usersSlice = createSlice( {
  name: 'users',
  initialState,
  reducers: {
    addNewUser: ( state, action: PayloadAction<User> ) => {
      const newUser = action.payload;
      return [ ...state, { ...newUser, id: getUUID } ];
    },
    deleteUserById: ( state, action:PayloadAction<UserId> ) => {
      const id = action.payload;
      return state.filter( user => user.id !== id );
    },
    rollbackUser: ( state, action: PayloadAction<UserWithId> ) => {
      const isUserInState = state.find( user => user.id === action.payload.id );
      if ( !isUserInState ) {
        return [ ...state, action.payload ];
      }
    }
  }
} );

export default usersSlice.reducer;
export const { deleteUserById, addNewUser, rollbackUser } = usersSlice.actions;