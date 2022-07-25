import { Link } from "react-router-dom";

function SectionButton({ name, image, link, index, animated }) {
  return (
    <Link to={"/" + link}>
      <button
        className={`section-button ${
          animated ? "section-button--animated" : ""
        }`}
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
