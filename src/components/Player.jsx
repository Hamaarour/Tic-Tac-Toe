import "../index.css";

import React, { useState } from "react";

export const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const editName = (e) => {
    setPlayerName(e.target.value);
  };
  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
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
            onChange={editName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-score">{symbol}</span>
      </span>
      <button className="btn-edit" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
