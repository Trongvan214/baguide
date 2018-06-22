import React, { Component } from 'react';
import { Grid, Jumbotron, Image, Row, Col } from 'react-bootstrap';
import ios from '../img/iosdownload.png';
import android from '../img/androiddownload.svg';
import logo from '../img/logo.jpg';
import './Home.css';
import { Media } from 'react-bootstrap';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <Row className="home-row">
                        <Media className="header">
                            <Media.Left>
                                <Image src={logo} width={150}/>
                            </Media.Left>
                            <Media.Body align="middle">
                                <h1>Brutal Age Guide</h1>
                                <p className="italic">By Paper</p>
                            </Media.Body>
                        </Media>
                    </Row>
                    <Row className="home-row">
                        <p className="indent">This is a guide on the partners aspect of the game.
                            Beware of some of the things that are going be said in this guide.
                            There are things that are collected directly from the game forum,
                            and there are also things which are only tested in the game. So believe them at your own risks.   
                        </p>
                    </Row>
                    <Row className="home-download">
                        <Col md={6}>
                            <a href="https://itunes.apple.com/us/app/brutal-age-horde-invasion/id1156787368?mt=8" rel="noopener noreferrer" target="_blank"> 
                                <Image src={ios} responsive />
                            </a>
                        </Col>
                        <Col md={6}>
                            <a href="https://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test&hl=en_US" rel="noopener noreferrer" target="_blank"> 
                                <Image src={android} responsive />
                            </a>
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        )
    }
}