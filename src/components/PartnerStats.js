import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './css/PartnerStats.css';
import allstats from './img/allstats.JPEG';
import stats from './img/stats.JPG';

export default class PartnerStats extends Component {
    render(){
        return (
            <React.Fragment>
                <Row className="vcenter">
                    <Col md={2} className="margin">
                        <Image src={allstats} responsive/>
                    </Col>
                    <Col>
                        <div className="stats-info">
                            <p><span>HP (Health): </span>Health is how much damage it can take before dying</p>
                            <p><span>ATK (Attack): </span>increase damange output</p>
                            <p><span>DEF (Defense): </span>reduce damange taken</p>
                            <p><span>SPD (Speed): </span>increase the action bar recovery (to attack again)</p>
                            <p><span>CR (Critical Rate): </span>chance to do extra damange (base on CRD)</p>
                            <p><span>CRD (Critial Damage): </span>extra % damange when land a critical hit (Exp: 100 damange and 50% crd = 150 damange if crit)</p>
                            <p><span>RES (Resistance): </span>the higher RES you get, the less chance you will suffer debuffs</p>
                            <p><span>HIT (Hit Rate): </span>The higher HIT you get, the higher chance you can inflict debuffs</p>
                        </div>
                    </Col>
                </Row>
                <Row className="vcenter">
                    <Col md={4} className="margin">
                        <Image src={stats} responsive/>
                    </Col>
                    <Col>
                        <div className="stats-info">
                            <p><span className="black">Basic Stats: </span>stats unique to each partner</p>
                            <p><span className="red">Additional Stats: </span>stats from war patternst</p>
                            <p><span className="blue">Overall Stats: </span>total from basic + additional stats (have to calc. yourself)</p>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}