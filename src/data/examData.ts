export interface Question {
  id: number;
  question: string;
  code?: string;
  language?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const examQuestions: Question[] = [
  {
  id: 1, 
  question: "What is an algorithm?", 
  code: ``,
  language: "", 
  options: [
    "A programming language",
    "Step-by-step procedure to solve a problem",
    "A type of hardware",
    "None of the above"
  ], 
  correctAnswer: 1, 
  explanation: "An algorithm is a finite, step-by-step procedure to solve a problem."
},

{
  id: 2, 
  question: "Which of the following is NOT a property of an algorithm?", 
  code: ``,
  language: "", 
  options: [
    "Finiteness",
    "Definiteness",
    "Ambiguity",
    "Input/Output"
  ], 
  correctAnswer: 2, 
  explanation: "Algorithms must be finite, definite, and have input/output. Ambiguity is not a property."
},

{
  id: 3, 
  question: "The efficiency of an algorithm is usually measured in terms of:", 
  code: ``,
  language: "", 
  options: [
    "Programming language",
    "Memory and time",
    "Hardware used",
    "Number of variables"
  ], 
  correctAnswer: 1, 
  explanation: "Efficiency is measured by analyzing time and memory usage."
},

{
  id: 4, 
  question: "Which of these describes the complexity of an algorithm?", 
  code: ``,
  language: "", 
  options: [
    "Execution time only",
    "Memory usage only",
    "Both execution time and memory usage",
    "Syntax errors"
  ], 
  correctAnswer: 2, 
  explanation: "Algorithm complexity considers both time and memory requirements."
},

{
  id: 5, 
  question: "A step-by-step solution to a problem is often expressed in:", 
  code: ``,
  language: "", 
  options: [
    "Flowchart",
    "Pseudocode",
    "Programming language",
    "All of the above"
  ], 
  correctAnswer: 3, 
  explanation: "Solutions can be expressed using flowcharts, pseudocode, or programming languages."
},

{
  id: 6, 
  question: "Which sorting algorithm is the simplest to implement but least efficient for large lists?", 
  code: ``,
  language: "", 
  options: [
    "Quick Sort",
    "Merge Sort",
    "Bubble Sort",
    "Heap Sort"
  ], 
  correctAnswer: 2, 
  explanation: "Bubble Sort is simple but inefficient for large inputs due to O(n²) complexity."
},

{
  id: 7, 
  question: "Which sorting algorithm has the best average-case complexity?", 
  code: ``,
  language: "", 
  options: [
    "Bubble Sort",
    "Insertion Sort",
    "Quick Sort",
    "Selection Sort"
  ], 
  correctAnswer: 2, 
  explanation: "Quick Sort has an average-case time complexity of O(n log n), better than others listed."
},

{
  id: 8, 
  question: "What is the worst-case time complexity of Bubble Sort?", 
  code: ``,
  language: "", 
  options: [
    "O(n)",
    "O(n²)",
    "O(log n)",
    "O(n log n)"
  ], 
  correctAnswer: 1, 
  explanation: "Bubble Sort’s worst-case complexity is O(n²) when the list is in reverse order."
},

{
  id: 9, 
  question: "Merge Sort is an example of which type of algorithm?", 
  code: ``,
  language: "", 
  options: [
    "Divide and Conquer",
    "Greedy",
    "Dynamic Programming",
    "Brute Force"
  ], 
  correctAnswer: 0, 
  explanation: "Merge Sort follows the divide and conquer approach to break down problems."
},

{
  id: 10, 
  question: "Which sorting algorithm is stable?", 
  code: ``,
  language: "", 
  options: [
    "Quick Sort",
    "Selection Sort",
    "Merge Sort",
    "Heap Sort"
  ], 
  correctAnswer: 2, 
  explanation: "Merge Sort is stable as it preserves the relative order of equal elements."
},
  {
  id: 11, 
  question: "Which searching algorithm works only on sorted arrays?", 
  code: ``,
  language: "",
  options: [
    "Linear Search",
    "Binary Search",
    "Hashing",
    "Breadth-First Search"
  ], 
  correctAnswer: 1, 
  explanation: "Binary Search requires the array to be sorted to work correctly."
},

{
  id: 12, 
  question: "What is the time complexity of Binary Search?", 
  code: ``,
  language: "",
  options: [
    "O(n)",
    "O(log n)",
    "O(n²)",
    "O(1)"
  ], 
  correctAnswer: 1, 
  explanation: "Binary Search divides the array in half each step, resulting in O(log n) complexity."
},

{
  id: 13, 
  question: "Linear Search is best suited for:", 
  code: ``,
  language: "",
  options: [
    "Large sorted arrays",
    "Small or unsorted arrays",
    "Trees",
    "Graphs"
  ], 
  correctAnswer: 1, 
  explanation: "Linear Search is efficient only for small datasets or unsorted arrays."
},

{
  id: 14, 
  question: "Hashing provides searching in:", 
  code: ``,
  language: "",
  options: [
    "O(n)",
    "O(log n)",
    "O(1)",
    "O(n²)"
  ], 
  correctAnswer: 2, 
  explanation: "Hashing allows constant time O(1) searching on average."
},

{
  id: 15, 
  question: "Which searching method is recursive by nature?", 
  code: ``,
  language: "",
  options: [
    "Linear Search",
    "Binary Search",
    "Hashing",
    "None of the above"
  ], 
  correctAnswer: 1, 
  explanation: "Binary Search can be naturally implemented using recursion."
},

{
  id: 16, 
  question: "What is the best case complexity of Quick Sort?", 
  code: ``,
  language: "",
  options: [
    "O(n²)",
    "O(n log n)",
    "O(log n)",
    "O(n)"
  ], 
  correctAnswer: 1, 
  explanation: "In the best case, Quick Sort partitions the array evenly, achieving O(n log n)."
},

{
  id: 17, 
  question: "What is the worst case complexity of Quick Sort?", 
  code: ``,
  language: "",
  options: [
    "O(n)",
    "O(n²)",
    "O(n log n)",
    "O(log n)"
  ], 
  correctAnswer: 1, 
  explanation: "If partitions are highly unbalanced, Quick Sort degrades to O(n²)."
},

{
  id: 18, 
  question: "Which complexity is faster: O(n log n) or O(n²)?", 
  code: ``,
  language: "",
  options: [
    "O(n log n)",
    "O(n²)",
    "Both are same",
    "Cannot decide"
  ], 
  correctAnswer: 0, 
  explanation: "O(n log n) grows slower than O(n²), so it is faster for large inputs."
},

{
  id: 19, 
  question: "What does “Big O” notation represent?", 
  code: ``,
  language: "",
  options: [
    "Space complexity only",
    "Time complexity only",
    "Upper bound of algorithm efficiency",
    "Lower bound of algorithm efficiency"
  ], 
  correctAnswer: 2, 
  explanation: "Big O gives the upper bound on the growth rate of an algorithm’s complexity."
},

{
  id: 20, 
  question: "Which algorithm has exponential complexity?", 
  code: ``,
  language: "",
  options: [
    "Merge Sort",
    "Fibonacci recursive solution",
    "Binary Search",
    "Quick Sort"
  ], 
  correctAnswer: 1, 
  explanation: "The naive recursive Fibonacci solution has exponential time complexity."
}
,
{
  id: 21,
  question: "Which algorithmic paradigm chooses the best option at each step?",
  code: ``,
  language: "",
  options: [
    "Divide & Conquer",
    "Dynamic Programming",
    "Greedy",
    "Backtracking"
  ],
  correctAnswer: 2,
  explanation: "The greedy paradigm makes the locally optimal choice at each step with the hope of reaching a global optimum."
},
{
  id: 22,
  question: "Dijkstra’s algorithm is an example of:",
  code: ``,
  language: "",
  options: [
    "Greedy",
    "Divide & Conquer",
    "Dynamic Programming",
    "Brute Force"
  ],
  correctAnswer: 0,
  explanation: "Dijkstra’s algorithm repeatedly selects the nearest unvisited node, which is a greedy approach."
},
{
  id: 23,
  question: "Merge Sort follows which paradigm?",
  code: ``,
  language: "",
  options: [
    "Greedy",
    "Divide & Conquer",
    "Dynamic Programming",
    "Brute Force"
  ],
  correctAnswer: 1,
  explanation: "Merge Sort divides the array into halves, recursively sorts them, and then merges the results, which is divide and conquer."
},
{
  id: 24,
  question: "Which of these problems can be solved efficiently using Greedy algorithm?",
  code: ``,
  language: "",
  options: [
    "Knapsack (0/1)",
    "Fractional Knapsack",
    "Fibonacci",
    "Tower of Hanoi"
  ],
  correctAnswer: 1,
  explanation: "Fractional Knapsack allows taking fractions of items, making a greedy choice optimal."
},
{
  id: 25,
  question: "Divide & Conquer works by:",
  code: ``,
  language: "",
  options: [
    "Solving smaller sub-problems and combining results",
    "Choosing optimal steps",
    "Using recursion only",
    "Iterating through all options"
  ],
  correctAnswer: 0,
  explanation: "Divide and Conquer breaks a problem into smaller sub-problems, solves them, and then combines the results."
},
{
  id: 26,
  question: "Which algorithm is used to find shortest path in a weighted graph?",
  code: ``,
  language: "",
  options: [
    "BFS",
    "DFS",
    "Dijkstra",
    "Linear Search"
  ],
  correctAnswer: 2,
  explanation: "Dijkstra’s algorithm efficiently finds the shortest path in weighted graphs with non-negative weights."
},
{
  id: 27,
  question: "Dynamic Programming is best for problems with:",
  code: ``,
  language: "",
  options: [
    "Overlapping subproblems",
    "No subproblems",
    "Recursive only",
    "Constant time"
  ],
  correctAnswer: 0,
  explanation: "Dynamic Programming solves problems with overlapping subproblems by storing and reusing previous results."
},
{
  id: 28,
  question: "Which of these is a greedy algorithm?",
  code: ``,
  language: "",
  options: [
    "Huffman coding",
    "Merge Sort",
    "Quick Sort",
    "Linear Search"
  ],
  correctAnswer: 0,
  explanation: "Huffman coding builds the optimal prefix code by repeatedly choosing the smallest frequency nodes, a greedy approach."
},
{
  id: 29,
  question: "Backtracking is commonly used in:",
  code: ``,
  language: "",
  options: [
    "Graph traversal",
    "Puzzle solving (like Sudoku)",
    "Sorting arrays",
    "Hashing"
  ],
  correctAnswer: 1,
  explanation: "Backtracking explores possible solutions and backtracks when a solution is not feasible, making it useful in puzzles like Sudoku."
},
{
  id: 30,
  question: "Which of the following is a divide and conquer algorithm?",
  code: ``,
  language: "",
  options: [
    "Binary Search",
    "Bubble Sort",
    "Linear Search",
    "Hashing"
  ],
  correctAnswer: 0,
  explanation: "Binary Search divides the search space in half at each step, which is divide and conquer."
}
];

export const examConfig = {
  title: "flowchart",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};