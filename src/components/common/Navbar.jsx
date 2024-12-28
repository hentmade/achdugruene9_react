import React from 'react'

export const Navbar = () => {
  return (
    <>
        <nav class="inside_nav" id="inside_nav">
            <button onclick="toggleMenu()"><img id="menubutton" src="img/nav/menuburger.svg" alt=""/></button>
            <ul id="nav_ul">
                <li><a onclick="toggleMenu()" href="#rueckblick">RÜCKBLICK</a></li>
                <li><a onclick="toggleMenu()" href="#line-up">LINE-UP</a></li>
                <li><a onclick="toggleMenu()" href="#tickets">TICKETS</a></li>
                <li><a onclick="toggleMenu()" href="#infos">INFOS</a></li>
                <li><a onclick="toggleMenu()" href="#ueber_uns">ÜBER UNS</a></li>
                <li><a onclick="toggleMenu()" href="#bandcontest">BANDCONTEST 2025</a></li>
            </ul>
        </nav>
    </>
  )
}
