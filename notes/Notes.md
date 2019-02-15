I am having difficulty figuring out how to display negative values...also it appears that there is a maximum capacity? I have about 2500 data points, and a bar graph using that many would appear to explode off the page. There must be some sort of way to specify it? And how to visually display stuff?

The total number of words in the HTML file are approximately 112,559.

After filtering out the entries with HTML symbols, we narrow down the number of words to 107,145.

After putting through the unique filter, we get 11,691 words in total.

After filtering out a lot more stuff, it seems that the longest word is "DISPROPORTIONATELY" (quite long at 18 characters).

```js
.reduce((a,b) => a.length > b.length ? a : b, '').length
```

Now lets see what fraction of these unique words have neutral, positive or negative connotations.

Most of the book has neutral length:

* 10093/11573 = 87.2 has a score of 0
* 824/11573 = 7.1 has a negative score
* 656/11573 = 5.56 has a positive score

The most frequent words? 
