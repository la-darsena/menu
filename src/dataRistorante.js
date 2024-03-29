const Ristorante = [
  {
    nome: "menù degustazione",
    contenuto: [
      {
        sottosezione: "50€ bevande escluse",
      },
      {
        nome: "Antipasto",
        testo: "2 crudi, 2 freddi, 2 caldi.",
      },
      {
        nome: "Primo piatto",
        testo: "Un primo piatto a sceltà dal menù.",
      },
      {
        nome: "Secondo piatto",
        testo: "Un secondo piatto a sceltà dal menù.",
      },
      {
        nome: "Dessert",
        testo: "Un dessert a sceltà dal menù.",
      },
    ],
  },
  {
    nome: "antipasti ",
    contenuto: [
      {
        nome: "Antipasti La Darsena",
        testo: "Assortimento di antipasti crudi freddi e caldi.",
        prezzo: "40,00",
      },
      {
        nome: "I crudi di mare",
        testo:
          "Assortimento di antipasti crudi a seconda del pescato di stagione.",
        prezzo: "25,00",
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
        nome: "Tris di caldi *",
        testo:
          "Seppiolina arrosto con peperoni, filetto di merluzzo al vapore con crema di ceci e curcuma, tonno dorato con maionese ai frutti di bosco.",
        prezzo: "15,00",
        allergeni: ["cereali", "uova", "pesce", "molluschi"],
      },
      {
        sottosezione: "le tartare",
      },
      {
        nome: "Tartare di tonno rosso *",
        testo:
          "Tartare di tonno rosso condita con sale Maldon e olio di produzione propria.",
        prezzo: "15,00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        nome: "Tartare di salmone",
        testo:
          "Tartare di salmone condita con sale Maldon e olio di produzione propria.",
        prezzo: "15,00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        nome: "Tartare di gamberoni *",
        testo:
          "Tartare di gamberoni condita con sale Maldon, senape di grani e olio di produzione propria.",
        prezzo: "15,00",
        allergeni: ["crostacei", "uova", "pesce", "soia", "sedano", "solfiti"],
      },
      {
        sottosezione: "i freddi",
      },
      {
        nome: "Insalata di seppia *",
        testo:
          "Tagliatella di seppia, gamberi rosa, patate allo zafferano e salicornia.",
        prezzo: "13,00",
        allergeni: ["crostacei", "uova", "pesce", "solfiti"],
      },
      {
        nome: "Gamberone alla catalana *",
        testo:
          "Gamberoni al vapore alla catalana (carote, sedano, cipolla di Tropea, pomodorini, fiori di cappero, sale Maldon e olio di produzione propria).",
        prezzo: "13,00",
        allergeni: ["crostacei", "pesce", "sedano", "solfiti"],
      },
      {
        nome: "Salmone marinato",
        testo:
          "Salmone marinato a secco con soncino, pesche, filetti di mandorle tostate e panna acida.",
        prezzo: "13,00",
        allergeni: ["pesce", "latte", "frutta a guscio", "solfiti"],
      },
      {
        nome: "Filetto di sgombro *",
        testo: "Sgombro con cipolla di Tropea caramellata.",
        prezzo: "13,00",
        allergeni: ["pesce", "solfiti"],
      },
      {
        nome: "Baccalà mantecato *",
        testo:
          "Baccalà delle isole Lofoten IGP mantecato con chips di patate vitelotte e clorofilla di prezzemolo.",
        prezzo: "15,00",
        allergeni: ["pesce", "latte", "frutta a guscio", "solfiti"],
      },
    ],
  },
  {
    nome: "primi piatti",
    contenuto: [
      {
        informazione:
          "Su richiesta i primi possono essere sostituiti con prodotti gluten-free.",
      },
      {
        nome: "risotto al nero di seppia *",
        testo:
          "Riso (Vialone nano) al nero di seppia profumato al lime con crudo di gamberi rossi di Mazzara e seppia.",
        prezzo: "15,00",
        allergeni: ["crostacei", "pesce", "sedano", "solfiti", "molluschi"],
      },
      {
        nome: 'chitarrone con scampi e "ferfellone" *',
        testo:
          "Chitarrone di grano duro trafilato al bronzo, con scampi, aglio, olio e peperone rosso dolce essiccato.",
        prezzo: "15,00",
        allergeni: ["cereali", "crostacei", "uova"],
      },
      {
        nome: "gnocchi alla darsena *",
        testo: "Gnocchi di patate con frutti di mare.",
        prezzo: "15,00",
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
        testo:
          "Paccheri di Gragnano all'alga spirulina blu con astice al curaçao.",
        prezzo: "20,00",
        allergeni: ["cereali", "crostacei", "pesce"],
      },
    ],
  },
  {
    nome: "secondi piatti",
    contenuto: [
      {
        nome: "tonno rosso scottato *",
        testo: "Tonno rosso scottato con cicorietta ripassata all'aglio nero.",
        prezzo: "20,00",
        allergeni: ["pesce"],
      },
      {
        nome: "filetto di rombo *",
        testo:
          "Filetto di rombo chiodato con asparagi, ciliegino giallo e rosso al timo limone.",
        prezzo: "20,00",
        allergeni: ["cereali", "pesce"],
      },
      {
        nome: "tagliata di spada *",
        testo: "Tagliata di pesce spada con misticanza e lamelle di pesca.",
        prezzo: "20,00",
        allergeni: ["pesce"],
      },
      {
        nome: "fish & chips",
        testo: "Frittura (in base al pescato del giorno) e chips di patate.",
        prezzo: "16,00",
        allergeni: ["cereali", "crostacei", "molluschi"],
      },
    ],
  },
  {
    nome: "panini",
    contenuto: [
      {
        nome: "ciabatta con polpo",
        prezzo: "13,00",
        allergeni: ["cereali", "molluschi"],
      },
      {
        nome: "michetta con tonno",
        prezzo: "13,00",
        allergeni: ["cereali", "pesce"],
      },
    ],
  },
  {
    nome: "dessert",
    contenuto: [
      {
        nome: "Semifreddo al torroncino",
        testo: "Semifreddo al liquore Grand Marnier e croccante di mandorle.",
        prezzo: "6",
        allergeni: ["uova", "soia", "frutta a guscio"],
      },
      {
        nome: "Tiramisù al limoncello",
        testo: "Crema di mascarpone con Savoiardi al limoncello.",
        prezzo: "6",
        allergeni: ["cereali", "uova"],
      },
      {
        nome: "Sfogliatina di crema di fava tonka",
        testo:
          "Sfogliatina croccante con crema pasticcera alla fava Tonka e frutti rossi.",
        prezzo: "6,00",
        allergeni: ["cereali", "frutta a guscio"],
      },
      {
        nome: "Cheescake",
        prezzo: "6,00",
      },
      {
        nome: "sorbetto al limone",
        prezzo: "3,00",
      },
      {
        nome: "sorbetto corretto",
        // testo: "Sorbetto al limone con prosecco.",
        prezzo: "4,00",
      },
    ],
  },
  {
    nome: "bevande",
    contenuto: [
      {
        nome: "Acqua minerale",
        testo: "San Cassiano 1lt naturale/frizzante.",
        prezzo: "3,00",
      },
      {
        nome: "Calice di vino",
        prezzo: "3,50",
      },
      {
        nome: "Calice di prosecco",
        prezzo: "4,00",
      },
      {
        nome: "Campari Soda",
        prezzo: "4,00",
      },
      {
        sottosezione: "analcolici",
      },
      {
        nome: "Lattina 33cl",
        testo: "Fanta, Pepsi Zero, Tè al limone, Tè alla pesca.",
        prezzo: "3,00",
      },
      {
        nome: "Spina 33cl",
        testo: "Pepsi Cola, 7UP, Lemon Soda, Acqua tonica",
        prezzo: "3,00",
      },
      {
        nome: "Crodino",
        prezzo: "3,50",
      },
      {
        nome: "Sanbitter bianco",
        prezzo: "3,50",
      },
      {
        nome: "Sanbitter rosso",
        prezzo: "3,50",
      },
      {
        nome: "Cocktail Sanpellegrino",
        prezzo: "3,50",
      },
      {
        nome: "Succhi di frutta",
        testo: "ACE, mirtillo, arancia, pera, pesca, albicocca",
        prezzo: "3,50",
      },
      {
        sottosezione: "birre",
      },
      {
        nome: "Ichnusa non filtrata 33cl",
        prezzo: "4,00",
      },
      {
        nome: "Corona 33cl",
        prezzo: "4,00",
      },
      {
        nome: "Peroni 66cl",
        prezzo: "4,00",
      },
      {
        sottosezione: "caffè",
      },
      {
        nome: "Caffè espresso",
        prezzo: "1,20",
      },
      {
        nome: "Caffè decaffeinato",
        prezzo: "1,50",
      },
      {
        nome: "Caffè corretto",
        prezzo: "1,70",
      },
      {
        nome: "Caffè shakerato con Baileys",
        prezzo: "3,50",
      },
      {
        sottosezione: "amari",
      },
      {
        nome: "Amari",
        prezzo: "3,50",
      },
      {
        nome: "Grappa bianca",
        prezzo: "4,00",
      },
      {
        nome: "Grappa barricata",
        prezzo: "4,50",
      },
      {
        nome: "Distillati",
        prezzo: "6,00",
      },
    ],
  },
];

export default Ristorante;
