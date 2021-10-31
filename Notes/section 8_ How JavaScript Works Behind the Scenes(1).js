'use strict';



/*===============================================================================================================================================
                Section 8: How JavaScript Works Behind the Scenes
 87. Section Intro
 88. Section Roadmap
 89. An High_level Overview of JavaScript
 90. The JavaScript Engine and Runtime
 91. Execution Contexts and the Call Stack
 92. Scope and the Scope Chain
 93. Scoping in Practice
 94. Variable Environment: Hoisting and The TDZ
 95. Hoisting and TDZ in Practice
 96. The 'this' Keyword
 97. The 'this' Keyword in Practice
 98. Regular Functions vs. Arrow Functions
 99. Primitives vs. Objects (Primitive vs. Reference Types)
100. Primitives vs. Objects in Practice
================================================================*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
89. An High_level Overview of JavaScript`);
/*==============================================================*/



/*
JavaScript
    # JavaScript is a programming language:
        # High-level - means we dont need to manage PC resurces
        # Garbage-collected - cleans RAM from old objects and stuff
        # Interpreted or just-in-time compiled
        # Multi-paradigm
            # Procedural programming - linear, basic
            # Object-oriented programming (OOP)
            # Functional programming (FP)
        # Prototype-based object-oriented
        # First-class functions - functions can be passed to other functions as if they are variables
        # Dynamic - we dont need to specify data types and variables can be reasigned at any time
        # Signle-threded - does just one thing at the time
        # Non-blocking event loop - takes long running tasks, executes them in the 'background', and puts them back in the main thred once they are finished


*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
90. The JavaScript Engine and Runtime`);
/*==============================================================*/


// JavaScript Engine
/*
Compilation vs. Interpretation
    
    # Compilation
        Source Code
        Step 1: COMPILATION
        Portable File: machine code
        Step 2: EXECUTION
        Program running
    
    # Interpretation
        Source Code
        Step 1: EXECUTION LINE BY LINE
        Program running


Just-in-time (JIT) compilation
    Entire code is converted into machine code at once, then executed immediatly.

        Source Code
        Step 1: COMPILATION
        Machine Code - no portable file
        Step 2: EXECUTION
        Program running
*/



// JavaScript Runtime
/*
Runtime in the Browser
    
    # JS Engine
        # Heap - stores all objects and variables in unstructured way
        # Call Stack
    
    WEB APIs
        # DOM
        # Timers
        # Fetch API
        # ...
    
    Callback Queue - all callback functions
        # click - event listener
        # timer
        # data
*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
92. Scope and the Scope Chain`);
/*==============================================================*/



/*
# Scoping - asks the question 'Where do variables live?' or ' Where can we access a cetain variable, and where not?'.
# There are 3 types of scopes in JavaScript:
    # Global Scope
    # Function Scope
    # Block Scope
# Only 'let' and 'const' variables are block-scoped. Variables declared with 'var' end up in the closest function scope
# In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code fuctions and vlocks are written
# Every scope always has access to all the variables from all its other scopes. This is the scope chain
# When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable look-up
# The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope
# The scope chain in a certain scope is equal to adding together all the variable environments of all parent scopes
# The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
94. Variable Environment: Hoisting and The TDZ`);
/*==============================================================*/



/*
Hoisting - Makes some types of variables accessible/usable in the code before they are actually declared. 'Variables lifted to the top of their scope'.

Temporal Dead Zone (TDZ) - Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided
*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
96. The 'this' Keyword`);
/*==============================================================*/



/*
'this' keyword/variable
    # Special variable that is created for every execution context (every function). Takes the value of (points to) the 'owner' of the function in which the 'this' keyword is used.
    # 'this' is NOT static. It depends on how the function is called, and its value is only assigned when the function IS ACTUALY CALLED.
    # 'this' does NOT point to the function itself, and also NOT the its variable environment!


    # Method
        'this' = <Object that is calling the method>
    # Simple funcion call
        'this' = undefined in strict mode, otherwise window (in the browser)
    # Arrow functions
        'this' = <'this' of surrounding function (laxical this)>
    # Event listener
        'this' = <DOM element that the handler is attached to>
*/

 
