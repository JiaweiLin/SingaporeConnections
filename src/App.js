import React, { useState, useEffect } from 'react';
import './App.css';
import { getRandomPuzzleSet, shuffleArray } from './gameData';
import GameBoard from './components/GameBoard';
import GameHeader from './components/GameHeader';
import GameResults from './components/GameResults';
import HelpModal from './components/HelpModal';
import CompletionScreen from './components/CompletionScreen';

function App() {
  // Game state management
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [gameWords, setGameWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [solvedCategories, setSolvedCategories] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [showHelp, setShowHelp] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isAnimating, setIsAnimating] = useState(false);

  const MAX_MISTAKES = 4;

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  // Initialize a new game
  const initializeGame = () => {
    const puzzle = getRandomPuzzleSet();
    setCurrentPuzzle(puzzle);
    
    // Flatten all words from categories and shuffle them
    const allWords = puzzle.categories.flatMap(category => 
      category.words.map(word => ({
        text: word,
        category: category.name,
        difficulty: category.difficulty,
        id: Math.random().toString(36).substr(2, 9)
      }))
    );
    
    setGameWords(shuffleArray(allWords));
    setSelectedWords([]);
    setSolvedCategories([]);
    setMistakes(0);
    setGameStatus('playing');
    setFeedback({ message: '', type: '' });
    setIsAnimating(false);
  };

  // Handle word selection
  const handleWordClick = (wordId) => {
    if (isAnimating || gameStatus !== 'playing') return;

    const word = gameWords.find(w => w.id === wordId);
    if (!word) return;

    if (selectedWords.includes(wordId)) {
      // Deselect word
      setSelectedWords(selectedWords.filter(id => id !== wordId));
    } else if (selectedWords.length < 4) {
      // Select word
      setSelectedWords([...selectedWords, wordId]);
    }
  };

  // Check if selected words form a valid group
  const checkSelection = () => {
    if (selectedWords.length !== 4 || isAnimating) return;

    setIsAnimating(true);
    const selectedWordObjects = selectedWords.map(id => 
      gameWords.find(w => w.id === id)
    );

    // Check if all selected words belong to the same category
    const categories = [...new Set(selectedWordObjects.map(w => w.category))];
    
    if (categories.length === 1) {
      // Correct group found!
      const categoryName = categories[0];
      const categoryData = currentPuzzle.categories.find(cat => cat.name === categoryName);
      
      setSolvedCategories([...solvedCategories, {
        ...categoryData,
        words: selectedWordObjects.map(w => w.text)
      }]);
      
      // Remove solved words from game board
      setGameWords(gameWords.filter(w => !selectedWords.includes(w.id)));
      setSelectedWords([]);
      
      setFeedback({ 
        message: `Correct! ${categoryName}`, 
        type: 'success' 
      });

      // Check if game is won
      if (solvedCategories.length === 3) { // Will be 4 after this addition
        setTimeout(() => setGameStatus('won'), 1000);
      }
    } else {
      // Incorrect group
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setSelectedWords([]);
      
      setFeedback({ 
        message: `Not quite right. ${MAX_MISTAKES - newMistakes} mistakes remaining.`, 
        type: 'error' 
      });

      // Check if game is lost
      if (newMistakes >= MAX_MISTAKES) {
        setTimeout(() => setGameStatus('lost'), 1000);
      }
    }

    // Clear feedback after 3 seconds
    setTimeout(() => {
      setFeedback({ message: '', type: '' });
      setIsAnimating(false);
    }, 3000);
  };

  // Submit selection when 4 words are selected
  useEffect(() => {
    if (selectedWords.length === 4) {
      setTimeout(checkSelection, 500); // Small delay for better UX
    }
  }, [selectedWords]);

  // Shuffle remaining words
  const shuffleWords = () => {
    if (isAnimating) return;
    setGameWords(shuffleArray(gameWords));
    setSelectedWords([]);
  };

  // Deselect all words
  const deselectAll = () => {
    if (isAnimating) return;
    setSelectedWords([]);
  };

  return (
    <div className="App">
      <GameHeader 
        mistakes={mistakes}
        maxMistakes={MAX_MISTAKES}
        onHelp={() => setShowHelp(true)}
        onRestart={initializeGame}
      />

      {gameStatus === 'playing' && (
        <>
          <GameResults solvedCategories={solvedCategories} />
          
          <GameBoard
            words={gameWords}
            selectedWords={selectedWords}
            onWordClick={handleWordClick}
            isAnimating={isAnimating}
          />

          <div className="game-controls">
            <button 
              className="control-btn shuffle-btn"
              onClick={shuffleWords}
              disabled={isAnimating}
            >
              Shuffle
            </button>
            <button 
              className="control-btn deselect-btn"
              onClick={deselectAll}
              disabled={selectedWords.length === 0 || isAnimating}
            >
              Deselect All
            </button>
          </div>

          {feedback.message && (
            <div className={`feedback ${feedback.type}`}>
              {feedback.message}
            </div>
          )}
        </>
      )}

      {(gameStatus === 'won' || gameStatus === 'lost') && (
        <CompletionScreen
          gameStatus={gameStatus}
          solvedCategories={solvedCategories}
          totalCategories={4}
          mistakes={mistakes}
          maxMistakes={MAX_MISTAKES}
          puzzleName={currentPuzzle?.name}
          onRestart={initializeGame}
        />
      )}

      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}

export default App;
