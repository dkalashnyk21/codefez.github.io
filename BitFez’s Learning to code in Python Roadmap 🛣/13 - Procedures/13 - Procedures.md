Firstly there are 2 keywords you need to know here.

1. procedures
2. functions

The next lesson in the roadmap will look at functions. This lesson looks at procedures.

> [!important]  
> Think of a procedure as a pre-set sequence of code that can be carried out when needed. 🎮You use them all the time when using a mobile phone or playing a game on a console. eg. when you click on the move button to move left or right![[/Untitled 7.png|Untitled 7.png]]  

# The anatomy of a procedure/function

Look at this example of a simple procedure below in Python.

```JavaScript
def greeting():
		print("hello")
```

![[/Untitled 1 5.png|Untitled 1 5.png]]

To _call_ (or in other words to use) a function, type the name with parenthesis. In the example below greeting one is _called. Try to_ change the code on line 7 to call greeting2 instead.

[https://replit.com/@bitFez/functionexample1](https://replit.com/@bitFez/functionexample1)

  

# Arguments

Sometimes we need to give a procedure or a function some data so that it can make use of it. An easy example of how this would work is a number machine

in the example below, the number machine takes a number (an argument) and outputs a result.

![[/Untitled 2 4.png|Untitled 2 4.png]]

```Python
def numberMachine(givenNumber):
		calculation = givenNumber * 10 / 2
		print(calculation)
```

![[/Untitled 3 3.png|Untitled 3 3.png]]

  

[https://youtube.com/shorts/RHOixwZ-YQ8?si=Rgh01l4aRI2WdzBZ](https://youtube.com/shorts/RHOixwZ-YQ8?si=Rgh01l4aRI2WdzBZ)

## Taking more than one argument

A function can take more than one argument. Do you remember back to when you did the lesson on concatenation? I mentioned that using a comma in a `print` statement was not the correct way to join objects together.

  

- Side note: passing objects to a `print` function
    
    Rather than joining objects, you would be passing them to the function as separate arguments.
    
    ## ☑
    
    ```Python
    name = "James"
    print(name + "is cool")
    ```
    
    ## ❎
    
    ```Python
    name = "James"
    print(name, "is cool")
    ```
    

  

The example below demonstrates how to write a procedure that takes 2 or more arguments

[https://replit.com/@bitFez/functionexample3#main.py](https://replit.com/@bitFez/functionexample3#main.py)

  

# Tasks

Looking at the example above, see if you can complete the tasks below

- [ ] write a function to work out the area of a triangle [function_task1 - Replit](https://replit.com/@bitFez/functiontask1#main.py)
- [ ] Create a function to work out the area of a circle [Radius_of_a_circle - Replit](https://replit.com/@bitFez/Radiusofacircle#main.py)
- [ ] write a new number machine function [function_task2 - Replit](https://replit.com/@bitFez/functiontask2#main.py)
- [ ] If you were born today, the formula to work out how old you are in days would be age x 365.25 Write a function to report out how many days old you are. [functions days old - Replit](https://replit.com/@bitFez/functions-days-old#main.py)
- [ ] Extend the previous task with more print statements that add how many weeks and months old you are