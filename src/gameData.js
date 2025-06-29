// Game data containing multiple sets of Singapore-themed puzzles
// Each puzzle set contains 4 categories with 4 words each
// Difficulty levels: yellow (easiest), green (easy-medium), blue (medium-hard), purple (hardest)

export const puzzleSets = [
  {
    id: 1,
    name: "Singapore Essentials",
    categories: [
      {
        name: "Singlish Expressions",
        words: ["ALAMAK", "AIYO", "WAH LAU", "PAISEH"],
        difficulty: "yellow",
        description: "Common Singlish exclamations and expressions"
      },
      {
        name: "Hawker Center Favorites",
        words: ["LAKSA", "CHAR KWAY TEOW", "HAINANESE CHICKEN RICE", "SATAY"],
        difficulty: "green",
        description: "Iconic Singapore dishes"
      },
      {
        name: "MRT Circle Line Stations",
        words: ["HARBOURFRONT", "BOTANIC GARDENS", "SERANGOON", "DHOBY GHAUT"],
        difficulty: "blue",
        description: "Stations on the Circle Line"
      },
      {
        name: "Singapore's Founding Fathers",
        words: ["LEE KUAN YEW", "GOH KENG SWEE", "S RAJARATNAM", "TOH CHIN CHYE"],
        difficulty: "purple",
        description: "Key figures in Singapore's independence"
      }
    ]
  },
  {
    id: 2,
    name: "Cultural Singapore",
    categories: [
      {
        name: "Singapore Icons",
        words: ["MERLION", "MARINA BAY SANDS", "GARDENS BY THE BAY", "SINGAPORE FLYER"],
        difficulty: "yellow",
        description: "Famous Singapore landmarks"
      },
      {
        name: "Local Fruits",
        words: ["DURIAN", "RAMBUTAN", "MANGOSTEEN", "DRAGON FRUIT"],
        difficulty: "green",
        description: "Tropical fruits popular in Singapore"
      },
      {
        name: "Singapore Universities",
        words: ["NUS", "NTU", "SMU", "SUTD"],
        difficulty: "blue",
        description: "Major universities in Singapore"
      },
      {
        name: "Peranakan Culture",
        words: ["NYONYA", "BABA", "SARONG KEBAYA", "KUEH"],
        difficulty: "purple",
        description: "Elements of Peranakan heritage"
      }
    ]
  },
  {
    id: 3,
    name: "Singapore Life",
    categories: [
      {
        name: "HDB Flat Types",
        words: ["STUDIO", "2-ROOM", "3-ROOM", "4-ROOM"],
        difficulty: "yellow",
        description: "Common HDB apartment sizes"
      },
      {
        name: "Singapore Festivals",
        words: ["CHINESE NEW YEAR", "DEEPAVALI", "HARI RAYA", "CHRISTMAS"],
        difficulty: "green",
        description: "Major festivals celebrated in Singapore"
      },
      {
        name: "Singapore Government Agencies",
        words: ["CPF", "HDB", "LTA", "NEA"],
        difficulty: "blue",
        description: "Key government statutory boards"
      },
      {
        name: "Singapore Slang for Money",
        words: ["MOOLAH", "DOUGH", "BREAD", "CHEDDAR"],
        difficulty: "purple",
        description: "Informal terms for money used locally"
      }
    ]
  },
  {
    id: 4,
    name: "Singapore Geography",
    categories: [
      {
        name: "Singapore Shopping Malls",
        words: ["ORCHARD ROAD", "VIVOCITY", "ION ORCHARD", "MARINA BAY SANDS"],
        difficulty: "yellow",
        description: "Popular shopping destinations"
      },
      {
        name: "Singapore Nature Reserves",
        words: ["BUKIT TIMAH", "MACRITCHIE", "SUNGEI BULOH", "LABRADOR"],
        difficulty: "green",
        description: "Protected natural areas"
      },
      {
        name: "Singapore Expressways",
        words: ["PIE", "CTE", "AYE", "ECP"],
        difficulty: "blue",
        description: "Major expressways (by abbreviation)"
      },
      {
        name: "Singapore's Outer Islands",
        words: ["SENTOSA", "KUSU", "ST JOHN'S", "SISTERS"],
        difficulty: "purple",
        description: "Islands around Singapore"
      }
    ]
  },
  {
    id: 5,
    name: "Singapore Food Culture",
    categories: [
      {
        name: "Kopi Shop Orders",
        words: ["KOPI", "KOPI O", "KOPI C", "TEH"],
        difficulty: "yellow",
        description: "Traditional coffee shop beverages"
      },
      {
        name: "Zi Char Dishes",
        words: ["SWEET AND SOUR PORK", "CEREAL PRAWNS", "SAMBAL KANGKUNG", "SALTED EGG CHICKEN"],
        difficulty: "green",
        description: "Popular zi char (economy rice) dishes"
      },
      {
        name: "Singapore Food Courts",
        words: ["NEWTON", "MAXWELL", "CHINATOWN COMPLEX", "TEKKA"],
        difficulty: "blue",
        description: "Famous hawker centers and food courts"
      },
      {
        name: "Peranakan Dishes",
        words: ["AYAM BUAH KELUAK", "OTAH", "KUEH PIE TEE", "RENDANG"],
        difficulty: "purple",
        description: "Traditional Peranakan cuisine"
      }
    ]
  }
];

// Utility function to get a random puzzle set
export const getRandomPuzzleSet = () => {
  const randomIndex = Math.floor(Math.random() * puzzleSets.length);
  return puzzleSets[randomIndex];
};

// Utility function to shuffle an array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
