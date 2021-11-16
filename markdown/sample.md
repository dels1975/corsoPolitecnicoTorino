# Titolo 1

## Modo per creare un link

un altro [paragrafo di testo](https://www.markdownguide.org/basic-syntax/ "Markdown: Basic Syntax")

## URL

<https://ads.google.com>

Elenchi puntati

* primo item
* secondo item
  * II livello - primo item
  * II livello - secondo item
    * III livello - primo item
* terzo item
  
Elenchi numerati

1. primo item
1. secondo item
   1. II livello - primo item
   1. II livello - secondo item
   1. III livello - primo item
1. terzo item

---
Creazione di checkbox

* [ ] prima scelta
* [x] seconda scelta

---

Porzione di codice

`scrittura in js:`

```js
function Exam(code, name, credits, date, score, laude = false) {
  this.code = code;
  this.name = name;
  this.credits = credits;
  this.date = dayjs(date);
  this.score = score;
  this.laude = laude;
}
```

Matematica in Latex:

$\int f(x)$

$$\int f(x)$$

---

## Formattazione del testo

la form acorsiva: _testo in corsivo con underscore_

la forma corsiva: *testo in corsivo con asterisco*

la forma grassetto: __testo in grassetto__

la forma grassetto: **testo in grassetto**

la forma corsivo-grassetto: ***testo in grassetto***

la forma corsivo-grassetto: ___testo in grassetto___

la forma corsivo-grassetto: **_testo in grassetto_**

la forma corsivo-grassetto: __*testo in grassetto*__

la forma corsivo-grassetto: *__testo in grassetto__*

la forma corsivo-grassetto: _**testo in grassetto**_

la forma barrata: ~~testo barrato~~

## Blockquote (citazioni)

I blockquote si ottengono con la parentesi angolare: `>`

```markdown
> questa è una citazione.
> Rimango sulla stessa linea
>> Citazione annidata
```

> questa è una citazione.
> Rimango sulla stessa linea
>> Citazione annidata

Questa è un unica citazione con testo a capo:

```md
> questa è una citazione.
>
> Seconda citazione
```

> questa è una citazione.
>
> Seconda citazione

---

## Tabelle

 Nome | Cognome | Età
 :---:|---|---:
 Salvatore | De Luca | 45
 Rita | Ruggieri | 42
 Giulia | De Luca | 12
 Elena | De Luca | 6

## Immagini

![Alt text](https://www.e-goo.it/wp-content/uploads/2014/08/delega_contatti-300x273.jpg "Contatti...")

## immagine per riferimento

[immagine]: https://www.e-goo.it/wp-content/uploads/2014/08/delega_contatti-300x273.jpg "Contatti..."

![Alt text][immagine]

Notazione: non funziona -> hbhvlubjkbjkò, [^1] kjbkbibb [^bignote]

[^1]: This is the footnote🚀.
