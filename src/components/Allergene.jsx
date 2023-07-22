import CerealiIcon from "../assets/allergeni/cerali.svg";
import CrostaceiIcon from "../assets/allergeni/crostacei.svg";
import UovaIcon from "../assets/allergeni/uova.svg";
import PesceIcon from "../assets/allergeni/pesce.svg";
import ArachidiIcon from "../assets/allergeni/arachidi.svg";
import SoiaIcon from "../assets/allergeni/soia.svg";
import LatteIcon from "../assets/allergeni/latte.svg";
import FruttaGuscioIcon from "../assets/allergeni/frutta_a_guscio.svg";
import SedanoIcon from "../assets/allergeni/sedano.svg";
import SenapeIcon from "../assets/allergeni/senape.svg";
import SesamoIcon from "../assets/allergeni/sesamo.svg";
import SolfitiIcon from "../assets/allergeni/solfiti.svg";
import LupiniIcon from "../assets/allergeni/lupini.svg";
import MolluschiIcon from "../assets/allergeni/molluschi.svg";

function Allergene({ name, size, label, engName, isEng }) {
  const icons = {
    cereali: CerealiIcon,
    crostacei: CrostaceiIcon,
    uova: UovaIcon,
    pesce: PesceIcon,
    arachidi: ArachidiIcon,
    soia: SoiaIcon,
    latte: LatteIcon,
    "frutta a guscio": FruttaGuscioIcon,
    sedano: SedanoIcon,
    senape: SenapeIcon,
    sesamo: SesamoIcon,
    solfiti: SolfitiIcon,
    lupini: LupiniIcon,
    molluschi: MolluschiIcon,
  };

  return (
    <div className="allergene-container" style={{ width: size }}>
      <img src={icons[name]} alt={name} className="allergene__icon" />
      {label && <p className="allergene-label">{!isEng ? name : engName}</p>}
    </div>
  );
}

export default Allergene;
