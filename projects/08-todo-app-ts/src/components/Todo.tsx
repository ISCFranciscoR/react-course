import React, { useEffect, useRef, useState } from 'react';
import { Todo as TodoModel } from '../models/todo';
import { useTodos } from '../hooks/useTodos';
import { KEY_CODES } from '../constants/key-codes';

interface Props extends TodoModel {}

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const { removeTask, toggleCompleteTask, editTask } = useTodos();
  const [editedTitle, setEditedTitle] = useState<string | ''>(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const editTodoInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KEY_CODES.ENTER.key) {
      editTask({ id, title: editedTitle });
      setIsEditing(false);
      setEditedTitle('');
    }
  };

  const handleEnableEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      editTodoInput.current?.focus();
    }
  }, [isEditing]);

  const isEditingClass = isEditing ? ' isEditing' : '';

  return (
    <>
      <div className={`view ${isEditingClass}`}>
        <input
          type="checkbox"
          className="toggle cursor-pointer"
          checked={completed}
          onChange={() => {
            toggleCompleteTask(id);
          }}
        />
        <label className="cursor-pointer" onDoubleClick={handleEnableEdit}>
          {title}
        </label>
        <button
          className="destroy cursor-pointer"
          onClick={() => removeTask(id)}
        ></button>
      </div>
      <input
        ref={editTodoInput}
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
