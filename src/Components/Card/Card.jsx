/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Card.css'
import propTypes from 'prop-types'
import WebItems from './WebItems'
import OtherItems from './OtherItems'

const Card = ({ items }) => {
  let Item = []

  if (items === 'WebItems') {
    Item = WebItems
  } else if (items === 'OtherItems') {
    Item = OtherItems
  }

  return (
    <div className="card-grid">
      {Item.map((item) => (
        <div className="card-container">
          <img className={item.classImg} src={item.image} />
          <h3 className={item.classH3}>{item.title}</h3>
          <p className={item.classP}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

Card.propTypes = {
  items: propTypes.string.isRequired,
}

export default Card
