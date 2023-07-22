import Allergene from "./Allergene";

function AllergeniList({ isOpen, closeList, isEng }) {
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

  const allergeniEng = [
    "grains",
    "shellfish",
    "eggs",
    "fish",
    "peanuts",
    "soybeans",
    "milk",
    "nuts",
    "celery",
    "mustard",
    "sesame",
    "sulfites",
    "lupins",
    "clams",
  ];

  return (
    isOpen && (
      <>
        <div className="dark-layer" onClick={closeList}></div>
        <div className="allergeni-slider__container">
          <div className="allergeni-slider__close-container">
            <button
              className="allergeni-slider__close-button"
              onClick={closeList}>
              <div className="menu__dropdown-cross menu__dropdown-cross--rotated"></div>
            </button>
          </div>
          <div className="allergeni-slider__content-container">
            <p className="allergeni-slider__title">
              {!isEng ? "Carta degli allergeni" : "Allergens chart"} <br />
              <span className="allergeni-slider__arrow">&rarr;</span>
            </p>
            <div className="allergeni-slider">
              {allergeni.map((item, index) => (
                <Allergene
                  name={item}
                  size={"calc((100% - 32px) / 3.15 )"}
                  label={true}
                  engName={allergeniEng[index]}
                  isEng={isEng}
                />
              ))}
            </div>
            <div className="container u_margin-top-ml">
              <div className="container">
                <p className="body-text">
                  {!isEng ? "Gentili clienti" : "Dear customers"}, <br />
                  {!isEng
                    ? "il personale di sala è a disposizione per fornirvi qualsiasi informazione in merito alla natura e origine delle materie prime utilizzate ed alle modalità di preparazioni dei piatti presenti in menù."
                    : "the wait staff is available to provide you with any information regarding the nature and origin of the raw materials used and how the dishes on the menu are prepared."}
                </p>
                <p className="body-text u_margin-top-s">
                  {!isEng
                    ? "In assenza di prodotto fresco, i piatti o ingredienti presenti in menù contrassegnati con (*), possono contenere prodotti congelati in origine a bordo dal produttore. Garantiamo in ogni caso la freschezza e l'osservanza di tutte le norme sanitarie."
                    : "In the absence of fresh product, dishes or ingredients on the menu marked with (*), may contain products that were frozen on board from the manufacturer. In all cases, we guarantee freshness and compliance with all health regulations."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default AllergeniList;
