# **TITOLO**

## **Hoisting**

**_`JavaScript Hoisting`_** si riferisce al processo per cui l'interprete sembra spostare la `dichiarazione di funzioni, variabili o classi` all'inizio del loro ambito, prima dell'esecuzione del codice.

```js
catName("Tiger");

function catName(name) {
    console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/
```

---

## **Conditional statements**

L'istruzione **_`if`_** esegue un'istruzione se una condizione specificata è veritiera. Se la condizione è falsa, è possibile eseguire un'altra istruzione.

```js
if (condition) {
    statement1
} else {
    statement2
}
```

L'istruzione **_`switch`_** valuta un'espressione, associando il valore dell'espressione a una clausola case ed esegue le istruzioni associate a tale case, nonché le istruzioni nei case che seguono il case corrispondente.

```js
switch (expression) {
    case value1:
        //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
      //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
      //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

## **Loop statements**

L'istruzione **_`for`_** crea un ciclo che consiste di tre espressioni facoltative, racchiuse tra parentesi e separate da punto e virgola, seguite da un'istruzione (di solito un'istruzione block) da eseguire nel ciclo.

```js
for ([initialization]; [condition]; [final-expression]) {
    statement
}
```

L'istruzione **_`do...while`_** crea un ciclo che esegue un'istruzione specificata finché la condizione di test non restituisce false. La condizione viene valutata dopo l'esecuzione dell'istruzione, determinando l'esecuzione dell'istruzione specificata almeno una volta.

```js
do {
   statement
}
while (condition);
```

L'istruzione **_`while`_** crea un ciclo che esegue un'istruzione specificata purché la condizione di test sia vera. La condizione viene valutata prima di eseguire l'istruzione.

```js
while (condition) {
    statement
}
```

## **Special `for` statements**

L'istruzione **_`for...in`_** scorre su tutte le proprietà enumerabili di un oggetto che sono codificate da stringhe (ignorando quelle codificate da simboli), comprese le proprietà enumerabili ereditate.

```js
for (variable in object) {
  statement
}
```

L'istruzione **_`for...of`_** crea un ciclo che itera su oggetti iterabili, inclusi: `String, Array, oggetti simili a array (ad esempio argomenti o NodeList), TypedArray, Map, Set e iterable definiti dall'utente.` Invoca un hook di iterazione personalizzato con istruzioni da eseguire per il valore di ciascuna proprietà distinta dell'oggetto.

```js
for (variable of iterable) {
  statement
}
```

## **Other iteration methods that are part of functional programming**

**_`Array.prototype.forEach()`_**

Il metodo forEach() esegue una funzione fornita una volta per ogni elemento dell'array.

**_`Map.prototype.forEach()`_**

Il metodo forEach() esegue una funzione fornita una volta per ogni coppia chiave/valore nell'oggetto Map, in ordine di inserimento.
