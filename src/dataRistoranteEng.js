const RistoranteEng = [
  {
    nome: "degustation menu",
    contenuto: [
      {
        sottosezione: "€45 excluding drinks",
      },
      {
        nome: "Appetizer",
        testo: "2 raw, 2 cold, 2 hot.",
      },
      {
        nome: "First course",
        testo: "One first course of your choice from the menu.",
      },
      {
        nome: "Second course",
        testo: "A second course of your choice from the menu.",
      },
      {
        nome: "Dessert",
        testo: "A dessert of your choice from the menu.",
      },
    ],
  },
  {
    nome: "appetizers",
    contenuto: [
      {
        nome: "Antipasti La Darsena",
        testo: "Assortment of cold, hot, and raw appetizers.",
        prezzo: "36.00",
      },
      {
        nome: "I crudi di mare",
        testo:
          "Assortment of raw seafood appetizers, depending on the catch of the season.",
        prezzo: "22.00",
        allergeni: [
          "uova",
          "pesce",
          "soia",
          "frutta a guscio",
          "sedano",
          "solfiti",
          "molluschi",
        ],
      },
      {
        nome: "tris di caldi *",
        testo:
          "Roasted cuttlefish with peppers, steamed cod fillet with chickpea and turmeric cream, golden tuna with berry mayonnaise.",
        prezzo: "15.00",
        allergeni: ["cereali", "uova", "pesce", "molluschi"],
      },
      {
        sottosezione: "tartare",
      },
      {
        nome: "Tartare di tonno rosso *",
        testo:
          "Bluefin tuna tartare seasoned with Maldon salt and homemade oil.",
        prezzo: "15.00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        nome: "Tartare di salmone",
        testo: "Salmon tartare seasoned with Maldon salt and homemade oil.",
        prezzo: "15.00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        nome: "Tartare di gamberoni *",
        testo:
          "Tartare of prawns seasoned with Maldon salt, grain mustard, and homemade oil.",
        prezzo: "15.00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        sottosezione: "cold appetizers",
      },
      {
        nome: "Insalata di seppia *",
        testo:
          "Cuttlefish noodle, pink shrimp, saffron potatoes, and salicornia.",
        prezzo: "12.00",
        allergeni: ["crostacei", "uova", "pesce", "solfiti"],
      },
      {
        nome: "Gamberone alla catalana *",
        testo:
          "Catalan-style steamed king prawns (carrots, celery, Tropea onion, cherry tomatoes, caper flowers, Maldon salt, and homemade oil).",
        prezzo: "12.00",
        allergeni: ["crostacei", "pesce", "sedano", "solfiti"],
      },
      {
        nome: "Salmone marinato",
        testo:
          "Dry marinated salmon with sockeye, peaches, roasted almond fillets, and sour cream.",
        prezzo: "12.00",
        allergeni: ["pesce", "latte", "frutta a guscio", "solfiti"],
      },
      {
        nome: "Filetto di sgombro *",
        testo: "Mackerel with caramelized Tropea onion.",
        prezzo: "12.00",
        allergeni: ["pesce", "solfiti"],
      },
      {
        nome: "Baccalà mantecato *",
        testo:
          "Lofoten Islands cod PGI mantecato with vitelotte potato chips and parsley chlorophyll.",
        prezzo: "14.00",
        allergeni: ["pesce", "latte", "frutta a guscio", "solfiti"],
      },
    ],
  },
  {
    nome: "pasta dishes",
    contenuto: [
      {
        information:
          "Upon request, pasta dishes can be replaced with gluten-free products.",
      },
      {
        nome: "risotto al nero di seppia *",
        testo:
          "Cuttlefish ink rice scented with lime with Mazzara red shrimp and cuttlefish.",
        prezzo: "14.00",
        allergeni: ["crostacei", "pesce", "sedano", "solfiti", "molluschi"],
      },
      {
        nome: 'chitarrone con scampi e "ferfellone" *',
        testo:
          "Bronze-drawn durum wheat pasta with scampi, garlic, oil and dried sweet red bell pepper.",
        prezzo: "14.00",
        allergeni: ["cereali", "crostacei", "uova"],
      },
      {
        nome: "gnocchi alla darsena *",
        testo: "potato gnocchi with seafood.",
        prezzo: "14.00",
        allergeni: [
          "cereali",
          "crostacei",
          "uova",
          "pesce",
          "sedano",
          "molluschi",
        ],
      },
      {
        nome: "paccheri blu all'astice",
        testo: "Gragnano blue spirulina seaweed paccheri with curaçao lobster.",
        prezzo: "18.00",
        allergeni: ["cereali", "crostacei", "pesce"],
      },
    ],
  },
  {
    nome: "main courses",
    contenuto: [
      {
        nome: "tonno rosso scottato *",
        testo: "seared bluefin tuna with black garlic repassed chicory.",
        prezzo: "18.00",
        allergeni: ["pesce"],
      },
      {
        nome: "filetto di rombo *",
        testo:
          "Turbot fillet with asparagus, yellow and red cherry with lemon thyme.",
        prezzo: "20.00",
        allergeni: ["cereali", "pesce"],
      },
      {
        nome: "tagliata di spada *",
        testo: "swordfish tagliata with mysticanza and peach gill.",
        prezzo: "18.00",
        allergeni: ["pesce"],
      },
      {
        nome: "fish & chips",
        testo:
          "Fried seafood (based on the catch of the day) and potato chips.",
        prezzo: "15.00",
        allergeni: ["cereali", "crostacei", "molluschi"],
      },
    ],
  },
  {
    nome: "dessert",
    contenuto: [
      {
        nome: "Semifreddo al torroncino",
        testo: "Grand Marnier liqueur semifreddo and almond crisp.",
        prezzo: "6",
        allergeni: ["uova", "soia", "frutta a guscio"],
      },
      {
        nome: "Tiramisù al limoncello",
        testo: "Mascarpone cream with limoncello ladyfingers.",
        prezzo: "6",
        allergeni: ["cereali", "uova"],
      },
      {
        nome: "Sfogliatina di crema di fava tonka",
        testo: "Crispy puff pastry with Tonka bean custard and red fruits.",
        prezzo: "6.00",
        allergeni: ["cereali", "frutta a guscio"],
      },
      {
        nome: "lemon sorbet",
        prezzo: "3.00",
      },
      {
        nome: "correct sorbet",
        // testo: "lemon sorbet with prosecco."
        prezzo: "4.00",
      },
    ],
  },
  {
    nome: "drinks",
    contenuto: [
      {
        nome: "mineral water",
        testo: "San Cassiano 1lt natural/sparkling.",
        prezzo: "3.00",
      },
      {
        sottosezione: "soft drinks",
      },
      {
        nome: "33cl can",
        testo: "Fanta, Pepsi Zero.",
        prezzo: "3.00",
      },
      {
        nome: "33cl plug",
        testo:
          "Pepsi Cola, Sprite, Seven up, Lemon Soda, Tonic Water, Lemon Tea, Peach Tea.",
        prezzo: "3.00",
      },
      {
        sottosezione: "beers",
      },
      {
        nome: "unfiltered Ichnusa 33cl",
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
      {
        sottosezione: "coffee and amari",
      },
      {
        nome: "espresso coffee",
        prezzo: "1.20",
      },
      {
        nome: "decaffeinated coffee",
        prezzo: "1.30",
      },
      {
        nome: "Corrected coffee",
        prezzo: "1.70",
      },
      {
        nome: "Coffee shaken with Baileys",
        prezzo: "3.50",
      },
      {
        nome: "Amari",
        prezzoSpecial: "from € 3.00",
      },
      {
        nome: "Ratafia",
        testo: "Scuppoz Abruzzo",
        prezzo: "4.00",
      },
    ],
  },
];

export default RistoranteEng;
