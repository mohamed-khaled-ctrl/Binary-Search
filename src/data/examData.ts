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
  question: "Which symbol represents the start or end of a flowchart?",
  code: ``,
  language: "",
  options: [
    "Rectangle",
    "Oval",
    "Diamond",
    "Parallelogram"
  ],
  correctAnswer: 1,
  explanation: "The start and end of a flowchart are represented by an Oval symbol."
},
{
  id: 2,
  question: "The decision-making symbol in a flowchart is:",
  code: ``,
  language: "",
  options: [
    "Oval",
    "Rectangle",
    "Diamond",
    "Arrow"
  ],
  correctAnswer: 2,
  explanation: "A Diamond shape is used in flowcharts to represent decision-making."
},
{
  id: 3,
  question: "Which symbol is used to represent input/output?",
  code: ``,
  language: "",
  options: [
    "Rectangle",
    "Parallelogram",
    "Diamond",
    "Circle"
  ],
  correctAnswer: 1,
  explanation: "A Parallelogram is used to denote input/output operations in a flowchart."
},
{
  id: 4,
  question: "The processing step in a flowchart is represented by:",
  code: ``,
  language: "",
  options: [
    "Oval",
    "Parallelogram",
    "Rectangle",
    "Diamond"
  ],
  correctAnswer: 2,
  explanation: "A Rectangle represents a processing step in a flowchart."
},
{
  id: 5,
  question: "A connector in a flowchart is used for:",
  code: ``,
  language: "",
  options: [
    "Performing calculations",
    "Indicating start/end",
    "Connecting different parts of a flowchart",
    "Taking decisions"
  ],
  correctAnswer: 2,
  explanation: "A connector is used to connect different parts of a flowchart for clarity."
},
{
  id: 6,
  question: "Which symbol is not standard in flowcharts?",
  code: ``,
  language: "",
  options: [
    "Oval",
    "Star",
    "Rectangle",
    "Diamond"
  ],
  correctAnswer: 1,
  explanation: "A Star is not a standard flowchart symbol."
},
{
  id: 7,
  question: "A flowchart must always start with:",
  code: ``,
  language: "",
  options: [
    "Input symbol",
    "Start symbol",
    "Decision symbol",
    "Processing symbol"
  ],
  correctAnswer: 1,
  explanation: "Every flowchart begins with a Start symbol, usually represented by an Oval."
},
{
  id: 8,
  question: "What is the main purpose of a flowchart?",
  code: ``,
  language: "",
  options: [
    "Show programming syntax",
    "Represent logic visually",
    "Execute code",
    "Store data"
  ],
  correctAnswer: 1,
  explanation: "The purpose of a flowchart is to visually represent the logic of a process."
},
{
  id: 9,
  question: "Which symbol would you use to add two numbers?",
  code: ``,
  language: "",
  options: [
    "Rectangle",
    "Diamond",
    "Parallelogram",
    "Oval"
  ],
  correctAnswer: 0,
  explanation: "Adding two numbers is a processing step, represented by a Rectangle."
},
{
  id: 10,
  question: "If a condition is true, the arrow in a decision symbol typically points:",
  code: ``,
  language: "",
  options: [
    "Left",
    "Down or Right",
    "Up",
    "Anywhere"
  ],
  correctAnswer: 1,
  explanation: "In a flowchart, decision outputs usually branch Down or Right when true."
},
  {
  id: 11,
  question: "Flowcharts are mainly used to:",
  code: ``,
  language: "",
  options: [
    "Debug programs automatically",
    "Represent algorithm visually",
    "Compile code",
    "Store data"
  ],
  correctAnswer: 1,
  explanation: "Flowcharts visually represent the steps of an algorithm, making it easier to understand the logic."
},
{
  id: 12,
  question: "Which of the following is true?",
  code: ``,
  language: "",
  options: [
    "A flowchart can have multiple start symbols",
    "A flowchart can have multiple end symbols",
    "Arrows can be crossed freely",
    "Input/output symbols are optional"
  ],
  correctAnswer: 1,
  explanation: "A flowchart must have only one start but can have multiple ends for different outcomes."
},
{
  id: 13,
  question: "What does a loop in a flowchart usually include?",
  code: ``,
  language: "",
  options: [
    "Start and End symbols only",
    "Decision symbol",
    "Only rectangle",
    "Only parallelogram"
  ],
  correctAnswer: 1,
  explanation: "Loops require a decision symbol to check whether to continue or exit the loop."
},
{
  id: 14,
  question: "In a flowchart, arrows represent:",
  code: ``,
  language: "",
  options: [
    "Sequence of execution",
    "Input values",
    "Output values",
    "Error messages"
  ],
  correctAnswer: 0,
  explanation: "Arrows show the flow and sequence of execution in a flowchart."
},
{
  id: 15,
  question: "Which flowchart symbol would represent *reading a number from the user*?",
  code: ``,
  language: "",
  options: [
    "Rectangle",
    "Diamond",
    "Parallelogram",
    "Circle"
  ],
  correctAnswer: 2,
  explanation: "A parallelogram is used to represent input/output operations such as reading a number."
},
{
  id: 16,
  question: "To display results, you use:",
  code: ``,
  language: "",
  options: [
    "Rectangle",
    "Parallelogram",
    "Diamond",
    "Oval"
  ],
  correctAnswer: 1,
  explanation: "A parallelogram represents output, so it is used to display results."
},
{
  id: 17,
  question: "Which step is optional in a flowchart?",
  code: ``,
  language: "",
  options: [
    "Start",
    "Processing",
    "Decision",
    "Connector"
  ],
  correctAnswer: 3,
  explanation: "Connectors are optional and mainly used to simplify complex flowcharts."
},
{
  id: 18,
  question: "True or False: Flowcharts can have arrows pointing backwards to create loops.",
  code: ``,
  language: "",
  options: [
    "True",
    "False"
  ],
  correctAnswer: 0,
  explanation: "Backward arrows are allowed to represent loops in flowcharts."
},
{
  id: 19,
  question: "A flowchart that uses many decisions is likely representing:",
  code: ``,
  language: "",
  options: [
    "A simple calculation",
    "A complex algorithm",
    "Only input/output",
    "Only start/end"
  ],
  correctAnswer: 1,
  explanation: "Many decision points indicate branching, typical of complex algorithms."
},
{
  id: 20,
  question: "What is the correct sequence of a simple flowchart?",
  code: ``,
  language: "",
  options: [
    "Start → Process → Input → Decision → End",
    "Start → Input → Process → Decision → End",
    "Decision → Start → Process → End → Input",
    "Input → Decision → Process → End → Start"
  ],
  correctAnswer: 1,
  explanation: "The logical order is Start, then Input, then Process, followed by Decision, and finally End."
},{
  id: 21,
  question: "Which of the following is not a property of flowcharts?",
  code: ``,
  language: "",
  options: [
    "Easy to understand",
    "Visual representation",
    "Can execute code automatically",
    "Shows logical flow"
  ],
  correctAnswer: 2,
  explanation: "Flowcharts are for visualization and design; they cannot execute code automatically."
},
{
  id: 22,
  question: "Flowcharts are useful for programmers because they:",
  code: ``,
  language: "",
  options: [
    "Make coding faster",
    "Help design algorithms",
    "Replace programming languages",
    "Reduce memory usage"
  ],
  correctAnswer: 1,
  explanation: "Flowcharts help programmers plan and design algorithms before coding."
},
{
  id: 23,
  question: "Which symbol is used to call another process or subroutine?",
  code: ``,
  language: "",
  options: [
    "Rectangle with double-struck sides",
    "Diamond",
    "Parallelogram",
    "Oval"
  ],
  correctAnswer: 0,
  explanation: "A rectangle with double-struck sides is used to represent a predefined process or subroutine."
},
{
  id: 24,
  question: "How many arrows can a decision symbol have?",
  code: ``,
  language: "",
  options: [
    "1",
    "2 or more",
    "3 only",
    "None"
  ],
  correctAnswer: 1,
  explanation: "A decision symbol usually has two or more arrows for different possible outcomes."
},
{
  id: 25,
  question: "Which symbol represents manual operation?",
  code: ``,
  language: "",
  options: [
    "Trapezoid",
    "Diamond",
    "Parallelogram",
    "Rectangle"
  ],
  correctAnswer: 0,
  explanation: "A trapezoid shape is used to represent a manual operation in a flowchart."
},
{
  id: 26,
  question: "A flowchart showing steps of a vending machine would likely include:",
  code: ``,
  language: "",
  options: [
    "Only start and end",
    "Decisions for choice of product",
    "Only rectangles",
    "Only input/output"
  ],
  correctAnswer: 1,
  explanation: "A vending machine flowchart would require decision symbols to handle product choices."
},
{
  id: 27,
  question: "What type of flowchart shows program structure?",
  code: ``,
  language: "",
  options: [
    "System flowchart",
    "Program flowchart",
    "Process flowchart",
    "Data flowchart"
  ],
  correctAnswer: 1,
  explanation: "A program flowchart specifically shows the structure and logic of a program."
},
{
  id: 28,
  question: "True or False: All flowcharts must have a single end symbol.",
  code: ``,
  language: "",
  options: [
    "True",
    "False"
  ],
  correctAnswer: 1,
  explanation: "Flowcharts can have multiple end symbols depending on the number of possible outcomes."
},
{
  id: 29,
  question: "The arrow connecting symbols should:",
  code: ``,
  language: "",
  options: [
    "Point from next to previous",
    "Be dashed",
    "Show direction of flow",
    "Be optional"
  ],
  correctAnswer: 2,
  explanation: "Arrows in a flowchart always show the direction of logical flow."
},
{
  id: 30,
  question: "Flowcharting helps to reduce errors in:",
  code: ``,
  language: "",
  options: [
    "Logic design",
    "Hardware setup",
    "Keyboard typing",
    "Internet speed"
  ],
  correctAnswer: 0,
  explanation: "Flowcharts clarify logic before coding, reducing errors in logic design."
}
];

export const examConfig = {
  title: "Functions & Pseudo Code",
  duration: 30, // minutes
  totalQuestions: examQuestions.length,
  passingScore: 60 // percentage
};