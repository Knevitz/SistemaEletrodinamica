import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CardComp = ({
  imgSrc,
  alt,
  title,
  description,
  className = "",
  link,
  hasColorEffect = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  const imgClass = hasColorEffect
    ? "card-img-top grayscale-effect"
    : "card-img-top";

  return (
    <div
      className={`card text-center h-100 ${className}`}
      onClick={link ? handleClick : undefined}
      style={{ cursor: link ? "pointer" : "default" }}
      role={link ? "button" : undefined}
      tabIndex={link ? 0 : undefined}
      onKeyDown={(e) => link && e.key === "Enter" && handleClick()}
    >
      {imgSrc && <img src={imgSrc} className={imgClass} alt={alt || title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        {description && <p className="card-text">{description}</p>}
      </div>
    </div>
  );
};

export default CardComp;
