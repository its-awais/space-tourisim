import React,{useState} from 'react'
import "./Crew.css";
import crewOneImage from "../../assets/assets/crew/image-anousheh-ansari.webP";
import crewTwoImage from "../../assets/assets/crew/image-douglas-hurley.webP"
import crewThreeImage from "../../assets/assets/crew/image-mark-shuttleworth.webP";
import crewFourImage from "../../assets/assets/crew/image-victor-glover.webP";
const Crew = () => {

    
    const crewMember = [
        {
            name:"Anousheh Ansari",
            image: crewOneImage,
            description: "Anousheh Ansari is an Iranian-American engineer and philanthropist. She is the co-founder and former CEO of Prodea Systems. Ansari was born in Mashhad, Iran, and moved to the United States in 1988, to attend George Mason University.",
            role: "FLIGHT ENGINEER"
        },
        {
            name:" Douglas Hurley",
            description: "Douglas Hurley is an American astronaut and former Marine Corps pilot. He was the commander of the first crewed SpaceX mission, Demo-2. Hurley was born in Endicott, New York, and joined NASA in 2000, to become a space shuttle pilot.",
            image: crewTwoImage,
            role : "Commander"
        },
        {
            name: " Mark Shuttleworth",
            description: "Mark Shuttleworth is a South African entrepreneur and astronaut. He is the founder and former CEO of Canonical Ltd. Shuttleworth was born in Welkom, South Africa, and traveled to space in 2002, as a space tourist aboard the Russian Soyuz spacecraft",
            image:  crewThreeImage,
            role: "Mission Specialist"
        },
        {
            name: " Victor Glover",
            description: "Victor Glover is an American astronaut and U.S. Navy pilot. He is the pilot of NASA's SpaceX Crew-1 mission to the International Space Station. Glover was born in Pomona, California, and joined NASA in 2013, after serving as a test pilot in the U.S. Navy",
            image: crewFourImage,
            role: "Pilot"
        }
    ]
    const[IsSelectedCrew, setIsSelectedCrew] = useState(crewMember[0].name);
    const selectedCrew = crewMember.find(member => member.name === IsSelectedCrew);
  return (
    <>
    <section id='crew'>
        <div className='background-crew'></div>
        <h1><span>02</span> MEET YOUR CREW</h1>
   <div className='information-pic'>
      <div className="crew-infromation">
        <h2 className=" lh-base"><span className="role fs-3">{selectedCrew.role}</span> <span className="name fs-1">{selectedCrew.name}</span></h2>
        <article>
            {selectedCrew.description}
        </article>
        {crewMember.map((member,index)=>(
        <button key={index} className={`dot ${IsSelectedCrew === member.name ? "Active" : ""}`} onClick={()=> setIsSelectedCrew(member.name)}></button>
))}
      </div>
      <div className="crew-pic">
      <img src={selectedCrew.image} className="crew-images" alt="" loading="eager" />
      </div>
   </div>
    </section>
    </>
  )
}

export default Crew
