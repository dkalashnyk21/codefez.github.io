This is probably one of the most commonly used skills in programming.

Back in lesson [[10 - For Loops]], I mentioned that loops make it easy to complete an instruction like messaging happy birthday to every user in an organisation with a simple loop. Look at the simple example below.

  

[https://replit.com/@bitFez/Listshappybirthdayexample#main.py](https://replit.com/@bitFez/Listshappybirthdayexample#main.py)

The example above is overly simplified. We will soon go into more complex examples.

Notice that I set the range of the loop between 0 and 4? in lesson [[6.5 String functions]], I showed you the `len()` function that returned how many characters there are in a string. We can use the len function on a list too. however on a list it behaves differently. It returns how many items there are in a list/array.

```Python
names = ["Alexy", "Hans", "Melvin", "Hakan"]

for i in range(0, len(names):
	print(f"Happy birthday, {names[i]}!")
```

This is useful if we don’t know how many items there are in a list.

# Tasks

- [ ] Iterate over a list and output how long each name is [lists_loops_task 1 - Replit](https://replit.com/@bitFez/listsloopstask1#main.py)
- [ ] Iterate over 2 lists and output a string [lists_loops_task_2 - Replit](https://replit.com/@bitFez/listsloopstask2#main.py)
- [ ] Sort the colours in to the correct lists [lists_loops_task_3 - Replit](https://replit.com/@bitFez/listsloopstask3#main.py)
- [ ] Find largest number in a list [lists_loops_task_4 - Replit](https://replit.com/@bitFez/listsloopstask4#main.py)
- [ ] Find the difference between the largest and smallest numbers in a list [lists_loops_task_5 - Replit](https://replit.com/@bitFez/listsloopstask5#main.py)

  

  

- [ ] Loop through a list and re-assign all items that are “==red==” with “==pink==” [list_assignment_task - Replit](https://replit.com/@bitFez/listassignmenttask#main.py)