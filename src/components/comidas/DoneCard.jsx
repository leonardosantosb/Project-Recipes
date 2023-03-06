import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../../images/shareIcon.svg';

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
  const [copyLink, setCopyLink] = useState();

  return (
    <>
      <Link
        key={ id }
        to={ `/${type}s/${id}` }
      >
        <img
          data-testid={ `${index}-horizontal-image` } // data-testid solicitado no read-me
          src={ image }
          alt={ name }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` } // data-testid solicitado no read-me
        >
          {`${typeCheck} - ${category}`}
        </p>
        <p
          data-testid={ `${index}-horizontal-name` } // data-testid solicitado no read-me
        >
          { name }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` } // data-testid solicitado no read-me
        >
          {`Feito em: ${doneDate} `}
        </p>
        {tags.map((meal) => (
          <span
            key={ meal }
            data-testid={ `${index}-${meal}-horizontal-tag` } // data-testid solicitado no read-me
          >
            {` ${meal}`}
          </span>
        ))}
      </Link>
      <button
        type='button'
        src={ icon }
        data-testid={ `${index}-horizontal-share-btn` } // data-testid solicitado no read-me
        onClick={}
      >
        Compartilhar
      </button>
      { copyLink && <small>Link copied!</small>}
      {/* requisito 47 - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!"; */}
    </>
  );
}

DoneCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
