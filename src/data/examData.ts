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
}

];

export const examConfig = {
  title: " Loops / Arrays / Strings ",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};