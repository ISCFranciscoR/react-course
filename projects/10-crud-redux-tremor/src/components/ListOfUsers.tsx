
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from '@tremor/react';
import { EditIcon, RemoveIcon } from './core/Icons';
import { useAppSelector } from '../hooks/store.hook';
import { useUserActions } from '../hooks/useUserActions';


export const ListOfUsers = () => {
  const users = useAppSelector( state => state.users );
  const { removeUser } = useUserActions();

  return <Card>
    <Badge>{users?.length}</Badge>
    <Title>Lista de usuarios</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Id</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Github</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map( ( user, index ) => (
          <TableRow key={user.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className='column-avatar'>
              <img className="img-avatar" src={`https://unavatar.io/github/${user.github}`} alt={user.name} />
              <Text>{user.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              {user.github}
            </TableCell>
            <TableCell className='column-actions'>
              <RemoveIcon onClick={() => removeUser( user.id )} />
              <EditIcon />
            </TableCell>
          </TableRow>
        ) )}
      </TableBody>
    </Table>
  </Card>;
};
