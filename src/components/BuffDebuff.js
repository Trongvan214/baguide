import React, { Component } from 'react'
import { Col, Media, Image } from 'react-bootstrap';
import attbuff from './img/attbuff.JPG';
import defbuff from './img/defbuff.JPG';
import speedbuff from './img/speedbuff.JPG';
import critbuff from './img/critbuff.JPG';
import enduringhealbuff from './img/enduringhealbuff.JPG';
import immunitybuff from './img/immunitybuff';
import shieldbuff from './img/shieldbuff.JPG';
import Unyieldingbuff from './img/unyieldingbuff.JPG';


export default class BuffDebuff extends Component { 
    render(){
        return (
            <Col>
                <h1>List of buffs</h1>
                <div className="partners-buff">
                    <CustomMedia 
                        pos="left"
                        term="ATK Enhance"
                        definition="Increase ATK by 50%"
                        img={attbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="DEF Enhance"
                        definition="Increase DEF by 70%"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Speed Enhance"
                        definition="Increase Speed by 30%"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="CR Rate Enhance"
                        definition="Increase CR Rate by 30%"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="CR Res Enhance"
                        definition="Reduce the chance of suffering CR by 50%"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Enduring Healing"
                        definition="Recover 15% of max HP in each round"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Add Counter Blessing"
                        definition="It can fight back with 75% ATK after being attacked"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Immunity"
                        definition="Immune to any debuff (it won't dispel the debuffs which are taking effect)"
                        img={defbuff}
                    />                    
                    <CustomMedia 
                        pos="right"
                        term="Damage Reflect"
                        definition="Reflect 30% of received damage"
                        img={defbuff}
                    />                    
                    <CustomMedia 
                        pos="right"
                        term="Add Shield"
                        definition="Add a shield which can absorb a certain amount of damage"
                        img={defbuff}
                    />                    
                    <CustomMedia 
                        pos="right"
                        term="Unyielding"
                        definition="Unyielding will! HP just won't be lower than 1 when being attacked"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Protection"
                        definition="The target is protected by a teammate from any damage and the teammate takes 50% of the damage"
                        img={defbuff}
                    />
                    <CustomMedia 
                        pos="right"
                        term="Nirvana"
                        definition="Revive immediately to its 30% HP after being defeated"
                        img={defbuff}
                    />                                        
                    <CustomMedia 
                        pos="right"
                        term="Energy Shield"
                        definition="Revive immediately to its 30% HP after being defeated"
                        img={defbuff}
                    />                    
                </div>
            </Col>
        )
    }
}

const CustomMedia = ({pos, term, definition, img}) => {
    if(pos === "left")
        return (
            <Media>
                <Media.Left>
                    <img width={120} height={120} src={img} alt="buff/debuff" />
                </Media.Left>
                    <Media.Body align="middle">
                    <Media.Heading>{term}</Media.Heading>
                    <p>
                        {definition}
                    </p>
                </Media.Body>
            </Media>
        )
    else 
        return (
            <Media>
                <Media.Body align="middle">
                    <Media.Heading>{term}</Media.Heading>
                    <p>
                        {definition}
                    </p>
                </Media.Body>
                <Media.Right>
                    <Image width={120} height={120} src={img} alt="buff/debuff" />
                </Media.Right>
            </Media>
        )
}

                        // <div className="partners-debuff">
                        //     <h1>Here are the list of debuffs you can get in the game</h1>
                        //     <p>Blind: <small>It has a 50% chance to deflect the hit, which will reduce 30% of the dealing damage.</small></p>
                        //     <p>ATKReduce: <small>Reduce ATK by 50%</small></p>
                        //     <p>DEFReduce: <small>Reduce DEF by 70%</small></p>
                        //     <p>Slow: <small>Reduce Speed by 30%</small></p>
                        //     <p>Inertia: <small>Cannot get buffs</small></p>
                        //     <p>ThorCurse: <small>After the countdown, deal damage (Ignoring DEF)</small></p>
                        //     <p>Taunt: <small>Can only use the first skill to attack the taunter.</small></p>
                        //     <p>Sleep: <small>Enter Sleep status, and cannot take actions until attacked.</small></p>
                        //     <p>Poison: <small>Each round deal damage by 5% of the max HP.</small></p>
                        //     <p>Frozen: <small>Enter Frozen status, and cannot take actions</small></p>
                        //     <p>Stun: <small>Enter Stun status, and cannot take actions</small></p>
                        //     <p>Healing F<small>orbidden: Can't recover HP</small></p>
                        //     <p>Silence: <small>Cannot use skills with CD</small></p>
                        //     <p>Injury: <small>Receive additional damage by 25%</small></p>
                        //     <p>Amnesia: <small>Cannot trigger the passive skill</small></p>
                        // </div>