/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './ImageContainer.css'

const ImageContainer = () => (
  <div>
    <div className="div-cont">
      <img className="img-cont" src="https://media0.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" />
      <div className="card">
        <div className="photo" />
        <h3 className="h3-text">Hi! I'm Diego Arredondo</h3>
        <p className="p-text">And as you can see...</p>
        <p className="p-text">I'M A BACK-END DEVELOPER!</p>
        <a href="#about" className="a-text">
          <span>ABOUT ME</span>
        </a>
      </div>
    </div>
  </div>
)
export default ImageContainer
