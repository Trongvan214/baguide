import React, { Component } from 'react'
import { Grid, Col, Row, PageHeader } from 'react-bootstrap';

export default class FarmingIntro extends Component { 
    render(){
        return (
            <Grid>
                <PageHeader>
                    Adventure Farming
                </PageHeader>
                <Row>
                    <Col md={12}> 
                        <p className="indent">
                            Before we start, I would to say this isn't a beginner's guide on adventure, 
                            you will need a basic understand of adventure to fully understand. 
                            I will be talking about some of the strategies that I used to farm in adventure. 
                            I will also provide some tips on what's the most efficient way.
                        </p>
                        <p>*reminder add more later*</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}