import React, { Component } from 'react'
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';
import patternupgrades from '../img/patternupgrades.JPG';
export default class WarPatternUpgrades extends Component { 
    render(){
        return (
            <Grid>
                <PageHeader>
                    Upgrades
                </PageHeader>
                <Row className="vcenter">
                    <Col mdOffset={1} md={3}>
                        <Image src={patternupgrades} responsive />
                    </Col>
                    <Col md={7}>
                        <p>For every +3 upgrades you will unlock a slot on your patterns, there are 4 slots available. 
                            If the slots is already unlock, it will get improve. 
                            The only thing is that the improve will be on a random unlocked slot.
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}