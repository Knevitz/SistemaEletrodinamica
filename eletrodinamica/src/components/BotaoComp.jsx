import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const BotaoComp = ({
  to,
  children,
  type = "button",
  variant = "custom-vermelho",
  className = "",
  ...rest
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      e.preventDefault(); // evita envio de form acidental
      navigate(to);
    }
  };

  return (
    <Button
      type={type}
      className={`${variant} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BotaoComp;
