/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Title.css'
import propTypes from 'prop-types'
import Photos from './Photos'

const Title = ({ text }) => {
  if (text === 'About Me') {
    return (
      <div className="title-div" id="about">
        <h2 className="title-h2">{text}</h2>
        <p className="title-p">I'm a Programer, Dancer, Writter and a Nature Lover</p>
        <p className="title-p">I make apps for living and i want to do it for ever. I can make web apps, desktop apps and very good APIs</p>
        <div className="card-grid">
          {Photos.map((item) => (
            <div>
              <div className={item.classImg} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
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
}

Title.propTypes = {
  text: propTypes.string.isRequired,
}

export default Title
