import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="">Dashboard</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="">CreateTest</Nav.Link>
                        <Nav.Link href="">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default AdminDashboard;