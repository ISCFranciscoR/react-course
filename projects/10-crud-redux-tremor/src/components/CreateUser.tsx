import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
import React, { useEffect, useState } from 'react';
import { useUserActions } from '../hooks/useUserActions';

interface Props {

}

export const CreateUser: React.FC<Props> = () => {
  const { addUser } = useUserActions();
  const [ result, setResult ] = useState<'ok' | 'ko' | null>( null );

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setResult( null );
    const form = event.target as HTMLFormElement;
    const formData = new FormData( form );
    const userData = Object.fromEntries( formData );
    const name = userData.name as string;
    const email = userData.email as string;
    const github = userData.github as string;
    if ( !name || !email || !github ) {
      return setResult( 'ko' );
    }
    addUser( { name, email, github } );
    setResult( 'ok' );
    form.reset();
  };

  useEffect( () => {
    setTimeout( () => {
      if ( result !== null ) {
        setResult( null );
      }
    }, 5000 );
  }, [ result ] );

  return (
    <Card>
      <Title>Crear Usuario</Title>
      <form className='' onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Nombre"></TextInput>
        <TextInput name="email" placeholder="Email"></TextInput>
        <TextInput name="github" placeholder="Usuario Github"></TextInput>
        <div>
          <Button type="submit" style={{ marginTop: '16px' }}>Crear usuario</Button>
          <span>{result === 'ok' && <Badge color={'green'}>Guardado correctamente</Badge>}</span>
          <span>{result === 'ko' && <Badge color={'red'}>Error al guardar</Badge>}</span>
        </div>
      </form>
    </Card>
  );
};
