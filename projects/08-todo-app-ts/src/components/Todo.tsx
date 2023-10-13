import React, { useState } from 'react';
import { Todo as TodoModel } from '../models/todo';
import { useTodos } from '../hooks/useTodos';

interface Props extends TodoModel {}

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const { removeTask, toggleCompleteTask, editTask } = useTodos();
  const [editedTitle, setEditedTitle] = useState<string | ''>(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
    setIsEditing(false);
  };

  return (
    <>
      <div className="view">
        <input
          type="checkbox"
          className="toggle cursor-pointer"
          checked={completed}
          onChange={() => {
            toggleCompleteTask(id);
          }}
        />
        <label
          className="cursor-pointer"
          onDoubleClick={() => setIsEditing(true)}
        >
          {title}
        </label>
        <button
          className="destroy cursor-pointer"
          onClick={() => removeTask(id)}
        ></button>
      </div>
      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing(false);
        }}
      />
    </>
  );
};
