import React from 'react'

document.body.style.margin = 0
document.body.style.padding = 0

const Encabezado = () => {
  const style = {
    width: '100%',
    height: '5%',
    backgroundColor: '#0b0e1e',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  const styleh1 = {
    fontFamily: 'ApexNew,Helvetica Neue,sans-serif',
    color: 'white',
    textRendering: 'optimizeLegibility',
    fontSize: '14px',
    lineHeight: '39px',
    display: 'inline-block',
    alignSelf: 'center',

  }
  const stylecont = {
    width: '40%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '35%',
    paddingBottom: '20%',
  }
  const img = {
    width: '25%',
    height: '25%',
    display: 'inline-block',
  }
  const div = {
    width: '20%',
    borderLeft: '1px solid white',
    height: '70%',
    // paddingTop: '-1%',
    alignSelf: 'center',
    display: 'inline-block',
    paddingBottom: '5%',
  }
  const a = {
    alignSelf: 'center',
  }
  return (
    <div style={style}>
      <div style={stylecont}>
        <a href="https://www.tottenhamhotspur.com/the-stadium/accessibility/" style={a}>
          <h1 style={styleh1}>Accesibility</h1>
        </a>
        <img style={styleh1} src="https://i.ibb.co/RTQzJVw/switch.png" alt="" />
        <div style={div}>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyNzVweCIgaGVpZ2h0PSIxNjZweCIgdmlld0JveD0iMCAwIDI3NSAxNjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ni4yICg0NDQ5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPmZsYWctdWs8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImZsYWctdWsiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIGZpbGw9IiMwNDAwQkEiIHg9IjEiIHk9IjEiIHdpZHRoPSIyNzMuNyIgaGVpZ2h0PSIxNjQuNSI+PC9yZWN0Pg0KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI0My45IDEgMjc0LjcgMSAyNzQuNyAxOS45IDMxLjcgMTY1LjUgMC42IDE2NS41IDAuNiAxNDYuOCI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI3NC43IDE2NS40IDI0My42IDE2NS40IDAuNiAxOS45IDAuNiAwLjkgMzEuMyAwLjkgMjc0LjcgMTQ2LjQiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0FBMkIyQiIgcG9pbnRzPSIxMDkgMTAwLjkgMTMwLjIgMTAwIDIwLjggMTY1LjQgMSAxNjUuNCI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjQUEyQjJCIiBwb2ludHM9IjI3NC43IDEgMTczLjcgNjEuNSAxNjcuOCA1OS42IDE1OS4yIDU4LjQgMjU1IDEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0FBMkIyQiIgcG9pbnRzPSI5Ni4zIDU4LjcgODAuOSA2MS4yIDAuOSAxMy4xIDAuOSAwLjkiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iI0FBMkIyQiIgcG9pbnRzPSIxODAgMTA4LjQgMTk3LjcgMTA3LjEgMjc0LjcgMTUzLjMgMjc0LjcgMTY1LjQiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgZmlsbD0iI0ZGRkZGRiIgeD0iMC44IiB5PSI1NS42IiB3aWR0aD0iMjc0LjEiIGhlaWdodD0iNTUuNyI+PC9yZWN0Pg0KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiBmaWxsPSIjRkZGRkZGIiB4PSIxMTQuNyIgeT0iMSIgd2lkdGg9IjQ2LjgiIGhlaWdodD0iMTY0LjUiPjwvcmVjdD4NCiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgZmlsbD0iI0FBMkIyQiIgeD0iMC45IiB5PSI2Ny4xIiB3aWR0aD0iMjc0LjEiIGhlaWdodD0iMzIuNSI+PC9yZWN0Pg0KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjQUEyQjJCIiBwb2ludHM9IjEyNC42IDE2NS40IDE1MS44IDE2NS40IDE1MS44IDE2NCAxNTEuOCAwLjggMTI0LjYgMC44IDEyNC42IDE2NC4zIj48L3BvbHlnb24+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=" alt="English" style={img} />
          <a href="https://www.tottenhamhotspur.com/the-stadium/accessibility/" style={a}>
            <h1 style={styleh1}>English</h1>
          </a>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNTcxLjYgNzg1LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1NzEuNiA3ODUuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc4NS44LDc2MS44Yy0xNi4zLDAtMzIuNi01LjgtNDUuNS0xNy40TDcwLjcsMTQyLjhjLTI4LTI1LjEtMzAuMy02OC4yLTUuMi05Ni4yczY4LjItMzAuMyw5Ni4yLTUuMg0KCQlMNzg1LjgsNjAybDYyNC4xLTU2MC42YzI4LTI1LjEsNzEtMjIuOCw5Ni4yLDUuMmMyNS4xLDI4LDIyLjgsNzEtNS4yLDk2LjJMODMxLjMsNzQ0LjNDODE4LjQsNzU1LjksODAyLjEsNzYxLjgsNzg1LjgsNzYxLjh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" alt="English" style={img} />
        </div>
        <a href="https://www.tottenhamhotspur.com/the-stadium/accessibility/" style={a}>
          <h1 style={styleh1}>Search Site</h1>
        </a>
        <a href="https://www.tottenhamhotspur.com/the-stadium/accessibility/" style={a}>
          <h1 style={styleh1}>Sign in/Register</h1>
        </a>
      </div>
    </div>
  )
}
export default Encabezado
