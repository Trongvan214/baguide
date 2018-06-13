import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import whitepattern from './img/whitepattern.JPG';
import bluepattern from './img/bluepattern.JPG';
import orangepattern from './img/orangepattern.JPG';
import purplepattern from './img/purplepattern.JPG';

export default class WarPatterns extends Component {
    render(){
        return (
            <Grid>
                <Row>
                    <Col md={3}>
                        <Image src={whitepattern} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={bluepattern} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={orangepattern} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={purplepattern} responsive /> 
                    </Col>
                </Row>
            </Grid>
        )
    }
}