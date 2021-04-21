import React from 'react'

const Footer2 = () => {
  const style = {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
  }
  const style2 = {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const div1 = {
    width: '100%',
    height: '60%',
    backgroundColor: '#0f142a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const div2 = {
    width: '100%',
    height: '15%',
    backgroundColor: '#0b0e1e',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const img = {
    width: '3%',
    height: '65%',
    marginLeft: '5%',
    alignSelf: 'center',
  }
  const h4 = {
    color: '#999',
    marginLeft: '1%',
    marginRight: '1%',
    alignSelf: 'center',
  }
  return (
    <div style={style}>
      <div style={style2}>
        <img alt="" src="https://tot-tmp.azureedge.net/media/11674/ask-spurs-2.png" style={img} />
        <img alt="" src="https://tot-tmp.azureedge.net/media/11676/facebook.png" style={img} />
        <img alt="" src="https://tot-tmp.azureedge.net/media/11675/instagram.png" style={img} />
        <img alt="" src="https://tot-tmp.azureedge.net/media/11678/twitter.png" style={img} />
        <img alt="" src="https://tot-tmp.azureedge.net/media/11679/youtube.png" style={img} />
        <img alt="" src="https://tot-tmp.azureedge.net/media/11677/snapchat.png" style={img} />
      </div>
      <div style={div1}> </div>
      <div style={div2}>
        <h4 style={h4}>Contact Us</h4>
        <h4 style={h4}>Cookie Policy</h4>
        <h4 style={h4}>Privacy Policy</h4>
        <h4 style={h4}>Terms and Conditions</h4>
        <h4 style={h4}>My Account Help</h4>
      </div>
    </div>
  )
}
export default Footer2
