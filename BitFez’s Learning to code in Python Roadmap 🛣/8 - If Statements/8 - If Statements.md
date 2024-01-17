So far everything we have done has been basic sequencing. What I mean is, 1 line of code is decoded and then the next and then the next.

We need computers to be able to make decisions based on the criteria we give them. This is paramount to everything computing. eg.

- A fire alarm going off IF smoke is detected
- A notification pinging IF you get a message
- and the list could go on

# How it works

```Python
if something is True
		execute some code
else
		execute some other code 
```

> [!important]  
> Remember how before everything in Computing evaluates to True or False?  

### Comparative Operators

|Operator|Meaning|
|---|---|
|>|More than|
|<|Less than|
|>=|More than or equal to|
|<=|Less than or equal to|
|==|equal to|
|!=|Not equal to|

### Example comparisons

You may remember seeing these Boolean expressions on the [[3 - Math]] page

`4 == 2+2` → `True`

`10 > 2+2` → `True`

`2 != 1+1+1` → `True`

`5 < 0` → `False`

`2 == 1+1+1` → `False`

`12 <= 7+7` → `True`

## If statement example

[https://replit.com/@bitFez/ex15#main.py](https://replit.com/@bitFez/ex15#main.py)

This example compares 2 objects. `water_temp` and `100`. They are both integers.

When the If statement compares the value of `water_temp` (which is `70`) with the value `100`, it checks to see if it is `True` that `70` is less than `100`. ==💡 Remember this is a Boolean expression.==

# Anatomy of an ==If statement==

![[if_statements.png]]

  

[https://youtube.com/shorts/ux241ATdK5Q?si=Mk7yOzMLv0No-plL](https://youtube.com/shorts/ux241ATdK5Q?si=Mk7yOzMLv0No-plL)

# Tasks

> [!important]  
> Don’t think about skipping this part. This is tedious but you need to practice to get good and build muscle memory. Do each exercise below, typing each one out diligently 😊  

- [ ] First set of tasks [if_task1 - Replit](https://replit.com/@bitFez/iftask1#main.py)
- [ ] the second set of tasks [https://replit.com/@bitFez/iftask2](https://replit.com/@bitFez/iftask2)
- [ ] third task (see below)
    
    ```Python
    # Go back to task 2 add a variable called threes_total like below
    threes_total = 0
    
    # now each time a number is a multiple of 3 add the number to the threes_total
    # eg
    if num % 3:
    		# whatever you were going to print & add this below
    		threes_total equals threes_total plus num
    
    # finally check if three_total is a multiple of 3 in an if statement
    ```
    

  

## Extra tasks

- [ ] Learn
- [ ] Watch the excellent video by John Phillip Jones below 👇
    
    [https://www.youtube.com/watch?v=W1zOj2CI-KQ&t=485s](https://www.youtube.com/watch?v=W1zOj2CI-KQ&t=485s)
    
- [ ] another video. This time a walkthrough of _Learn Python The Hard Way_, exercise 29
    
    [https://www.youtube.com/watch?v=yZHPUvoSKeA&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=31](https://www.youtube.com/watch?v=yZHPUvoSKeA&list=PLCHnubFzFwjJVEvQk-FuEynAuwGV_4BNS&index=31)