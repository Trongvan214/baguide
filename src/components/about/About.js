import React, { Component } from 'react';
import { Grid, Jumbotron, Modal, FormControl, HelpBlock, FormGroup } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    state = {
        show: false,
        helpBlock: "Click to copy"
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    copyClipBoard = (e) => {
        e.target.select();
        document.execCommand('copy');
        this.setState({
            helpBlock: "Copied text to clipboard"
        });
    }
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <p className="indent">Hi, I'm Paper and I am from server 283 Juno. I have been playing this game for 4 months.
                        I have learned alot throughout my 4 months and I created this guide to share what I've learned. 
                    </p>
                    <p className="indent">
                        Being a college student, I myself don't spend much money on the game, 
                        so some of the stragigies I use isn't going to be of much help for the big spenders.
                        But I also have some infomation here that's useful for everybody, 
                        and everybody should know them if they are serious about partners.
                    </p>
                    <p className="indent">If you have any question, or any infomation to correct me on, feel free to contact me via LINE, my LINE ID is "pyroblazer134". Enjoy!</p>
                    <p className="indent">If you would like to show some appreciation and donate, here's my
                        <span className="about-link" onClick={this.handleShow}> PayPal</span>
                    </p>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="margin-3">
                        <FormGroup
                            controlId="paypalemail"
                        >
                            <FormControl
                                type="text"
                                defaultValue={"trongvan214@yahoo.com"}
                                onClick={this.copyClipBoard}
                            />
                            <HelpBlock className="text-center">{this.state.helpBlock}</HelpBlock>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <a  className="donate-button" 
                            href="https://www.paypal.com/us/webapps/mpp/send-money-online" 
                            rel="noopener noreferrer" 
                            target="_blank"
                        >
                            Donate
                        </a>
                    </Modal.Footer>
                    </Modal>
                </Jumbotron>
            </Grid>
        )
    }
}