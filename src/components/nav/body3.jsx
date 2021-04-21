/* eslint-disable prefer-template */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import divv2 from '../img/first2div.png'

// eslint-disable-next-line react/prop-types
const Parrafo = () => {
  const style = {
    width: '100%',
    height: 'auto%',
  }
  const div1 = {
    height: 'auto%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
  const h1 = {
    color: '#111836',
    paddingRight: '10%',
    paddingTop: '1%',
  }
  const div2 = {
    height: 'auto',
    width: '72%',
    // backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '15%',
    marginTop: '3%',
    backgroundImage: 'url(' + divv2 + ')',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  }
  /*  const div3 = {
    height: '50%',
    width: '57%',
    backgroundColor: '#FED732',
    alignSelf: 'center',
    marginLeft: '9%',
    zIndex: '0',
    position: 'absolute',
    marginTop: '1%',
    // mixBlendMode: 'multiply',
  }
  const div4 = {
    backgroundImage: 'url("https://tot-tmp.azureedge.net/media/5242/foundation-sarah-ebanja-visit_31-5-18_037.jpg?anchor=center&mode=crop&width=750")',
    height: '25%',
    width: '25%',
    backgroundSize: 'cover',
    webkitFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)',
    zIndex: '1',
    // marginRight: '30%',
    position: 'absolute',
    alignSelf: 'flex-start',
  } */
  const div5 = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
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
  const p2 = {
    color: '#111836',
    fontSize: '110%',
    marginLeft: '25.7%',
    width: '48%',
    lineHeight: '30px',
  }
  const facebook = {
    width: '2%',
    height: '4%',
    marginTop: '35%',
    marginLeft: '75%',
  }
  const twitter = {
    width: '2%',
    height: '4%',
    marginTop: '35%',
    marginLeft: '78%',
    background: 'blue',
  }
  const link = {
    width: '2%',
    height: '4%',
    marginTop: '35%',
    marginLeft: '81%',
  }
  return (
    <div style={style}>
      <div style={div1}>
        <h1 style={h1}>About the Tottenham Hotspur Foundation</h1>
      </div>
      <div style={div2}>
        <a href="https://www.facebook.com/v2.11/dialog/share_open_graph?action_properties=%7B%22object%22%3A%7B%22og%3Aurl%22%3A%22https%3A%2F%2Fwww.tottenhamhotspur.com%2Fthe-club%2Ffoundation%2Fabout-us%2F%22%2C%22og%3Atitle%22%3A%22%22%2C%22og%3Adescription%22%3A%22%5C%22The%20Foundation%20has%20been%20changing%20lives%20for%20over%20a%20decade...we%20feel%20like%20we%20are%20just%20getting%20started!%5C%22%20-%20Sarah%20Ebanja%2C%20Tottenham%20Hotspur%20Foundation%2C%20Chief%20Executive%20%22%2C%22og%3Aimage%22%3A%22https%3A%2F%2Ftot-tmp.azureedge.net%2Fmedia%2F5242%2Ffoundation-sarah-ebanja-visit_31-5-18_037.jpg%3Fanchor%3Dcenter%26mode%3Dcrop%26quality%3D100%26width%3D350%22%7D%7D&action_type=og.shares&app_id=394661537640776&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df301ad01a28b1d8%26domain%3Dwww.tottenhamhotspur.com%26origin%3Dhttps%253A%252F%252Fwww.tottenhamhotspur.com%252Ff3dca60ff8ed95c%26relation%3Dopener&display=popup&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.tottenhamhotspur.com%2Fthe-club%2Ffoundation%2Fabout-us%2F&locale=en_US&next=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1bf0da2b3d69e%26domain%3Dwww.tottenhamhotspur.com%26origin%3Dhttps%253A%252F%252Fwww.tottenhamhotspur.com%252Ff3dca60ff8ed95c%26relation%3Dopener%26frame%3Df26fe4c5d7a954c%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&version=v2.11" style={facebook}> </a>
        <a href="https://twitter.com/intent/tweet?url=https://www.tottenhamhotspur.com/the-club/foundation/about-us/&text=%22The%20Foundation%20has%20been%20changing%20lives%20for%20over%20a%20decade...we%20feel%20like%20we%20are%20just%20getting%20started!%22%20-%20Sarah%20Ebanja,%20Tottenham%20Hotspur%20Foundation,%20Chief%20Executive" style={twitter}> </a>
        <a href="https://twitter.com/intent/tweet?url=https://www.tottenhamhotspur.com/the-club/foundation/about-us/&text=%22The%20Foundation%20has%20been%20changing%20lives%20for%20over%20a%20decade...we%20feel%20like%20we%20are%20just%20getting%20started!%22%20-%20Sarah%20Ebanja,%20Tottenham%20Hotspur%20Foundation,%20Chief%20Executive" style={link}> </a>
      </div>
      <div style={div5}>
        <p style={p}>
          <span>The Tottenham Hotspur Foundation is the Club’s award-winning charitable body.</span>
        </p>
        <h2 style={h2}>
          <strong>Tottenham is on the rise</strong>
        </h2>
        <p style={p2}>
          <span>
            The Tottenham Hotspur Foundation has a long
            established, productive and valued partnership with its local
            communities where there are significant socio-economic challenges
            alongside aspirations, potential, talent and opportunity to create,
            deliver and sustain positive change.
          </span>
        </p>
        <p style={p2}>
          The work of The Foundation and its supporters directly touches the lives of people across
          North London every day.
        </p>
        <p style={p2}>
          Tottenham Hotspur’s new stadium development scheme, once complete,
          will have delivered 3,500 new jobs. To date, the Club and Foundation have worked to
          create 2,883
          jobs for local people through a wide range of innovative and ground breaking initiatives.
          We have worked with partners and a network of employers to create job opportunities across
          a range of industries including retail, education, construction, hospitality,
          IT and security.
        </p>
        <h2 style={h2}>
          <strong>Percy House opens its doors</strong>
        </h2>
        <p style={p2}>
          Percy House is a prominent 18th Century building on Tottenham High Road,
          now the new home of the Foundation, giving local people one-stop access
          to vocational training and job opportunities from a range of
          employers connected to the Club.
        </p>
        <p style={p2}>
          A £1.8m grant from the Heritage Lottery Fund and match funding from
          the Club has funded the full restoration of the former townhouse
          and secured its long-term future in the area.
        </p>
        <p style={p2}>
          Percy House is now a major community enterprise, employment and skills hub located
          at the heart of the regeneration of North Tottenham.
        </p>
        <p style={p2}>
          It will deliver over 95,000 hours of community development, health, enterprise,
          education and sports programmes every year to those living in the Club’s local area.
        </p>
        <p style={p2}>
          We have also ensured that the rich history of Tottenham is passed
          on to future generations, with the instatement of new Heritage Ambassadors,
          who along with the support of local historians,
          to deliver outreach sessions in schools and community venues.
        </p>
        <p style={p2}>
          *People are welcome to walk through the Percy House
          gates and ask to speak to one of our employment advisors
          about the many job opportunities available through the Tottenham Hotspur Foundation.
        </p>
        <p style={p2}>
          If you don't find a job that's right for you, don't give up,
          dare to put yourself forward for one of our skills programmes.
          We offer a range of programmes, including apprenticeships,
          traineeships, vocational qualifications, and one-to-one employment support.
        </p>
        <p style={p2}>
          <strong>
            Please note that Percy House is currently closed due to the ongoing COVID-19 situation.
            In the meantime, you can email
            <a rel="noopener noreferrer" href="mailto:foundation@tottenhamhotspur.com" target="_blank"> foundation@tottenhamhotspur.com </a>
            or call 020 8365 5138 with any enquiries.
          </strong>
        </p>
      </div>
    </div>
  )
}
export default Parrafo
