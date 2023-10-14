import { Todo } from "../models/todo";

const API_URL = 'https://api.jsonbin.io/v3/b/65299e0e0574da7622b88512';
const API_KEY = '$2a$10$Wa/HsrFopjDkpkhXysUkUu8IJI8sSur2kA2YGlqtwqyIFAyfuCoS.';

export interface BinTodo {
  tasks: Todo[]
}

export const todoService = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await fetch( API_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
    } );
    if ( !response.ok ) {
      console.error( 'It wasn\'t able get Todo list' );
      return [];
    }
    const jsonResponse = await response.json();

    return jsonResponse?.record?.tasks || [];
  },
  updateTodos: async ( tasks: Todo[] ): Promise<boolean> => {
    const response = fetch( API_URL, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify( { tasks } )
    } );
    return ( await response ).ok;
  }

}

export default todoService;