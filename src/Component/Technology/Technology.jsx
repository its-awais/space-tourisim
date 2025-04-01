import React from 'react'
import { useState } from 'react'
import "./Technology.css"
import image1 from "../../assets/assets/technology/image-launch-vehicle-portrait.jpg"
import image2 from "../../assets/assets/technology/image-spaceport-portrait.jpg"
import image3 from "../../assets/assets/technology/image-space-capsule-portrait.jpg"
const Technology = () => {
        const technologyData = [
            {
                title: "LAUNCH VEHICLE",
                description: "A launch vehicle or space launch vehicle is a rocket that is used to carry a spacecraft into space. Typically, it is a large rocket that is capable of carrying a payload of several tons into orbit.",
                image: image1
            },
            {
                title: "SPACEPORT",
                description: "A spaceport is a site for launching (or receiving) spacecraft. These facilities include launch pads, control centers, and other necessary infrastructure to support space missions.",
                image: image2
            },
            {
                title: "SPACE CAPSULE",
                description: "A space capsule is a spacecraft designed to transport people and cargo to and from space. It is typically small, with a heat shield to withstand reentry and a parachute system for landing.",
                image: image3
            }
        ];
    const[IsTechnologyData, setIsTechnologyData] = useState(technologyData[1].title);
    console.log(IsTechnologyData)
    const selectedData = technologyData.find((data)=> data.title === IsTechnologyData);
  return (
    <>
    <section id='technology'>
        <div className="backgrond-technology"></div>
    <h1><span className='light-background'>03</span> Space Launch 101</h1>
    <div className='launching-pic-info'>
        <div className='launching'>
            <div className='buttons-column'>
            {technologyData.map((data,index)=>(
        <button key={index} className={`one ${IsTechnologyData === data.title ? "Active" : ""}`} onClick={()=>setIsTechnologyData(data.title)}>{index + 1}</button>
        ))}
        </div>
        <div className='launching-start'>
            <h2>
                <span className='terminolgy'>THE TERMINOLGY</span>
                 <span className='fs-1'>{IsTechnologyData}</span>
            </h2>
            <article>
                 {selectedData.description}
            </article>
        </div>
        </div>
        <div className="launching-pic">
   <img src={selectedData.image} alt=""  loading='eager' />
        </div>
    </div>
   </section>
    </>
  )
}

export default Technology
