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
import { Home } from "../home/Home"


export const Pages = () => {
  return (
    <>
        <Router>
            <Navbar/>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
            <Footer/>
        </Router>
    </>
  )
}
