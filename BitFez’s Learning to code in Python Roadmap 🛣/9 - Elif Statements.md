Sometimes an if statement does not allow for enough possible outcomes. Look at the example below.

> [!important]  
> Aisha wants to input today’s weather forecast into a program she is writing. She wants the program to give a comment based on the temperature.if the temperature is less than 0, the program should output → “it may be safer to stay in”if the temperature is between 0 and 5 → “It will be freezing today”if the temperature is between 6 and 10 → “It will be quite chilly today”if between 11 and 18 → “it will be a mild day”if between 18 and 25 → “The temperature will be very hot today, remember sunscreen!”and for all other temperatures output → “It will be scorchio!  

  

You’ll be writing the program for the above scenario in just a moment. Take a look at the example syntax below for a similar solution.

```Python
goals = int(input("How many did arsenal score last night?"))

if goals == 0:
  print("Arsenlol always make me laugh 😂")
elif goals >=1 or goals <=2:
  print("its nice to see they score a few")
elif goals >2 or goals <5:
  print("It sounds like it may have been an exciting game")
else:
  print("Wow! Arsenal must have thrashed the other team")
```

Key points from the above example:

- The Boolean expression on the first line needs to start with an `if`
- All other Boolean expressions must start as `elif`
- The last statement should be an `else` statement but is not necessary.
- Notice that some lines have more than 1 `True` or `False` comparison that is combined with an `or` operator.
    
    - When this is the case, you must refer to the object being compared twice. eg.
        
        ✔ `goals >0 or goals <=2`
        
        ❌ `goals >0 or <=2`
        
    
      
    
      
    

## Another example

A popular game we’ve all probably played to help make a decision such as what you’re watching on TV has been Rock-Paper-Scissors. In this example, you will see 2 things that are new to you.

- Firstly, line 1 `from random import choice` allows Python to load a function to make random choices from a library of functions called `random`. You will learn more about the random library later.
- Secondly, line 3 introduces a list. This is a data structure. Again, you will learn more on this later. It’s a way to store multiple values under 1 variable name.
- This time the `if` Boolean expression uses an `and` operator checking to see if 2 conditions are `True`. You will finish this code off for task 2!

[https://replit.com/@bitFez/eliftask2-rock-paper-scissors#main.py](https://replit.com/@bitFez/eliftask2-rock-paper-scissors#main.py)

  

[https://youtube.com/shorts/jgFurizupMI?si=VROYJxTgfvVsJBfu](https://youtube.com/shorts/jgFurizupMI?si=VROYJxTgfvVsJBfu)

# Tasks

- [ ] [Task 1](https://replit.com/@bitFez/eliftask1#main.py)
- [ ] [Task 2 - Rock paper scissors](https://replit.com/@bitFez/eliftask2-rock-paper-scissors#main.py) (Simple task)
    - [ ] Task 2 extension [[Task Rock, Paper, Scissors, Lizard, Spock]]
- [ ] [Task 3 - For the Crypto heads](https://replit.com/@bitFez/eliftask3#main.py) 📉📈 (Harder task)
- [ ] [Task 4 - For the Discord nerds](https://replit.com/@bitFez/Task-4-Discord#main.py) 🤓 (Simple task)

  

# More Tasks

- [ ] Brilliant video from John Phillip Jones
    
    [https://www.youtube.com/watch?v=C_P3CjjGmrA&list=PL6lxxT7IdTxG6w4PIx4BXsir7Q8nlQ8H9&index=6](https://www.youtube.com/watch?v=C_P3CjjGmrA&list=PL6lxxT7IdTxG6w4PIx4BXsir7Q8nlQ8H9&index=6)
    
- [ ] Another LearnPythonTheHardWay walkthrough by Barton Poulson [https://www.youtube.com/watch?v=Sww4qQq8_tU&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=32](https://www.youtube.com/watch?v=Sww4qQq8_tU&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=32)
- [ ] The follow up video to the one above [https://www.youtube.com/watch?v=pXG2uKTZl8U&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=33](https://www.youtube.com/watch?v=pXG2uKTZl8U&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=33)