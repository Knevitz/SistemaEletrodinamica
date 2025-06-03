import React, { useState } from "react";

function CNPJ({ value: propValue, onChange, ...props }) {
  // Formata o valor para o padrão de CNPJ: 00.000.000/0000-00
  const formatCNPJ = (val) => {
    if (!val) return "";
    val = val.replace(/\D/g, "");
    val = val.replace(/^(\d{2})(\d)/, "$1.$2");
    val = val.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    val = val.replace(/\.(\d{3})(\d)/, ".$1/$2");
    val = val.replace(/(\d{4})(\d)/, "$1-$2");
    return val.slice(0, 18);
  };

  const [value, setValue] = useState(formatCNPJ(propValue || ""));

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatCNPJ(rawValue);
    setValue(formattedValue);
    if (onChange) onChange(formattedValue);
  };

  // Se o valor externo mudar, atualiza o estado interno
  React.useEffect(() => {
    setValue(formatCNPJ(propValue || ""));
  }, [propValue]);

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      maxLength={18}
      placeholder="00.000.000/0000-00"
    />
  );
}

export default CNPJ;
