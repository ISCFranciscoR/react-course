import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setPosition({ x, y })
    };
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    } else {
      setPosition({ x: 0, y: 0 });
    }
    return () => window.removeEventListener('pointermove', handleMove);

  }, [enabled]);

  const handleClick = () => {
    setEnabled(!enabled);
  }

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={handleClick}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  );
}

export default App
