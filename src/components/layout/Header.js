import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const covertToFragmentURL = text => text.toLowerCase().split(' ').join('-');

export default function Header() {
  const {
    allContentfulNavBar: {
      edges: [
        {
          node: { navAnchors }
        }
      ]
    }
  } = useStaticQuery(graphql`
    {
      allContentfulNavBar {
        edges {
          node {
            navAnchors
          }
        }
      }
    }
  `);

  const onDarkModeClick = e => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  const navListItems = navAnchors.map(anchor => (
    <li>
      <AnchorLink className="nav-link" to={`/#${covertToFragmentURL(anchor)}`}>
        {anchor}
      </AnchorLink>
    </li>
  ));

  return (
    <nav className="navbar header row sticky-top">
      <div className="col-1"></div>
      <div className="col-10">
        <ul className="d-flex justify-content-around align-content-center">
          {navListItems}
        </ul>
      </div>
      <div
        id="darkMode"
        className="col-1 d-flex justify-content-center align-content-center"
      >
        <img onClick={onDarkModeClick} src="/icons/theme-light-dark.svg" />
      </div>
    </nav>
  );
}
