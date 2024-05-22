# JS Basics

## Output
- `console.log()` - output/logging
- `console.table([1,2])` - output/logging in table format

## Variables
- `const`, `var`, `let` - defining variables
  - **var**: function scope, can be reassigned and redeclared
  - **let**: block scope, can be reassigned but not redeclared
  - **const**: block scope, cannot be reassigned or redeclared, but properties/elements of objects/arrays can be modified.
- also can be defined without const, var, let
- only initialised var is stores as undefined
- **Prefer not to use var**

alert() and prompt() cannot be used in node

## Datatypes
- number - 2 to power 53
- bigInt
- string => ""
- boolean => true/false
- null - standalone value