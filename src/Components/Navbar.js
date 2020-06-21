//Here We Show Navigation Bar Where It Change Depends on State OF user , like he is sign in or not

import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'


export default class navbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="./  ">Ahmedabad Devloper Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="SignUp">Signup</Nav.Link>
                            <Nav.Link href='Login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        )
    }
}
