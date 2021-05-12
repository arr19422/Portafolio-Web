/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Components/Card/Card'
import Title from './Components/Title/Title'

const App = () => (
  <div>
    <Title text="Tecnologias Web" />
    <Card items="WebItems" />
    <Title text="Otras Tecnologias" />
    <Card items="OtherItems" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
