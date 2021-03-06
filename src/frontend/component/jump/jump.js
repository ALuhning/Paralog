import React from 'react';
import freefallpic from '../../../assets/freefall.png';
import backgroundPlaceholder from '../../../assets/google-map-placeholder.jpg';
import { Container, Card, CardGroup } from 'react-bootstrap';
import './jump.css';

const Jump = ({ jumpName, jumpDate, dropAltitude, freefall }) => {
    return (
            <JumpDisplay jumpDate={jumpDate} dropAltitude={dropAltitude} freefall={freefall} />
    )
}

export default Jump

const JumpDisplay = ({ jumpDate, dropAltitude, freefall }) => {

    let jumpType = (
        <div style={{ width: "100%", height: "100%", margin: "auto", position: "relative", zIndex: "10", }}>
        <svg width="147px" height="146px" viewBox="0 0 147 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs>
                <pattern id="image" patternUnits="userSpaceOnUse" height="147" width="146">
                    <image x="0" y="0" height="147" width="146" xlinkHref={freefallpic}></image>
                </pattern>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="gen1" transform="translate(-782.000000, -1123.000000)">
                    <g id="c-phase1-(1)" transform="translate(783.000000, 1124.000000)">
                        <ellipse id="Oval" fill="url(#image)"  cx="72.2491349" cy="72" rx="72.2491349" ry="72"></ellipse>
                       
                        <ellipse id="Oval" stroke="#24272A" strokeWidth="2" cx="72.2491349" cy="72" rx="72.2491349" ry="72"></ellipse>
                    </g>
                </g>
            </g>
        </svg>
        
    </div>
    )
    let shadow = (
        <div style={{ width: "60%", position: "relative", top: "-10px", margin: "auto" }}>
            <svg width="200px" height="25px" viewBox="0 0 200 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.2">
                    <g id="create" transform="translate(-801.000000, -709.000000)" fill="#000000">
                        <ellipse id="Oval" cx="901" cy="721.048193" rx="100" ry="12.0481928"></ellipse>
                    </g>
                </g>
            </svg>
        </div>
    )

    let style = {
        backgroundImage: `url(${backgroundPlaceholder})`,
        borderRadius: "10px",
        padding: "5%",
        marginBottom: "5%",
        textAlign: "center"
    }
    
    return (
        <Container fluid>
        
                    <CardGroup>
                        <Card bg="light" className="card-spacing">
                            <Card.Header as="h6">
                                Date
                            </Card.Header>
                            <Card.Body className="card-body-adjustment">
                                {jumpDate}
                            </Card.Body>
                        </Card>
                        <Card className="card-spacing">
                            <Card.Header as="h6">
                                Drop Altitude
                            </Card.Header>
                            <Card.Body className="card-body-adjustment">
                                {dropAltitude} ft
                            </Card.Body>
                        </Card>
                        <Card className="card-spacing">
                            <Card.Header as="h6">
                                Freefall
                            </Card.Header>
                            <Card.Body className="card-body-adjustment">
                                {freefall} seconds
                            </Card.Body>
                        </Card>
                    </CardGroup>
                
                    <div style={style}>
                        {jumpType}
                        {shadow}
                    </div>
            
        </Container>            
  
    )
}