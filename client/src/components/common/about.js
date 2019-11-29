import React from 'react';
import { FollowButton } from './';

const About = (props) => {
  return(
    <div className={ props.aboutStyle }>
      <h2 className={ props.titleStyle }>
        { props.aboutTitle }
      </h2>
      <p className={ props.contentStyle}>
        { props.aboutContent }
      </p>
      <FollowButton/>
    </div>
  )
}

export default About;
