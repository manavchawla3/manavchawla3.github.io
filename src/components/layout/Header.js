import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import MenuIcon from '../../../static/icons/menu.svg';
import SideNav from './SideNav';

const covertToFragmentURL = text => text.toLowerCase().split(' ').join('-');

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

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
  
  useEffect(() => {
    onDarkModeClick();
  }, [])

  const navListItems = navAnchors.map(anchor => {
    const anchorFragmentUrl = covertToFragmentURL(anchor);
    return (
      <li key={anchorFragmentUrl}>
        <AnchorLink
          className="nav-link underline-from-left"
          to={`/#${anchorFragmentUrl}`}
        >
          {anchor}
        </AnchorLink>
      </li>
    )
  });

  function toggleMenu() {
    setShowMenu(s => !s);
  }

  return (
    <header className="row header sticky-top">
      <div className="container-fluid d-flex justify-content-between header-container align-items-center">
        <div className="d-flex align-items-center">
          <div className="cursor-pointer d-inline-block d-md-none menu-icon" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <div className={`${showMenu ? 'd-block': 'd-none'} d-md-block`}>
            <ul className="d-flex align-content-center nav-list">
              {navListItems}
            </ul>
          </div>
          <SideNav />
        </div>
        <div className="d-flex align-items-center">
          <div
            id="darkMode"
            className="theme-switch"
          >
            <img onClick={onDarkModeClick} src="/icons/theme-light-dark.svg" alt="Theme switch"/>
          </div>
        </div>
      </div>
    </header>
  );
}
