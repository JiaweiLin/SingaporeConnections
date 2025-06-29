import React from 'react';
import './CompletionScreen.css';

const CompletionScreen = ({ 
  gameStatus, 
  solvedCategories, 
  totalCategories, 
  mistakes, 
  maxMistakes, 
  puzzleName,
  onRestart 
}) => {
  const isWin = gameStatus === 'won';
  
  const getPerformanceRating = () => {
    if (!isWin) return 'Better luck next time!';
    
    if (mistakes === 0) return 'Perfect! 🏆';
    if (mistakes === 1) return 'Excellent! 🌟';
    if (mistakes === 2) return 'Great job! 👏';
    if (mistakes === 3) return 'Good effort! 👍';
    return 'You made it! 🎉';
  };

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

  return (
    <div className="completion-screen">
      <div className="completion-content">
        <div className={`completion-header ${isWin ? 'win' : 'lose'}`}>
          <div className="completion-icon">
            {isWin ? '🎉' : '😔'}
          </div>
          <h1 className="completion-title">
            {isWin ? 'Congratulations!' : 'Game Over'}
          </h1>
          <p className="completion-subtitle">
            {isWin 
              ? `You solved all categories in "${puzzleName}"!`
              : `You've used all ${maxMistakes} mistakes. Better luck next time!`
            }
          </p>
          <div className="performance-rating">
            {getPerformanceRating()}
          </div>
        </div>

        <div className="completion-stats">
          <div className="stat-item">
            <div className="stat-number">{solvedCategories.length}</div>
            <div className="stat-label">Categories Solved</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{mistakes}</div>
            <div className="stat-label">Mistakes Made</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{maxMistakes - mistakes}</div>
            <div className="stat-label">Mistakes Remaining</div>
          </div>
        </div>

        {solvedCategories.length > 0 && (
          <div className="solved-summary">
            <h3>Categories You Solved:</h3>
            <div className="solved-list">
              {solvedCategories.map((category, index) => (
                <div
                  key={index}
                  className="solved-item"
                  style={{ backgroundColor: getDifficultyColor(category.difficulty) }}
                >
                  <div className="solved-header">
                    <span className="solved-name">{category.name}</span>
                    <span className="solved-difficulty">
                      {getDifficultyLabel(category.difficulty)}
                    </span>
                  </div>
                  <div className="solved-words">
                    {category.words.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="completion-actions">
          <button className="play-again-btn" onClick={onRestart}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;
