import React from "react";
import disneyland from '../images/disneyland.jpg'
import goldengatebridge from '../images/Golden_gate_bridge.jpg'
import yosemite from '../images/yosemite_national_park.jpg'
import hollywood from '../images/hollywood_walk_of_fame.jpg'
import lake_tahoe from '../images/lake_tahoe.jpg'
import san_diego_zoo from '../images/sand_diego_zoo.jpg'

import Card from './card'
import User from './comments'

const Newyork = function(){
    return(
        <>
        <h1 className="title">California</h1>

        <section className='container'>
            {/* user 1 */}
            <Card username= "Disneyland"><User image={disneyland}   msg="The ‘Happiest Place on Earth,’ Disneyland is a magical destination for all ages, filled with thrilling rides, enchanting characters, and unforgettable shows. Located in Anaheim, it’s a must-visit for families and Disney fans alike."/></Card>

            {/* user 2 */}
            <Card username="Golden Gate Bridge"> <User image={goldengatebridge}  msg="A symbol of California's beauty and engineering prowess, the Golden Gate Bridge offers stunning views of San Francisco Bay. Whether you walk, bike, or drive across it, the experience is awe-inspiring."/></Card>
        
            {/* user 3 */}
            <Card username="Yosemite National Park"><User image={yosemite}   msg="Home to majestic waterfalls, towering granite cliffs, and ancient sequoias, Yosemite is a UNESCO World Heritage Site that captivates nature lovers and adventurers alike. Don’t miss iconic landmarks like Half Dome and El Capitan."/></Card>
        
            {/* user 4 */}
            <Card username= "Hollywood Walk of Fame"><User image={hollywood}   msg="Stroll along Hollywood Boulevard to see the stars of your favorite celebrities immortalized in the sidewalks. The Walk of Fame is a tribute to the entertainment industry and a quintessential LA experience."/></Card>

            {/* user 5 */}
            <Card username="Lake Tahoe"> <User image={lake_tahoe}  msg="Straddling the California-Nevada border, Lake Tahoe is a year-round destination known for its crystal-clear waters, scenic hiking trails, and world-class skiing resorts. It’s a haven for outdoor enthusiasts."/></Card>

            {/* user 6 */}
            <Card username="San Diego Zoo"><User image={san_diego_zoo}   msg="Renowned as one of the best zoos in the world, the San Diego Zoo is home to thousands of animals from around the globe. With immersive exhibits and a commitment to conservation, it’s a fun and educational destination."/></Card>
        </section>
        </>
    )
}

export default Newyork