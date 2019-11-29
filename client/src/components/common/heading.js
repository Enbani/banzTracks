import React from 'react';

const Heading = (props) => {
  return(
    <div className={ props.headingStyle }>
      <div>
        <h2 className={ props.textStyle}>
          { props.headingTitle }
        </h2>
      </div>
      <div>
        <h5 className={ props.contentStyle }>
          { props.headingContent }
        </h5>
      </div>

    </div>
  )
};

export default Heading;
