import React, { Component } from 'react'
import { Table, Col, Row } from 'react-bootstrap';

export default class BonusStatsTable extends Component {
    state = {
        heading: ["War patterns", "HP", "ATK", "DEF", "SPD", "CR", "CRD", "RES", "HIT"],
        stats: [],
    }
    componentDidMount(){
        let names = ["4 stars", "5 stars"];
        let HP = ["5%", "6%"];
        let ATK = ["5%", "6%"];
        let DEF = ["5%", "6%"];
        let SPD = ["3", "4"];
        let CR = ["3%", "4%"];
        let CRD = ["5%", "6%"];
        let RES = ["5%", "6%"];
        let HIT = ["5%", "6%"];
        let stats = [];
        for(let i = 0; i < 2; i++){
            stats.push({
                "name": names[i],
                "hp": HP[i],
                "atk": ATK[i],
                "def": DEF[i],
                "spd": SPD[i],
                "cr": CR[i],
                "crd": CRD[i],
                "res": RES[i],
                "hit": HIT[i],
            })
        }
        this.setState({stats});
    }
    render(){
        const { heading, stats } = this.state;
        return (
            <Row className="bs-table vcenter">
                <Col mdOffset={1} md={4}>
                    <p>This is a table that show you the maximium value you can get from bonus stats from all different types</p>
                </Col>
                <Col md={6}>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                {
                                    heading.map((type, index) => (
                                        <th key={index}>{type}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stats.map((type, index) => (
                                    <tr key={index}>
                                        <td>{type.name}</td>
                                        <td>{type.hp}</td>
                                        <td>{type.atk}</td>
                                        <td>{type.def}</td>
                                        <td>{type.spd}</td>
                                        <td>{type.cr}</td>
                                        <td>{type.crd}</td>
                                        <td>{type.res}</td>
                                        <td>{type.hit}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )

    }
}