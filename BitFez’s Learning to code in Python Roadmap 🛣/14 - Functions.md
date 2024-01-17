So far the procedures you have created have all displayed the result on the screen. The problem is that the rest of the program cannot use these results. The only difference between a procedure and a function is that a function ==_returns_== the result to the rest of the program.

  

```Python
def numberMachine(givenNumber):
		calculation = givenNumber * 10 / 2
		return calculation

result = numberMachine(5)
```

In the example above, instead of printing the result, the result is returned and saved for the rest of the program to use using the `result` variable.

  

Imagine we have a program that needs to work out the amount of VAT due for the cost of a meal.

After entering all the meal items into the program, the cost of the meal is entered into a function as an argument. The VAT value is returned to the program which uses it to output alongside other values.

  

```Python
VAT = 20
meal = 112.25

def workoutVAT(cost):
		vat = cost * 0.2
		return vat

vat_result = workoutVAT(meal)
print(f"Meal cost: £{meal}, VAT: £{vat_result}, Total: £{vat_result+meal}.")
```

  

[https://youtube.com/shorts/4uXkUegNLhs?si=UEHoFIArsPCF8C0P](https://youtube.com/shorts/4uXkUegNLhs?si=UEHoFIArsPCF8C0P)

# Local vs Global Variables

There isn’t too much more to learn about how to write functions and procedures but something that I never crammed into the procedures page which is quite significant is the use of global and local variables.

- Local
    
    Any values changed inside a function are not visible to the rest of the program because the changes are _local_ to the function. Look at the example below.
    
    [https://replit.com/@bitFez/localvariablesex#main.py](https://replit.com/@bitFez/localvariablesex#main.py)
    
- global
    
    Now look at the result of turning a variable inside a function/procedure into a _global_ variable.
    
    [https://replit.com/@bitFez/Global-Variables-example#main.py](https://replit.com/@bitFez/Global-Variables-example#main.py)
    

  

# Tasks

- [ ] converting minutes into hours and minutes [Functions_task1 - Replit](https://replit.com/@bitFez/Functionstask1#main.py)
- [ ] The farm problem [Functions_task2 - Replit](https://replit.com/@bitFez/Functionstask2#main.py)
- [ ] YouTube likes [Functions_task3_youtube_likes - Replit](https://replit.com/@bitFez/Functionstask3youtubelikes)
- [ ] The new YouTube Likes formula! [Functions_task4_youtube_likes_new - Replit](https://replit.com/@bitFez/Functionstask4youtubelikesnew#main.py)