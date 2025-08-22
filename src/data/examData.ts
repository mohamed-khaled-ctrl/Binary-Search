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
  question: "What is the output of the following code?", 
  code: `int arr[5] = {1,2,3,4,5}; 
printf("%d", arr[2]);`, 
  language: "c", 
  options: [
    "1",
    "2",
    "3",
    "5"
  ], 
  correctAnswer: 2, 
  explanation: "Array indexing in C starts from 0, so arr[2] refers to the 3rd element which is 3."
},{
  id: 2, 
  question: "Which loop is guaranteed to execute at least once?", 
  code: ``, 
  language: ``, 
  options: [
    "for",
    "while",
    "do-while",
    "None"
  ], 
  correctAnswer: 2, 
  explanation: "A do-while loop executes the body first and then checks the condition, so it runs at least once."
},{
  id: 3, 
  question: "What is the output?", 
  code: `for(int i=0; i<3; i++) 
printf("%d", i);`, 
  language: "c", 
  options: [
    "0 1 2",
    "1 2 3",
    "0 1 2 3",
    "Compilation error"
  ], 
  correctAnswer: 0, 
  explanation: "The loop prints values of i from 0 to 2, so output is 0 1 2."
},{
  id: 4, 
  question: "How do you calculate the length of a string char str[]=\"Hello\";?", 
  code: ``, 
  language: ``, 
  options: [
    "sizeof(str)",
    "strlen(str)",
    "str.length()",
    "strsize(str)"
  ], 
  correctAnswer: 1, 
  explanation: "strlen(str) gives the actual length of the string (5 in this case)."
},{
  id: 5, 
  question: "What is the index of the first element in an array?", 
  code: ``, 
  language: ``, 
  options: [
    "1",
    "0",
    "-1",
    "Depends on array size"
  ], 
  correctAnswer: 1, 
  explanation: "In C, arrays are 0-indexed, so the first element is at index 0."
},{
  id: 6, 
  question: "Output of the code?", 
  code: `int arr[3]={1,2,3}; 
for(int i=0;i<3;i++) 
arr[i] = arr[i]*2; 
printf("%d", arr[1]);`, 
  language: "c", 
  options: [
    "2",
    "4",
    "6",
    "1"
  ], 
  correctAnswer: 1, 
  explanation: "arr[1] is originally 2, multiplied by 2 becomes 4."
},{
  id: 7, 
  question: "Which of the following is a valid string initialization?", 
  code: ``, 
  language: ``, 
  options: [
    "char s[5] = \"Hello\";",
    "char s[] = \"Hello\";",
    "char s[3] = \"Hi\";",
    "All of the above"
  ], 
  correctAnswer: 1, 
  explanation: "Only char s[] = \"Hello\"; is valid because it automatically sets the correct size."
},{
  id: 8, 
  question: "Output of the code?", 
  code: `int i = 0; 
while(i<3){ 
printf("%d", i); 
i++; 
}`, 
  language: "c", 
  options: [
    "0 1 2",
    "1 2 3",
    "Infinite loop",
    "Compilation error"
  ], 
  correctAnswer: 0, 
  explanation: "The while loop prints i starting from 0 and increments until 2."
},{
  id: 9, 
  question: "Which function concatenates two strings in C?", 
  code: ``, 
  language: ``, 
  options: [
    "stradd()",
    "strcat()",
    "strcpy()",
    "strmerge()"
  ], 
  correctAnswer: 1, 
  explanation: "strcat() is the standard C function to concatenate strings."
},{
  id: 10, 
  question: "What is wrong with the following array declaration?", 
  code: `int arr[5] = {1,2,3,4,5,6};`, 
  language: "c", 
  options: [
    "Nothing",
    "Too many initializers",
    "Size too small",
    "Array cannot store integers"
  ], 
  correctAnswer: 1, 
  explanation: "The array size is 5, but 6 values are provided, which causes 'too many initializers' error."
}
,
{
  id: 11, 
  question: "Output of the code?", 
  code: `int arr[4] = {1}; 
printf("%d", arr[2]);`, 
  language: "c", 
  options: [
    "0",
    "1",
    "Garbage value",
    "Compilation error"
  ], 
  correctAnswer: 0, 
  explanation: "When partially initialized, remaining array elements are set to 0, so arr[2] is 0."
},{
  id: 12, 
  question: "How to skip current iteration in a loop?", 
  code: ``, 
  language: ``, 
  options: [
    "break",
    "continue",
    "return",
    "exit"
  ], 
  correctAnswer: 1, 
  explanation: "continue skips the current iteration and moves to the next loop cycle."
},{
  id: 13, 
  question: "What is the output?", 
  code: `char str[] = "CPlus"; 
printf("%c", str[4]);`, 
  language: "c", 
  options: [
    "C",
    "P",
    "s",
    "Compilation error"
  ], 
  correctAnswer: 2, 
  explanation: "Index 4 corresponds to the 5th character in 'CPlus', which is 's'."
},{
  id: 14, 
  question: "Which of the following is true for arrays?", 
  code: ``, 
  language: ``, 
  options: [
    "Array size must be constant in C",
    "Arrays can store different data types",
    "Arrays are dynamic by default",
    "Array index starts from 1"
  ], 
  correctAnswer: 0, 
  explanation: "In C, array size must be a fixed constant defined at compile time."
},{
  id: 15, 
  question: "Output of nested loops?", 
  code: `for(int i=0;i<2;i++){ 
for(int j=0;j<2;j++) 
printf("%d", j); 
}`, 
  language: "c", 
  options: [
    "00 11",
    "01 01",
    "0123",
    "0011"
  ], 
  correctAnswer: 1, 
  explanation: "Inner loop prints 0 then 1 for each iteration of outer loop, so output is 01 01."
},{
  id: 16, 
  question: "Which function copies one string into another?", 
  code: ``, 
  language: ``, 
  options: [
    "strcpy(dest, src)",
    "strcat(dest, src)",
    "strlen(str)",
    "strcmp(str1,str2)"
  ], 
  correctAnswer: 0, 
  explanation: "strcpy copies contents of source string into destination string."
},{
  id: 17, 
  question: "What is the output?", 
  code: `int i=0; 
do{ 
printf("%d", i); 
i++; 
}while(i>3);`, 
  language: "c", 
  options: [
    "0",
    "0123",
    "Infinite loop",
    "Compilation error"
  ], 
  correctAnswer: 0, 
  explanation: "do-while executes once before checking condition, so it prints 0."
},{
  id: 18, 
  question: "Which of the following is a 2D array declaration?", 
  code: ``, 
  language: ``, 
  options: [
    "int arr[3];",
    "int arr[3][4];",
    "int arr[];",
    "int arr[4,3];"
  ], 
  correctAnswer: 1, 
  explanation: "int arr[3][4]; is the correct way to declare a 2D array in C."
},{
  id: 19, 
  question: "Output?", 
  code: `char str[]="Hi"; 
str[0]='h'; 
printf("%s", str);`, 
  language: "c", 
  options: [
    "Hi",
    "hi",
    "Compilation error",
    "H"
  ], 
  correctAnswer: 1, 
  explanation: "str[0] is changed from 'H' to 'h', so the string becomes 'hi'."
},{
  id: 20, 
  question: "Which of the following statements is true about break?", 
  code: ``, 
  language: ``, 
  options: [
    "Stops current iteration",
    "Exits the loop completely",
    "Skips next iteration",
    "Exits the function"
  ], 
  correctAnswer: 1, 
  explanation: "break immediately exits the loop, not just the current iteration."
}
,
{
  id: 21, 
  question: "What is the output?", 
  code: `int arr[3]={2,4,6}; 
printf("%d", arr[3]);`, 
  language: "c", 
  options: [
    "6",
    "0",
    "Garbage value",
    "Compilation error"
  ], 
  correctAnswer: 2, 
  explanation: "Accessing arr[3] is out of bounds since valid indices are 0–2, so it gives a garbage value."
},
{
  id: 22, 
  question: "How to compare two strings?", 
  code: ``, 
  language: ``, 
  options: [
    "strcomp(str1,str2)",
    "strcmp(str1,str2)",
    "strcompare(str1,str2)",
    "strmatch(str1,str2)"
  ], 
  correctAnswer: 1, 
  explanation: "strcmp is the standard C function used to compare two strings."
},
{
  id: 23, 
  question: "Which is infinite loop?", 
  code: ``, 
  language: ``, 
  options: [
    "for(;;)",
    "while(1)",
    "do{}while(1)",
    "All of the above"
  ], 
  correctAnswer: 3, 
  explanation: "All listed constructs represent infinite loops in C."
},
{
  id: 24, 
  question: "Output of the code?", 
  code: `int arr[]={1,2,3}; 
printf("%d", sizeof(arr)/sizeof(arr[0]));`, 
  language: "c", 
  options: [
    "1",
    "3",
    "4",
    "Compilation error"
  ], 
  correctAnswer: 1, 
  explanation: "sizeof(arr)/sizeof(arr[0]) calculates the number of elements, which is 3."
},
{
  id: 25, 
  question: "Which loop is preferred when number of iterations is known?", 
  code: ``, 
  language: ``, 
  options: [
    "while",
    "do-while",
    "for",
    "goto"
  ], 
  correctAnswer: 2, 
  explanation: "The for loop is preferred when the number of iterations is known."
},
{
  id: 26, 
  question: "What is the value of arr[0] after execution?", 
  code: `int arr[2]={0}; 
arr[0]+=5;`, 
  language: "c", 
  options: [
    "0",
    "5",
    "Garbage",
    "Compilation error"
  ], 
  correctAnswer: 1, 
  explanation: "arr[0] starts at 0 and then 5 is added, so the value becomes 5."
},
{
  id: 27, 
  question: "Which of the following is correct for string termination?", 
  code: ``, 
  language: ``, 
  options: [
    "Strings must end with \\n",
    "Strings must end with \\0",
    "Strings must end with NULL",
    "Strings have no terminator"
  ], 
  correctAnswer: 1, 
  explanation: "C strings must end with a null character '\\0'."
},
{
  id: 28, 
  question: "Output of code?", 
  code: `int i=1; 
for(;i<=3;i++) 
printf("%d", i);`, 
  language: "c", 
  options: [
    "123",
    "0123",
    "1 2 3",
    "Compilation error"
  ], 
  correctAnswer: 0, 
  explanation: "Loop prints i from 1 to 3 without spaces, so output is 123."
},
{
  id: 29, 
  question: "What is the correct way to declare a character array of size 10?", 
  code: ``, 
  language: ``, 
  options: [
    "char arr[10];",
    "char arr;",
    "char arr[10]=\"\";",
    "char arr=\"\";"
  ], 
  correctAnswer: 0, 
  explanation: "char arr[10]; correctly declares a character array of size 10."
},
{
  id: 30, 
  question: "What is the output?", 
  code: `int arr[5]={0}; 
for(int i=0;i<5;i++){ 
arr[i]=i+1; 
printf("%d", arr[i]); 
}`, 
  language: "c", 
  options: [
    "12345",
    "01234",
    "11111",
    "54321"
  ], 
  correctAnswer: 0, 
  explanation: "arr[i] takes values 1 to 5, so the output is 12345."
},
{
  id: 31,
  question: "What is the output?",
  code: `#include<stdio.h> 
int main() { 
int a = 5; 
printf("%d", a++); 
return 0; 
}`,
  language: "c",
  options: [
    "5",
    "6",
    "0",
    "Compilation error"
  ],
  correctAnswer: 0,
  explanation: "a++ prints the current value (5), then increments."
},
{
  id: 32,
  question: "Which is the correct way to declare a pointer?",
  options: [
    "int *p;",
    "int p*;",
    "int &p;",
    "int p;"
  ],
  correctAnswer: 0,
  explanation: "Pointers are declared with * after the type, e.g., int *p."
},
{
  id: 33,
  question: "What is the output?",
  code: `#include<stdio.h> 
int main() { 
char str[] = "Hello"; 
str[0] = 'h'; 
printf("%s", str); 
return 0; 
}`,
  language: "c",
  options: [
    "hello",
    "Hello",
    "Compilation error",
    "Runtime error"
  ],
  correctAnswer: 0,
  explanation: "First character is changed to 'h', so output is hello."
},
{
  id: 34,
  question: "Scope resolution operator in C++ is:",
  options: [
    "::",
    "->",
    ".",
    "&"
  ],
  correctAnswer: 0,
  explanation: "The scope resolution operator in C++ is ::"
},
{
  id: 35,
  question: "Output of:",
  code: `#include<stdio.h> 
int main() { 
int x = 10, y = 20, z = 30; 
printf("%d", x, y, z); 
return 0; 
}`,
  language: "c",
  options: [
    "10",
    "30",
    "Compilation error",
    "Undefined behavior"
  ],
  correctAnswer: 0,
  explanation: "printf uses only the first argument for %d, so 10 is printed."
},
{
  id: 36,
  question: "Which is the correct way to declare an array?",
  options: [
    "int arr[5];",
    "int arr();",
    "int arr;",
    "array arr[5];"
  ],
  correctAnswer: 0,
  explanation: "Correct syntax is int arr[5]; to declare an array of 5 integers."
},
{
  id: 37,
  question: "What is printed?",
  code: `#include<stdio.h> 
int main() { 
int a = printf("CppBuzz.com"); 
printf("%d", a); 
return 0; 
}`,
  language: "c",
  options: [
    "Compilation error",
    "0",
    "CppBuzz.com",
    "CppBuzz.com11"
  ],
  correctAnswer: 3,
  explanation: "printf prints 'CppBuzz.com' and returns 11, so output is CppBuzz.com11."
},
{
  id: 38,
  question: "Which operator is used for address-of in C/C++?",
  options: [
    "*",
    "&",
    "->",
    "%"
  ],
  correctAnswer: 1,
  explanation: "The address-of operator is &."
},
{
  id: 39,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int i = 0; 
for(; i < 3; i++); 
printf("%d", i); 
return 0; 
}`,
  language: "c",
  options: [
    "0",
    "2",
    "3",
    "Compilation error"
  ],
  correctAnswer: 2,
  explanation: "The loop runs until i=3, then exits; printf prints 3."
},
{
  id: 40,
  question: "What is printed?",
  code: `#include<stdio.h> 
int main() { 
int x; 
x = 10, 20, 30; 
printf("%d", x); 
return 0; 
}`,
  language: "c",
  options: [
    "10",
    "20",
    "30",
    "Compilation error"
  ],
  correctAnswer: 0,
  explanation: "Comma operator assigns 10 to x; 20 and 30 are ignored."
},
{
  id: 41,
  question: "What is output?",
  code: `#include<stdio.h> 
int main() { 
char *p = "Hello"; 
p[0] = 'h'; 
printf("%s", p); 
return 0; 
}`,
  language: "c",
  options: [
    "hello",
    "Hello",
    "Compilation error",
    "Runtime error"
  ],
  correctAnswer: 3,
  explanation: "String literals are stored in read-only memory; modifying them causes runtime error."
},
{
  id: 42,
  question: "Output?",
  code: `#include<iostream> 
using namespace std; 
int main() { 
int x = 10; 
cout << x++; 
return 0; 
}`,
  language: "cpp",
  options: [
    "10",
    "11",
    "Compilation error",
    "0"
  ],
  correctAnswer: 0,
  explanation: "Post-increment prints current value (10) then increments."
},
{
  id: 43,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int a = 5, b = 2; 
printf("%d", a / b); 
return 0; 
}`,
  language: "c",
  options: [
    "2.5",
    "2",
    "3",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "Integer division truncates, so 5/2 = 2."
},
{
  id: 44,
  question: "Which of these is invalid?",
  options: [
    "int arr[5];",
    "int arr[] = {1,2,3};",
    "int arr[5] = {1,2,3,4,5,6};",
    "int arr[5] = {0};"
  ],
  correctAnswer: 2,
  explanation: "Array of size 5 cannot hold 6 initializers."
},
{
  id: 45,
  question: "What is printed?",
  code: `#include<stdio.h> 
int main() { 
int a = 1, b = 2, c = 3; 
printf("%d", a<b && b<c); 
return 0; 
}`,
  language: "c",
  options: [
    "0",
    "1",
    "2",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "Both conditions are true, so logical AND gives 1."
},
{
  id: 46,
  question: "Which is correct?",
  options: [
    "int *p = NULL;",
    "int &p = 0;",
    "int p* = NULL;",
    "int p = &NULL;"
  ],
  correctAnswer: 0,
  explanation: "Correct syntax for null pointer initialization is int *p = NULL;"
},
{
  id: 47,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int x = 3; 
printf("%d", ++x * 2); 
return 0; 
}`,
  language: "c",
  options: [
    "6",
    "8",
    "7",
    "5"
  ],
  correctAnswer: 1,
  explanation: "++x makes x=4, then multiplied by 2 gives 8."
},
{
  id: 48,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int a = 2, b = 3; 
printf("%d", a>b ? a : b); 
return 0; 
}`,
  language: "c",
  options: [
    "2",
    "3",
    "Compilation error",
    "Undefined"
  ],
  correctAnswer: 1,
  explanation: "a > b is false, so ternary returns b (3)."
},
{
  id: 49,
  question: "Which is correct syntax?",
  options: [
    "int main()",
    "void main()",
    "main()",
    "main(void)"
  ],
  correctAnswer: 0,
  explanation: "Standard C syntax is int main(); main(void) is also valid."
},
{
  id: 50,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
char c = 'A'; 
printf("%c %d", c, c); 
return 0; 
}`,
  language: "c",
  options: [
    "A 65",
    "A A",
    "65 65",
    "Compilation error"
  ],
  correctAnswer: 0,
  explanation: "'A' prints as character A and ASCII value 65."
},
{
  id: 51,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int i = 5; 
printf("%d %d", i, i++); 
return 0; 
}`,
  language: "c",
  options: [
    "5 6",
    "6 5",
    "Undefined behavior",
    "Compilation error"
  ],
  correctAnswer: 2,
  explanation: "Using the same variable with modification and access in one statement is undefined behavior."
},
{
  id: 52,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int arr[3] = {1,2,3}; 
printf("%d", arr[2]); 
return 0; 
}`,
  language: "c",
  options: [
    "1",
    "2",
    "3",
    "Compilation error"
  ],
  correctAnswer: 2,
  explanation: "arr[2] refers to the third element, which is 3."
},
{
  id: 53,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int x = 1; 
if(x = 0) 
printf("Yes"); 
else 
printf("No"); 
return 0; 
}`,
  language: "c",
  options: [
    "Yes",
    "No",
    "Compilation error",
    "Undefined behavior"
  ],
  correctAnswer: 1,
  explanation: "x=0 assigns 0 to x, which is false, so 'No' is printed."
},
{
  id: 54,
  question: "What is printed?",
  code: `#include<stdio.h> 
int main() { 
printf("%d", sizeof(char)); 
return 0; 
}`,
  language: "c",
  options: [
    "1",
    "2",
    "4",
    "8"
  ],
  correctAnswer: 0,
  explanation: "sizeof(char) is always 1 byte."
},
{
  id: 55,
  question: "Which is correct comment in C/C++?",
  options: [
    "// Comment",
    "/* Comment */",
    "# Comment",
    "a & b"
  ],
  correctAnswer: 3,
  explanation: "C/C++ supports // single-line and /* */ multi-line comments."
},
{
  id: 56,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int a = 1, b = 2; 
printf("%d", a & b); 
return 0; 
}`,
  language: "c",
  options: [
    "3",
    "0",
    "1",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "Bitwise AND of 01 and 10 is 00, which is 0."
},
{
  id: 57,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int x = 5; 
printf("%d", x>>1); 
return 0; 
}`,
  language: "c",
  options: [
    "2",
    "5",
    "10",
    "Compilation error"
  ],
  correctAnswer: 0,
  explanation: "Right shift by 1 divides the number by 2 (integer division), so 5 >> 1 = 2."
},
{
  id: 58,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
char s[] = "C++"; 
printf("%c", s[1]); 
return 0; 
}`,
  language: "c",
  options: [
    "C",
    "+",
    "+ +",
    "Compilation error"
  ],
  correctAnswer: 1,
  explanation: "s[1] is the second character of the string, which is '+'."
},
{
  id: 59,
  question: "Which statement is correct?",
  options: [
    "++i increments before use",
    "i++ increments after use",
    "Both a & b",
    "None"
  ],
  correctAnswer: 2,
  explanation: "++i pre-increments, i++ post-increments, so both are correct."
},
{
  id: 60,
  question: "Output?",
  code: `#include<stdio.h> 
int main() { 
int i = 5; 
printf("%d", i*=2); 
return 0; 
}`,
  language: "c",
  options: [
    "5",
    "10",
    "7",
    "2"
  ],
  correctAnswer: 1,
  explanation: "i*=2 multiplies i by 2 and assigns it back, so 5*2 = 10."
},
{
  id: 61,
  question: "What is the output of the following code?",
  code: `#include <stdio.h>
int main() {
    printf("%d", sizeof('A'));
    return 0;
}`,
  language: "c",
  options: [
    "1",
    "2",
    "4",
    "Depends on the compiler"
  ],
  correctAnswer: 3,
  explanation: "Depends on the compiler (In C, 'A' is treated as an int, so sizeof('A') is usually 4. In C++, it is 1)."
},
{
  id: 62,
  question: "Which of the following is not a valid C variable name?",
  code: ``,
  language: "c",
  options: [
    "_var",
    "1var",
    "var1",
    "Var"
  ],
  correctAnswer: 1,
  explanation: "Variable names cannot start with a digit."
},
{
  id: 63,
  question: "What is the output of the following C code?",
  code: `#include <stdio.h>
int main() {
    int x = 5;
    printf("%d", x++ + ++x);
    return 0;
}`,
  language: "c",
  options: [
    "10",
    "11",
    "12",
    "Undefined behavior"
  ],
  correctAnswer: 3,
  explanation: "Undefined behavior (Modifying x twice between sequence points leads to UB)."
},
{
  id: 64,
  question: "Which operator is used for dynamic memory allocation in C++?",
  code: ``,
  language: "cpp",
  options: [
    "malloc",
    "new",
    "alloc",
    "create"
  ],
  correctAnswer: 1,
  explanation: "The 'new' operator is used for dynamic memory allocation in C++."
},
{
  id: 65,
  question: "What does the following C code print?",
  code: `#include <stdio.h>
int main() {
    int a = 10, b = 20;
    if (a = b) printf("Equal");
    else printf("Not Equal");
    return 0;
}`,
  language: "c",
  options: [
    "Equal",
    "Not Equal",
    "Compilation Error",
    "Runtime Error"
  ],
  correctAnswer: 0,
  explanation: "Assignment a = b returns 20 (true), so 'Equal' is printed."
},
{
  id: 66,
  question: "What is the output of the following C++ code?",
  code: `#include <iostream>
using namespace std;
int main() {
    int x = 5, y = 2;
    cout << (x << y) << endl;
    return 0;
}`,
  language: "cpp",
  options: [
    "10",
    "20",
    "7",
    "3"
  ],
  correctAnswer: 1,
  explanation: "Left-shifting 5 by 2 gives 5 * 2^2 = 20."
},
{
  id: 67,
  question: "Which of the following is not a storage class in C?",
  code: ``,
  language: "c",
  options: [
    "auto",
    "register",
    "static",
    "public"
  ],
  correctAnswer: 3,
  explanation: "public (It is a C++ access specifier, not a C storage class)."
},
{
  id: 68,
  question: "What is the output of the following C code?",
  code: `#include <stdio.h>
int main() {
    int i = 5;
    printf("%d", i-- - --i);
    return 0;
}`,
  language: "c",
  options: [
    "1",
    "0",
    "5",
    "Syntax Error"
  ],
  correctAnswer: 1,
  explanation: "0 (The expression leads to undefined behavior, but assuming right operand evaluated first, --i makes i=4, value 4; then i-- value 4, i=3; 4 - 4 = 0)."
},
{
  id: 69,
  question: "What does #include <stdio.h> do in a C program?",
  code: ``,
  language: "c",
  options: [
    "Includes standard input/output functions",
    "Defines main function",
    "Allocates memory",
    "Declares variables"
  ],
  correctAnswer: 0,
  explanation: "Includes standard input/output functions."
},
{
  id: 70,
  question: "What is the output of the following C++ code?",
  code: `#include <iostream>
using namespace std;
int main() {
    int a = 5;
    int &r = a;
    r++;
    cout << a;
    return 0;
}`,
  language: "cpp",
  options: [
    "5",
    "6",
    "Compilation Error",
    "Runtime Error"
  ],
  correctAnswer: 1,
  explanation: "6 (Reference r modifies a directly)."
},
{
  id: 71,
  question: "Which of the following is not a valid C data type?",
  code: ``,
  language: "c",
  options: [
    "float",
    "double",
    "real",
    "char"
  ],
  correctAnswer: 2,
  explanation: "real (Not a standard C type)."
},
{
  id: 72,
  question: "What is the output of the following C code?",
  code: `#include <stdio.h>
int main() {
    int x = 0;
    if (x = 1) printf("True");
    else printf("False");
    return 0;
}`,
  language: "c",
  options: [
    "True",
    "False",
    "Compilation Error",
    "Runtime Error"
  ],
  correctAnswer: 0,
  explanation: "Assignment x = 1 returns 1 (true), so 'True' is printed."
},
{
  id: 73,
  question: "What is the correct way to declare a pointer in C?",
  code: ``,
  language: "c",
  options: [
    "int ptr;",
    "int *ptr;",
    "*int ptr;",
    "ptr int;"
  ],
  correctAnswer: 1,
  explanation: "The correct syntax for declaring a pointer is type *name;"
},
{
  id: 74,
  question: "What is the output of the following C++ code?",
  code: `#include <iostream>
using namespace std;
int main() {
    int arr[3] = {1,2,3};
    cout << arr[3];
    return 0;
}`,
  language: "cpp",
  options: [
    "3",
    "0",
    "Garbage Value",
    "Runtime Error"
  ],
  correctAnswer: 2,
  explanation: "Accessing out-of-bounds index leads to undefined behavior."
},
{
  id: 75,
  question: "Which keyword is used to prevent a variable from being modified in C?",
  code: ``,
  language: "c",
  options: [
    "const",
    "static",
    "final",
    "fixed"
  ],
  correctAnswer: 0,
  explanation: "The const keyword makes a variable read-only."
},
{
  id: 76,
  question: "What is the output of the following C code?",
  code: `#include <stdio.h>
int main() {
    printf("%d", 10 ? 0 ? 5 : 3 : 8);
    return 0;
}`,
  language: "c",
  options: [
    "5",
    "3",
    "8",
    "0"
  ],
  correctAnswer: 1,
  explanation: "Nested ternary operator: 10 is true, so evaluate 0 ? 5 : 3; 0 is false, so 3."
},
{
  id: 77,
  question: "Which function is used to deallocate memory in C?",
  code: ``,
  language: "c",
  options: [
    "free()",
    "delete",
    "remove()",
    "dealloc()"
  ],
  correctAnswer: 0,
  explanation: "free() is used to deallocate memory allocated with malloc or calloc in C."
},
{
  id: 78,
  question: "What is the output of the following C++ code?",
  code: `#include <iostream>
using namespace std;
int main() {
    int x = 5;
    cout << (x > 2 ? "Yes" : "No");
    return 0;
}`,
  language: "cpp",
  options: [
    "Yes",
    "No",
    "1",
    "Compilation Error"
  ],
  correctAnswer: 0,
  explanation: "Ternary operator evaluates to \"Yes\" since 5 > 2."
},
{
  id: 79,
  question: "What is the size of an empty class in C++?",
  code: ``,
  language: "cpp",
  options: [
    "0",
    "1",
    "4",
    "Compilation Error"
  ],
  correctAnswer: 1,
  explanation: "Empty classes have a size of 1 for unique addressability."
},
{
  id: 80,
  question: "What is the output of the following C code?",
  code: `#include <stdio.h>
int main() {
    int a = 5, b = 10;
    printf("%d", a + b);
    return 0;
}`,
  language: "c",
  options: [
    "5",
    "10",
    "15",
    "510"
  ],
  correctAnswer: 2,
  explanation: "Simple addition of 5 + 10 = 15."
},
{
  id: 81,
  question: "Which header file is needed for printf() in C?",
  code: ``,
  language: "c",
  options: [
    "<conio.h>",
    "<stdlib.h>",
    "<stdio.h>",
    "<math.h>"
  ],
  correctAnswer: 2,
  explanation: "The printf() function is part of the Standard Input/Output library, included via <stdio.h>."
},
{
  id: 82,
  question: "What is sizeof(int) typically on a 32-bit system?",
  code: ``,
  language: "c",
  options: [
    "1",
    "2",
    "4",
    "8"
  ],
  correctAnswer: 2,
  explanation: "On a 32-bit system, int is usually 4 bytes."
},
{
  id: 83,
  question: "What does ++x do?",
  code: ``,
  language: "c",
  options: [
    "Post-increment",
    "Pre-increment",
    "Adds 2 to x",
    "Returns unchanged"
  ],
  correctAnswer: 1,
  explanation: "++x is the pre-increment operator, which increments x before using its value."
},
{
  id: 84,
  question: "What is the output of printf(\"%c\", 65);?",
  code: `#include <stdio.h>
int main() {
    printf("%c", 65);
    return 0;
}`,
  language: "c",
  options: [
    "65",
    "A",
    "Compilation Error",
    "Garbage Value"
  ],
  correctAnswer: 1,
  explanation: "65 is the ASCII code for 'A'."
},
{
  id: 85,
  question: "What will happen when the following C++ code is compiled?",
  code: `#include <iostream>
using namespace std;

int main() {
    int A[3] = {1, 2, 3};
    int B[3];

    B = A;   // ← this line

    return 0;
}`,
  language: "cpp",
  options: [
    "The program prints:  1 2 3",
    "The program runs without errors but prints nothing",
    "Compile error",
    "Runtime error"
  ],
  correctAnswer: 2,
  explanation: "In C++, arrays cannot be directly assigned to each other; this causes a compile error."
},
{
  id: 86,
  question: "Which of the following is the correct syntax for the ternary operator in C/C++?",
  code: ``,
  language: "c",
  options: [
    "condition : value_if_true ? value_if_false;",
    "condition ? value_if_true : value_if_false;",
    "if (condition) ? value_if_true : value_if_false;",
    "condition ? value_if_false : value_if_true;"
  ],
  correctAnswer: 1,
  explanation: "The correct syntax is condition ? value_if_true : value_if_false."
},
{
  id: 87,
  question: "What will be the correct ternary expression to assign the maximum value between x and y in the following code?",
  code: `#include <stdio.h>
int main() {
    int x = 10;
    int y = 5;
    int max;

    // Using ternary operator
    // ????

    printf("The max is: %d\\n", max);
    return 0;
}`,
  language: "c",
  options: [
    "max = (x < y) ? x : y;",
    "max = (x > y) ? x : y;",
    "max = (x == y) ? x : y;",
    "max = (x > y) ? y : x;"
  ],
  correctAnswer: 1,
  explanation: "The correct ternary expression to get maximum is (x > y) ? x : y."
},
{
  id: 88,
  question: "Which of the following best describes a Lambda Function in C++?",
  code: ``,
  language: "cpp",
  options: [
    "A function that can only be used inside main()",
    "A special function used only for recursion",
    "A function without a name, defined inline, often used for short and simple operations",
    "A function that must always return void"
  ],
  correctAnswer: 2,
  explanation: "Lambda functions are anonymous functions defined inline for short operations."
},
{
  id: 89,
  question: "What will the following C++ code print?",
  code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = 20;
    int z = (x++, y++, x + y);

    cout << z;
    return 0;
}`,
  language: "cpp",
  options: [
    "30",
    "31",
    "32",
    "33"
  ],
  correctAnswer: 2,
  explanation: "x is incremented to 11, y is incremented to 21, so x + y = 32."
},
{
  id: 90,
  question: "Which of the following is true about arrays in C++?",
  code: ``,
  language: "cpp",
  options: [
    "Arrays can be assigned directly using = operator",
    "Array size must be a constant expression at compile time",
    "Arrays automatically resize when elements are added",
    "Array index can be negative"
  ],
  correctAnswer: 1,
  explanation: "In C++, array sizes must be constant expressions at compile time."
},
{
  id: 91,
  question: "Which of the following is the correct way to declare a reference in C++?",
  code: ``,
  language: "cpp",
  options: [
    "int ref = &x;",
    "int &ref = x;",
    "int *ref = x;",
    "ref int = x;"
  ],
  correctAnswer: 1,
  explanation: "The correct syntax to declare a reference is int &ref = x."
},
{
  id: 92,
  question: "What will the following C++ code print?",
  code: `#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10;
    int result = (a > b) ? a : b;
    cout << result;
    return 0;
}`,
  language: "cpp",
  options: [
    "5",
    "10",
    "15",
    "0"
  ],
  correctAnswer: 1,
  explanation: "Since b > a, the ternary operator returns b, which is 10."
}
];

export const examConfig = {
  title: " Loops / Arrays / Strings ",
  duration: 100, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};