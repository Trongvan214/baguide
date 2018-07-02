import React, { Component } from 'react';
import { Grid, Jumbotron, Image, Row, Col } from 'react-bootstrap';
import ios from '../img/iosdownload.png';
import android from '../img/androiddownload.svg';
import logo from '../img/logo.jpg';
import './Home.css';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <Row className="home-row vcenter">
                        <Col mdOffset={3} md={2}>
                            <Image src={logo} width={150}/>
                        </Col>
                        <Col md={6}>
                            <div className="header">
                                <h1>Brutal Age Guide</h1>
                                <p className="italic">By Paper</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="home-row">
                        <p className="indent">This is a guide on the partners aspect of the game.
                            Beware of some of the things that are going be said in this guide.
                            There are things that are collected directly from the game forum,
                            and there are also things which are only tested in the game. So believe them at your own risks.   
                        </p>
                        <p className="indent">If you are viewing this inside an app's browser, it might not work right. 
                        Please use your own browser if that happens, here's the link to copy and paste</p>
                        <div className="text-center">
                            <a href="https://trongvan214.github.io/baguide/" rel="noopener noreferrer" target="_blank"> 
                                https://trongvan214.github.io/baguide/
                            </a>
                        </div>
                    </Row>
                    <Row className="home-download">
                        <Col md={6} xs={6}>
                            <a href="https://itunes.apple.com/us/app/brutal-age-horde-invasion/id1156787368?mt=8" rel="noopener noreferrer" target="_blank"> 
                                <Image src={ios} responsive />
                            </a>
                        </Col>
                        <Col md={6} xs={6}>
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