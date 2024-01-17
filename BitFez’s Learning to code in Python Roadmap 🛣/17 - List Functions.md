Other than append there are a bunch of useful functions you will need to know. Here are a few that you should practice using.

  

len()

remove()

pop()

Sort()

Sorting in reverse order

.reverse()

count()

Tasks

# `len()`

The `len()` function returns the number of items in a list. This is sooooo useful! In fact it’s so useful, I already showed this function in lesson [[16 - Lists and iteration]].

Imagine not knowing how many items there are in a list and needing to perform some action over it.

```Python
fruit = ["Apple", "Orange", "Strawberry"]
no_of_fruit = len(fruit)
print(f"The are {no_of_fruit} items of fruit in the list.")

>>> The are 3 items of fruit in the list.
```

  

## `remove()`

The remove function will remove an item you specify. The problem is that it will only remove the first item it finds with that name.

[https://replit.com/@bitFez/List-remove-example#main.py](https://replit.com/@bitFez/List-remove-example#main.py)

  

# `pop()`

The pop function will remove an item based on its indexed location in the list.

[https://replit.com/@bitFez/List-pop-example#main.py](https://replit.com/@bitFez/List-pop-example#main.py)

In the above example, item 1 (or the second item counting from zero) is popped out of the list.

  

# `Sort()`

The sort function will order items in the list from A-Z or smallest to largest value.

[https://replit.com/@bitFez/listingsorting1#main.py](https://replit.com/@bitFez/listingsorting1#main.py)

  

### Sorting in reverse order

We can sort from Z-A or biggest to smaller by adding the `reverse=True` attribute.

[https://replit.com/@bitFez/listingsorting2#main.py](https://replit.com/@bitFez/listingsorting2#main.py)

note: The order is reversed in alphabetical order.

  

# `.reverse()`

Take a note! This method is not reversing in the same way as `sort(reverse=True)` . In this case its changes the order of the items regardless of their alphabetic or alphanumeric order.

[https://replit.com/@bitFez/listingsorting3#main.py](https://replit.com/@bitFez/listingsorting3#main.py)

  

# `count()`

  

[https://replit.com/@bitFez/listscountexample#main.py](https://replit.com/@bitFez/listscountexample#main.py)

  

# Tasks

- [ ] How many teams have ever played in the British Premier League [List_func_task_1 - Replit](https://replit.com/@bitFez/Listfunctask1#main.py)
- [ ] How many items are there in each list ? [List_func_task_2 - Replit](https://replit.com/@bitFez/Listfunctask2#main.py)
- [ ] In this task you will deal with removing instances of an item in a list [List_func_task_3 - Replit](https://replit.com/@bitFez/Listfunctask3#main.py)
- [ ] write a function that checks if a given word is a palindrome [List_func_task_4 - Replit](https://replit.com/@bitFez/Listfunctask4#main.py)
- [ ] Write a function that takes a list as a argument and checks if each item is a palindrome [List_func_task_5 - Replit](https://replit.com/@bitFez/Listfunctask5#main.py)
- [ ] Write a function to reverse items in a list and another to sort from Z-A [List_func_task_6 - Replit](https://replit.com/@bitFez/Listfunctask6#main.py)
- [ ] Counts how many times 0 and 1 are in a list. takes the first 8 0&1s and works out the denary value. [List_func_task_6 - Replit](https://replit.com/@bitFez/Listfunctask6#main.py)