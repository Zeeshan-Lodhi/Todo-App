import React, { Component } from 'react'
import { Col, Navbar, NavDropdown, Row } from "react-bootstrap"
import logo from './logo.png'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className=" w-100">
                <Navbar.Brand href="#home">
                    <img alt="Logo img" src={logo} className="logo" />
                    Zeeshan Lodhi
                </Navbar.Brand>

                <Col className="dropDown">
                    <NavDropdown title="Visit Us" id="collasible-nav-dropdown" >
                        <Row >
                            <div className="d-flex justify-content-around container" style={{ fontSize: 30 }}>
                                <a href="https://www.facebook.com/zeeshan.lodhi.35977" target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-square iconn"></i>
                                </a>
                                <a href="https://www.instagram.com/zeeshan__lodhi/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram iconn"></i>
                                </a>
                            </div>
                        </Row>
                    </NavDropdown>
                </Col>
            </Navbar>
        )
    }
}

export default Header



