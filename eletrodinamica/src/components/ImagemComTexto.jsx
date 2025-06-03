import React from "react";

function ImagemComTexto({ imagemSrc, altTexto, titulo, texto1, texto2 }) {
  return (
    <div className="imagem-com-texto">
      <img src={imagemSrc} alt={altTexto} className="img-cover" />
      <div className="img-overlay-center overlay-dark">
        <h1>{titulo}</h1>
        <p>{texto1}</p> {/* Primeiro texto */}
        <p>{texto2}</p> {/* Segundo texto */}
      </div>
    </div>
  );
}

export default ImagemComTexto;
