import React from 'react'

document.body.style.margin = 0
document.body.style.padding = 0

const Encabezado2 = () => {
  const style = {
    width: '100%',
    height: '5%',
    backgroundColor: '#0b0e1e',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const style2 = {
    order: '1',
  }
  const style3 = {
    order: '2',
  }
  const style4 = {
    order: '3',
  }
  const styleh1 = {
    fontFamily: 'ApexNew,Helvetica Neue,sans-serif',
    color: 'white',
    textRendering: 'optimizeLegibility',
    fontSize: '14px',
    lineHeight: '39px',

  }
  const stylecont = {
    maxWidth: '1024px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '100%',
  }
  return (
    <div style={style}>
      <div style={stylecont}>
        <div style={style3}>
          <h1 style={styleh1}> English</h1>
        </div>
        <div style={style4}>
          <h1 style={styleh1}> Search site</h1>
        </div>
        <div style={style2}>
          <h1 style={styleh1}>Accesibility</h1>
        </div>
      </div>
    </div>
  )
}
export default Encabezado2
