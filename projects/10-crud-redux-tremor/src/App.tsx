import { Provider } from 'react-redux';
import './App.css';
import { ListOfUsers } from './components/ListOfUsers';
import { store } from './store/index';
import { CreateUser } from './components/CreateUser';
import { Toaster } from 'sonner';

export default function App() {
  return <>
    <Provider store={store}>
      <Toaster richColors />
      <ListOfUsers />
      <br />
      <CreateUser />
    </Provider>
  </>;
}

