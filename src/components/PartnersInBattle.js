import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './PartnersInBattle.css';

export default class PartnersInBattle extends Component {
    render(){
        return (
            <Grid className="pib">
                <p>Partners have three different attributes: Brave (red), Wise (blue), Wild (green).</p>
                <ul>
                    <li>Wise &gt; Brave</li>
                    <li>Brave &gt; Wild</li>
                    <li>Wild &gt; Wise</li>
                </ul> 
                <p>Exp: Wise &gt; Brave means that Wise have an advantage over the Brave attributes, and so on with the 3 different sets</p>
                <p>The advantage takes effect in a battle, 2 things can happen when a partner hits another partner</p>
                <p>1. Deflection: reduce incomming damange by 30% and immune to any debuff.</p>
                <div className="indent">
                    <p>
                        - If 2 partners of different attributes are fighting (Brave and Wild), the stronger attribute (Brave) 
                        will have a higher chance to trigger deflection when it's being hit by the weaker attribute (Wild).
                    </p>
                </div>
                <p>2. Bash: do 30% more damage</p>
                <div className="indent">
                    <p>
                        - If 2 partners of different attributes are fighting (Wild and Wise), only the stronger attributes (Wild) 
                        have a chance to trigger bash on the weaker attributes (Wise).
                    </p>
                </div>
            </Grid>
        )
    }
}
