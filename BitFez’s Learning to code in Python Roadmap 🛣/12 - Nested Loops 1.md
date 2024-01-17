A nested loop is a loop inside a loop. This is really useful in programming but can often seem a little confusing. Let’s try to simplify some examples 👇

Look at the below nested for loop

```Python
for i in range(1,4):
		for j in range(1,4):
				print(f"{i}:{j}")
```

  

I will colour code this for simplicity. In the example above there is an ==outer loop== and an ==inner loop.==

So for ==i== amount of times, the range of ==j== will be displayed. The output should be:

==1==:==1==

==1==:==2==

==1==:==3==

==2==:==1==

==2==:==2==

==2==:==3==

==3==:==1==

==3==:==2==

==3==:==3==

See if you can visualise this using this [Python-Tutor example](https://pythontutor.com/visualize.html#code=for%20i%20in%20range%281,4%29%3A%0A%20%20%20%20for%20j%20in%20range%281,4%29%3A%0A%20%20%20%20%20%20%20%20print%28f%22%7Bi%7D%3A%7Bj%7D%22%29&cumulative=false&curInstr=17&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

  

[https://youtube.com/shorts/JbcMsNBfDig?si=kFJpSLxLu82MZn9g](https://youtube.com/shorts/JbcMsNBfDig?si=kFJpSLxLu82MZn9g)

  

dealing cards

sharing sweets