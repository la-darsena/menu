import { Link } from "react-router-dom";

function SectionButton({ name, image, link }) {
  return (
    <Link to={"/" + link}>
      <button
        className="section-button"
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <div className="section-button__name">{name}</div>
      </button>
    </Link>
  );
}

export default SectionButton;
