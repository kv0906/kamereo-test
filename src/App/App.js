import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import StoreInfoCard from '../components/StoreInfoCard/StoreInfoCard';

import './styles.scss';
import ListStore from '../components/ListStore/ListStore';


class App extends Component {
  render() {
    return (
      <Container className="main">
        <h1>List stores</h1>
        <hr/>
        {/* <Row>
          <Col md="4">
            <StoreInfoCard/>
          </Col>
          <Col>
            <textarea className="delivery-default-msg">
              Delivery default message
            </textarea>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <ListStore/>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    );
  }
}
export default App;
