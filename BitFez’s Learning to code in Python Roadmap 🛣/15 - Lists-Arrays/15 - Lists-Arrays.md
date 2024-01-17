Although _lists_ and _arrays_ are not the same thing, with Python, we use both words interchangeably. The _WHY_, is not important at this point 😊

  

When we assign a variable , we are able to store, retrieve and change 1 single item of data.

```Python
fruit = "Apple"
```

  

A list (or an array) is a data structure that allows us to store more than one item of data.

```Python
fruit = ["Apple", "Orange", "Pear", "Banana"]
```

  

> [!important]  
> Key points to create an array- Naming should be just like with a variable. i.e. the name should begin with a lowercase, use snake or camel casing to separate words & reserved words such as print cannot be used.- square brackets must be used [ ] on either end.  

  

# Indexing list items

Items are all indexed in a list and can be accessed separately.

![[/Untitled 8.png|Untitled 8.png]]

We can either print a whole list out to the screen or individual items.

If I want to print an individual item, I will refer to item using square brackets. For example, the apple is the first item so I would write `fruit[0]`.

[https://replit.com/@bitFez/listsex1#main.py](https://replit.com/@bitFez/listsex1#main.py)

  

  

# Adding Items to a List

In order to add items to a list, we need to use the `append()` function.

```Python
fruit = ["Apple", "Orange", "Pear", "Banana"]

# adding another item
fruit.append("Strawberry")
```

  

## Adding items using a loop

In this example, I am using a loop to add items to a list

```Python
fruit = []
for number in range(5):
		item = input("Give me the name of a fruit")
		fruit.append(item)

print(f"You said : {fruit}.")
```

  

# Re-assigning a list value

in the same way that I can re-assign a variable, I can re-assign an item in a list.

### Variable example

```Python
age = 15
age = 16
```

This replaces 15 with 16

### List Example

```Python
fruit = ["apple", "orange", "kiwi"]
fruit[1] = "pear"
```

This replaces 🍊 with 🍐

The `1` represents the list item to replace.

  

# Tasks

- [ ] Create a list to store a shopping list and then print out the items 1 by 1
- [ ] Create a list with all the avengers. now print out just Iron Man, Captain America and Thor.
- [ ] Replace all instances of the “red” in the list with “pink” by writing the instruction to re-assig each item [list_assignment_task - Replit](https://replit.com/@bitFez/listassignmenttask#main.py)
- [ ] Watch Phil Jones’ intro video to lists [https://youtu.be/7z7j8u43SzU](https://youtu.be/7z7j8u43SzU) (22 mins)
- [ ] Create an app that adds names using a for loop. [lists_task 1 - Replit](https://replit.com/@bitFez/liststask-1#main.py)