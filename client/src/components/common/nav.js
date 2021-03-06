import React from 'react';

const Nav = (props) => {
  return(
    <div className={props.navStyle}>
      <h2 className={props.titleStyle}>{props.title}</h2>
    </div>
  )
}

export default Nav;
