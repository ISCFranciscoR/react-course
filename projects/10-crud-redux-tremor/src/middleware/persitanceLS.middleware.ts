import { Middleware } from '@reduxjs/toolkit';

export const persistanceLSMiddleware: Middleware = ( store ) => ( next ) => ( action ) => {
  next( action );
  localStorage.setItem( '__redux__state__', JSON.stringify( store.getState() ) );
};