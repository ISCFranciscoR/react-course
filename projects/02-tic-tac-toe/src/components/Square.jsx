import { useRef } from "react";

export default function Square({ children, updateBoard, index, isSelected }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`; 
  const ref = useRef(null);

  const handleClick = () => {
    updateBoard(index, ref);
  }
  return (
    <div ref={ref} className={className} onClick={handleClick}>
      { children }
    </div>
  )
}
