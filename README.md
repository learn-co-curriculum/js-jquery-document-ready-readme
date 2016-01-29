# Document Ready

## Objectives
+ Set up a document.ready 
+ Explain why document.ready is important


## Introduction

We don't ever want to write our JavaScript and jQuery inside our HTML. For the same reasons that we want to separate out our CSS from our HTML, we want to separate out our JavaScript and jQuerys.

But we had to write our JavaScript and jQuery code at the bottom of our HTML `body` so that the code would run once the page would load. How can we achieve that when our code is in a totally different file? We need to guarantee that the HTML document is loaded before our other files are triggered. 


## Separating and Linking Code

If you take a look at `index.html`, you'll notice we have jQuery code written at the bottom. Our goal is to refactor this site to move that code out into `js/script.js`

The first thing we need to do is link `js/script.js` to `index.html`. We do that inside our `head` tag with a relative link. Go ahead and copy the code below and paste it in `index.html` in between your opening and closing `head` tag.

```html
<script src="js/script.js"></script>
```
Now that our HTML file can find our JavaScript File, let's remove the code between the `script` tags from the bottom of our HTML file and move it to `js/script.js`.

If you save all your changes, and open `index.html` in the browser, you shouldn't see the text `this is so freaking cool.` appear in the browser. That's because we haven't set the jQuery to run yet.

## Document Ready

Thankfully, jQuery has a built-in way to determine when a page is loaded. You'll be coding along in `index.html` and `js/script.js`.

In `js/script/js`, we need to set up a document ready in order to detect when our HTML page has loaded, and the document is ready to be manipulated:

```js
$( document ).ready(function() {
    //code to be executed goes here
});
```

The `$` is a shortcut that lets JavaScript know we're using the jQuery library. Every time you see `$` think jQuery. 

Once jQuery senses the document has loaded, the rest of the code will fire. Place the document ready around the jQuery already in `js/script.js`. Save your changes, and refresh in the browser. You should see the text appear in the browser!



## Resources

+ [Learn jQuery](http://learn.jquery.com/using-jquery-core/document-ready/)
+ [jQuery Docs](https://api.jquery.com/ready/)
