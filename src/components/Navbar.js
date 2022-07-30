import React from 'react'
import PropTypes from 'prop-types'
function Navbar(props) {
  return (
    <div className={`navbar navbar-${props.mode} bg-${props.mode} `}>
      <ul className="nav">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page"  href="#">
            {props.title}
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} href="#">
            {props.about}
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} href="#">
            Link
          </a>
        </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.ChangeColor} id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
        </div>   
    </div>
  )
}

export default Navbar


Navbar.propTypes =
{
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps =
{
  title: "Set Title Here",
  about: "set About here"
}