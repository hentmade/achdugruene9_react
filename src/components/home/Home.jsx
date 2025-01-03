import React from 'react'
import { Rueckblick } from "./sections/Rueckblick"
import { LineUp } from "./sections/LineUp"
import { Tickets } from "./sections/Tickets"
import { Infos } from "./sections/Infos"
import { UeberUns } from "./sections/UeberUns"
import { Bandcontest } from "./sections/Bandcontest"

import style from "./Home.module.css"

export const Home = () => {
  return (
    <div className={style.layout}>
      <Rueckblick/>
      <LineUp/>
      <Tickets/>
      <Infos/>
      <UeberUns/>
      <Bandcontest/>
    </div>
  )
}
