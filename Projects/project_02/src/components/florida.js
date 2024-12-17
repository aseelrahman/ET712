import React from "react";
import waltdisney from '../images/walt_disney_world.jpg'
import miamibeach from '../images/miami_beach.jpg'
import evergladesnational from '../images/everglades.jpg'
import universalstudios from '../images/universal.jpg'
import thefloridakeys from '../images/florida_keys.jpg'
import kennedyspace from '../images/kennedy_space_center.jpg'

import Card from './card'
import User from './comments'

const Newyork = function(){
    return(
        <>
        <h1 className="title">New York</h1>

        <section className='container'>
            {/* user 1 */}
            <Card username= "Walt Disney World"><User image={waltdisney}   msg="Located in Orlando, Walt Disney World is a magical kingdom of theme parks, resorts, and entertainment. From thrilling rides to enchanting parades, it’s a dream destination for families and Disney fans."/></Card>

            {/* user 2 */}
            <Card username="Miami Beach & Art Deco District"> <User image={miamibeach}  msg="Famous for its vibrant nightlife and stunning beaches, Miami Beach also boasts the colorful Art Deco District. The unique architecture and lively atmosphere make it a cultural hotspot."/></Card>
        
            {/* user 3 */}
            <Card username="Everglades National Park"><User image={evergladesnational}   msg="A UNESCO World Heritage Site, the Everglades is a vast ecosystem of wetlands teeming with wildlife. Take an airboat tour to explore this unique landscape and spot alligators, manatees, and rare birds."/></Card>
        
            {/* user 4 */}
            <Card username= "Universal Studios Orlando"><User image={universalstudios}   msg="Dive into the world of movies and TV at Universal Studios Orlando. With thrilling rides, interactive attractions, and themed areas like The Wizarding World of Harry Potter, it’s a must-visit for entertainment lovers."/></Card>

            {/* user 5 */}
            <Card username="The Florida Keys"> <User image={thefloridakeys}  msg="A tropical paradise, the Florida Keys offer turquoise waters, coral reefs, and laid-back vibes. Drive down the scenic Overseas Highway and enjoy snorkeling, fishing, and breathtaking sunsets."/></Card>

            {/* user 6 */}
            <Card username="Kennedy Space Center"><User image={kennedyspace}   msg="Discover the history and future of space exploration at Kennedy Space Center. Located near Cape Canaveral, this fascinating destination lets visitors explore space shuttles, meet astronauts, and experience interactive exhibits."/></Card>
        </section>
        </>
    )
}

export default Newyork