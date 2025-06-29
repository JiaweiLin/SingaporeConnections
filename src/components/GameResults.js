import React from 'react';
import './GameResults.css';

const GameResults = ({ solvedCategories }) => {
  // Define difficulty colors
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'yellow': return '#ffeb3b';
      case 'green': return '#4caf50';
      case 'blue': return '#2196f3';
      case 'purple': return '#9c27b0';
      default: return '#e0e0e0';
    }
  };

  const getDifficultyLabel = (difficulty) => {
    switch (difficulty) {
      case 'yellow': return 'Easiest';
      case 'green': return 'Easy-Medium';
      case 'blue': return 'Medium-Hard';
      case 'purple': return 'Hardest';
      default: return '';
    }
  };

  if (solvedCategories.length === 0) {
    return null;
  }

  return (
    <div className="game-results">
      <h3 className="results-title">Solved Categories</h3>
      <div className="solved-categories">
        {solvedCategories.map((category, index) => (
          <div
            key={index}
            className="solved-category"
            style={{ backgroundColor: getDifficultyColor(category.difficulty) }}
          >
            <div className="category-header">
              <h4 className="category-name">{category.name}</h4>
              <span className="difficulty-label">
                {getDifficultyLabel(category.difficulty)}
              </span>
            </div>
            <div className="category-words">
              {category.words.join(' • ')}
            </div>
            <div className="category-description">
              {category.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameResults;
