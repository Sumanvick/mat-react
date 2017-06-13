import React from 'react'

//Import Bootstrap Styles
import { Grid, Row, Col, ListGroup, Button } from 'react-bootstrap';

//Import sub components
/*import FloorList from './floors/floor-list'
import BookStation from './bookings/book-station'*/


class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col md={10} >
                    <Row className="content border-dashed padding-15">
                        <h1>Welcome to mat-react</h1>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Home;