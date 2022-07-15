import SectionButton from "../components/SectionButton";

import RistoranteImg from "../assets/images/ristorante.webp";
import ViniImg from "../assets/images/vini.webp";
import AperitiviImg from "../assets/images/aperitivi.webp";

function Landing() {
  const Sections = [
    {
      ita: "Ristorante",
      eng: "Restaurant",
      image: RistoranteImg,
      link: "ristorante",
    },
    { ita: "Carta dei vini", eng: "Wine list", image: ViniImg, link: "vini" },
    {
      ita: "Aperitivo",
      eng: "Aperitif",
      image: AperitiviImg,
      link: "aperitivo",
    },
  ];

  return (
    <div className="sections-container">
      {Sections.map((item, index) => (
        <SectionButton name={item.ita} image={item.image} link={item.link} />
      ))}
    </div>
  );
}

export default Landing;
