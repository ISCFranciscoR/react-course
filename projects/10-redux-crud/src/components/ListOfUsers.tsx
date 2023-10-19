import { users } from '../mocks/table-data';
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
} from '@tremor/react';


export const ListOfUsers = () => {
  return <Card>
    <Title>Lista de usuarios</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Id</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Github</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map( ( user ) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>
              <Text>{user.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              {user.github}
            </TableCell>
          </TableRow>
        ) )}
      </TableBody>
    </Table>
  </Card>;
};
