import React, { Component } from 'react'
import { Grid, Col, Row, PageHeader, Image } from 'react-bootstrap';
import map from '../img/map.PNG';

export default class FarmingIntro extends Component { 
    render(){
        return (
            <Grid>
                <PageHeader>
                    Adventure Farming
                </PageHeader>
                <Row className="af-row">
                    <Col mdOffset={1} md={7}> 
                        <p className="indent">
                            Before we start, I would to say this isn't a beginner's guide on adventure, 
                            you will need a basic understand of adventure to fully understand. 
                            I will be talking about some of the strategies that I used to farm in adventure. 
                            I will also provide some tips on what's the most efficient way.
                        </p>
                    </Col>
                    <Col md={4}>
                        <Image src={map} responsive/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}