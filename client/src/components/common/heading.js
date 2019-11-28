import React from 'react';

const Heading = (props) => {
  return(
    <div className={ props.headingStyle }>
      <h2 className={ props.textStyle}>
        {props.headingTitle}
      </h2>
    </div>
  )
};

export default Heading;
