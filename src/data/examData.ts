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
    "p is an integer",
    "p is a pointer to an integer",
    "p is an array of integers",
    "p is a function returning int"
  ],
  correctAnswer: 1,
  explanation: "int *p; declares p as a pointer to an integer."
},
{
  id: 2,
  question: "Which operator is used to access the value stored at the address a pointer is pointing to?",
  code: ``,
  language: "c",
  options: [
    "&",
    "*",
    "->",
    "%"
  ],
  correctAnswer: 1,
  explanation: "The * operator is the dereference operator, used to access the value a pointer points to."
},
{
  id: 3,
  question: "What will the following print?",
  code: `int x = 10;
int *p = &x;
printf("%d", *p);`,
  language: "c",
  options: [
    "Address of x",
    "10",
    "Garbage value",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "*p dereferences p, printing the value stored in x (10)."
},
{
  id: 4,
  question: "Which of the following is valid pointer arithmetic?",
  code: ``,
  language: "c",
  options: [
    "p++",
    "p--",
    "p + 1",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Increment, decrement, and addition are valid pointer arithmetic operations."
},
{
  id: 5,
  question: "Which of these correctly allocates memory dynamically for an array of 5 integers in C?",
  code: ``,
  language: "c",
  options: [
    "int *p = malloc(5);",
    "int *p = malloc(5 * sizeof(int));",
    "int *p = new int;",
    "int p[5];"
  ],
  correctAnswer: 1,
  explanation: "malloc(5 * sizeof(int)) correctly allocates memory for 5 integers."
},
{
  id: 6,
  question: "How do you correctly deallocate memory allocated by malloc()?",
  code: ``,
  language: "c",
  options: [
    "free(p);",
    "delete p;",
    "delete[] p;",
    "p = NULL;"
  ],
  correctAnswer: 0,
  explanation: "Memory allocated with malloc() must be freed with free()."
},
{
  id: 7,
  question: "What is the value of p after p = NULL;?",
  code: ``,
  language: "c",
  options: [
    "Garbage value",
    "0 / null pointer",
    "Address of first element",
    "Undefined"
  ],
  correctAnswer: 1,
  explanation: "Assigning NULL to a pointer makes it a null pointer (value 0)."
},
{
  id: 8,
  question: "Which is true about dangling pointers?",
  code: ``,
  language: "c",
  options: [
    "Pointers pointing to freed memory",
    "Pointers initialized to NULL",
    "Pointers not pointing to anything",
    "Pointers pointing to static variables"
  ],
  correctAnswer: 0,
  explanation: "A dangling pointer points to memory that has been freed."
},
{
  id: 9,
  question: "Which of the following is a pointer to pointer declaration?",
  code: ``,
  language: "c",
  options: [
    "int **p;",
    "int *p*;",
    "int &p;",
    "int p*;"
  ],
  correctAnswer: 0,
  explanation: "int **p; declares a pointer to a pointer to int."
},
{
  id: 10,
  question: "What will the following code output?",
  code: `int arr[3] = {1,2,3};
int *p = arr;
printf("%d", *(p+2));`,
  language: "c",
  options: [
    "1",
    "2",
    "3",
    "Compilation error"
  ],
  correctAnswer: 2,
  explanation: "p points to arr, so *(p+2) is arr[2], which is 3."
},
{
  id: 11,
  question: "Which of these statements is correct in C++ for allocating an integer dynamically?",
  code: ``,
  language: "cpp",
  options: [
    "int *p = new int;",
    "int p = new int;",
    "int *p = malloc(sizeof(int));",
    "int p = malloc(sizeof(int));"
  ],
  correctAnswer: 0,
  explanation: "In C++, dynamic allocation for a single int is done with new: int *p = new int;"
},
{
  id: 12,
  question: "How do you access a member of a struct through a pointer?",
  code: ``,
  language: "c",
  options: [
    "ptr.member",
    "ptr->member",
    "*ptr.member",
    "&ptr.member"
  ],
  correctAnswer: 1,
  explanation: "The arrow operator (->) is used to access struct members via a pointer."
},
{
  id: 13,
  question: "Consider:",
  code: `char *str = "Hello";
str[0] = 'h';`,
  language: "c",
  options: [
    "Prints hello",
    "Prints Hello",
    "Compilation error",
    "Runtime error"
  ],
  correctAnswer: 3,
  explanation: "String literals are stored in read-only memory; modifying them causes a runtime error."
},
{
  id: 14,
  question: "Which of the following is not a valid pointer type in C?",
  code: ``,
  language: "c",
  options: [
    "int *p;",
    "float *p;",
    "char *p;",
    "int &p;"
  ],
  correctAnswer: 3,
  explanation: "int &p; is a reference, not a pointer, so it's invalid in C."
},
{
  id: 15,
  question: "What is the output of:",
  code: `int a = 5;
int *p = &a;
int **q = &p;
printf("%d", **q);`,
  language: "c",
  options: [
    "Address of a",
    "5",
    "Address of p",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "**q dereferences q to p, then dereferences p to a, giving 5."
}
,{
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