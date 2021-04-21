/* eslint-disable react/button-has-type */
import React from 'react'

document.body.style.margin = 0
document.body.style.padding = 0

const principal = () => {
  const style = {
    backgroundImage: 'url("https://tot-tmp.azureedge.net/media/32200/harry-kane-tottenham-hotspur-foundation.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    width: '100%',
    position: 'relative',
    height: '85%',
    backgroundColor: 'linear-gradient(90deg,rgba(0,0,0,.7),rgba(0,0,0,.6) 30%,rgba(0,0,0,.5) 50%,rgba(0,0,0,.3) 80%,hsla(0,0%,100%,0))',
    zIndex: '0',
    margin: '0',
    padding: '0',
    top: '0',
    overflow: 'auto',
  }
  const style2 = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    zIndex: '1',
    margin: '0',
    padding: '0',
    position: 'relative',
    overflow: 'auto',
  }
  const styleh1 = {
    color: 'white',
    fontSize: '450%',
    textDecoration: 'none',
    position: 'relative',
    fontFamily: 'ApexNew,Helvetica Neue,sans-serif',
    width: '80%',
    height: '1%',

  }
  const menu = {
    position: 'absolute',
    overflow: 'auto',
    height: '23%',
    width: '5%',
    top: '0%',
    left: '16%',
    background: '#111835',
    zIndex: '2',
  }
  const logo = {
    backgroundImage: 'url("https://i.ibb.co/qJRP82Z/descarga.png")',
    width: '35%',
    height: '45%',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '5%',
    left: '36%',
  }
  const barras = {
    background: 'url("https://i.ibb.co/PmyhShB/descarga-1.png")',
    position: 'absolute',
    width: '25%',
    height: '15%',
    bottom: '25%',
    left: '37.5%',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
  }
  const texto = {
    position: 'absolute',
    bottom: '1%',
    left: '30%',
    color: 'white',
    fontSize: '65%',
    fontFamily: 'ApexNew,Helvetica Neue,sans-serif',
  }
  const son = {
    position: 'absolute',
    top: '57%',
    left: '22%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  }
  const encabe2 = {
    width: '100%',
    height: '7%',
    backgroundColor: 'rgba(17,24,54,.9)',
    display: 'flex',
    justifyContent: 'center',
  }
  const contenedor = {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingTop: '0.5%',
  }
  const styleli = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: 'white',
  }
  const a = {
    alignSelf: 'center',
    textDecoration: 'none',
  }
  const azul = {
    color: '#3db7e4',
    textDecoration: 'none',
  }
  /*  const btnn = {
    backgroundImage: 'url("https://www.vhv.rs/dpng/d/589-5893562_tu-informacin-personal-al-alcance-de-tu-mano.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: '50%',
    height: '50%',
  } */
  const div = {
    height: '60%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10%',
  }
  const span = {
    color: 'white',
  }
  return (
    <div style={style}>
      <div style={style2}>
        <div style={son}>
          <a href="#Foundation" style={azul}>#Foundation</a>
          <a href="https://www.tottenhamhotspur.com/news/2021/april/gallery-players-train-ahead-of-everton-trip/" style={styleh1}>About Us</a>
          <div style={div}>
            <span style={span}>
              Serving the community for over a decade
            </span>
          </div>
        </div>
        <div style={menu}>
          <div style={logo}> </div>
          <button onClick="" style={barras}>
            <div> </div>
          </button>
          <h1 style={texto}> MENU</h1>
        </div>
        <div style={encabe2}>
          <div style={contenedor}>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>The Club</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>History</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>Passionate About Tottenham</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>Foundation</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>Football Development</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli}>Partners</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default principal
