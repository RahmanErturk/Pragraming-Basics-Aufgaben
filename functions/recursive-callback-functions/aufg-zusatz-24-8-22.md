# Zusatzaufgaben
​
## 1. How much is true? (mittel)
​
Implementiere eine Funktion die zählt wieviele Elemente eines Array true sind
​
### Beispiele
​
```js
countTrue([true, false, false, true, false]); // ➞ 2
​
countTrue([false, false, false, false]); // ➞ 0
​
countTrue([]); // ➞ 0
```
​
### Notizen
​
-   Return 0 wenn das Array leer ist
​
## 2. Numbers in string (schwer)
​
Erstellen Sie eine Funktion, die ein Array von Zeichenketten annimmt und ein Array zurückgibt, das nur die Zeichenketten enthält, die Zahlen enthalten. Wenn es keine Zeichenketten mit Zahlen gibt, wird ein leeres Array zurückgegeben.
​
### Beispiele
​
```js
numInStr(["1a", "a", "2b", "b"]); // ➞ ["1a", "2b"]
​
numInStr(["abc", "abc10"]); // ➞ ["abc10"]
​
numInStr(["abc", "ab10c", "a10bc", "bcd"]); // ➞ ["ab10c", "a10bc"]
​
numInStr(["this is a test", "test1"]); // ➞ ["test1"]
```
​
### Notes
​
Die Zeichenketten können Leerzeichen oder beliebige andere Zeichen enthalten.
​
## Souvenir Shop (sehr schwer)
​
Bei einem Urlaub im Ausland siehst du einen Souvenirladen und beschließen, hineinzugehen. Dort gibt es Schneekugeln, Postkarten, Kühlschrankmagnete und all die anderen Dinge, die man normalerweise findet.
​
Schreibe eine Funktion die berechnet wieviele Dinge du maximal kaufen kannst. Als Parameter erhält die Funktion ein Array von Preisen und eine Zahl (Das Geld in deinem Geldbeutel).
​
### Beispiele
​
```js
maxItems(["1", "1", "2"], "3"); // ➞ 2
​
maxItems(["10", "7", "2", "60"], "20"); // ➞ 3
​
maxItems(["15", "5", "30", "30", "10"], "2"); // ➞ "Nicht genug Geld!"
```
​
### Notizen
​
-   Wenn du dir nichts leisten kannst, return "Nicht genug Geld!".
-   Die Preise sind ganze Zahlen.