import React from 'react'
import { Section } from "../../common/Section"

export const Rueckblick = () => {
  return (
    <div id="rueckblick">
        <Section 
            title={'RÜCKBLICK 2024'} 
            content={
                <div>
                    <iframe class="aftermovie" src="https://www.youtube.com/embed/fG43QpkfC8E?si=zpcv_Mhlerg3oeTd&autoplay=1&mute=1" title="Aftermovie 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p>
                        Was für ein Wochenende! Wie viel Zauber, Ausgelassenheit und Spaß habt ihr bitte auf diese jetzt wieder leere Wiese gebracht? <br/>
                        Wie viel leidenschaftliche Stimmung und gute Musik haben die Bands bitte bei ihren berauschenden Shows erzeugt? <br/>
                        Es fällt uns schwer unsere Emotionen in Worte zu fassen, wir sind durch und durch begeistert von eurer Performance, ob als Gast oder als Band oder beides, es war wundervoll eure strahlenden Gesichter und glücklichen Augen zu sehen, danke für das viele tolle Feedback, einfach atemberaubend!
                        <br/><br/>
                        Wir sind euch unendlich dankbar für diese traumhaften zwei Tage mit euch. Wir als Crew schlafen uns jetzt erstmal ordentlich aus und werfen dann bald einen Blick auf 2025.
                        <br/><br/>
                        Bis dahin, bleibt so zauberhaft wie ihr seid &#128154;
                    </p>

                    <p>Galerie einfügen</p>
                </div>
            }
        />
    </div>
  )
}
