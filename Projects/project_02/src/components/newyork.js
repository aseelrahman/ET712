import React from "react";
import timessquare from '../images/times_square.jpg'
import centralpark from '../images/central_park.jpg'
import statueofliberty from '../images/statue.jpg'
import niagarafalls from '../images/niagara.jpg'
import adirondacks from '../images/adirondacks.jpg'
import museum from '../images/museum.jpg'

import Card from './card'
import User from './comments'

const Newyork = function(){
    return(
        <>
        <h1 className="title">New York</h1>

        <section className='container'>
            {/* user 1 */}
            <Card username= "Times Square"><User image={timessquare}   msg='Known as "The Crossroads of the World," Times Square is an electrifying hub of lights, entertainment, and energy in the heart of Manhattan. From Broadway shows to iconic billboards, it’s a must-see destination for visitors seeking the ultimate New York City experience.'/></Card>

            {/* user 2 */}
            <Card username="Central park"> <User image={centralpark}  msg="Escape the city buzz in Central Park, a sprawling urban oasis offering beautiful landscapes, walking paths, and iconic landmarks like Bethesda Terrace and Strawberry Fields. It's the perfect spot to relax or explore nature in the middle of Manhattan"/></Card>
        
            {/* user 3 */}
            <Card username="Statue of Liberty"><User image={statueofliberty}   msg="A symbol of freedom and hope, the Statue of Liberty stands tall on Liberty Island, while nearby Ellis Island offers a glimpse into the immigrant experience. Together, they tell the story of America’s rich history and welcoming spirit."/></Card>
        
            {/* user 4 */}
            <Card username= "Niagara Falls"><User image={niagarafalls}   msg="One of the world's most stunning natural wonders, Niagara Falls captivates visitors with its thunderous cascades and breathtaking views. Whether you take a boat ride on the Maid of the Mist or enjoy the scenic overlooks, it's an unforgettable experience."/></Card>

            {/* user 5 */}
            <Card username="The Adirondacks"> <User image={adirondacks}  msg="A paradise for outdoor enthusiasts, the Adirondacks offer serene lakes, lush forests, and thrilling adventures like hiking, skiing, and kayaking. It’s a peaceful retreat from the hustle of city life."/></Card>

            {/* user 6 */}
            <Card username="The metropolitian Museum of Art"><User image={museum}   msg="The Met is one of the world’s largest and most prestigious art museums, featuring over 2 million works spanning thousands of years. From ancient artifacts to modern masterpieces, it’s a cultural treasure trove."/></Card>
        </section>
        </>
    )
}

export default Newyork