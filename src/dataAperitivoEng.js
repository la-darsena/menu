const AperitivoEng = [
  {
    nome: "Aperibeach",
    contenuto: [
      {
        sottosezione: (
          <>
            7€ with beverage included <br /> excluding cockatils and beers
          </>
        ),
      },
      {
        testo:
          "Selection of cured meats and pecorino cheese, stuffed sandwich and appetizers.",
      },
    ],
  },
  {
    nome: "Aperitivo Darsena",
    contenuto: [
      {
        sottosezione: "15€ excluding beverages",
      },
      {
        testo:
          "Raw and cooked dishes selection based on the catch of the day and fried seafood.",
      },
    ],
  },
  {
    nome: "Sandwitches",
    contenuto: [
      {
        nome: "Ciabatta con Polpo *",
        testo:
          "Ciabatta stuffed with roasted octopus, crispy salad, turmeric mayonnaise and potato chips.",
        prezzo: "13.00",
        allergeni: ["cereali", "uova", "molluschi"],
      },
      {
        nome: "Michetta con tonno *",
        testo:
          "Michetta stuffed with tuna, mint zucchini carpaccio, wasabi mayonnaise and potato chips.",
        prezzo: "13.00",
        allergeni: ["cereali", "uova", "pesce", "frutta a guscio", "solfiti"],
      },
    ],
  },
  {
    nome: "drinks",
    contenuto: [
      {
        nome: "glass of wine",
        prezzo: "3.50",
      },
      {
        nome: "glass of prosecco",
        prezzo: "4.00",
      },
      {
        nome: "Campari Soda",
        prezzo: "4.00",
      },
      {
        nome: "Canned drinks 33cl",
        testo: "Fanta, Pepsi Zero, Lemon tea, Peach tea",
        prezzo: "3.00",
      },
      {
        nome: "Tap drinks 33cl",
        testo: "Pepsi Cola, 7UP, Lemon Soda, Tonic Water",
        prezzo: "3.00",
      },
      {
        nome: "Crodino",
        prezzo: "3.50",
      },
      {
        nome: "Sanbitter bianco",
        prezzo: "3.50",
      },
      {
        nome: "Sanbitter rosso",
        prezzo: "3.50",
      },
      {
        nome: "Cocktail Sanpellegrino",
        prezzo: "3.50",
      },
      {
        nome: "fruit juice",
        testo: "ACE, blueberry, orange, pear, peach, apricot",
        prezzo: "3.00",
      },
    ],
  },
  {
    nome: "beers",
    contenuto: [
      {
        nome: "Ichnusa non filtrata 33cl",
        prezzo: "3.50",
      },
      {
        nome: "Corona 33cl",
        prezzo: "4.00",
      },
      {
        nome: "Peroni 66cl",
        prezzo: "4.00",
      },
    ],
  },
  {
    nome: "long drinks",
    contenuto: [
      {
        nome: "hugo",
        testo: "Prosecco, syrup, soda, mint, lemon.",
        prezzo: "5.00",
      },
      {
        nome: "negroni",
        testo: "gin, bitter campari, red vermouth.",
        prezzo: "5.00",
      },
      {
        nome: "negroni sbagliato",
        testo: "prosecco, bitter campari, red vermouth.",
        prezzo: "5.00",
      },
      {
        nome: "americano",
        testo: "vermouth rosso, bitter campari, orange slice.",
        prezzo: "5.00",
      },
      {
        nome: "sensual peach",
        testo: "prosecco, peach liqueur, peach pulp, lime.",
        prezzo: "5.00",
      },
    ],
  },
  {
    nome: "cocktails",
    contenuto: [
      {
        nome: "mojito",
        testo: "White rum, brown sugar, mint, lime, soda.",
        prezzo: "6.00",
      },
      {
        nome: "black mojito",
        testo: "White rum, licorice liqueur, brown sugar, mint, lime, soda.",
        prezzo: "6.50",
      },
      {
        nome: "kiev mule",
        testo: "Vodka, ginger beer, lime jiuce.",
        prezzo: "6.00",
      },
      {
        nome: "gin tonic",
        testo: "Gin, tonic water, slice of lemon.",
        prezzo: "6.00",
      },
      {
        nome: "gin lemon",
        testo: "Gin, lemon soda, slice of lemon.",
        prezzo: "6.00",
      },
      {
        nome: "cuba libre",
        testo: "White rum, Coca Cola, lime.",
        prezzo: "6.00",
      },
      {
        nome: "caipirinha",
        testo: "Cachaca, brown sugar, lime.",
        prezzo: "6.00",
      },
      {
        nome: "caipiroska",
        testo: "Vodka, brown sugar, lime.",
        prezzo: "6.00",
      },
    ],
  },
  {
    nome: "non-alcoholic cocktails",
    contenuto: [
      {
        nome: "mojito",
        testo: "Lemon soda, brown sugar, mint, lime, soda.",
        prezzo: "5.00",
      },
      {
        nome: "orange sunrise",
        testo: "Orange juice, Fanta, grenadine, orange.",
        prezzo: "5.00",
      },
      {
        nome: "multifruit",
        testo: "Non-alcoholic fruit cocktail.",
        prezzo: "5.00",
      },
    ],
  },
  {
    nome: "wines",
    contenuto: [
      {
        sottosezione: "white wines",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Trebbiano",
        testo: "Podere Castorani",
        prezzo: "13.00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC Superiore",
        testo: "Podere Castorani",
        prezzo: "18.00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Abruzzo Pecorino DOC Superiore",
        testo: "Podere Castorani",
        prezzo: "18.00",
      },
      {
        nome: "Villa gemma",
        nomeMinuscolo: "Bianco Colline Teatine IGT",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "20.00",
      },
      {
        nome: "Marina Cvetic",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "45.00",
      },
      {
        nome: "malandrino",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC",
        testo: "Cataldi Madonna",
        prezzo: "18.00",
      },
      {
        nome: "giulia",
        nomeMinuscolo: "Pecorino IGT Terre Aquilane",
        testo: "Cataldi Madonna",
        prezzo: "20.00",
      },
      {
        nome: "60 passi",
        nomeMinuscolo: "Pecorino Colline Pescaresi IGP",
        testo: "Cantina Marramiero",
        prezzo: "16.00",
      },
      {
        nome: "emidio pepe 2020",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC",
        testo: "Emidio Pepe",
        prezzo: "45.00",
      },
      {
        nome: "emidio pepe 2014",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC",
        testo: "Emidio Pepe",
        prezzo: "80.00",
      },
      {
        nome: "cococciola",
        nomeMinuscolo: "Terre di Chieti IGP",
        testo: "Tenuta Ulisse",
        prezzo: "20.00",
      },
      {
        nome: "passerina",
        nomeMinuscolo: "Terre di Chieti IGP",
        testo: "Tenuta Ulisse",
        prezzo: "20.00",
      },
      {
        nome: "chardonnay",
        nomeMinuscolo: "Alto Adige DOC",
        testo: "Kellerei Meran Burggräfler",
        prezzo: "18.00",
      },
      {
        nome: "gewurztraminer",
        nomeMinuscolo: "Alto Adige DOC",
        testo: "Kellerei Meran Burggräfler",
        prezzo: "20.00",
      },
      {
        nome: "la segreta il bianco",
        nomeMinuscolo: "Sicilia DOC",
        testo: "Planeta",
        prezzo: "18.00",
      },
      { sottosezione: "red wines" },
      {
        nome: "malandrino",
        nomeMinuscolo: "Montepulciano d'Abruzzo bio",
        testo: "Cataldi Madonna",
        prezzo: "18.00",
      },
      {
        nome: "testa rossa rosso",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Pasetti",
        prezzo: "25.00",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "13.00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "18.00",
      },
      {
        nome: "Inferi",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Marramiero",
        prezzo: "25.00",
      },
      {
        nome: "Antàres",
        nomeMinuscolo: "Montepulciano d'Abruzzo Colline Teramane DOCG",
        testo: "San Lorenzo Vini",
        prezzo: "15.00",
      },
      {
        nome: "emidio pepe 2020",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Emidio Pepe",
        prezzo: "50.00",
      },
      {
        nome: "Marina Cvetic",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "35.00",
      },
      {
        nome: "villa gemma 2017",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "60.00",
      },
      { sottosezione: "rosé wines" },
      {
        nome: "rosato san lorenzo",
        nomeMinuscolo: "Colli Aprutini IGT",
        testo: "San Lorenzo Vini",
        prezzo: "17.00",
      },
      {
        nome: "villa gemma",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "19.00",
      },
      {
        nome: "testa rossa rosato",
        nomeMinuscolo: "Terre Aquilane IGP",
        testo: "Pasetti",
        prezzo: "17.00",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "13.00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "19.00",
      },
      {
        nome: "merlot",
        nomeMinuscolo: "Terre di Chieti IGT",
        testo: "Tenute Ulisse",
        prezzo: "21.00",
      },
      {
        nome: "malandrino",
        nomeMinuscolo: "Cerasuolo d'Abruzzo bio DOC",
        testo: "Cataldi Madonna",
        prezzo: "19.00",
      },
      {
        nome: "calalenta",
        nomeMinuscolo: "Merlot Rosato",
        testo: "Cantina Fantini",
        prezzo: "18.00",
      },
      { sottosezione: "spumanti & champagne" },
      {
        nome: "pecorino brut",
        testo: "San Lorenzo Vini",
        prezzo: "15.00",
      },
      {
        nome: "rosato brut",
        testo: "San Lorenzo Vini",
        prezzo: "18.00",
      },
      {
        nome: "passerina podere castorani",
        nomeMinuscolo: "Metodo Classico Millesimato",
        testo: "Podere Castorani",
        prezzo: "22.00",
      },
      {
        nome: "gran cuvée bianca",
        nomeMinuscolo: "Swarovsky",
        testo: "Cantina Fantini",
        prezzo: "18.00",
      },
      {
        nome: "gran cuvée rosé",
        nomeMinuscolo: "Swarovsky",
        testo: "Cantina Fantini",
        prezzo: "18.00",
      },
      {
        nome: "ferrari brut",
        testo: "Ferrari - Fratelli Lunelli",
        prezzo: "30.00",
      },
      {
        nome: "cuvée imperiale brut",
        nomeMinuscolo: "Franciacorta",
        testo: "Guido Berlucchi & C.",
        prezzo: "30.00",
      },
      {
        nome: "yellow label",
        nomeMinuscolo: "Champagne Brut",
        testo: "Veuve Clicquot & Ponsardin",
        prezzo: "60.00",
      },
      {
        nome: "colmei jeio",
        nomeMinuscolo: "Prosecco Valdobbiadene Superiore DOC Brut",
        testo: "Bisol 1542",
        prezzo: "18.00",
      },
      {
        nome: "vertus experience",
        nomeMinuscolo: "Champagne Extra Brut Blanc de Blancs Premier Cru AOC",
        testo: "André Jacquart",
        prezzo: "50.00",
      },
    ],
  },
];

export default AperitivoEng;
