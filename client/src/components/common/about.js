import React from 'react';

const About = (props) => {
  return(
    <div className={ props.aboutStyle }>
      <h2>
        { props.aboutTitle }
      </h2>
      <p>
        { props.aboutContent }
      </p>
    </div>
  )
}

export default About;
