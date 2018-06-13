import React, { Component } from 'react';
import { Grid, Col, Row, Media, PageHeader } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './css/PartnerTypes.css';
import wild from './img/wild.JPG';
import wise from './img/wise.JPG';
import brave from './img/brave.JPG';

export default class PartnerTypes extends Component {
    render(){
        return (
            <Grid className="pib">
                <PageHeader>
                    Partner Types
                </PageHeader>
                <p>Each partner have three different types: Brave (red), Wise (blue), Wild (green):</p>
                <Row className="margin-3 display-partners-type">
                    <Col md={4}>
                        <Media>
                            <Media.Left>
                                <Image src={wild} height={124} width={124}/>
                            </Media.Left>
                            <Media.Body align="middle">
                                <Media.Heading><span className="bold">Wild</span></Media.Heading>
                                <p>Strong against <span className="bold">Wise</span></p>
                                <p>Weak against <span className="bold">Brave</span></p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md={4}>
                        <Media>
                            <Media.Left>
                                <Image src={wise} height={124} width={124}/>
                            </Media.Left>
                            <Media.Body align="middle">
                                <Media.Heading><span className="bold">Wise</span></Media.Heading>
                                <p>Strong against <span className="bold">Brave</span></p>
                                <p>Weak against <span className="bold">Wild</span></p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md={4}>
                        <Media>
                            <Media.Left>
                                <Image src={brave} height={124} width={124}/>
                            </Media.Left>
                            <Media.Body align="middle">
                                <Media.Heading><span className="bold">Brave</span></Media.Heading>
                                <p>Strong against <span className="bold">Wild</span></p>
                                <p>Weak against <span className="bold">Wise</span></p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <p>When partners battling, 2 things can happen when it attacks or receive an attack.</p>
                <p>1. Deflection: reduce incoming damage by 30% and immune to any debuff</p>
                <div className="indent">
                    <p>
                        Exp: If 2 partners of different types are fighting (Brave and Wild), the stronger type of the 2 (Brave) 
                        will have a higher chance to trigger deflection when it's being hit by the weaker type (Wild).
                    </p>
                </div>
                <p>2. Bash: do 30% more damage</p>
                <div className="indent">
                    <p>
                        Exp: If 2 partners of different types that are fighting (Wild and Wise), only the stronger types (Wild) 
                        have a chance to trigger a bash hit on the weaker types (Wise). 
                        Weaker type won't be able to trigger a bash hit on it's stronger type.
                    </p>
                </div>
                <p className="indent">
                    So when battling, if you know ahead of time the type of the partners, 
                    you can pick it's stronger type to improve your chance of winning
                    There's alot more to this, that I'll explain later.
                </p>
            </Grid>
        )
    }
}
