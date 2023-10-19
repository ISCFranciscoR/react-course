import { type UserId } from '../types';

interface User {
  id: UserId,
  name: string;
  email: string;
  github: string;
}
export const users: User[] = [
  {
    id: '1',
    name: 'Francisco Robles',
    email: 'iscfranciscorobles@outlook.com',
    github: 'ISCFranciscoR'
  },
  {
    id: '2',
    name: 'Ana Itza Balderas Chávez',
    email: 'ana.itza.balderas.chavez@gmail.com',
    github: 'ana.itza'
  },
  {
    id: '3',
    name: 'Jhon Due',
    email: 'jhon.due@gmail.com',
    github: 'jhon.due'
  },
  {
    id: '4',
    name: 'Jane Due',
    email: 'jane.due@gmail.com',
    github: 'jane.due'
  },
];