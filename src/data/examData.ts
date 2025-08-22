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
  question: "What does the following declaration mean?",
  code: `int *p;`,
  language: "c",
  options: [
    "a) p is an integer",
    "b) p is a pointer to an integer",
    "c) p is an array of integers",
    "d) p is a function returning int"
  ],
  correctAnswer: 1,
  explanation: "The * indicates that p is a pointer to an integer."
},
{
  id: 2,
  question: "Which operator is used to access the value stored at the address a pointer is pointing to?",
  options: [
    "a) &",
    "b) *",
    "c) ->",
    "d) %"
  ],
  correctAnswer: 1,
  explanation: "The * operator dereferences a pointer to access the value at its address."
},
{
  id: 3,
  question: "What will the following print?",
  code: `int x = 10;
int *p = &x;
printf("%d", *p);`,
  language: "c",
  options: [
    "a) Address of x",
    "b) 10",
    "c) Garbage value",
    "d) Compilation error"
  ],
  correctAnswer: 1,
  explanation: "The pointer p stores the address of x, and *p dereferences it to print the value 10."
},
{
  id: 4,
  question: "Which of the following is valid pointer arithmetic?",
  options: [
    "a) p++",
    "b) p--",
    "c) p + 1",
    "d) All of the above"
  ],
  correctAnswer: 3,
  explanation: "All listed operations are valid forms of pointer arithmetic."
},
{
  id: 5,
  question: "Which of these correctly allocates memory dynamically for an array of 5 integers in C?",
  code: `int *p = malloc(5);`,
  language: "c",
  options: [
    "a) int *p = malloc(5);",
    "b) int *p = malloc(5 * sizeof(int));",
    "c) int *p = new int;",
    "d) int p[5];"
  ],
  correctAnswer: 1,
  explanation: "malloc requires size in bytes; malloc(5 * sizeof(int)) allocates enough memory for 5 integers."
},
{
  id: 6,
  question: "How do you correctly deallocate memory allocated by malloc()?",
  options: [
    "a) free(p);",
    "b) delete p;",
    "c) delete[] p;",
    "d) p = NULL;"
  ],
  correctAnswer: 0,
  explanation: "Memory allocated with malloc must be released using free()."
},{
  id: 16,
  question: "What is the size of a pointer on a 64-bit machine?",
  options: [
    "a) 4 bytes",
    "b) 8 bytes",
    "c) Depends on type",
    "d) Compiler dependent"
  ],
  correctAnswer: 1,
  explanation: "On a 64-bit machine, a pointer is typically 8 bytes regardless of type."
},
{
  id: 17,
  question: "Which function is used to allocate memory in C++ (not C)?",
  options: [
    "a) malloc()",
    "b) calloc()",
    "c) new",
    "d) alloc()"
  ],
  correctAnswer: 2,
  explanation: "In C++, the 'new' operator is used to allocate memory, unlike malloc() in C."
},
{
  id: 18,
  question: "What does the following expression return?",
  code: `&p - arr;`,
  language: "c",
  options: [
    "a) Difference between addresses in bytes",
    "b) Difference in array elements",
    "c) Compilation error",
    "d) Sum of addresses"
  ],
  correctAnswer: 1,
  explanation: "Subtracting two pointers gives the difference in array elements, not bytes."
},
{
  id: 19,
  question: "Which of these is correct for freeing memory allocated by new in C++?",
  options: [
    "a) free(p);",
    "b) delete p;",
    "c) delete[] p;",
    "d) delete p[];"
  ],
  correctAnswer: 1,
  explanation: "Memory allocated with 'new' must be released using 'delete'."
},
{
  id: 20,
  question: "What is the output?",
  code: `int a = 10;
int *p = &a;
printf("%p", p);`,
  language: "c",
  options: [
    "a) 10",
    "b) Memory address of a",
    "c) NULL",
    "d) Compilation error"
  ],
  correctAnswer: 1,
  explanation: "%p prints the memory address stored in the pointer."
},
{
  id: 21,
  question: "If p is a null pointer, what happens when you dereference it?",
  options: [
    "a) Returns 0",
    "b) Segmentation fault / runtime error",
    "c) Garbage value",
    "d) NULL"
  ],
  correctAnswer: 1,
  explanation: "Dereferencing a NULL pointer usually causes a segmentation fault."
},
{
  id: 22,
  question: "Which of the following is a pointer to an array?",
  options: [
    "a) int *p[5];",
    "b) int (*p)[5];",
    "c) int p[5];",
    "d) int p*;"
  ],
  correctAnswer: 1,
  explanation: "int (*p)[5] declares a pointer to an array of 5 integers."
},
{
  id: 23,
  question: "Which of these is true about void*?",
  options: [
    "a) Can hold address of any data type",
    "b) Can be dereferenced directly",
    "c) Can perform arithmetic operations",
    "d) Cannot be assigned"
  ],
  correctAnswer: 0,
  explanation: "A void* pointer can store the address of any data type, but cannot be directly dereferenced."
},
{
  id: 24,
  question: "What is the output?",
  code: `int x = 5;
int *p = &x;
*p += 3;
printf("%d", x);`,
  language: "c",
  options: [
    "a) 5",
    "b) 3",
    "c) 8",
    "d) Compilation error"
  ],
  correctAnswer: 2,
  explanation: "*p modifies the value of x directly, so x becomes 8."
},
{
  id: 25,
  question: "Pointer arithmetic is scaled by the size of the type pointed to. True or False?",
  options: [
    "a) True",
    "b) False"
  ],
  correctAnswer: 0,
  explanation: "Pointer arithmetic moves in multiples of the size of the type being pointed to."
},
{
  id: 26,
  question: "Which of these is not a way to initialize a pointer?",
  options: [
    "a) int *p = &x;",
    "b) int *p = NULL;",
    "c) int *p = 0;",
    "d) int *p = x;"
  ],
  correctAnswer: 3,
  explanation: "int *p = x; is invalid because x must be an address, not a value."
},
{
  id: 27,
  question: "What is a wild pointer?",
  options: [
    "a) Pointer initialized to NULL",
    "b) Pointer that has not been initialized",
    "c) Pointer pointing to freed memory",
    "d) Pointer to global variable"
  ],
  correctAnswer: 1,
  explanation: "A wild pointer is one that has not been initialized and points to an unknown location."
},
{
  id: 28,
  question: "Which of these statements about malloc() is false?",
  options: [
    "a) Allocates memory at runtime",
    "b) Returns a pointer to allocated memory",
    "c) Memory is initialized to zero",
    "d) Needs free() to release memory"
  ],
  correctAnswer: 2,
  explanation: "malloc does not initialize memory to zero; calloc does."
},
{
  id: 29,
  question: "What will the following code output?",
  code: `int arr[] = {1,2,3};
int *p = arr + 1;
printf("%d", *p);`,
  language: "c",
  options: [
    "a) 1",
    "b) 2",
    "c) 3",
    "d) Compilation error"
  ],
  correctAnswer: 1,
  explanation: "arr + 1 points to the second element of the array, which is 2."
},
{
  id: 30,
  question: "Which of the following statements is true?",
  options: [
    "a) int *p; allocates memory",
    "b) int *p = NULL; allocates memory",
    "c) int *p = malloc(sizeof(int)); allocates memory",
    "d) int *p = &NULL; allocates memory"
  ],
  correctAnswer: 2,
  explanation: "Only malloc (or new in C++) actually allocates memory; declarations alone do not."
}
];

export const examConfig = {
  title: " Pointers / Memory ",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};