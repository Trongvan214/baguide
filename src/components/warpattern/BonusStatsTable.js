import React, { Component } from 'react'
import { Table, Col, Row } from 'react-bootstrap';

export default class BonusStatsTable extends Component {
    state = {
        heading: ["Stats", "4 Stars Pattern", "5 Stars Pattern"],
        stats: [],
    }
    componentDidMount(){
        let names = ["HP", "ATK", "DEF", "SPD", "CR", "CRD", "RES", "HIT"];
        let _4stars = ["5%", "5%", "5%", "3", "3%", "5%", "5%", "5%"];
        let _5stars = ["6%", "6%", "6%", "4", "4%", "6%", "6%", "6%"];
        let stats = [];
        for(let i = 0; i < 8; i++){
            stats.push({
                "name": names[i],
                "_4stars": _4stars[i],
                "_5stars": _5stars[i],
            })
        }
        this.setState({stats});
    }
    render(){
        const { heading, stats } = this.state;
        return (
            <React.Fragment>
                <Row className="bs-table vcenter">
                    <Col  mdOffset={1} md={12}>
                        <p>This is a table that show you the maximium value you can get added as bonus stats every +3 upgrades</p>
                        <p>This is mean every +3 upgrades on your patterns, the max value that can be added is below in that chart.</p>
                    </Col>
                </Row>
                <Row>
                    <Col mdOffset={1} md={10}>
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
                                            <td>{type._4stars}</td>
                                            <td>{type._5stars}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        )

    }
}