# Amber Kim 401 Lab 2

## Directions
Given the code blocks below, answer the set of questions below. Please copy the questions to your lab directory in a file called ANSWERS.md.

1. Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

```
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```
  Answer: printGreeting() can be called before the function is actually written in the file because of hoisting. When the program is compiled, a space is reserved for the printGreeting() function and once the program starts to run, it already knows about printGreeting()


2. Explain why this function called printGoodbye can't be executed until after it's actually written in the file.
```
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```
  Answer: printGoodby() cannot be executed until it's actually written to the file because the funciton is not assigned to const name until after the compile process.