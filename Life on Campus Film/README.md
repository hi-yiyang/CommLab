# What is it like to live on the NYUAD campus?

*A HTML, CSS & JavaScript challenge.*

The project is Assignment 1 of Communications Lab course in Interactive media. The project contains two parts. In the first part, video production, we have produced a short film about campus life as a group of three. The second part requires individual efforts towards creating a webpage for the short film.

## Process

1. HTML
   
   Most HTML content is constructed inside a `<div>` container, which makes it possible for grouping individual elements and customizing the positions of these groups. HTML tags and classes are used holistically with consideration of CSS codes.

2. CSS
   
   The CSS master settings for `<body>` is applied before anything else. CSS plays a vital part in positioning. I have experimented with several techniques to position elements, and found `flex` position setting especially useful.
   
   When it comes to the background image, I have tried two solutions. `background-image` tag was proven to apply to only the image in a certain `<div>`, which is not full-screen at a fixed position all the time. Moreover, there were also some problems while `fixed` position was utilized in the second solution, including but not limited to the disappearance of elements after the code of the image.  The problem was fixed with a `relative` position setting. The positioning of the title block and the sticky header also consumed a lot of time.
   
3. JavaScript
   
   JS is used to modify the blurness of the page for better readability. Also, image carousel is implemented with JS.
   

## Evaluation

I have spent tens of hours going through all the materials and techniques, another tens of hours drafting and crafting the webpage, summing to ~25 hours in total. Every minor detail has been examined, and every screen size has been made into consideration.

Only two initial expectations have not been met - animation during DOM refresh and change of video size as the page is scrolled down. I reckon that they could both be implemented with JS upon further research.
