import React from 'react';
import './GameHeader.css';

const GameHeader = ({ mistakes, maxMistakes, onHelp, onRestart }) => {
  return (
    <header className="game-header">
      <div className="header-content">
        <div className="game-title">
          <h1>Singapore Connections</h1>
          <p className="game-subtitle">Find groups of 4 related Singapore terms</p>
        </div>
        
        <div className="game-stats">
          <div className="mistakes-counter">
            <span className="mistakes-label">Mistakes:</span>
            <div className="mistakes-dots">
              {Array.from({ length: maxMistakes }, (_, index) => (
                <div
                  key={index}
                  className={`mistake-dot ${index < mistakes ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="header-buttons">
          <button className="header-btn help-btn" onClick={onHelp}>
            Help
          </button>
          <button className="header-btn restart-btn" onClick={onRestart}>
            New Game
          </button>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
