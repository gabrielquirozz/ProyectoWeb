import React from 'react'

const Cuerpo = () => {
  const style = {
    width: '100%',
    height: '5.5%',
    background: '#111836',
    display: 'flex',
    justifyContent: 'center',
  }
  const style2 = {
    width: '80%',
    height: '100%',
    background: '#111836',
  }
  const styleli = {
    display: 'inline',
    // paddingLeft: '12%',
    // paddingRight: '12%',
  }
  const a = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '105%',
  }
  const u = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '10%',
    paddingLeft: '5%',
  }
  return (
    <div style={style}>
      <div style={style2}>
        <ul style={u}>
          <li style={styleli} />
          <a href="https://shop.tottenhamhotspur.com/?scs=quicklinks" style={a}>
            About Us
          </a>
          <li style={styleli} />
          <a href="https://www.tottenhamhotspur.com/news/" style={a}>
            Employment & Skills
          </a>
          <li style={styleli} />
          <a href="https://experience.tottenhamhotspur.com/home.htm?utm_source=thfc&utm_medium=quicklink&utm_campaign=visitorattractions&utm_content=visitor-attractions" style={a}>
            Jobs Board
          </a>
          <li style={styleli} />
          <a href="https://www.tottenhamhotspur.com/spurs-media-watch/" style={a}>
            Community Board
          </a>
          <li style={styleli} />
          <a href="https://www.tottenhamhotspur.com/spurs-media-watch/" style={a}>
            Latest News
          </a>
          <li style={styleli} />
          <a href="https://www.tottenhamhotspur.com/spurs-media-watch/" style={a}>
            Donate
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Cuerpo
