import Ristorante from "./dataRistorante";
import Vini from "./dataVini";
import Aperitivo from "./dataAperitivo";
import RistorantePranzo from "./dataRistorantePranzo";

const Sezioni = {
  "ristorante-cena": Ristorante,
  "ristorante-pranzo": RistorantePranzo,
  vini: Vini,
  aperitivo: Aperitivo,
};

export default Sezioni;
