import React from "react";

// Este componente só adiciona o * visual, o "required" precisa ser usado no input.
export default function Obrigatorio({ children }) {
  return (
    <>
      {children}{" "}
      <span className="text-danger" aria-hidden="true">
        *
      </span>
    </>
  );
}
