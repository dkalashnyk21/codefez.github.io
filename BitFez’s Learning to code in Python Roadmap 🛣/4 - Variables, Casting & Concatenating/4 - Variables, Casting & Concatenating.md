# Variables

Variables are a key programming feature. Sometimes the programs we write need to have values that change or need to be stored to recall later on.

We see this often in games.

### Tetris

![[/Untitled 4.png|Untitled 4.png]]

### Pokémon

![[/Untitled 1 2.png|Untitled 1 2.png]]

pictures courtesy of [Enter your name! The best name entry screens in gaming | GamesRadar+](https://www.gamesradar.com/name-entry-screens/)

In both examples above, we can see where a user is expected to enter their name. For for the scoreboard and one so that the game mechanics can keep referring to it during the game story.

# Variables in Python

![[variable_diagram.svg]]

> [!important]  
> Some golden rules when assigning variables:1. Variable names cannot take the name of a python reserved keyword such as print2. The name goes on the left ⬅ & the value goes on the right ➡3. Just use 1 = . remember that == is a comparative operator. 4. variable names cannot have spaces. ❎ high score = 145 ✅ high_score = 145  

  

So, if wanted to create a variable called `score` and assign the value `0`, I would write:

```Python
score = 0
```

If I wanted to output the value, I could write:

```Python
print(score)
```

Take a look at how I can assign and re-assign the variable with a new value.

[https://replit.com/@bitFez/ex6#main.py](https://replit.com/@bitFez/ex6#main.py)

  

[https://youtube.com/shorts/epkv6Lg5maM?si=wkl-JkD9Lt-nu9Aq](https://youtube.com/shorts/epkv6Lg5maM?si=wkl-JkD9Lt-nu9Aq)

## Tasks

Write a program with all of the following variables and then print them to the screen.

- [ ] your name
- [ ] your age
- [ ] your favourite TV show
- [ ] your favourite film
- [ ] your favourite song

  

> [!important]  
> Remember! No spaces in variable names 😠There are 2 methods for naming variables which are standard practice:1 - Use snake casing → vat_rate = 0.2 ←words separated by underscore2 - Use camel casing → vatRate = 0.2 ←words separated a capital letter  

# Concatenating

This is just a fancy word for _joining_. Everything in Python is considered an object and print statements can only handle one type of object at a time. for example:

```Python
name = "Batman"
print("I'm " + name)

Output >>> I'm Batman
```

![[/Untitled 2 2.png|Untitled 2 2.png]]

  

Problems occur when we try to concatenate 2 objects that are different datatypes.

[https://replit.com/@bitFez/ex7#main.py](https://replit.com/@bitFez/ex7#main.py)

As you can see from the above example, ==Python can’t concatenate== (_**join)**_ the integer datatype with the string objects.

# Casting

Do you remember how when we performed math using Python, the program evaluated the statement 2+2 to 4? We can use some functions to convert datatypes so they match other objects in the print statement.

|   |   |
|---|---|
|`str()`|converts a datatype to a string|
|`int()`|converts an object to an integer|
|`float()`|converts an object to a number with decimals.|

try running the code now

[https://replit.com/@bitFez/ex8#main.py](https://replit.com/@bitFez/ex8#main.py)

  

## Tasks

Click on any repl link and click on the fork button to make a c4.opy of the document for yourself. Then solve all the statements that are not working by following the commented instructions.

- [ ] [concatenation task - Replit](https://replit.com/@bitFez/concatenation-task#main.py)
- [ ] more repl practice [concatenation task 2 - Replit](https://replit.com/@bitFez/concatenation-task-2#main.py)
- [ ] read [https://learnpythonthehardway.org/book/ex4.html](https://learnpythonthehardway.org/book/ex4.html)
- [ ] PythonBiteSize Naming Variables [http://www.pythonbytesize.com/112-video-naming-python-variables.html](http://www.pythonbytesize.com/112-video-naming-python-variables.html)