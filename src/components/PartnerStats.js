import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import allstats from './img/allstats.JPEG';
import stats from './img/stats.JPG';

export default class PartnerStats extends Component {
    render(){
        return (
            <Row>
                <Col mdOffset={2} md={3}>
                    <Image src={allstats} responsive/>
                </Col>
                <Col>
                    <div className="stats-info">
                        <p><span>HP: </span>partner's health</p>
                        <p><span>ATK: </span>partner's attack</p>
                        <p><span>DEF: </span>partner's defense</p>
                        <p><span>SPD: </span>partner's speed</p>
                        <p><span>CR: </span>partner's critical rate</p>
                        <p><span>CRD: </span>partner's critical damage</p>
                        <p><span>RES: </span></p>
                        <p><span>SPD: </span></p>
                    </div>
                </Col>
                <p>
                    Action bar and speed. When a character's Action Bar reaches the max progress,
                    the character can take action. THe higher speed can bring faster action bar progress recovery. 
                    When the battle starts, the partners with the highest speed can take  action first. It is important to take the initiative action
                    before your opponents.    
                </p>
                <p>Skill Res and Skill Hit</p>
                <p>The higher Skill hit you get, the higher chance you can inflect debuff on emeies. THe higher skill res you get, the less chance 
                    you will suffer debuff.
                </p>
                <Image src={stats} />
            </Row>
        )
    }
}