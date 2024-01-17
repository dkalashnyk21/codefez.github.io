Opening and reading files are actually one of the easiest things to learn in Python. You need to learn 3 key things:

1. opening the file
2. reading from the file & closing the file
3. processing the file data

  

# 1. Opening the file

We need to use the Python command `open()` to open a file, and the `open()` command takes 2 arguments.

1. The name of the file to open
2. The mode to open the file. (I’ll talk more about this in a sec)

  

SO, when we open a file, we also need to store the command to open in a variable.

![[/Untitled 11.png|Untitled 11.png]]

  

# 2. Reading from the file

Now that we have the command to open the file saved under the variable `file` we can use dot notation to read the contents of the file with the function `.readlines()`.  
We save the read contents of the file in another variable. See below.  

```Python
data = file.readlines()
```

  
Lastly, we need to close the file.  

```Python
file.close()
```

  

### Example

[https://replit.com/@bitFez/reading-from-files-1#main.py](https://replit.com/@bitFez/reading-from-files-1#main.py)

  

[https://youtube.com/shorts/Lp8Why57s7A?si=qpJvpzpV3dNKqWfj](https://youtube.com/shorts/Lp8Why57s7A?si=qpJvpzpV3dNKqWfj)

# Processing the file data

Did you notice in the example above that each line in the file is added to an array as an item?

Did you also notice that each item also has a `\n`? This will be a problem if we don’t remove it.

- See why here
    
    [https://replit.com/@bitFez/reading-from-files-2#main.py](https://replit.com/@bitFez/reading-from-files-2#main.py)
    
    As you can see in the output above, the `\n` is causing an unwanted new line break!
    

  

There are a few ways to deal with this. A simple one would be to use the `.rstrip()` function to remove the `\n` from the end of the line when using.

```Python
data[0].rstrip('\n')
```

  

If you didn’t want to do that every time you needed to use an item from the data, you can clean all the data items and move them to a new array.

```Python
data = file.readlines()
cleaned_data = [] # a new empty list to store the \n removed items

for line in data:
		cleaned = line.rstrip('\n')
		cleaned_data.append(cleaned)
```

  

# Useful points!

## Casting

By default, all data in a text file is read as a string. You may have to cast some of the data if you need to perform calculations using the functions `int()` or `float()`

- See example
    
    [https://replit.com/@bitFez/reading-from-files-casting-example#main.py](https://replit.com/@bitFez/reading-from-files-casting-example#main.py)
    

  

## Splitting data

Sometimes a line will hold more than one item of data that needs to be separate. You can use the `split()` function to separate items into 2 or more separate variables.

- See example
    
    [https://replit.com/@bitFez/reading-from-files-split-example#main.py](https://replit.com/@bitFez/reading-from-files-split-example#main.py)
    

  

# Tasks

- [ ] Read and print out the list of Turkic states [reading from files - Task 1 - Replit](https://replit.com/@bitFez/reading-from-files-Task-1#main.py)
- [ ] Read the file and total the points a player has achieved from playing the same game all week [reading from files - Task 2 - Replit](https://replit.com/@bitFez/reading-from-files-Task-2#main.py)
- [ ] Which team has the lower goal difference? [reading from files - casting and split task - Replit](https://replit.com/@bitFez/reading-from-files-casting-and-split-task#main.py)
- [ ] A slightly trickier task now. Work out which teams won, lost of drew [reading from files - split task - Replit](https://replit.com/@bitFez/reading-from-files-split-task#main.py)

  

[https://img.icons8.com/color/344/open-document.png](https://img.icons8.com/color/344/open-document.png)