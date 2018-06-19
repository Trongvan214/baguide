import React, { Component } from 'react';
import { Grid, Col, Row, PageHeader, Image } from 'react-bootstrap';
import './PartnerSkills.css';
// import passiveskill1 from '../img/passiveskill1.JPG';
import passiveskill2 from '../img/passiveskill2.JPG';
// import activeskill1 from '../img/activeskill1.JPG';
import activeskill2 from '../img/activeskill2.JPG';
// import hybridskill1 from '../img/hybridskill1.JPG';
import hybridskill2 from '../img/hybridskill2.JPG';
export default class PartnerSkills extends Component {
    render(){
        return (
            <Grid>
                <Row className="vcenter">
                    <PageHeader>
                        Partner's Skills
                    </PageHeader>
                </Row>
                <Row>
                    <p>There are 3 types of skills that a partner can acquired:</p>
                </Row>
                <Row className="ps-row">
                    <Col md={6}
                    >
                        <div>
                            <h1 className="bold blue">Active Skills</h1>
                            <p>Skills that be activated when it's your turn</p>
                        </div>
                    </Col>
                    <Col md={6}
                    >
                        <Image src={activeskill2} responsive/>
                    </Col>
                </Row>
                <Row className="ps-row">
                    <Col md={6}
                    >
                        <div>
                            <h1 className="bold red">Passive Skills</h1>
                            <p>Skills that are always activated or after a certain condition</p>
                        </div>
                    </Col>
                    <Col md={6} 
                    >
                        <Image src={passiveskill2} responsive />
                    </Col>
                </Row>
                <Row className="ps-row">
                    <Col md={6}
                    >
                        <div>
                            <h1 className="bold">Hyrbid Skills</h1>
                            <p>Skills contain both part active and part passive</p>
                        </div>
                    </Col>
                    <Col md={6} 
                    >
                        <Image src={hybridskill2} responsive />
                    </Col>
                </Row>
            </Grid>
        )
    }
}