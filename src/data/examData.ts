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
  question: "Binary Search works on:",
  code: ``,
  language: "",
  options: [
    "Sorted data only",
    "Unsorted data only",
    "Both sorted and unsorted data",
    "None of these"
  ],
  correctAnswer: 0,
  explanation: "Binary Search only works on sorted data because it repeatedly divides the search interval based on order."
},
{
  id: 2,
  question: "Time complexity of Binary Search in the worst case is:",
  code: ``,
  language: "",
  options: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n log n)"
  ],
  correctAnswer: 2,
  explanation: "In the worst case, Binary Search divides the search space log n times, giving O(log n)."
},
{
  id: 3,
  question: "Best-case time complexity of Binary Search is:",
  code: ``,
  language: "",
  options: [
    "O(n)",
    "O(1)",
    "O(log n)",
    "O(n log n)"
  ],
  correctAnswer: 1,
  explanation: "The best case occurs when the middle element is the target, requiring only one comparison (O(1))."
},
{
  id: 4,
  question: "Space complexity of iterative Binary Search is:",
  code: ``,
  language: "",
  options: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n log n)"
  ],
  correctAnswer: 0,
  explanation: "Iterative Binary Search uses only a few variables, so its space complexity is O(1)."
},
{
  id: 5,
  question: "Space complexity of recursive Binary Search is:",
  code: ``,
  language: "",
  options: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n log n)"
  ],
  correctAnswer: 2,
  explanation: "Recursive Binary Search uses function calls, consuming O(log n) space in the call stack."
},
{
  id: 6,
  question: "Binary Search is based on which algorithmic paradigm?",
  code: ``,
  language: "",
  options: [
    "Divide and Conquer",
    "Greedy",
    "Dynamic Programming",
    "Brute Force"
  ],
  correctAnswer: 0,
  explanation: "Binary Search divides the problem into halves, making it a Divide and Conquer algorithm."
},
{
  id: 7,
  question: "Binary Search can be applied to:",
  code: ``,
  language: "",
  options: [
    "Arrays only",
    "Linked lists only",
    "Arrays and linked lists (if random access is possible)",
    "Graphs"
  ],
  correctAnswer: 2,
  explanation: "Binary Search requires random access, so it can work on arrays and linked lists if random access is available."
},
{
  id: 8,
  question: "Which of these is a requirement for Binary Search?",
  code: ``,
  language: "",
  options: [
    "Data must be unsorted",
    "Data must be sorted",
    "Data must be numeric",
    "Data must be in ascending order only"
  ],
  correctAnswer: 1,
  explanation: "Binary Search requires the data to be sorted for correct results."
},
{
  id: 9,
  question: "Average-case time complexity of Binary Search is:",
  code: ``,
  language: "",
  options: [
    "O(1)",
    "O(n)",
    "O(log n)",
    "O(n log n)"
  ],
  correctAnswer: 2,
  explanation: "On average, Binary Search reduces the search space in O(log n) steps."
},
{
  id: 10,
  question: "Which of the following is NOT an advantage of Binary Search over Linear Search?",
  code: ``,
  language: "",
  options: [
    "Faster for large datasets",
    "Works on sorted data",
    "Can work on linked lists efficiently",
    "Reduces search range by half each step"
  ],
  correctAnswer: 2,
  explanation: "Binary Search is inefficient on linked lists due to sequential access."
},
{
  id: 11,
  question: "If the array has n elements, maximum comparisons in Binary Search are:",
  code: ``,
  language: "",
  options: [
    "n",
    "log₂n",
    "log₂n + 1",
    "n/2"
  ],
  correctAnswer: 2,
  explanation: "In the worst case, Binary Search performs about log₂n + 1 comparisons."
},
{
  id: 12,
  question: "Binary Search is faster than Linear Search when:",
  code: ``,
  language: "",
  options: [
    "Data is unsorted",
    "Data is sorted and large",
    "Data is small",
    "Always"
  ],
  correctAnswer: 1,
  explanation: "Binary Search outperforms Linear Search mainly on large, sorted datasets."
},
{
  id: 13,
  question: "In each step of Binary Search, we:",
  code: ``,
  language: "",
  options: [
    "Remove one element from search",
    "Remove half of the remaining elements from search",
    "Remove a quarter of the elements from search",
    "Double the number of elements checked"
  ],
  correctAnswer: 1,
  explanation: "Each step of Binary Search eliminates half of the remaining elements."
},
{
  id: 14,
  question: "Best case for Binary Search occurs when:",
  code: ``,
  language: "",
  options: [
    "Element is at the first position",
    "Element is at the middle position",
    "Element is at the last position",
    "Element is not in the list"
  ],
  correctAnswer: 1,
  explanation: "Best case is when the element is exactly at the middle, found in the first comparison."
},
{
  id: 15,
  question: "Binary Search is:",
  code: ``,
  language: "",
  options: [
    "Iterative only",
    "Recursive only",
    "Can be implemented iteratively or recursively",
    "None of these"
  ],
  correctAnswer: 2,
  explanation: "Binary Search can be implemented in both iterative and recursive ways."
},
{
  id: 16,
  question: "Binary Search on a linked list is inefficient because:",
  code: ``,
  language: "",
  options: [
    "Linked list has sequential access",
    "Linked list is always unsorted",
    "Linked list uses extra space",
    "Linked list nodes cannot be compared"
  ],
  correctAnswer: 0,
  explanation: "Binary Search requires random access, which linked lists do not support efficiently."
},
{
  id: 17,
  question: "Which of the following could cause Binary Search to fail?",
  code: ``,
  language: "",
  options: [
    "Array is sorted in ascending order",
    "Array is sorted in descending order but algorithm assumes ascending",
    "Array has duplicate elements",
    "Array size is large"
  ],
  correctAnswer: 1,
  explanation: "If the array is sorted in descending order but the algorithm assumes ascending, Binary Search fails."
},
{
  id: 18,
  question: "Binary Search’s efficiency advantage is most significant when:",
  code: ``,
  language: "",
  options: [
    "n is small",
    "n is large",
    "Data is in random order",
    "Data is in reverse order"
  ],
  correctAnswer: 1,
  explanation: "Binary Search is most useful for large datasets where reducing comparisons is critical."
},
{
  id: 19,
  question: "Binary Search can be modified to find:",
  code: ``,
  language: "",
  options: [
    "First occurrence of a key",
    "Last occurrence of a key",
    "Number of occurrences of a key",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "With slight modifications, Binary Search can find first, last, or count occurrences."
},
{
  id: 20,
  question: "Binary Search is NOT suitable when:",
  code: ``,
  language: "",
  options: [
    "Data is sorted",
    "Data is stored in arrays",
    "Data is frequently updated",
    "Data is static"
  ],
  correctAnswer: 2,
  explanation: "Binary Search is inefficient when data is frequently updated, as sorting must be maintained."
},
{
  id: 21,
  question: "Which sorting order works with Binary Search?",
  code: ``,
  language: "",
  options: [
    "Ascending only",
    "Descending only",
    "Both ascending and descending (with adjusted comparisons)",
    "None"
  ],
  correctAnswer: 2,
  explanation: "Binary Search can work in both ascending and descending order if comparisons are adjusted."
},
{
  id: 22,
  question: "In iterative Binary Search, loop continues while:",
  code: ``,
  language: "",
  options: [
    "low > high",
    "low ≤ high",
    "low == high",
    "None of these"
  ],
  correctAnswer: 1,
  explanation: "The loop continues while low ≤ high, ensuring the search range is valid."
},
{
  id: 23,
  question: "If array has 1000 elements, worst-case comparisons in Binary Search are:",
  code: ``,
  language: "",
  options: [
    "10",
    "1000",
    "500",
    "20"
  ],
  correctAnswer: 3,
  explanation: "log₂1000 ≈ 10, but worst-case requires about 20 comparisons depending on implementation."
},
{
  id: 24,
  question: "Binary Search is also known as:",
  code: ``,
  language: "",
  options: [
    "Half-interval search",
    "Divide search",
    "Sequential search",
    "Interval doubling search"
  ],
  correctAnswer: 0,
  explanation: "Binary Search is also called half-interval search since it halves the interval each step."
},
{
  id: 25,
  question: "If Binary Search is applied on unsorted data:",
  code: ``,
  language: "",
  options: [
    "It will still work correctly",
    "It will produce wrong results",
    "It will be slower but correct",
    "None of these"
  ],
  correctAnswer: 1,
  explanation: "Binary Search requires sorted data, otherwise results are incorrect."
},
{
  id: 26,
  question: "Recursive Binary Search may cause stack overflow when:",
  code: ``,
  language: "",
  options: [
    "Array is very large",
    "Element is at the start",
    "Element is at the end",
    "None of these"
  ],
  correctAnswer: 0,
  explanation: "Large recursion depth from big arrays can cause stack overflow."
},
{
  id: 27,
  question: "Binary Search can be adapted for floating-point numbers:",
  code: ``,
  language: "",
  options: [
    "No",
    "Yes, if the array is sorted",
    "Only for integers",
    "Only for strings"
  ],
  correctAnswer: 1,
  explanation: "Binary Search works on any sorted comparable data, including floating-point numbers."
},
{
  id: 28,
  question: "Binary Search is most useful in:",
  code: ``,
  language: "",
  options: [
    "Static datasets",
    "Frequently changing datasets",
    "Random datasets",
    "Graph datasets"
  ],
  correctAnswer: 0,
  explanation: "Binary Search is best for static datasets where data remains sorted."
},
{
  id: 29,
  question: "If we keep halving the search space in Binary Search, after k steps, the remaining elements are:",
  code: ``,
  language: "",
  options: [
    "n/2ᵏ",
    "n×2ᵏ",
    "log₂n",
    "n–k"
  ],
  correctAnswer: 0,
  explanation: "After k steps, the array size reduces to n/2ᵏ."
},
{
  id: 30,
  question: "Binary Search efficiency is due to:",
  code: ``,
  language: "",
  options: [
    "Skipping elements without checking them",
    "Checking every element in sequence",
    "Using hashing",
    "Using more memory"
  ],
  correctAnswer: 0,
  explanation: "Binary Search is efficient because it skips checking many elements by halving the search space."
}


];

export const examConfig = {
  title: "   Binary Search  ",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};