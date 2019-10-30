import React from 'react';
import './Navbar.css';
import {Nav,
    Button,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
} from 'react-bootstrap';

class Navbar1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar className="Navbar">
                <Navbar.Brand>
                    <img
                        src="/imagesNavbar/verrecrane.jpg"
                        className="logo"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand ><h1>Movie drinks</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="search" />
                        <Button variant="danger" className="buttonSearch">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        );
    }
       
}

export default Navbar1;

