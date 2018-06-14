import React, { Component } from 'react'
import { Grid, Row, Col, Media, Image, PageHeader } from 'react-bootstrap';
import './css/BuffDebuff.css';

import buffexample from './img/buffexample.JPG';
import stackdebuff from './img/stackdebuff.JPG';

//default pic 
import defaultPic from './img/default.JPG';
//buff
import attbuff from './img/attbuff.JPG';
import defbuff from './img/defbuff.JPG';
import speedbuff from './img/speedbuff.JPG';
import critbuff from './img/critbuff.JPG';
import enduringhealbuff from './img/enduringhealbuff.JPG';
import immunitybuff from './img/immunitybuff.JPG';
import shieldbuff from './img/shieldbuff.JPG';
import Unyieldingbuff from './img/unyieldingbuff.JPG';
import critresisbuff from './img/critresisbuff.JPG';
//debuff
import blinddebuff from './img/blinddebuff.JPG';
import attdebuff from './img/attdebuff.JPG';
import defdebuff from './img/defdebuff.JPG';
import slowdebuff from './img/slowdebuff.JPG';
import tauntdebuff from './img/tauntdebuff.JPG';
import sleepdebuff from './img/sleepdebuff.JPG';
import poisondebuff from './img/poisondebuff.JPG';
import freezedebuff from './img/freezedebuff.JPG';
import stundebuff from './img/stundebuff.JPG';
import healforbdebuff from './img/healforbdebuff.JPG';
import silencebebuff from './img/silencedebuff.JPG';
import injurydebuff from './img/injurydebuff.JPG';
import amnesiadebuff from './img/amnesiadebuff.JPG';
import inertiadebuff from './img/inertiadebuff.JPG';

export default class BuffDebuff extends Component { 
    state = {
        buffs: [],
        debuffs: [],
    }
    componentDidMount(){
        let buffs = [];
        let debuffs = [];
        //for buffs
        buffs.push(["ATK Enhance", "Increase ATK by 50%", attbuff]);
        buffs.push(["DEF Enhance", "Increase DEF by 70%", defbuff]);
        buffs.push(["Speed Enhance", "Increase Speed by 30%", speedbuff]);
        buffs.push(["CR Rate Enhance", "Increase CR Rate by 30%", critbuff]);
        buffs.push(["Enduring Healing", "Recover 15% of max HP in each round", enduringhealbuff]);
        buffs.push(["Immunity", "Immune to any debuff (it won't dispel the debuffs which are taking effect)", immunitybuff]);
        buffs.push(["Add Shield", "Add a shield which can absorb a certain amount of damage", shieldbuff]);
        buffs.push(["Unyielding", "Unyielding will! HP just won't be lower than 1 when being attacked", Unyieldingbuff]);
        buffs.push(["Damage Reflect", "Reflect 30% of received damage", defaultPic]);
        buffs.push(["CR Res Enhance", "Reduce the chance of suffering CR by 50%", critresisbuff]);
        buffs.push(["Add Counter Blessing", "It can fight back with 75% ATK after being attacked", defaultPic]);
        buffs.push(["Protection", "The target is protected by a teammate from any damage and the teammate takes 50% of the damage", defaultPic]);
        buffs.push(["Nirvana", "Revive immediately to its 30% HP after being defeated", defaultPic]);
        buffs.push(["Energy Shield", "Cast shields for the team", defaultPic]);
        //for debuffs
        debuffs.push(["Blind", "It has a 50% chance to deflect the hit, which will reduce 30% of the dealing damage", blinddebuff]);
        debuffs.push(["ATK Reduce", "Reduce ATK by 50%", attdebuff]);
        debuffs.push(["DEF Reduce", "Reduce DEF by 70%", defdebuff]);
        debuffs.push(["Slow", "Reduce Speed by 30%", slowdebuff]);
        debuffs.push(["Taunt", "Can only use the first skill to attack the taunter", tauntdebuff]);
        debuffs.push(["Sleep", "Enter Sleep status, and cannot take actions until attacked", sleepdebuff]);
        debuffs.push(["Poison", "Each round deal damage by 5% of the max HP.", poisondebuff]);
        debuffs.push(["Frozen", "Enter Frozen status, and cannot take actions", freezedebuff]);
        debuffs.push(["Stun", "Enter Stun status, and cannot take actions", stundebuff]);
        debuffs.push(["Healing forbidden", "Can't recover HP", healforbdebuff]);
        debuffs.push(["Silence", "Cannot use skills with CD", silencebebuff]);
        debuffs.push(["Injury", "Receive additional damage by 25%", injurydebuff]);
        debuffs.push(["Amnesia", "Cannot trigger the passive skill", amnesiadebuff]);
        debuffs.push(["Inertia", "Cannot get buffs", inertiadebuff]);
        debuffs.push(["Thor Curse", "After the countdown, deal damage (Ignoring DEF)", defaultPic]);
        //set to the state
        this.setState({buffs, debuffs});
    }
    render(){
        return (
            <Grid className="bndb">
                <Row className="bndb-row">
                    <p className="indent"> When partners are in a battle, their skills can trigger buffs or debuffs for themselves or the ememies.
                        Buffs and debuffs are advantages and disadvantages that can happen to partners during a battle.
                        Below you will find a list of buffs and debuffs in the game.
                        The blue color is the buff, which give you an advantage during the fight.  
                        The red is the debuff, which give will give you a disadvantage in the fight.
                    </p>
                    <p className="indent">
                        These buffs/debuffs are time limited, at the bottom right you will see a number,
                        it represent the numbers of rounds it will last. 
                        One round is past after the partner uses it's turn. 
                        So this means, the duration of the buff will depends on the spd (stats) of the partners. 
                        Faster spd partners will have the buff on for shorter amount of time, and slower partners will have it for longer.
                        This isn't a bad thing, I will discuss why in battling.
                    </p>
                </Row>
                <Row className="bndb-example">
                    <Col md={10}
                        sm={8}
                        xs={12}
                    >
                        <p className="indent">Most of the buff/debuff aren't stackable, that means you can't stack up the rounds or have multiple of the same buff/debuff. 
                                The only buff/debuff that's stackable is the poison debuff, you can have multiple poison inflicted on the ememy (can't stack rounds).
                        </p>
                    </Col>
                    <Col md={2}
                         sm={4}
                        xs={12}
                    >
                        <Image src={stackdebuff} alt="stackbuff"/>
                    </Col>
                </Row>
                <Row className="bndb-example">
                    <Col md={2}
                         sm={4}
                        xs={12}
                    >
                        <Image src={buffexample} alt="stackbuff" responsive/>
                    </Col>
                    <Col md={10}
                        sm={8}
                        xs={12}
                    >
                        <p className="indent">Example of buff, let's say your blue beserker have an overall def of 1000 (500 from basic stats, 500 from addition stats) 
                                ,and it got a def buff, which increases it's def by 70% (scroll down to see the buffs info.). It should now have 1000 + (1000 * .7) = 1700 def.
                                From the bottom right, you can see this buff will last for 2 rounds (2 turns). The same applies to debuffs.
                        </p>
                    </Col>
                </Row>
                <Row className="bndb-row">
                    <PageHeader>
                        List of Buffs
                    </PageHeader>
                </Row>
                <Row>
                    {
                        this.state.buffs.map((buff, index) => (
                            <Col md={4}>
                                <CustomMedia 
                                    key={index}
                                    term={buff[0]}
                                    definition={buff[1]}
                                    img={buff[2]}
                                    withoutImg={buff[2] === null ? true : false}
                                />
                            </Col>
                        ))
                    }
                </Row>
                <PageHeader>
                    List of Debuffs
                </PageHeader>
                <Row>
                    {
                        this.state.debuffs.map((buff, index) => (
                            <Col md={4}>
                                <CustomMedia 
                                    key={index}
                                    term={buff[0]}
                                    definition={buff[1]}
                                    img={buff[2]}
                                    withoutImg={buff[2] === null ? true : false}
                                />
                            </Col>
                        ))
                    }
                </Row>
               
            </Grid>
        )
    }
}

const CustomMedia = ({ term, definition, img, withoutImg}) => (
    <Media className="bndb-media">
        {
            !withoutImg ? (
                <Media.Left>
                    <Image width={120} height={120} src={img} alt="buff/debuff" />
                </Media.Left>
            ) : null
        }
            <Media.Body align="middle">
            <Media.Heading>{term}</Media.Heading>
            <p>
                {definition}
            </p>
        </Media.Body>
    </Media>
)
