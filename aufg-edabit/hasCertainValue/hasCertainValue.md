## hasCertainValue
​
Write a function called **_hasCertainValue_** which accepts an **array** of **objects** and a **key**, and a **value**, and _returns_ true if every single object in the array contains that value for the specific key. Otherwise it should return _false_.
​
​
# DE 
Schreiben Sie eine Funktion namens ***hasCertainValue***, die ein Array von **Objekten** und einen **Schlüssel** sowie einen Wert akzeptiert und **true** zurückgibt, wenn jedes einzelne Objekt im Array diesen Wert für den spezifischen Schlüssel enthält. Andernfalls sollte es **false** zurückgeben.
​
```js
let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];
```
​
```js
hasCertainValue(arr, "title", "Instructor"); // true
hasCertainValue(arr, "first", "Elie"); // false
```
