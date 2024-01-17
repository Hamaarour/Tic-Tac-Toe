import React from "react";

export const Header = () => {
  return (
    <header className="text-center">
      <img
        className="w-32 object-contain mt-12 mr-auto ml-auto mb-1 shadow-md"
        src="game-logo.png"
        alt="Tic-Tac-Toe logo"
      />
      <h1 className="font-cursive text-3xl text-yel mt-0 mx-auto mb-12">
        Tic-Tac-Toe
      </h1>
    </header>
  );
};
