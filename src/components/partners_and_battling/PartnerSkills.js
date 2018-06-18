import React, { Component } from 'react';
import { Grid, Row, PageHeader, Image, Media} from 'react-bootstrap';
import './PartnerSkills.css';
// import passiveskill1 from '../img/passiveskill1.JPG';
import passiveskill2 from '../img/passiveskill2.JPG';
// import activeskill1 from '../img/activeskill1.JPG';
import activeskill2 from '../img/activeskill2.JPG';
// import hybridskill1 from '../img/hybridskill1.JPG';
import hybridskill2 from '../img/hybridskill2.JPG';
export default class PartnerSkills extends Component {
    render(){
        return (
            <Grid>
                <Row className="vcenter">
                    <PageHeader>
                        Partner's Skills
                    </PageHeader>
                </Row>
                <Row>
                    <p>There are 3 types of skills that a partner can acquired:</p>
                </Row>
                <Row className="ps-row">
                    <Media>
                        <Media.Body align="middle">
                            <Media.Heading className="bold blue">
                                Active Skills
                            </Media.Heading>
                            <p>
                                Skills that be activated when it's your turn
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <Image src={activeskill2} width={400}/>
                        </Media.Right>
                    </Media>
                </Row>
                <Row className="ps-row">
                    <Media>
                        <Media.Body align="middle">
                            <Media.Heading className="bold red">
                                Passive Skills
                            </Media.Heading>
                            <p>
                                Skills that are always activated
                            </p>
                        </Media.Body>
                        <Media.Right>
                            <Image src={passiveskill2} width={400}/>
                        </Media.Right>
                    </Media>
                </Row>
                <Row className="ps-row">
                    <Media>
                        <Media.Body align="middle">
                                <Media.Heading className="bold">
                                    Hyrbid Skills
                                </Media.Heading>
                                <p>
                                    Skills contain both part active and part passive
                                </p>
                            </Media.Body>
                            <Media.Right>
                                <Image src={hybridskill2} width={400}/>
                            </Media.Right>
                    </Media>
                </Row>
            </Grid>
        )
    }
}