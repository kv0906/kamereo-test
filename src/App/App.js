import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StoreInfoCard from '../components/StoreInfoCard/StoreInfoCard';

import './styles.scss';


class App extends Component {
  render() {
    return (
      <Container className="main">
        <h1>Store information</h1>
        <hr/>
        <Row>
          <Col md="4">
            <StoreInfoCard/>
          </Col>
          <Col>
            <div className="delivery-default-msg">
              <p>Delivery default message</p>
            </div>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    );
  }
}
export default App;
