# WordRank-Bewertungssystem

​
Erstellen Sie eine Funktion, die eine Reihe von Wörtern annimmt und das Wort mit der höchsten Punktzahl zurückgibt. Jeder Buchstabe eines Wortes erhält Punkte entsprechend seiner Position im Alphabet: a = 1, b = 2, c = 3, usw.
​

## Beispiele

```js
wordRank("The quick brown fox.") ➞ "brown"
​
wordRank("Nancy is very pretty.") ➞ "pretty"
​
wordRank("Check back tomorrow, man!") ➞ "tomorrow"
​
wordRank("Wednesday is hump day.") ➞ "Wednesday"
```

​

## Anmerkungen

- Wenn zwei Wörter die gleiche Punktzahl haben, wird das Wort zurückgegeben, das in der ursprünglichen Zeichenkette zuerst vorkommt.
- Die zurückgegebene Zeichenfolge sollte nur alphabetische Zeichen (a-z) enthalten.
- Die Groß- und Kleinschreibung muss in der zurückgegebenen Zeichenkette beachtet werden (siehe 4. Beispiel oben).
