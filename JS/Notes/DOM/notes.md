# DOM

```js
console.log(window);
console.log(window.document);
console.dir(document)
```

`document.getElemntById('id')`
`document.getElementsByClassName('class')`

```js
document.getElementById('id');
document.getElementsByClassName('class');
document.getElementById('id').id;
document.getElementById('id').getAttribute('id');
document.getElementById('id').className;
document.getElementById('id').setAttribute('class', 'test');

title = document.getElementById('id');
title.style.color = 'red';

// textContent - shows all content including hidden (display: none)
title.textContent -
// innerHTML - shows html content
title.innerHTML
// text - shows only text
title.text

```

```js
document.querySelector('h1'); // returns the first element
document.querySelectorAll('h1'); // returns a node list
document.querySelectorAll('h1')[0]; // returns the first element
```
HTML Collection is a node list, forEach will not work
to convert HTML Collection to an array

```js
const items = document.getElementsByClassName('item');
const itemsArray = Array.from(items);
```

## Create Element

```js
const newDiv = document.createElement('div');
newDiv.className = 'hello';
