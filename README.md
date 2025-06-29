# Singapore Connections Game

A ReactJS puzzle game inspired by the New York Times Connections, featuring Singapore-themed categories including Singlish expressions, local food, landmarks, and cultural knowledge.

## 🎮 Game Features

- **4x4 Grid**: 16 clickable tiles with Singapore-related terms
- **4 Categories**: Each puzzle contains 4 groups of 4 related words
- **Difficulty Levels**: Color-coded from Yellow (easiest) to Purple (hardest)
- **Mistake Tracking**: Up to 4 mistakes allowed before game over
- **Multiple Puzzle Sets**: 5 different themed puzzle sets with random selection
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Singapore Theme**: Covers Singlish, food, landmarks, culture, and more

## 🌈 Difficulty Levels

- **🟡 Yellow (Easiest)**: Straightforward connections most people would know
- **🟢 Green (Easy-Medium)**: Requires some local Singapore knowledge  
- **🔵 Blue (Medium-Hard)**: Deeper Singapore knowledge or wordplay required
- **🟣 Purple (Hardest)**: Obscure connections, advanced wordplay, cultural nuances

## 🇸🇬 Singapore Categories Include

- **Singlish Expressions**: "Alamak", "Aiyo", "Wah Lau", "Paiseh"
- **Local Food**: Hawker center favorites and zi char dishes
- **Landmarks**: MRT stations, shopping malls, nature reserves
- **Culture**: Festivals, Peranakan heritage, local traditions
- **Government**: Statutory boards and agencies (CPF, HDB, LTA, NEA)
- **Geography**: Expressways, outer islands, neighborhoods

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎯 How to Play

1. **Select 4 tiles** that you think belong to the same category
2. **Automatic checking** happens when you select 4 tiles
3. **Correct groups** are revealed with their category name and difficulty color
4. **Incorrect guesses** count as mistakes (4 maximum)
5. **Win** by finding all 4 categories before making 4 mistakes
6. **Use controls** to shuffle tiles or deselect your current selection

## 🛠️ Technical Features

- **React Hooks**: Uses useState and useEffect for state management
- **Responsive CSS Grid**: Adapts to different screen sizes
- **Smooth Animations**: Tile interactions and category reveals
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Modular Components**: Easy to extend and maintain
- **Singapore Color Scheme**: Red, white, blue with gold accents

## 📁 Project Structure

```
src/
├── components/
│   ├── GameBoard.js          # 4x4 grid of word tiles
│   ├── GameHeader.js         # Title, mistakes counter, controls
│   ├── GameResults.js        # Display solved categories
│   ├── HelpModal.js          # Game instructions and rules
│   ├── CompletionScreen.js   # Win/lose screen with stats
│   └── *.css                 # Component-specific styles
├── gameData.js               # Puzzle sets and utility functions
├── App.js                    # Main game logic and state
├── App.css                   # Global styles
└── index.js                  # React app entry point
```

## 🎨 Customization

### Adding New Puzzle Sets

Edit `src/gameData.js` to add new puzzle sets:

```javascript
{
  id: 6,
  name: "Your Theme Name",
  categories: [
    {
      name: "Category Name",
      words: ["WORD1", "WORD2", "WORD3", "WORD4"],
      difficulty: "yellow", // yellow, green, blue, or purple
      description: "Description of the connection"
    },
    // ... 3 more categories
  ]
}
```

### Styling Customization

- **Colors**: Modify CSS custom properties in component stylesheets
- **Fonts**: Update font families in `src/index.css`
- **Layout**: Adjust grid layouts in component CSS files
- **Animations**: Modify transition and animation properties

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (irreversible)

## 🌟 Game Categories Examples

### Set 1: Singapore Essentials
- **Singlish Expressions** (Yellow): Common exclamations
- **Hawker Center Favorites** (Green): Iconic dishes
- **MRT Circle Line Stations** (Blue): Transit knowledge
- **Founding Fathers** (Purple): Historical figures

### Set 2: Cultural Singapore  
- **Singapore Icons** (Yellow): Famous landmarks
- **Local Fruits** (Green): Tropical fruits
- **Universities** (Blue): Educational institutions
- **Peranakan Culture** (Purple): Heritage elements

## 📱 Mobile Optimization

- Touch-friendly tile sizes
- Responsive typography
- Optimized layouts for small screens
- Swipe gestures support
- Portrait and landscape orientations

## 🎯 Future Enhancements

- Sound effects for correct/incorrect selections
- Daily puzzle mode
- Leaderboard and scoring system
- Social sharing of results
- Additional puzzle themes (Malaysian, regional)
- Hint system for difficult categories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add new puzzle sets or improve existing features
4. Test on multiple devices and screen sizes
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the New York Times Connections game
- Singapore cultural references and local knowledge
- React community for excellent documentation and tools
