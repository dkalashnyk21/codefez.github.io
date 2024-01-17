Repetition is another really useful function of programming.

[https://www.youtube.com/embed/mgooqyWMTxk?start=0&end=36](https://www.youtube.com/embed/mgooqyWMTxk?start=0&end=36)

  

> [!important]  
> A for loop is useful when you know how many times an instruction needs to be repeated.  

  

I want to repeat saying “Happy birthday!” 10 times. This is similar to what Mark Zuckerberg mentions in the video above without sending the message to individual users.

![[Untitled-2022-01-24-1326.png]]

  

# The local variable

> [!important]  
> The local variable is similar to any other variable in a code file. It only exists in the for loop however. it can be named any suitable name. For example, if I am saying 5 times I could change i to greetingNumber.  

```Python
for greetingNumber in range(5):
		print("G'day mate")
```

  

[https://youtube.com/shorts/cExxsVzsLDQ?si=PKyms77ft0Sj3i2I](https://youtube.com/shorts/cExxsVzsLDQ?si=PKyms77ft0Sj3i2I)

  

The local variable is just a number. See what happens below when I print the local variable out.

[https://replit.com/@bitFez/forexample1#main.py](https://replit.com/@bitFez/forexample1#main.py)

  

The range is set as 5. So the instruction will repeat 5 times. Did you notice counting started at 0?

  

# The range

So above, I stated the range was 5 and the counting started from 0. What if I wanted to start the count from 7 for example?

I can set a set range for the counting to begin and end.

[https://replit.com/@bitFez/forexample2#main.py](https://replit.com/@bitFez/forexample2#main.py)

  

This time did you notice the range began at 7 and ended at 12? Python will count up between 2 given numbers starting from the first given number.

  

[https://youtube.com/shorts/0SAfsuU7b-0?si=N1Yu75G4st2K2Anj](https://youtube.com/shorts/0SAfsuU7b-0?si=N1Yu75G4st2K2Anj)

# Tasks

It goes without saying all of the below tasks should be completed using a `for` loop

- [ ] repeat saying “I am Groot” 50 times
- [ ] print out the numbers 1 - 100
- [ ] print out the numbers 14 - 33

## More challenging tasks - practice concatenation

- [ ] print out the word `“Number: “ i` . i should be a number starting from 10 to 20.
- [ ] print out → 1 Mississippi, 2 Mississippi ... up to 100 Mississippi.
- [ ] print out a 10 times table each line should look like this:
    
    `x * y = xy`