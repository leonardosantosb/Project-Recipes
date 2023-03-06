import React from 'react';


export default function DoneCard({
  index,
  id,
  category,
  name,
  image,
  doneDate,
  tags,
  type,
  nationality,
  alcoholicOrNotAlc,
}) {
  const typeCheck = type === 'meal' ? nationality : alcoholicOrNotAlc; // condicional para requisito 46 - tipo de comida e se é alcoolica
    return (

    )
}
