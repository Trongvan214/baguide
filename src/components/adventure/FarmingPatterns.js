import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';
import laststage from '../img/laststage.JPG';

export default class FarmingPatterns extends Component {
    render(){
        return (
            <Grid>
                <PageHeader>
                    Farming patterns
                </PageHeader>
                <Row className="fp-row vcenter">
                    <Col mdOffset={1} md={6}>
                        <p className="indent">
                            When you are farming for patterns, the best spot to farm is the last stage on purgatory with the big boss (cost 6 energy) of any island. 
                            This stage will give you higher rates for higher star patterns, and higher rates for greens, and blues patterns.
                            The bad side to it is that is you will get a random equiment type.
                            But trust me, when I say it's worth it. 
                            It might deplay your search, or even improve. 
                            As for the future, you would already have tons of greens, blues, whites 5 stars patterns to choose from.
                        </p>
                    </Col>   
                    <Col md={4}>
                        <Image src={laststage} responsive/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}