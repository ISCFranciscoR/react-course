import { Middleware } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import { rollbackUser } from '../store/users/slice';
import { RootState } from '../store';

export const syncWithDatabase: Middleware = ( store ) => ( next ) => (action) => {
  const { type, payload } = action;
  const previousState: RootState = store.getState();
  
  next( action );
  
  if ( type === 'users/deleteUserById' ) {
    const userToRemove = previousState.users.find(user => user.id === payload );
    fetch( `https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    } ).then( res => {
      if ( res.ok ) toast.success( 'El usuario se ha eliminado con éxito' );
    } ).catch( (err: Error) => {
      if ( userToRemove ) {
        store.dispatch( rollbackUser(userToRemove) );
      }
      toast.error( err.message );
    });
  }
};