import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { Header } from "../common/Header"
import { Navbar } from "../common/Navbar"
import { Footer } from "../common/Footer"

export const Pages = () => {
  return (
    <>
        <Router>
            <Navbar/>
            <Header/>
            <Switch>
                
            </Switch>
            <Footer/>
        </Router>
    </>
  )
}
