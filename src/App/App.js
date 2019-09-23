import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  charities: state.app.charities,
  donate: state.app.donate,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
