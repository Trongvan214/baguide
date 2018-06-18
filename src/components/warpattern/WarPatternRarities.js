import React, { Component } from 'react';
import { Grid, Col, Row, Image, PageHeader } from 'react-bootstrap';
import './WarPatternRarities.css';
import whitepattern from '../img/whitepattern.JPG';
import greenpattern from '../img/greenpattern.JPG';
import bluepattern from '../img/bluepattern.JPG';
import orangepattern from '../img/orangepattern.JPG';
import purplepattern from '../img/purplepattern.JPG';

export default class WarPatternEquipments extends Component {
    render(){
        return (
            <Grid>
                <PageHeader>
                    War Pattern Rarities
                </PageHeader>
                <Row className="wp-row">
                        <p className="indent">War pattern have 5 different rarities: Common (white), Magic(green), Rare(blue), Ancient(orange), Legendary(purple). 
                            Below I provided a picture of each rarity, you can tell which rarity it is by the color of it's name. 
                            You can also see that with each rarity you get an extra bonus stats.
                        </p>
                    </Row>
                    <Row className="wpr-display">
                        <Col mdOffset={1} md={2}>
                            <Image src={whitepattern} responsive />
                        </Col>
                        <Col md={2}>
                            <Image src={greenpattern} responsive />
                        </Col>
                        <Col md={2}>
                            <Image src={bluepattern} responsive />
                        </Col>
                        <Col md={2}>
                            <Image src={orangepattern} responsive />
                        </Col>
                        <Col md={2}>
                            <Image src={purplepattern} responsive /> 
                        </Col>
                    </Row>
                    <Row>

                    </Row>
            </Grid>
        )
    }
}