/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Title.css'
import propTypes from 'prop-types'

const Title = ({ text }) => (
  <div className="title-div">
    <h2 className="title-h2">{text}</h2>
    <p className="title-p">
      About
      {' '}
      {text}
      {', '}
      these are some technologies that I know:
    </p>
  </div>
)

Title.propTypes = {
  text: propTypes.string.isRequired,
}

export default Title
