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
  question: "Which feature of C++ allows the same function name to have different implementations?",
  options: [
    "a) Inheritance",
    "b) Polymorphism",
    "c) Encapsulation",
    "d) Abstraction"
  ],
  correctAnswer: 1,
  explanation: "Polymorphism allows functions with the same name to behave differently."
},
{
  id: 2,
  question: "In C++, which keyword is used to define a class?",
  options: [
    "a) struct",
    "b) class",
    "c) object",
    "d) new"
  ],
  correctAnswer: 1,
  explanation: "The 'class' keyword is used to define a class in C++."
},
{
  id: 3,
  question: "Which of the following is not a type of inheritance in C++?",
  options: [
    "a) Single",
    "b) Multiple",
    "c) Hierarchical",
    "d) Static"
  ],
  correctAnswer: 3,
  explanation: "Static is not a type of inheritance in C++."
},
{
  id: 4,
  question: "What is the default access specifier for members of a class in C++?",
  options: [
    "a) public",
    "b) private",
    "c) protected",
    "d) friend"
  ],
  correctAnswer: 1,
  explanation: "By default, class members are private in C++."
},
{
  id: 5,
  question: "Which C++ concept allows hiding internal details and showing only functionalities?",
  options: [
    "a) Polymorphism",
    "b) Abstraction",
    "c) Encapsulation",
    "d) Inheritance"
  ],
  correctAnswer: 1,
  explanation: "Abstraction hides internal implementation and exposes only functionality."
},
{
  id: 6,
  question: "What will this code print?",
  code: `#include<iostream>
using namespace std;
class A {
public:
    void show() { cout << "A"; }
};
int main() {
    A obj;
    obj.show();
    return 0;
}`,
  language: "cpp",
  options: [
    "a) A",
    "b) obj",
    "c) Compilation error",
    "d) Nothing"
  ],
  correctAnswer: 0,
  explanation: "The show() function prints 'A'."
},
{
  id: 7,
  question: "Which of these is a correct way to create an object of class Car?",
  options: [
    "a) Car c;",
    "b) object c(Car);",
    "c) Car *c = new Car();",
    "d) Both a & c"
  ],
  correctAnswer: 3,
  explanation: "Objects can be created on the stack (Car c;) or dynamically using new (Car *c = new Car())."
},
{
  id: 8,
  question: "What is the output of the following code?",
  code: `#include<iostream>
using namespace std;
class B {
    int x;
public:
    B() { x=5; }
    void print() { cout << x; }
};
int main() {
    B obj;
    obj.print();
}`,
  language: "cpp",
  options: [
    "a) 0",
    "b) 5",
    "c) Garbage value",
    "d) Compilation error"
  ],
  correctAnswer: 1,
  explanation: "The constructor initializes x to 5, so print() outputs 5."
},
{
  id: 9,
  question: "Which of the following defines function overloading?",
  options: [
    "a) Multiple functions with the same name but different parameters",
    "b) Multiple functions with the same name and same parameters",
    "c) Overriding a function in derived class",
    "d) Calling a function from different objects"
  ],
  correctAnswer: 0,
  explanation: "Function overloading means functions with same name but different parameter lists."
},
{
  id: 10,
  question: "Which C++ keyword is used to inherit a class?",
  options: [
    "a) extends",
    "b) inherit",
    "c) :",
    "d) ->"
  ],
  correctAnswer: 2,
  explanation: "The ':' symbol is used to specify inheritance in C++."
},
{
  id: 11,
  question: "What is the default inheritance type in C++ class?",
  options: [
    "a) public",
    "b) private",
    "c) protected",
    "d) None"
  ],
  correctAnswer: 1,
  explanation: "By default, inheritance in classes is private."
},
{
  id: 12,
  question: "Which of the following is true about a constructor?",
  options: [
    "a) Returns int",
    "b) Has the same name as class",
    "c) Must have return type",
    "d) Can be virtual"
  ],
  correctAnswer: 1,
  explanation: "Constructors have the same name as the class and no return type."
},
{
  id: 13,
  question: "Which of the following is a destructor syntax?",
  options: [
    "a) ~ClassName()",
    "b) ClassName~()",
    "c) delete ClassName()",
    "d) ClassName()"
  ],
  correctAnswer: 0,
  explanation: "Destructor syntax is '~ClassName()'."
},
{
  id: 14,
  question: "What is the output of the following code?",
  code: `#include<iostream>
using namespace std;
class X {
public:
    void f() { cout << "X"; }
};
class Y : public X {
public:
    void f() { cout << "Y"; }
};
int main() {
    Y obj;
    obj.f();
}`,
  language: "cpp",
  options: [
    "a) X",
    "b) Y",
    "c) XY",
    "d) Compilation error"
  ],
  correctAnswer: 1,
  explanation: "The function f() is redefined in class Y, so it prints 'Y'."
},
{
  id: 15,
  question: "What is operator overloading?",
  options: [
    "a) Giving a new name to operators",
    "b) Using operators to perform tasks on user-defined types",
    "c) Using operators in loops",
    "d) Redefining built-in operators only for integers"
  ],
  correctAnswer: 1,
  explanation: "Operator overloading allows operators to work with user-defined types."
},
{
  id: 16,
  question: "Which keyword is used to define a member function outside the class?",
  options: [
    "a) friend",
    "b) ::",
    "c) this",
    "d) inline"
  ],
  correctAnswer: 1,
  explanation: "The scope resolution operator '::' is used to define class functions outside."
},
{
  id: 17,
  question: "Which of the following is true about virtual functions?",
  options: [
    "a) They allow compile-time polymorphism",
    "b) They allow run-time polymorphism",
    "c) They are faster than normal functions",
    "d) They can only be used in C"
  ],
  correctAnswer: 1,
  explanation: "Virtual functions enable runtime polymorphism through dynamic binding."
},
{
  id: 18,
  question: "In C++, an abstract class is defined by having at least:",
  options: [
    "a) One constructor",
    "b) One virtual function",
    "c) One pure virtual function",
    "d) One friend function"
  ],
  correctAnswer: 2,
  explanation: "An abstract class must have at least one pure virtual function."
},
{
  id: 19,
  question: "Which of the following is correct pure virtual function declaration?",
  options: [
    "a) virtual void f() = 0;",
    "b) void f() = 0;",
    "c) virtual void f();",
    "d) virtual void f() {};"
  ],
  correctAnswer: 0,
  explanation: "The correct syntax is 'virtual void f() = 0;'."
},
{
  id: 20,
  question: "What is the size of an empty class in C++?",
  options: [
    "a) 0 bytes",
    "b) 1 byte",
    "c) Depends on compiler",
    "d) 2 bytes"
  ],
  correctAnswer: 1,
  explanation: "Empty classes occupy 1 byte to ensure unique object addresses."
},
{
  id: 21,
  question: "Which of the following is true about friend functions?",
  options: [
    "a) Can access private members",
    "b) Must be inside the class",
    "c) Cannot access protected members",
    "d) Can be inherited"
  ],
  correctAnswer: 0,
  explanation: "Friend functions can access private and protected members of a class."
},
{
  id: 22,
  question: "Which of the following is not allowed in C++?",
  options: [
    "a) Multiple inheritance",
    "b) Operator overloading",
    "c) Private constructors",
    "d) Using goto"
  ],
  correctAnswer: 3,
  explanation: "All listed features are allowed in C++, but 'goto' is discouraged though still valid."
},
{
  id: 23,
  question: "What is encapsulation?",
  options: [
    "a) Wrapping data and functions together",
    "b) Writing multiple functions with same name",
    "c) Creating an abstract class",
    "d) Using virtual functions"
  ],
  correctAnswer: 0,
  explanation: "Encapsulation means combining data and methods that operate on it in one unit."
},
{
  id: 24,
  question: "Which of the following is a benefit of inheritance?",
  options: [
    "a) Code reusability",
    "b) Memory saving",
    "c) Faster compilation",
    "d) Reduced data types"
  ],
  correctAnswer: 0,
  explanation: "Inheritance allows code reuse in derived classes."
},
{
  id: 25,
  question: "What will this code output?",
  code: `#include<iostream>
using namespace std;
class A {
public:
    virtual void f() { cout << "A"; }
};
class B : public A {
public:
    void f() { cout << "B"; }
};
int main() {
    A *ptr = new B();
    ptr->f();
}`,
  language: "cpp",
  options: [
    "a) A",
    "b) B",
    "c) Compilation error",
    "d) Runtime error"
  ],
  correctAnswer: 1,
  explanation: "Virtual function ensures runtime polymorphism, so 'B' is printed."
},
{
  id: 26,
  question: "Which of the following is true for C structs vs C++ classes?",
  options: [
    "a) Structs can have functions in C",
    "b) In C++, structs have default private members",
    "c) In C++, structs have default public members",
    "d) Classes and structs are identical"
  ],
  correctAnswer: 2,
  explanation: "In C++, struct members are public by default, unlike class members which are private."
},
{
  id: 27,
  question: "Which C++ concept is a mix of data hiding and interface creation?",
  options: [
    "a) Abstraction",
    "b) Encapsulation",
    "c) Polymorphism",
    "d) Inheritance"
  ],
  correctAnswer: 0,
  explanation: "Abstraction hides implementation details while exposing an interface."
},
{
  id: 28,
  question: "Which of the following is a way to achieve polymorphism?",
  options: [
    "a) Function overloading",
    "b) Operator overloading",
    "c) Virtual functions",
    "d) All of the above"
  ],
  correctAnswer: 3,
  explanation: "Polymorphism can be achieved through function overloading, operator overloading, and virtual functions."
},
{
  id: 29,
  question: "Which of these cannot be inherited?",
  options: [
    "a) Private members",
    "b) Public members",
    "c) Protected members",
    "d) Constructors"
  ],
  correctAnswer: 3,
  explanation: "Constructors are not inherited in C++."
},
{
  id: 30,
  question: "Which of the following is true about C++ objects?",
  options: [
    "a) Object stores only data",
    "b) Object stores only functions",
    "c) Object stores both data and functions",
    "d) Object cannot store data"
  ],
  correctAnswer: 2,
  explanation: "Objects encapsulate both data and methods that operate on that data."
}
];

export const examConfig = {
  title: "  OOP (C++ & C)  ",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};