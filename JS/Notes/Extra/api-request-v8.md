<!-- https://randomuser.me/api -->
<!-- https://api.github.com/users/Tanmay0215 -->

before fetch API was introduced, XMLHTTPRequest was used to make API requests.

XMLHTTPRequest 
<!-- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest -->

heavily used in AJAX requests.
AJAX: Asynchronous JavaScript and XML

```js
const xhr = new XMLHttpRequest();
const url = "https://randomuser.me/api";

xhr.open('GET', url)
xhr.onreadystatechange = function() {
    console.log(xhr.responseText);
}
```