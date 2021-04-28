/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
import React from 'react'

const principal = ({ estilo, entrada, salida }) => {
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
    color: estilo,
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
  const [disp, setDisp] = React.useState('none')
  const visible = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(15,20,42,.95)',
    display: disp,
    position: 'absolute',
    zIndex: '2',
    overflow: 'hidden',
  }
  const equis = {
    background: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iSXNvbGF0aW9uX01vZGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTk2LjIgMTk2LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5Ni4yIDE5Ni4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTEyLjksOTguMWw3Mi40LTcyLjRjMi0yLDMuMS00LjYsMy4xLTcuNGMwLTIuOC0xLjEtNS40LTMuMS03LjRjLTItMi00LjYtMy4xLTcuNC0zLjFjLTIuOCwwLTUuNCwxLjEtNy40LDMuMQ0KCUw5OC4xLDgzLjNMMjUuNywxMC45Yy0yLTItNC42LTMuMS03LjQtMy4xYy0yLjgsMC01LjQsMS4xLTcuNCwzLjFjLTIsMi0zLjEsNC42LTMuMSw3LjRjMCwyLjgsMS4xLDUuNCwzLjEsNy40bDcyLjQsNzIuNA0KCWwtNzIuNCw3Mi40Yy00LjEsNC4xLTQuMSwxMC43LDAsMTQuOGMyLDIsNC42LDMuMSw3LjQsMy4xYzIuOCwwLDUuNC0xLjEsNy40LTMuMWw3Mi40LTcyLjRsNzIuNCw3Mi40YzIsMiw0LjYsMy4xLDcuNCwzLjENCglzNS40LTEuMSw3LjQtMy4xYzQuMS00LjEsNC4xLTEwLjcsMC0xNC44TDExMi45LDk4LjF6Ii8+DQo8L3N2Zz4NCg==")',
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
  const [estilo2, setEstilo2] = React.useState('white')
  const [estilo3, setEstilo3] = React.useState('white')
  const [estilo4, setEstilo4] = React.useState('white')
  const [estilo5, setEstilo5] = React.useState('white')
  const [estilo6, setEstilo6] = React.useState('white')
  const styleli2 = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: estilo2,
  }
  const styleli3 = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: estilo3,
  }
  const styleli4 = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: estilo4,
  }
  const styleli5 = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: estilo5,
  }
  const styleli6 = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
    fontSize: '100%',
    color: estilo6,
  }
  const conttt = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
  const textoo = {
    color: 'white',
    lineHeight: '0',
  }
  const conttexto = {
    width: '30%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '25%',
    marginTop: '-20%',
  }
  return (
    <div style={style}>
      <div style={visible}>
        <div style={conttt}>
          <div style={conttexto}>
            <h1 style={textoo}>FIXTURES</h1>
            <h1 style={textoo}>TEAMS</h1>
            <h1 style={textoo}>TICKETS & PREMIUM</h1>
            <h1 style={textoo}>FANS</h1>
            <h1 style={textoo}>SHOP SPURS</h1>
          </div>
        </div>
        <div style={menu}>
          <div style={logo}> </div>
          <button onClick={() => setDisp('none')} style={equis}>
            <div> </div>
          </button>
        </div>
      </div>
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
          <button onClick={() => setDisp('block')} style={barras}>
            <div> </div>
          </button>
          <h1 style={texto}> MENU</h1>
        </div>
        <div style={encabe2}>
          <div style={contenedor}>
            <a href="https://www.tottenhamhotspur.com/the-club/" id="c" style={a}>
              <h1 style={styleli} onMouseEnter={entrada} onMouseLeave={salida}>The Club</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli2} onMouseEnter={() => setEstilo2('yellow')} onMouseLeave={() => setEstilo2('white')}>History</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli3} onMouseEnter={() => setEstilo3('yellow')} onMouseLeave={() => setEstilo3('white')}>
                Passionate About Tottenham
              </h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli4} onMouseEnter={() => setEstilo4('yellow')} onMouseLeave={() => setEstilo4('white')}>Foundation</h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli5} onMouseEnter={() => setEstilo5('yellow')} onMouseLeave={() => setEstilo5('white')}>
                Football Development
              </h1>
            </a>
            <a href="https://www.tottenhamhotspur.com/the-club/" style={a}>
              <h1 style={styleli6} onMouseEnter={() => setEstilo6('yellow')} onMouseLeave={() => setEstilo6('white')}>Partners</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default principal
