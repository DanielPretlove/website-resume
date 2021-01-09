import React from 'react';
import { Card } from '@material-ui/core';
import photo from '../images/photo.jpg';


export const About = () => {
  return (
    <div className="About">
        <img src={photo} alt="Avatar" title="Daniel Pretlove"></img>
        <h2>About me</h2>
      <p>Hi, i'm a final semester QUT student, currently doing my capstone project, and while on the side, i am also studying
      for my CCNA (Cisco Certified Network Associate) Exam and improving my skills as a full stack web developer. as i am really passionate about full
      stack developer and networking i am very eager in further improving my skills and diving deep into new technologies. My currently programming / development skills
      is involved with HTML5, CSS3, C, C++, C# .net core, Java, Javascript, Typescript (React) and Linux (Bash Scripts), and while my networking skills involve
      with Routing (Cisco Routers), Switches, OSI and TCP/IP Model, ipv4 and ipv6 network addressing and routing protocls with RIP and OSPF.
      </p>
    </div>
  )
}