When we think of a list, we can usually picture a row or a column of data.

A 2D (also known as a multi-dimension array) can be thought of as a data structure with columns and rows together.

![[/Untitled 10.png|Untitled 10.png]]

When we access an item in a list, we use 1 index. With 2D arrays we need 2 indices. The first index refers to the row and the second refers to the column. What item of data do you think the example above points to? Run the code below to see.

  

[https://replit.com/@bitFez/2d-arrays-example-2#main.py](https://replit.com/@bitFez/2d-arrays-example-2#main.py)

  

# Updating elements

In the English Premier League season 20-21, the following players were the top 3 goal scorers. The first number represents the goals they scored and the second represents their assists.

```Python
scorers = [
	["Muhammad Salah",16,9],
	["Diego Jota",12,1],
	["Son Heung-Min",9,0]
]
```

Actually Heung-Min Son’s assists should be 3. To update that I could write

`scorers[2][2] = 3`

  

[https://youtube.com/shorts/jjenA6FpS-4?si=2Br6IAETfNLmp_1G](https://youtube.com/shorts/jjenA6FpS-4?si=2Br6IAETfNLmp_1G)

- See the result here
    
    [https://replit.com/@bitFez/2d-arrays-example-3#main.py](https://replit.com/@bitFez/2d-arrays-example-3#main.py)
    

  

## 3D arrays?

![[/Untitled 1 7.png|Untitled 1 7.png]]

We can actually add a 3rd dimension. I hope this example is not too complicated. I have tried to separate each dimension using using colours.

```Python
eCars = [[['Tesla S'],[120, 250, 70000]],[['Nissan Leaf'],[105, 200, 30000]]]
print(f'The {eCars[0][0]} has a longer range than the {eCars[1][0]} with a range of {eCars[0][1][1]} miles.')
```

The code above should result in:

`The Tesla S has a longer range than the Nissan Leaf with a range of 250 miles.`

  

# Tasks

- [ ] Complete this program for a naughts and crosses game [2d arrays naughts&crosses_task - Replit](https://replit.com/@bitFez/2d-arrays-naughtsandcrossestask#main.py)
- [ ] Remove the strings from this list of numbers [2d arrays remove strings task - Replit](https://replit.com/@bitFez/2d-arrays-remove-strings-task#main.py)
- [ ] A slightly harder task 😉. move all the strings in the 2D arrays to the last empty array [2d arrays - move strings task - Replit](https://replit.com/@bitFez/2d-arrays-move-strings-task#main.py)
- [ ] The last item of practice here is to move the strings to the list at the end and pop out all items IF they are Boolean [2d arrays - move strings - pop the Booleans task - Replit](https://replit.com/@bitFez/2d-arrays-move-strings-pop-the-Booleans-task#main.py)