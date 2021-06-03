/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Projects.css'
import WebItems from './ProjectsItems'

const Projects = () => (
  <div className="card-projects">
    {WebItems.map((item) => (
      <div className="card-container-pr">
        <h3 className={item.classH3}>{item.title}</h3>
      </div>
    ))}
  </div>
)

export default Projects
