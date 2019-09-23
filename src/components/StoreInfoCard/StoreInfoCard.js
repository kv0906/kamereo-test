import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';import {
  Card, CardImg , CardBody,
  CardTitle, Button,
} from 'reactstrap';
import EditStoreModal from '../EditStoreModal/EditStoreModal';
import { handleStoreFetch } from '../../App/AppAction';

import './styles.scss'

const logoPlaceholder = require('../../assets/StoreInfoCard.jpg');


class StoreInfoCard extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

  }
  toggle = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  }

  componentDidMount() {
    console.log(this.props);
    this.props.handleStoreFetch(this.props.match.params);
  }

  componentDidUpdate(prevProps) {
    if (this.props.actionCompleted !== prevProps.actionCompleted) {
      this.props.handleStoreFetch(this.props.match.params);
    }
  }

  render() {
    if (this.props.storeInfo === null) {
      return null;
    }
    const {name, address, phone, redInvoice, district,city, logoUrl } = this.props.storeInfo;
    return (
      <div>
        <EditStoreModal
          data={this.props.storeInfo}
          modalIsOpen={this.state.modalIsOpen}
          toggle={this.toggle}
        />
        <div>
          <Card>
            {isEmpty(logoUrl) ?
              <CardImg top width="100%" src={logoPlaceholder} alt="Card image cap" />
              :
              <CardImg top width="100%" src={logoUrl} alt="Card image cap" />
            }
            <CardBody>
              <CardTitle><strong>Store info</strong></CardTitle>
              <div className="store-info">
                <div className="store-info__meta">
                  <p>Name:</p>
                  <p>Address:</p>
                  <p>Phone:</p>
                </div>
                <div className="store-info__value">
                  <p className="">{name}</p>
                  <p className="">{address + ' ' + district + ' ' + city}</p>
                  <p className="">{phone}</p>
                </div>
              </div>
              {/* Red invoice section */}
              <CardTitle><strong>Red invoice</strong></CardTitle>
              <div className="red-invoice-info">
                <div className="red-invoice-info__meta">
                  <p>Company name:</p>
                  <p>Address:</p>
                  <p>MST:</p>
                </div>
                <div className="red-invoice-info__value">
                  <p className="">{redInvoice.name}</p>
                  <p className="">{redInvoice.address}</p>
                  <p className="">{redInvoice.taxCode}</p>
                </div>
              </div>
              <Button className="edit-btn" onClick={this.toggle} color="secondary">Edit Profile</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storeInfo: state.app.storeData,
  loading: state.app.loading,
  actionCompleted: state.app.actionCompleted,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleStoreFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StoreInfoCard));
