import React from 'react';

import background from '../images/background.jpg';
import photo from '../images/photo.jpg';


export const Home = () => {
  return (
    <div className = "Home">
      <img src={background}></img>
      <h2>Hey, </h2>
      <h2><br />i'm Daniel Pretlove <br />a Full Stack Web <br />Developer & <br />Network Engineer</h2>
      <img src={photo} alt="Avatar" title="Daniel Pretlove"></img>
    </div>
  )
}