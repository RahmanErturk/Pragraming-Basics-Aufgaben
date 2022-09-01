# Aufgabe 4

Wenn Sie ein gestreiftes Muster ausmalen, können Sie jedes Quadrat nacheinander färben, was bedeutet, dass Sie Zeit damit verbringen, die Farbstifte zu wechseln.

Erstelle eine Funktion, die bei einem Array von Farben zurückgibt, wie lange es dauert, das gesamte Muster zu färben. Beachten Sie die folgenden Zeiten:

Es dauert 1 Sekunde, um zwischen den Stiften zu wechseln.
Es dauert 2 Sekunden, um ein Quadrat zu färben.

## Beispiele

```js
colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]); // return 14

// Es gibt 5 Farben, also dauert es 10 Sekunden, jede Farbe zu färben (2 x 5 = 10).
// Man muss die Stifte 4 Mal wechseln und braucht dafür 4 Sekunden (1 x 4 = 4).
// 10 + 4 = 14

colorPatternTimes(["Blue"]); // return 2

colorPatternTimes(["Red", "Yellow", "Green", "Blue"]); // return 11

colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]); // return 13
```

## Info

Wechsle die Farbstifte nur, wenn die nächste Farbe eine andere ist als die vorherige.
Deine funktion sollte eine Zahl (Anzahl Sekunden) returnen.
