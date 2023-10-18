import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { SpeakerIcon } from './Icons';
import { useTranslate } from '../hooks/useTranslate';
import { VOICE_FOR_LANGUAGE } from '../constants/general';

interface Props {
  text: string;
}

export const TextToSpeech: React.FC<Props> = ({ text }) => {
  const speech2TextSupport = useRef<boolean>(false);
  const {
    state: { toLanguage },
  } = useTranslate();

  if ('speechSynthesis' in window) {
    speech2TextSupport.current = true;
  }

  if (speech2TextSupport.current === false) {
    console.error('Tu navegador no soporta "Text to Speech"');
  }

  const handleClick = () => {
    var msg = new SpeechSynthesisUtterance(text);
    msg.lang = VOICE_FOR_LANGUAGE[toLanguage];
    console.log(msg.lang);
    window.speechSynthesis.speak(msg);
  };

  return (
    speech2TextSupport.current && (
      <Button variant="link" className="p-0" onClick={handleClick}>
        <SpeakerIcon />
      </Button>
    )
  );
};
