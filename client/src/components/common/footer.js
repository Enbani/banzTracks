import React from 'react';

const Footer = (props) => {
  return(
    <div className={ props.footerStyle }>
      <h5 className={ props.footerTextStyle }>{props.footerText}</h5>
    </div>
  )
};

export default Footer;
