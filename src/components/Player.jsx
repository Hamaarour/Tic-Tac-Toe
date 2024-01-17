import "../index.css";

import React, { useState } from "react";

export const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            type="text"
            defaultValue={name}
            required
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-score">{symbol}</span>
      </span>
      <button className="btn-edit" onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
};
