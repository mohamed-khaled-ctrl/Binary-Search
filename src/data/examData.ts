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
    question: "Which of the following is the correct syntax to define a function in C++?",
    options: [
      "function int sum(int a, int b) {}",
      "int sum(int a, int b) {}",
      "def sum(a, b):",
      "int sum = (int a, int b) {}"
    ],
    correctAnswer: 1,
    explanation: "In C++, functions are defined with return type followed by function name and parameters in parentheses."
  },
  {
    id: 2,
    question: "What is the return type of a function that does not return any value?",
    options: [
      "void",
      "int",
      "char",
      "null"
    ],
    correctAnswer: 0,
    explanation: "The 'void' keyword is used to indicate that a function does not return any value."
  },
  {
    id: 3,
    question: "What will be printed by the following code?",
    code: `#include <stdio.h>
int add(int a, int b) {
    return a + b;
}
int main() {
    printf("%d", add(2, 3));
    return 0;
}`,
    language: "c",
    options: [
      "23",
      "5",
      "2",
      "Compilation Error"
    ],
    correctAnswer: 1,
    explanation: "The add function returns the sum of 2 and 3, which is 5."
  },
  {
    id: 4,
    question: "Which of the following is not a valid function call in C++?",
    options: [
      "sum(5, 10);",
      "sum();",
      "sum(,5);",
      "sum(a, b);"
    ],
    correctAnswer: 2,
    explanation: "Function calls cannot have empty parameters separated by commas. sum(,5) is invalid syntax."
  },
  {
    id: 5,
    question: "What is the output of this pseudo code?",
    code: `Procedure Test(x)
    x = x + 5
    Print x
EndProcedure

Call Test(10)`,
    language: "pseudocode",
    options: [
      "5",
      "10",
      "15",
      "Error"
    ],
    correctAnswer: 2,
    explanation: "The procedure adds 5 to the input parameter (10), so 10 + 5 = 15."
  },
  {
    id: 6,
    question: "Which of the following is true about recursive functions?",
    options: [
      "Cannot call themselves",
      "Must have a base case",
      "Never need a return value",
      "Always use loops"
    ],
    correctAnswer: 1,
    explanation: "Recursive functions must have a base case to prevent infinite recursion."
  },
  {
    id: 7,
    question: "What is the purpose of a return statement in a function?",
    options: [
      "To stop execution of main",
      "To return a value to the calling function",
      "To print a value",
      "To declare a variable"
    ],
    correctAnswer: 1,
    explanation: "The return statement is used to return a value to the function that called it."
  },
  {
    id: 8,
    question: "What will the following pseudo code print?",
    code: `Procedure CountDown(n)
    If n > 0 Then
        Print n
        Call CountDown(n - 1)
    EndIf
EndProcedure

Call CountDown(3)`,
    language: "pseudocode",
    options: [
      "3 2 1",
      "1 2 3",
      "0 1 2",
      "Infinite loop"
    ],
    correctAnswer: 0,
    explanation: "This recursive function prints n then calls itself with n-1, printing 3, then 2, then 1."
  },
  {
    id: 9,
    question: "Which of the following is pass by reference in C++?",
    options: [
      "void swap(int a, int b)",
      "void swap(int &a, int &b)",
      "int swap(int a, int b)",
      "int swap(int a, int &b)"
    ],
    correctAnswer: 1,
    explanation: "The & symbol indicates pass by reference, allowing the function to modify the original variables."
  },
  {
    id: 10,
    question: "What is the output of:",
    code: `#include <stdio.h>
void fun() {
    static int x = 0;
    x++;
    printf("%d ", x);
}
int main() {
    fun();
    fun();
    fun();
    return 0;
}`,
    language: "c",
    options: [
      "1 1 1",
      "1 2 3",
      "0 0 0",
      "Compilation Error"
    ],
    correctAnswer: 1,
    explanation: "Static variables retain their values between function calls, so x increments each time: 1, 2, 3."
  }
];

export const examConfig = {
  title: "Functions & Pseudo Code",
  duration: 20, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};