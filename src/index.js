/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Components/Card/Card'
import Title from './Components/Title/Title'
import ImageContainer from './Components/ImageContainer/ImageContainer'
import Projects from './Components/Projects/Projects'
import './index.css'

const App = () => (
  <div>
    <ImageContainer />
    <Title text="About Me" />
    <Title text="Web Technologies" />
    <Card items="WebItems" />
    <Title text="Other Technologies" />
    <Card items="OtherItems" />
    <Title text="My Projects" />
    <Projects />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
