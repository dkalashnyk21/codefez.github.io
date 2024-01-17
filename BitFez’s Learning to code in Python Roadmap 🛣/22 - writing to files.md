This will be a short lesson and the end of my learning to code in Python roadmap series 🥳🎉🎉

  

When opening files, you used 2 arguments with the `open()` function; The filename followed by the `"r"` to open the file for reading. In this lesson, you will see 2 other arguments you can give.

|   |   |
|---|---|
|`w`|opens the file for writing. But overwrites all previous file data|
|`a`|opens the file for writing. But appends new data to the end of the file|

  

> [!important]  
> TIP - Python will look for the file in the same directory as where your .py file is saved. If it cannot find the file in the same directory, it will create a file with the filename given as an argument.  

  

# Using the `w` parameter

[https://replit.com/@bitFez/writing-to-file-example-1#main.py](https://replit.com/@bitFez/writing-to-file-example-1#main.py)

  

# Using the `a` parameter

[https://replit.com/@bitFez/writing-to-file-example-2#main.py](https://replit.com/@bitFez/writing-to-file-example-2#main.py)

Did you notice that the data was added to the end of line 3?

  

[https://youtube.com/shorts/Zrbk9VLjGPQ?si=J7Ndow56cOYOAU4D](https://youtube.com/shorts/Zrbk9VLjGPQ?si=J7Ndow56cOYOAU4D)

# The `.write()` command

This will add a line to your file as a string datatype. It will not add a new line break at the end of a line. You need to do that manually with `'\n`

- example without `'\n'`
    
    [https://replit.com/@bitFez/writing-to-file-example-3-write#main.py](https://replit.com/@bitFez/writing-to-file-example-3-write#main.py)
    
- example with `'\n'`
    
    [https://replit.com/@bitFez/writing-to-file-example-3-writen#main.py](https://replit.com/@bitFez/writing-to-file-example-3-writen#main.py)
    

# Tasks

- [ ] Write a shopping list to a file [writing to file - task 1 - Replit](https://replit.com/@bitFez/writing-to-file-task-1#main.py)
- [ ] Now add some more items to the shopping list without deleting the previous list items [writing to file - task 2 - Replit](https://replit.com/@bitFez/writing-to-file-task-2#main.py)
- [ ] Write these last items to the shopping list [writing to file - task 3 - Replit](https://replit.com/@bitFez/writing-to-file-task-3#main.py)