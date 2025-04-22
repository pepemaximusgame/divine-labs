import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { fighters } from "../constants";
import ProjectCard from './ProjectCard';
// import GlowCard from './GlowCard';

const Moments = () => {
  return (
    <div id="stories">
      <h1 className='text-center text-4xl font-bold'>Stories</h1>
        <Row className='mt-5 mb-5 ml-5 mr-8'>
        {fighters.map((project,index)=>{
            return(
            <ProjectCard key={index} {...project}/>
                    )
                })}
        </Row>

    </div>
  )
}

export default Moments