import { useDispatch } from 'react-redux';
import { UserId } from '../types';
import { User, addNewUser, deleteUserById } from '../store/users/slice';

export const useUserActions = () => {
  const dispatch = useDispatch();

  const removeUser = ( id: UserId ) => {
    dispatch( deleteUserById( id ) );
  };

  const addUser = ( user: User ) => {
    dispatch( addNewUser( user ) );
  };

  return { removeUser, addUser };
};