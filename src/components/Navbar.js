import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">Brutal Age</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/baguide/home">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/baguide/adventure">
                            Adventure Farming
                        </NavItem>
                        <NavItem eventKey={3} href="/baguide/patterns">
                            War Patterns
                        </NavItem>
                        <NavItem eventKey={4} href="/baguide/partners">
                            Partners
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={5} href="/baguide/about">
                            About me
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}