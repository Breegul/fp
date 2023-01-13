# Writing tests

This project is focused on simple example tests in Javascript

## Installation

Install all required dependencies with `npm install -D`.

## Testing as a concept

Testing lets you know about errors/problems in advance. 
It also makes code easier to maintain and forces devs to structure code intelligently.
Perhaps most importantly, we test because our boss says to.

### What gets tested

- Your code
- Code in the project
- Not code from other projects
- Not not code

### Types of testing

1. End-to-end (does the whole thing work?)
2. Integration tests (do these two pieces connect correctly?)
3. Unit tests (does this one piece work in isolation?)

### Test-driven development (TDD)

- Write a test which fails
- Write the *absolute minimum* code required to make the test pass
- Repeat these steps forever

### What to test

- normal input
- extreme input
- erroneous input

Test *boundaries* and *edge cases*