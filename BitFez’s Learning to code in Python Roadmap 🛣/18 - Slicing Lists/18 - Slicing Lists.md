As you know by now, items in a list are indexed, but what if we don’t want to focus on all items of a list?

similar to how we can use substring indexing to focus on sections of a string, in the example below i demonstrate how to do the same with items of a list or array.

[https://replit.com/@bitFez/slicing-example#main.py](https://replit.com/@bitFez/slicing-example#main.py)

  

In the example above, we can see that although although I indicated items between 0:3, Python counts from 0 and up to 3 (not including 3).

![[/Untitled 9.png|Untitled 9.png]]

  

> [!important]  
> Think about when we use a for loop to iterate through all items of a list. If we write:for i in range(0, len(shopping_list):  
print(shopping_list[i])We are effectively saying from items 0 to 5 because there are 5 items in the list. Since we start counting from 0, there isn’t really a 5th item 🤔. This is ok since we are counting up to item 5 and not including 5 .  

  

# Negative indexing?

Python also supports counting from the end of a list by using a negative count.

  

![[/Untitled 1 6.png|Untitled 1 6.png]]

Suppose I wanted to print the last 2 items from the list. I could write this in several ways.

`print(shopping_list[-2:])`

`print(shopping_list[3:])`

  

The absence of a number index after the colon just means that it can continue to the end of the list.

  

# Tasks

- [ ] Sort the list and find the smallest 2 numbers [slicing_task_1 - Replit](https://replit.com/@bitFez/slicingtask1#main.py)
- [ ] Sort the numbers and print the smallest and largest number [slicing_task_2 - Replit](https://replit.com/@bitFez/slicingtask2#main.py)
- [ ] Sort the numbers and print the 2 smallest and 2 largest numbers [slicing_task_3 - Replit](https://replit.com/@bitFez/slicingtask3#main.py)