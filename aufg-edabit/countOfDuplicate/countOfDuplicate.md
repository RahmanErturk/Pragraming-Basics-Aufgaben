# Herausforderungszeit
​
## Zählen Sie die Anzahl der Duplikate
​
1.  Schreiben Sie eine Funktion `duplikate`, die die Anzahl unterschiedlicher alphabetischer Zeichen und numerischer Ziffern ohne Berücksichtigung der Groß-/Kleinschreibung zurückgibt, die mehr als einmal in der Eingabezeichenfolge vorkommen. Es kann davon ausgegangen werden, dass die Eingabezeichenfolge nur Buchstaben (sowohl Groß- als auch Kleinbuchstaben) und numerische Ziffern enthält.
​
## Beispiel
​
```js
duplikate("abcde"); // → 0
duplikate("aabbcde"); // → 2: a, b
duplikate("aabBcde"); // → 2: a, (b,B)
duplikate("aA11"); // → 2: a, 1
duplikate("aabbccdd"); // → 4: a, b, c, d
duplikate("aabbb"); // → 2: a, b
```