> [!important]  
> Need to knowWhen you run a program, the computer stores the program in memory (RAM). When you create variables in your program, you create named locations in the RAM that you can refer to continuously while the program is running.  

  

# Re-assigning Variables

![[/Untitled 5.png|Untitled 5.png]]

In the picture above image that every time Mario lands on a coin, the score and number of coins need to increase.

It wouldn’t make sense to reassign the variables for the coins in the following sense:

```Python
coins = 1
coins = 2
```

Mainly because at any point in the game the `coins` variable may be any number other than 1 or 2 etc. If the `coins` were 34 for example, how would the programmer update it by just 1?

It makes sense therefor to update whatever the current value is by 1 every time Mario touches a coin.

```Python
coins = coins + 1
```

  

[https://youtube.com/shorts/epkv6Lg5maM?si=lL1bdUjh7-iP5-TI](https://youtube.com/shorts/epkv6Lg5maM?si=lL1bdUjh7-iP5-TI)

# Constants

In the example above, `coins` is a variable that could constantly change throughout the game being played.

Sometimes our programs will need to refer to ==a variable that doesn’t change in value while the program is running==. This called a constant.

For example a program that calculates the cost of meal. If tax needs to be added to the cost.

[https://replit.com/@bitFez/ex9#main.py](https://replit.com/@bitFez/ex9#main.py)

  

### Golden rules

> [!important]  
> When writing a constant write the name of the constant in all CAPS.  

  

before you have some practice with assignment and re-assignment, take a look at the example below.

```Python
# assign a as 10
a = 10
# assign b as 12
b = 12
# assign c as 5
c = 5
# assign d as 2
d = 2

# before running the program try to walk through the statements below 
# with pen and paper. What do you think each statement would be? 
e = a + b
a = c - d
b = e * d
d = a - e
b = e - 8

print("a = " + str(a))
print("b = " + str(b))
print("c = " + str(c))
print("d = " + str(d))
print("e = " + str(e))
```

See the answer for yourself here [https://replit.com/@bitFez/ex10](https://replit.com/@bitFez/ex10)

# Tasks

- [ ] task 1 - [https://replit.com/@bitFez/variablesassignmenttask1](https://replit.com/@bitFez/variablesassignmenttask1)
    - Answer - reveal to see final output.
        
        ```Python
        a = 10
        b = 12
        c = blah
        d = 2
        e = 3.0
        f = 0
        ```
        
- [ ] task 2 - [variables_assignment_task_2 - Replit](https://replit.com/@bitFez/variablesassignmenttask2#main.py)
    
    - Answer - reveal to see final output.
        
        ```Plain
        The rings of power were 20 magical rings
        forged in the 2nd Age.
        intended by Sauron to seduce the rulers of Middle-earth to evil. 
        Disguised as a benevolent entity called Annatar
        3 Rings for the Elven-kings under the sky,
        7 for the Dwarf-lords in their halls of stone,
        9 Nine for Mortal Men doomed to die,
        One for the Dark Lord on his dark throne 
        In the Land of Mordor where the Shadows lie.
        1 Ring to rule them all.
        ```
        
        ![[/Untitled 1 3.png|Untitled 1 3.png]]
        
    
      
    

# Extra Reading

[https://learnpythonthehardway.org/book/ex4.html](https://learnpythonthehardway.org/book/ex4.html)

[https://learnpythonthehardway.org/book/ex5.html](https://learnpythonthehardway.org/book/ex5.html)