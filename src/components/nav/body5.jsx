/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import mapa from '../img/mapa.png'

// eslint-disable-next-line react/prop-types
const Parrafo = () => {
  const style = {
    width: '100%',
    height: 'auto%',
  }
  const p = {
    color: '#111836',
    fontSize: '110%',
    marginLeft: '25.7%',
    width: '48%',
  }
  const h2 = {
    marginTop: '2%',
    marginLeft: '25.7%',
  }
  const a = {
    color: 'white',
    textDecoration: 'none',
    marginTop: '0%',
    marginLeft: '1%',
  }
  const div13 = {
    display: 'flex',
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
  }
  const titulo = {
    color: '#111836',
    marginLeft: '25%',
  }
  const ppp = {
    width: '50%',
    marginLeft: '25%',
    fontSize: '110%',
  }
  const mapaa = {
    backgroundImage: 'url(' + mapa + ')',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    height: '60%',
    width: '70%',
    marginLeft: '15%',
  }
  const partners = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const image = {
    width: '20%',
    height: '50%',
    marginTop: '6%',
    marginRight: '1%',
  }
  const txt = {
    width: '15%',
    color: '#4d4d4d',
    alignSelf: 'flex-end',
    marginLeft: '50%',
    borderLeft: '2px solid #e0e721',
    // marginTop: '-1%',
  }
  const txt2 = {
    width: '15%',
    color: '#4d4d4d',
    alignSelf: 'flex-end',
    marginLeft: '29%',
    // marginTop: '-2%',
    borderLeft: '2px solid #e0e721',
  }
  const h22 = {
    marginLeft: '22%',
    marginTop: '5%',
  }
  const div14 = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    // marginTop: '6%',
    justifyContent: 'center',
  }
  const imgg = {
    marginLeft: '0%',
    // marginTop: '-10%',
    width: '12%',
    height: '24%',
    alignSelf: 'center',
  }
  const imgg2 = {
    marginLeft: '5%',
    // marginTop: '-10%',
    width: '12%',
    height: '24%',
    alignSelf: 'center',
  }
  const imgg3 = {
    marginLeft: '5%',
    // marginTop: '-10%',
    width: '10%',
    height: '36%',
    alignSelf: 'center',
  }
  const txt3 = {
    marginLeft: '29%',
    // marginTop: '-11%',
    width: '10%',
    color: '#4d4d4d',
    borderLeft: '2px solid #e0e721',
    height: 'auto',
    display: 'inline-block',
  }
  const txt4 = {
    marginLeft: '5%',
    // marginTop: '-7%',
    width: '10%',
    color: '#4d4d4d',
    borderLeft: '2px solid #e0e721',
    height: 'auto',
    display: 'inline-block',
  }
  const txt5 = {
    marginLeft: '5%',
    // marginTop: '-3%',
    width: '10%',
    color: '#4d4d4d',
    borderLeft: '2px solid #e0e721',
    height: 'auto',
    display: 'inline-block',
  }
  return (
    <div style={style}>
      <div style={div13}>
        <h1 style={titulo}>How to reach us</h1>
        <p style={ppp}>
          With Percy House closed due to the COVID-19 pandemic, please note that our
          Tuesday morning drop-in sessions are currently suspended. In the meantime, you can email
          <a href="mailto:foundation@tottenhamhotspur.com"> foundation@tottenhamhotspur.com </a>
          or call 020 8365 5138 with any enquiries.
        </p>
      </div>
      <div style={mapaa}> </div>
      <h1 style={titulo}>Our Partners</h1>
      <p style={ppp}>
        The success of our programmes comes from working with a wide range of partners including
        local authorities, grassroots community organisations, colleges, health advice and
        support providers,
        <br />
        Jobcentre Plus and local businesses.
      </p>
      <div style={partners}>
        <img src="https://tot-tmp.azureedge.net/media/5116/peoplespostcodelottery.jpg" alt="s" style={image} />
        <img src="https://tot-tmp.azureedge.net/media/6751/heritage-lottery-fund-logo.jpg" alt="s2" style={image} />
      </div>
      <p style={txt}>Heritage Lottery Funded</p>
      <p style={txt2}>People's Postcode Lottery</p>
      <h2 style={h22}>Health & Wellbeing Programme Partners</h2>
      <div style={div14}>
        <img src="https://tot-tmp.azureedge.net/media/5111/premier_league_logosvg.jpg" alt="" style={imgg} />
        <img src="https://tot-tmp.azureedge.net/media/3476/pl_1017_logo_charitable_fund_rgb_horizontal_hr-website.png" alt="" style={imgg2} />
        <img src="https://tot-tmp.azureedge.net/media/5109/foundation-big_lottery_fund_pink_logo.jpg" alt="" style={imgg3} />
      </div>
      <p style={txt3}>Premier League | Caring for Communities, To Care Is To Do</p>
      <p style={txt4}>Premier League Charitable Fund | REIGNITE</p>
      <p style={txt5}>Big Lottery Fund | Move4You</p>
    </div>
  )
}
export default Parrafo
