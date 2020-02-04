import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StoreInfoCard from '../StoreInfoCard/StoreInfoCard';

class StoreDetail extends Component {
  render() {
    return (
      <Container className="main">
        <h1>Store Information</h1>
        <hr/>
        <Row>
          <Col md="4">
            <StoreInfoCard/>
          </Col>
          <Col>
            <textarea className="delivery-default-msg">
              Delivery default message
            </textarea>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    );
  }
}
export default StoreDetail;
