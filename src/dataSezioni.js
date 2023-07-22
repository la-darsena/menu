import Ristorante from "./dataRistorante";
import RistoranteEng from "./dataRistoranteEng";
import Vini from "./dataVini";
import ViniEng from "./dataViniEng";
import Aperitivo from "./dataAperitivo";
import AperitivoEng from "./dataAperitivoEng";
import RistorantePranzo from "./dataRistorantePranzo";
import RistorantePranzoEng from "./dataRistorantePranzoEng";

const Sezioni = {
  ita: {
    "ristorante-cena": Ristorante,
    "ristorante-pranzo": RistorantePranzo,
    vini: Vini,
    aperitivo: Aperitivo,
  },
  eng: {
    "ristorante-cena": RistoranteEng,
    "ristorante-pranzo": RistorantePranzoEng,
    vini: ViniEng,
    aperitivo: AperitivoEng,
  },
};

export default Sezioni;
