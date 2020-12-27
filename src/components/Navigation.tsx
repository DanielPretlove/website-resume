import React from 'react';
import { Link } from 'react-router-dom';


export const Navigation = (): any => {
  return (
    <div className="Links">
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/About">About me</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}