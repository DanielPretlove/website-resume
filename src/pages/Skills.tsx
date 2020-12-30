import React from 'react';
import { makeStyles, Card, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	barColorPrimary: {
		backgroundColor: 'rgba(3, 2, 44, 0.993)',
	},
}));


export const Skills = () => {
  const classes = useStyles();
  return (
    <div className="Skills">
      <h1>Professional Skills</h1>
      <Card variant="outlined">
      <h2>Full Stack Web Development Skills</h2>
        <p>HTML5, CSS3, Bootstrap and Material-UI</p>
        <LinearProgress variant="determinate" value={95} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>Javascript and Typescript</p>
        <LinearProgress variant="determinate" value={93} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>React and Express.js</p>
        <LinearProgress variant="determinate" value={88} classes={{barColorPrimary: classes.barColorPrimary}}/>
        <p>Java, C# .NET Core</p>
        <LinearProgress variant="determinate" value={90} classes={{barColorPrimary: classes.barColorPrimary}}/>
        <p>ASP.NET</p>
        <LinearProgress variant="determinate" value={85} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>AWS (Cloud Computing)</p>
        <LinearProgress variant="determinate" value={83} classes={{ barColorPrimary: classes.barColorPrimary }} />
      </Card>
      <Card variant="outlined">
        <h2>Network Engineering Skills</h2>
        <p>Routing (Cisco Routers) and Switches</p>
        <LinearProgress variant="determinate" value={80} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>OSI and TCP/IP Model</p>
        <LinearProgress variant="determinate" value={85} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>IPv4 and IPv6 Network Addressing</p>
        <LinearProgress variant="determinate" value={90} classes={{ barColorPrimary: classes.barColorPrimary }} />
        <p>Routing Protocls with RIP and OSPF</p>
        <LinearProgress variant="determinate" value={90} classes={{ barColorPrimary: classes.barColorPrimary }} />
      </Card>
    </div>
  )
}
