import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function SideNav() {
  return (
    <nav className="">
      <ul>
        <li className="nav-item">
          <a className="nav-link">
            <img src="icons/github.svg" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <img src="icons/github.svg" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <img src="icons/github.svg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
