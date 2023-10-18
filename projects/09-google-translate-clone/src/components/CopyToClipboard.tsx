import React from 'react';
import { Button } from 'react-bootstrap';
import { ClipboardIcon } from './Icons';
import { toast } from 'react-hot-toast';

interface Props {
  valueToCopy: string;
}

export const CopyToClipboard: React.FC<Props> = ({ valueToCopy }) => {
  const handleClick = () => {
    if (!valueToCopy) return;
    navigator.clipboard.writeText(valueToCopy);
    toast.success('Texto copiado al portapapeles');
  };

  return (
    <Button variant="link" className="p-0" onClick={handleClick}>
      <ClipboardIcon />
    </Button>
  );
};
