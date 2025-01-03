import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import { Impressum } from "../pages/Impressum"
import { Agb } from "../pages/Agb"
import { Datenschutz } from "../pages/Datenschutz"
import { Bandbewerbung } from "../pages/Bandbewerbung"

export const Footer = () => {
  return (
    <>
            <Route exact path='/impressum' component={Impressum} />
            <Route exact path='/impressum' component={Datenschutz} />
            <Route exact path='/impressum' component={Agb} />
            <Route exact path='/impressum' component={Bandbewerbung} />

        <footer>
        <div class="inside">

            <div class="inside_top">

                <p>Newsletter-Maske einfügen</p>
        
                <section class="footer_links">
                    <ul class="law">
                        <li><a href="https://www.instagram.com/achdugruene9/" target="_blank"><img src="img/instagram-logo.png" alt="Instagram" width="50px"/></a></li>
                        <br/>
                        <li><a href="impressum.html" target="_blank">Impressum</a></li>
                        <li><a href="datenschutz.html" target="_blank">Datenschutzerklärung</a></li>
                        <li><a href="agb.html" target="_blank">AGB</a></li>
                        <br/><br/>
                        <a href="bandbewerbung.html" target="_blank">&#10154; Bandbewerbung 2025</a>
                        <br/><br/>
                        <a href="mailto:festival@achdugruene9.com" target="_blank">festival@achdugruene9.com</a>
                    </ul>
                </section>
            </div>

            <section class="copyright">
                <p>&copy; Grüne Neune Festival e.V.</p>
            </section>

        </div>
        </footer>
    </>
  )
}
