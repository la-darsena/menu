const RistorantePranzo = [
  {
    info: "Il menù del pranzo comprende tre antipasti, tre primi e due secondi di pesce che variano in base al pescato del giorno.",
  },
  {
    nome: "piatti freddi",
    contenuto: [
      {
        nome: "Insalatona mozzarella, tonno e mais",
        prezzo: "6,50",
      },
      {
        nome: "Insalata mista",
        prezzo: "4,00",
      },
      {
        nome: "Mozzarella caprese",
        prezzo: "6,50",
      },
      {
        nome: "contorno del giorno",
        prezzoSpecial: "a partire da € 4,00",
      },
    ],
  },
  {
    nome: "antipasti ",
    contenuto: [
      {
        nome: "Antipasto del giorno",
        prezzo: "8,00",
      },
      {
        nome: "Tris di antipasti",
        prezzo: "12,00",
      },
    ],
  },
  {
    nome: "primi piatti",
    contenuto: [
      {
        nome: "primi del giorno",
        prezzoSpecial: "a partire da € 12,00",
      },
      {
        nome: "pasta in bianco",
        prezzo: "5,00",
      },
      {
        nome: "pasta al pomodoro",
        prezzo: "6,00",
      },
      {
        nome: "gnocchi al pomodoro",
        prezzo: "7,00",
      },
    ],
  },
  {
    nome: "secondi piatti",
    contenuto: [
      {
        nome: "secondi del giorno",
        prezzoSpecial: "a partire da € 13,00",
      },
    ],
  },
  {
    nome: "panini & pizze",
    contenuto: [
      {
        nome: "panino al prosciutto cotto",
        prezzo: "4,00",
      },
      {
        nome: "panino al salame",
        prezzo: "4,00",
      },
      {
        nome: "panino al prosciutto crudo",
        prezzo: "4,50",
      },
      {
        nome: "panino prosciutto crudo e formaggio",
        prezzo: "5,00",
      },
      {
        nome: "panino bresaola e scaglie di grana",
        prezzo: "6,00",
      },
      {
        nome: "panino mozzarella e pomodoro",
        prezzo: "4,50",
      },
      {
        nome: "panino tonno e pomodoro",
        prezzo: "4,50",
      },
      {
        nome: "panino farcito al tonno",
        prezzo: "4,00",
      },
      {
        nome: "panino prosciutto crudo e mozzarella",
        prezzo: "5,00",
      },
      {
        nome: "trancio di pizza",
        prezzoSpecial: "a partire da € 1,50",
      },
    ],
  },
  {
    nome: "stuzzicherie",
    contenuto: [
      {
        nome: "cartoccio di chips",
        prezzo: "4,00",
      },
      {
        nome: "pizzonde",
        prezzo: "2,00",
      },
      {
        nome: "pizzonde con pomodoro e mozzarella",
        prezzo: "4,50",
      },
      {
        nome: "pizzonde con prosciutto crudo e mozzarella",
        prezzo: "5,00",
      },
      {
        nome: "pizzonde con prosciutto crudo e pecorino",
        prezzo: "5,00",
      },
      {
        nome: "pizzonde con nutella",
        prezzo: "3,00",
      },
    ],
  },
  {
    nome: "frutta e dolci",
    contenuto: [
      { sottosezione: "frutta" },
      {
        nome: "coppetta di ananas, melone e anguria",
        prezzo: "4,00",
      },
      {
        nome: "fetta di anguria o melone",
        prezzo: "5,00",
      },
      { sottosezione: "dolci" },
      {
        nome: "sorbetto al limone",
        prezzo: "4,00",
      },
      {
        nome: "sorbetto corretto (con ratafia o prosecco)",
        prezzo: "5,00",
      },
      {
        nome: "coppa tiramisù (semifreddo)",
        prezzo: "4,00",
      },
      {
        nome: "pistacchiotto (semifreddo)",
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
        nome: "Spritz",
        prezzo: "5,00",
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
        nome: "Ginseng",
        prezzo: "1,50",
      },
      {
        nome: "Orzo",
        prezzo: "1,30",
      },
      {
        nome: "Crema caffè",
        prezzo: "2,50",
      },
      {
        nome: "Cappuccino",
        prezzo: "1,70",
      },
      {
        nome: "Latte macchiato",
        prezzo: "2,00",
      },
      {
        nome: "Latte bianco",
        prezzo: "1,20",
      },
      {
        nome: "Tè e infusi",
        prezzo: "1,50",
      },
      {
        nome: "Caffè americano",
        prezzo: "2,00",
      },
      {
        nome: "Caffè shakerato",
        prezzo: "3,00",
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

export default RistorantePranzo;
