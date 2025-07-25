import React from 'react';

function About() {
  console.log("the about component rendered again");
  
  return (
    <div>About</div>
  )
}

export default React.memo(About);