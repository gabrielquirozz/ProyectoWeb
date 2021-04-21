import React from 'react'
import ReactDOM from 'react-dom'
import Miencabezado from './components/nav/encabe'
import Sonny from './components/nav/body'
import Body from './components/nav/body2'
import Cuerpo from './components/nav/body3'
import Footer from './components/nav/footer'
import Footer2 from './components/nav/footer2'
import Cuerpo2 from './components/nav/body4'
import Cuerpo3 from './components/nav/body5'
import Cuerpo4 from './components/nav/body6'

const App = () => (

  <div>
    <Miencabezado> </Miencabezado>
    <Sonny> </Sonny>
    <Body> </Body>
    <Cuerpo> </Cuerpo>
    <Cuerpo2> </Cuerpo2>
    <Cuerpo3> </Cuerpo3>
    <Cuerpo4> </Cuerpo4>
    <Footer> </Footer>
    <Footer2> </Footer2>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
