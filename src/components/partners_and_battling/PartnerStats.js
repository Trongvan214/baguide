import React, { Component } from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';
import './PartnerStats.css';
import allstats from '../img/allstats.JPEG';
import stats from '../img/stats.JPG';

export default class PartnerStats extends Component {
    render(){
        return (
            <Grid className="pss">
                <PageHeader>
                    Partner's Stats
                </PageHeader>
                <Row className="vcenter pss-row">
                    <Col md={2}
                        sm={5}
                        xs={12}
                    >
                        <Image src={allstats} responsive/>
                    </Col>
                    <Col md={10}
                        sm={7}
                        xs={12}
                    >
                        <div className="stats-info">
                            <p><span>HP (Health): </span>Health is how much damage it can take before dying</p>
                            <p><span>ATK (Attack): </span>increase damage output</p>
                            <p><span>DEF (Defense): </span>reduce damage taken</p>
                            <p><span>SPD (Speed): </span>increase the action bar recovery (to take a turn again)</p>
                            <p><span>CR (Critical Rate): </span>chance to do extra damange (base on CRD)</p>
                            <p><span>CRD (Critial Damage): </span>extra % damage when land a critical hit (Exp: 100 damage and 50% crd = 150 damage if crit)</p>
                            <p><span>RES (Resistance): </span>the higher RES you get, the less chance you will suffer debuffs</p>
                            <p><span>HIT (Hit Rate): </span>The higher HIT you get, the higher chance you can inflict debuffs</p>
                        </div>
                    </Col>
                </Row>
                <Row className="vcenter pss-row">
                    <Col md={4}>
                        <Image src={stats} responsive/>
                    </Col>
                    <Col md={8}>
                        <div className="stats-info">
                            <p><span className="black">Basic Stats: </span>stats unique to each partner</p>
                            <p><span className="red">Additional Stats: </span>stats from war patterns</p>
                            <p><span className="blue">Overall Stats: </span>total of basic + additional stats (have to calc. yourself)</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

// <Row>
//     <p>Every partners will have these stats above and it helps us determine the roles the play in battling</p>
//     <p>Partners will higher ATK basic stats will often plays as a damage dealer, and so on. 
//         But this isn't the only factor needed to determine their roles. There's also skills.
//     </p>
// </Row>