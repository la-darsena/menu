import Allergene from "./Allergene";

function DropdownItem({
  name,
  nameLowerCase,
  price,
  priceSpecial,
  text,
  allergeni,
}) {
  return (
    <li className="menu__dropdown-inner-list-item">
      <div className="dropdown-item">
        <div className="dropdown-item__container">
          <div className="dropdown-item__text-container">
            {name && (
              <h3 className="dropdown-item__name">
                {name}
                {nameLowerCase && (
                  <>
                    <br />
                    <span className="dropdown-item__name--lowercase">
                      {nameLowerCase}
                    </span>
                  </>
                )}{" "}
              </h3>
            )}
            <p className="dropdown-item__text">{text}</p>
            {allergeni &&
              allergeni.map((item, index) => (
                <Allergene name={item} size={"2.4rem"} />
              ))}
          </div>
          {price && <span className="dropdown-item__price">€ {price}</span>}
          {priceSpecial && (
            <span className="dropdown-item__price"> {priceSpecial}</span>
          )}
        </div>
      </div>
    </li>
  );
}

export default DropdownItem;
