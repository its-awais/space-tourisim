import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "./Destination.css";
import marsImage from "../../assets/assets/destination/image-mars.webP";
import moonImage from "../../assets/assets/destination/image-moon.webP";
import titanImage from "../../assets/assets/destination/image-titan.webP";
import europaImage from "../../assets/assets/destination/image-europa.webP";

const Destination = () => {
    const destinations = {
        mars: {
            name: "MARS",
            distance: "225 MIL. KM",
            travel : "9 MONTHS",
            image: marsImage,
            description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons. the tallest planetary volcano in our solar system. It's two and a half times the size of Mount Everest."
        },
        
            moon: {
                name: "MOON",
                distance: " 384.4 MIL. KM",
                travel : " 3 DAYS",
                image:  moonImage,
                description: "Don't forget to bring your space boots. You'll need them to explore Clavius Crater, one of the largest lunar craters in our solar system. It's over 200 miles wide"            
        },
        titan: {
            name: "TITAN",
            distance: " 1.4 MIL. KM",
            travel : " 7 YEARS",
            image:   titanImage,
            description: "Don't forget to bring your thermal suit. You'll need it to explore Titan’s dense atmosphere and methane lakes. It’s the only moon with a thick atmosphere."            
    },
     europa: {
        name: "EUROPA",
        distance: "628 MIL. KM",
        travel : "3 YEARS",
        image:    europaImage,
        description: "Don't forget to bring a diving suit. You'll need it to explore Europa’s icy crust, which hides a vast ocean. Scientists believe it may harbor extraterrestrial life."            
}
    };
    const {planet} = useParams(); 
    const destination = destinations[planet] || destinations.mars;
    return(
    <>
    <section id='destination'>
        <div className='background'></div>
     <h2 className=''><span>01</span> PICK YOUR DESTINATION</h2> 
     <div className=' two-items'>
   <div className="same-as-earth">
    <img src={destination.image} alt="" className='' loading="lazy" />
   </div>
   <div className="pick-one">
    <ul className='solar-systems'>
        <li><Link to="/destination/moon" className='Link'>MOON</Link></li>
        <li><Link to="/destination/mars" className='Link'>MARS</Link></li>
        <li><Link to="/destination/europa" className='Link'>EUROPA</Link></li>
        <li><Link to="/destination/titan" className='Link'>TITAN</Link></li>
    </ul>
    <h3>{destination.name}</h3>
    <article>
    <p>Don't forget to pack your hiking boots. You'll need them to tackle
        Olympus Mons. the tallest planetary volcano in our solar system.
        It's two and a half times the size of Mount Everest.
    </p>
   </article>
   <div className='line'></div>
   <div className='distance d-flex  pt-4'>
    <div className="avg-distance">
    <p>AVG DISTANCE</p>
    <strong>{destination.distance}</strong>
    </div>
    <div className="travel-time">
        <p>EST. TRAVEL TIME</p>
        <strong>{destination.travel}</strong>
    </div>
   </div>
   </div>
   </div>
   
   
    </section>
    </>
  )
}

export default Destination
