import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import pepeHigh from '/images/pepeHigh.png';
import HomeExperience from "./HomeExperience";
import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";
import BoxerExperience from "./BoxerExperience";

 const BoxerBanner=()=>{
    const navigate = useNavigate();
    return (
        <section className="banner-boxer" id="home"> 
        <Container>
            <Row className="align-items-center ">
                <Col xs={12} md={6} xl={6}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'Comrads'}<span className="wrap">!</span></h1>
                <p>Born from the chaos,driven by vibes,backed by unshakable community,Pepe Maximus isn't just a meme - He is a movement!!</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}}>Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={6}>
                <figure>
                <div className="">
                <BoxerExperience/>
                </div>
                </figure>
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
    )
 }
 export default BoxerBanner;