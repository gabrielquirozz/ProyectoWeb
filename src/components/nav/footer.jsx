import React from 'react'

const Footer = () => {
  const style = {
    backgroundColor: '#111836',
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
  }
  const div1 = {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
  const div2 = {
    width: '100%',
    height: '28%',
    display: 'flex',
  }
  const img = {
    width: '25%',
    height: '60%',
    marginLeft: '7%',
    alignSelf: 'center',
  }
  const div3 = {
    width: '100%',
    height: '18%',
    display: 'flex',
  }
  const img2 = {
    width: '10%',
    height: '35%',
    marginLeft: '12%',
    alignSelf: 'center',
  }
  const img3 = {
    width: '20%',
    height: '35%',
    marginLeft: '45%',
    marginRight: '50%',
    alignSelf: 'center',
  }
  return (
    <div style={style}>
      <div style={div1}>
        <div style={div2}>
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/38897b8d2da46__aia-logo.png" style={img} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/2b3a0b61789ef__nike.png" style={img} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/2e2f871844fce__cinch-v6.png" style={img} />
        </div>
        <div style={div3}>
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/7433b68d2df3__HSBC-logo.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/1d7cdb3c97071__audi.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/18f29b07efdd3__fun88-v2.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/2fd72d05fdca8__hp.png" style={img2} />
        </div>
        <div style={div3}>
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/251c72f6e187a__libertex-logo.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/582e42983cad__heineken.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/18d5dbd56d884__monster-energy.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/36f61020d2244__kumho.png" style={img2} />
        </div>
        <div style={div3}>
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/35c5ef7e1de3f__easports.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/12457d0c519fd__iwc.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/403c8426ea08__002-Vivopower_Logo_export_Transparent___for_light_backgrounds___copy.png" style={img2} />
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/a03871c891da__Cadbury_Signature_White.png" style={img2} />
        </div>
        <div style={div3}>
          <img alt="" src="https://cdn.dynamicyield.com/api/8769356/images/2fe2d66bde9d1__hugo-boss.png" style={img3} />
        </div>
      </div>
    </div>
  )
}
export default Footer
