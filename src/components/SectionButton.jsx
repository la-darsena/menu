import { Link } from "react-router-dom";

function SectionButton({ name, image, link, index }) {
  return (
    <Link to={"/" + link}>
      <button
        className="section-button"
        style={{
          backgroundImage: "url(" + image + ")",
          animationDelay: 0.1 + index / 30 + "s",
        }}
      >
        <div className="section-button__name">{name}</div>
      </button>
    </Link>
  );
}

export default SectionButton;
