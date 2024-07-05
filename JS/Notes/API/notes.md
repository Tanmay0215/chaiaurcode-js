### Some APIs

[https://api.github.com/](https://api.github.com/)  
[api.github.com/users/Tanmay0215](api.github.com/users/Tanmay0215)  
[randomuser.me/api](randomuser.me/api)

#### JSON Formatter

https://jsonformatter.org/

before fetch API was introduced, XMLHTTPRequest was used to make API requests.

## XMLHTTPRequest

heavily used in AJAX requests  
**AJAX**: Asynchronous JavaScript and XML

MDN Docs: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
const url = "api.github.com/users/Tanmay0215";

xhr.open("GET", url);
xhr.onreadystatechange = function () {
  console.log(xhr.responseText);
  if (xhr.readyState === 4) {
    // data is in string format and is converted to JSON
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data.followers);
  }
};
xhr.send();
```

## v8 engine

[v8 - Github](https://github.com/v8/v8)

written in c++  
console is written in v8 and is not a part of JS


## Fetch API

