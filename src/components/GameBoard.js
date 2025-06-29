import React from 'react';
import './GameBoard.css';

const GameBoard = ({ words, selectedWords, onWordClick, isAnimating }) => {
  return (
    <div className="game-board">
      <div className="words-grid">
        {words.map((word) => (
          <div
            key={word.id}
            className={`word-tile ${
              selectedWords.includes(word.id) ? 'selected' : ''
            } ${isAnimating ? 'animating' : ''}`}
            onClick={() => onWordClick(word.id)}
          >
            <span className="word-text">{word.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
