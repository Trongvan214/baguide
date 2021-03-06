import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Media, PageHeader } from 'react-bootstrap';
import explainingattribute from '../img/explainingstats.JPG';
import fixedattribute from '../img/fixedstats.JPG';
import dynamicattribute from '../img/dynamicstats.JPG';
import EquipmentTable from './EquipmentTable';

export default class WarPatternStats extends Component {
    render(){
        return (
            <Grid>
                <PageHeader>
                    War Pattern
                </PageHeader>
                <Row className="margin-top-2 vcenter">
                    <Col md={4}>
                        <Image src={explainingattribute} responsive /> 
                    </Col>
                    <Col md={7}>
                            <p><span className="red bold">Main Stats: </span>stats that increases every upgrade</p>
                            <p><span className="yellow bold">Bonus Stats: </span>stats that are obtain or improved every +3 uprgrade</p>
                    </Col>
                </Row>
                <Row className="margin-top-2">  
                    <Col md={6}>
                        <Media>
                            <Media.Left>
                                <Image height={250} width={200} src={fixedattribute} />   
                            </Media.Left>
                            <Media.Body align="middle">
                                <Media.Heading className="bold">Fixed amount (#)</Media.Heading>
                                <p>The amount you see is what you get added to your 
                                    <Link to="/partners/stats"> addition stats</Link>.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md={6}>
                    <Media>
                        <Media.Left>
                                <Image height={250} width={200} src={dynamicattribute} />   
                            </Media.Left>
                            <Media.Body align="middle">
                                <Media.Heading className="bold">Dynamic amount (%)</Media.Heading>
                                <p>The amount will be based on your 
                                    <Link to="/partners/stats"> basic stats</Link>.
                                </p>
                                <p>
                                    Amount = basic stats * ( % / 100)
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <PageHeader>
                    Equipment Table
                </PageHeader>
                <EquipmentTable />
            </Grid>
        )
    }
}