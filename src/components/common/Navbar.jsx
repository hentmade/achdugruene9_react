import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import style from './Navbar.module.css'
import {sections} from "../home/sections/sections"

export const Navbar = () => {
  const listItems = sections.map((section,i) =>
    <Link to={"#" + section.anchorLink} key={i} className={style.navbarItem}>
      {section.navbarText}
    </Link>
  );
  return (
    <>
      <ul className={style.layout}>
          {listItems}
      </ul>
    </>
  )
}
