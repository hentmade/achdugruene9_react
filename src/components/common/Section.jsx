import React from 'react'
import style from "./Section.module.css"
import { Heading } from "./Heading"

export const Section = ({title, content}) => {
  return (
    <div className={style.layout}>
        <Heading title={title} />
        {content}
    </div>
  )
}
