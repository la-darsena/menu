import Allergene from "./Allergene";

function AllergeniList({ isOpen, closeList }) {
  const allergeni = [
    "cereali",
    "crostacei",
    "uova",
    "pesce",
    "arachidi",
    "soia",
    "latte",
    "frutta a guscio",
    "sedano",
    "senape",
    "sesamo",
    "solfiti",
    "lupini",
    "molluschi",
  ];

  return (
    isOpen && (
      <>
        <div className="dark-layer" onClick={closeList}></div>
        <div className="allergeni-slider__container">
          <div className="allergeni-slider__close-container">
            <button
              className="allergeni-slider__close-button"
              onClick={closeList}
            >
              <div className="menu__dropdown-cross menu__dropdown-cross--rotated"></div>
            </button>
          </div>
          <div className="allergeni-slider__content-container">
            <p className="allergeni-slider__title">
              Carta degli allergeni <br />
              <span className="allergeni-slider__arrow">&rarr;</span>
            </p>
            <div className="allergeni-slider">
              {allergeni.map((item, index) => (
                <Allergene
                  name={item}
                  size={"calc((100% - 32px) / 3.15 )"}
                  label={true}
                />
              ))}
            </div>
            <div className="container u_margin-top-ml">
              <p className="body-text">
                Gentili clienti, <br />
                il personale di sala è a disposizione per fornirvi qualsiasi
                informazione in merito alla natura e origine delle materie prime
                utilizzate ed alle modalità di preparazioni dei piatti presenti
                in menù.
              </p>
              <p className="body-text u_margin-top-s">
                In assenza di prodotto fresco, i piatti o ingredienti presenti
                in menu contrassegnati con (*), possono contenere prodotti
                congelati in origine a bordo dal produttore. Garantiamo in ogni
                caso la freschezza e l'osservanza di tutte le norme sanitarie.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default AllergeniList;
