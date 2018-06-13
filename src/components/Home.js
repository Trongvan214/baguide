import React, { Component } from 'react';
import { Grid, PageHeader, Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <PageHeader>
                        Brutal Age Guide
                    </PageHeader>
                    <p className="indent">Hi, I'm Paper and I am from server 283 Juno. I have been playing this game for 4 months and I have learned alot.
                        Don't be fool by the time, I pays very close attention to details, 
                        so you'll be surprise how much I've learned in 4 months. 
                        I made this guide to share with people what I have learned, and improve their BA journey.
                        I will be talking about some of the stragigies I use when doing adventure,
                        and small little details about battling with partners that alot of people don't know. 
                    </p>
                    <p className="indent">
                        I myself don't spend much money on the game, 
                        so some of the stragigies I use isn't going to be of much help for the big spenders.
                        But I also have some infomation here that's useful for everybody, 
                        and everybody should know them if they are serious about partners.
                    </p>
                    <p className="indent">If you have any question, you can contact me via LINE, my LINE ID is "pyroblazer134". Enjoy!</p>
                </Jumbotron>
            </Grid>
        )
    }
}